import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

// Helper function to format email template in Arabic
function formatEmailTemplate(data: any): string {
  const courseNames: { [key: string]: string } = {
    hifz: 'حفظ القرآن الكريم',
    tajweed: 'التجويد',
    tarbiya: 'التربية الإسلامية',
    arabic: 'دورة اللغة العربية الأساسية'
  };

  const startDateNames: { [key: string]: string } = {
    immediate: 'فوري',
    'next-semester': 'الفصل الدراسي القادم',
    'next-year': 'العام الدراسي القادم'
  };

  const levelNames: { [key: string]: string } = {
    none: 'لا يوجد',
    basic: 'أساسي',
    intermediate: 'متوسط',
    advanced: 'متقدم'
  };

  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <h2 style="color: #059669; text-align: center; margin-bottom: 30px;">طلب قبول جديد - مدرسة خباب بن الأرت</h2>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">معلومات الطالب</h3>
        <p><strong>الاسم الكامل:</strong> ${data.studentName}</p>
        <p><strong>تاريخ الميلاد:</strong> ${data.dateOfBirth}</p>
        <p><strong>الجنس:</strong> ${data.gender === 'male' ? 'ذكر' : 'أنثى'}</p>
        <p><strong>الجنسية:</strong> ${data.nationality}</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">معلومات الاتصال</h3>
        <p><strong>البريد الإلكتروني:</strong> ${data.email}</p>
        <p><strong>رقم الهاتف:</strong> ${data.phone}</p>
        <p><strong>العنوان:</strong> ${data.address}</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">معلومات الوصي</h3>
        <p><strong>اسم الوصي:</strong> ${data.guardianName}</p>
        <p><strong>صلة القرابة:</strong> ${data.guardianRelation}</p>
        <p><strong>رقم هاتف الوصي:</strong> ${data.guardianPhone}</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">الخلفية الأكاديمية</h3>
        <p><strong>التعليم السابق:</strong> ${data.previousEducation}</p>
        <p><strong>مستوى اللغة العربية:</strong> ${levelNames[data.arabicLevel] || data.arabicLevel}</p>
        <p><strong>مستوى القرآن الكريم:</strong> ${levelNames[data.quranLevel] || data.quranLevel}</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">اختيار الدورة</h3>
        <p><strong>الدورة المفضلة:</strong> ${courseNames[data.preferredCourse] || data.preferredCourse}</p>
        <p><strong>تاريخ البدء المفضل:</strong> ${startDateNames[data.startDate] || data.startDate}</p>
      </div>
      
      ${data.medicalConditions ? `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">الحالات الطبية</h3>
        <p>${data.medicalConditions}</p>
      </div>
      ` : ''}
      
      ${data.additionalNotes ? `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">ملاحظات إضافية</h3>
        <p>${data.additionalNotes}</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px;">
        <p>تم إرسال هذا الطلب من موقع مدرسة خباب بن الأرت</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Log the form submission
    console.log('=== ADMISSION FORM SUBMISSION ===');
    console.log('Student Name:', formData.studentName);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('================================');
    
    // Send email using Resend
    if (resendClient) {
      try {
        await resendClient.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: 'Khabbabinuarrat@gmail.com',
          subject: `طلب قبول جديد - ${formData.studentName}`,
          html: formatEmailTemplate(formData),
        });
        console.log('Email sent successfully');
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
        message: 'Application submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing admission form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit application. Please try again.' 
      },
      { status: 500 }
    );
  }
}

