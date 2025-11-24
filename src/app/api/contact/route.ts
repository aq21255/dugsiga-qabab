import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

// Helper function to format contact email template in Arabic
function formatContactEmailTemplate(data: any): string {
  const inquiryTypeNames: { [key: string]: string } = {
    admission: 'معلومات القبول',
    courses: 'تفاصيل الدورات',
    visit: 'زيارة الحرم الجامعي',
    general: 'استفسار عام'
  };

  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <h2 style="color: #059669; text-align: center; margin-bottom: 30px;">رسالة جديدة - مدرسة خباب بن الأرت</h2>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">معلومات المرسل</h3>
        <p><strong>الاسم:</strong> ${data.name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${data.email}</p>
        <p><strong>رقم الهاتف:</strong> ${data.phone}</p>
        <p><strong>نوع الاستفسار:</strong> ${inquiryTypeNames[data.inquiryType] || data.inquiryType}</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">الرسالة</h3>
        <p><strong>الموضوع:</strong> ${data.subject}</p>
        <div style="margin-top: 15px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px;">
        <p>تم إرسال هذه الرسالة من موقع مدرسة خباب بن الأرت</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Log the form submission
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Inquiry Type:', formData.inquiryType);
    console.log('Subject:', formData.subject);
    console.log('================================');
    
    // Send email using Resend
    if (resendClient) {
      try {
        await resendClient.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: 'Khabbabinuarrat@gmail.com',
          subject: `رسالة جديدة - ${formData.subject}`,
          html: formatContactEmailTemplate(formData),
        });
        console.log('Contact email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails - we still want to log the submission
      }
    } else {
      console.warn('RESEND_API_KEY not configured. Email not sent.');
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}

