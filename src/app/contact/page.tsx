'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

const contactSchema = z.object({
  name: z.string().min(2, 'يجب أن يكون الاسم على الأقل حرفين'),
  email: z.string().email('يرجى إدخال عنوان بريد إلكتروني صحيح'),
  phone: z.string().min(8, 'يرجى إدخال رقم هاتف صحيح'),
  subject: z.string().min(5, 'يجب أن يكون الموضوع على الأقل 5 أحرف'),
  message: z.string().min(10, 'يجب أن تكون الرسالة على الأقل 10 أحرف'),
  inquiryType: z.enum(['admission', 'courses', 'general', 'visit'], {
    required_error: 'يرجى اختيار نوع الاستفسار'
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
      } else {
        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
        console.error('Submission error:', result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      details: [
        'مدرسة خباب بن الأرت',
        'wadajir, celqalow, Tabeelaha Hasan hilac, mogadisho, Somaaliya'
      ],
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'أرقام الهاتف',
      details: [
        '615716751 (الرئيسي)',
        '625716751 (القبول)',
        '625716751 (واتساب)'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'عناوين البريد الإلكتروني',
      details: [
        'Khabbabinuarrat@gmail.com'
      ],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: [
        'السبت - الجمعة: 8:00 ص - 4:00 م',
        'نحن نعمل طوال أيام الأسبوع',
        'الطوارئ: متاح 24/7'
      ],
      color: 'text-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'محادثة واتساب',
      description: 'احصل على ردود فورية على أسئلتك',
      icon: MessageCircle,
      action: () => {
        const phoneNumber = '252625716751';
        const message = 'السلام عليكم! أود معرفة المزيد عن مدرسة خباب بن الأرت.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      },
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'اتصل الآن',
      description: 'تحدث مباشرة مع موظفينا',
      icon: Phone,
      action: () => {
        window.location.href = 'tel:+252615716751';
      },
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'أرسل بريد إلكتروني',
      description: 'أرسل لنا رسالة مفصلة',
      icon: Mail,
      action: () => {
        window.location.href = 'mailto:Khabbabinuarrat@gmail.com';
      },
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'جدولة زيارة',
      description: 'احجز جولة في الحرم الجامعي',
      icon: Calendar,
      action: () => {
        alert('ستكون جدولة زيارة الحرم الجامعي متاحة قريباً. يرجى الاتصال بنا لجدولة زيارة.');
      },
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 islamic-pattern">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">اتصل</span> بنا
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              نحن هنا لمساعدتك في أي أسئلة حول برامجنا أو عملية القبول أو خدمات التعليم الإسلامي
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              تواصل معنا <span className="text-gradient">بسرعة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              اختر الطريقة الأكثر ملاءمة للوصول إلينا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={`${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left w-full`}
              >
                <action.icon size={32} className="mb-4" />
                <h3 className="text-lg font-semibold mb-2 arabic-text">{action.title}</h3>
                <p className="text-sm opacity-90 arabic-text">{action.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              معلومات <span className="text-gradient">الاتصال</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gray-100`}>
                  <info.icon size={32} className={info.color} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 arabic-text">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm arabic-text">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">موقعنا</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              زر حرمنا الجامعي في قلب مقديشو
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 arabic-text">موقع الحرم الجامعي</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 arabic-text">مدرسة خباب بن الأرت</p>
                  <p className="text-gray-600">wadajir, celqalow, Tabeelaha Hasan hilac, mogadisho, Somaaliya</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 arabic-text">ساعات الزيارة</p>
                  <p className="text-gray-600 arabic-text">السبت - الجمعة: 8:00 ص - 4:00 م</p>
                  <p className="text-gray-600 arabic-text">نحن نعمل طوال الأسبوع</p>
                </div>
              </div>
            </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 arabic-text">المواصلات</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start arabic-text">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    يمكن الوصول عبر وسائل النقل العامة
                  </li>
                  <li className="flex items-start arabic-text">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    موقف سيارات متاح في الحرم الجامعي
                  </li>
                  <li className="flex items-start arabic-text">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    قريب من المعالم الرئيسية في حي هودان
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-96 relative">
                <a
                  href="https://maps.app.goo.gl/JW5ggR6xyR6wnArPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <MapPin size={32} className="text-green-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold arabic-text">انقر لفتح الخريطة</p>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps?q=waberi+siliga+Tabeelaha+Hasan+hilac+mogadisho+Somaaliya&output=embed&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Mu'asasadda Khabab Binu Arrati Location"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/JW5ggR6xyR6wnArPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <MapPin size={20} className="mr-2" />
                  <span className="arabic-text">الحصول على الاتجاهات</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              أرسل لنا <span className="text-gradient">رسالة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {submitSuccess ? (
              <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl shadow-2xl border border-green-200 p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Send size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 arabic-text">تم إرسال الرسالة بنجاح!</h3>
                <p className="text-gray-600 mb-6 arabic-text">
                  شكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك خلال 24 ساعة.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="btn-primary arabic-text"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-br from-white via-green-50/30 to-white rounded-3xl shadow-2xl border border-green-100 p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                      الاسم الكامل *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
                      placeholder="الاسم الكامل"
                      dir="rtl"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                      عنوان البريد الإلكتروني *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                      رقم الهاتف *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
                      placeholder="XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                      نوع الاستفسار *
                    </label>
                    <select
                      {...register('inquiryType')}
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
                      dir="rtl"
                    >
                      <option value="">اختر نوع الاستفسار</option>
                      <option value="admission">معلومات القبول</option>
                      <option value="courses">تفاصيل الدورات</option>
                      <option value="visit">زيارة الحرم الجامعي</option>
                      <option value="general">استفسار عام</option>
                    </select>
                    {errors.inquiryType && (
                      <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                    الموضوع *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
                    placeholder="موضوع الرسالة باختصار"
                    dir="rtl"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 arabic-text">
                    الرسالة *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400 resize-none"
                    placeholder="يرجى تقديم تفاصيل حول استفسارك..."
                    dir="rtl"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      <span className="arabic-text">جاري إرسال الرسالة...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      <span className="arabic-text">إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
