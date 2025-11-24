'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, User, Mail, Phone, Calendar, BookOpen, MapPin, Users } from 'lucide-react';

const admissionSchema = z.object({
  // Student Information
  studentName: z.string().min(2, 'يجب أن يكون اسم الطالب على الأقل حرفين'),
  dateOfBirth: z.string().min(1, 'تاريخ الميلاد مطلوب'),
  gender: z.enum(['male', 'female'], { required_error: 'يرجى اختيار الجنس' }),
  nationality: z.string().min(2, 'الجنسية مطلوبة'),
  
  // Contact Information
  email: z.string().email('يرجى إدخال عنوان بريد إلكتروني صحيح'),
  phone: z.string().min(8, 'يرجى إدخال رقم هاتف صحيح'),
  address: z.string().min(10, 'يرجى تقديم عنوان كامل'),
  
  // Guardian Information
  guardianName: z.string().min(2, 'اسم الوصي مطلوب'),
  guardianRelation: z.string().min(2, 'صلة الوصي بالطالب مطلوبة'),
  guardianPhone: z.string().min(8, 'رقم هاتف الوصي مطلوب'),
  
  // Academic Information
  previousEducation: z.string().min(2, 'معلومات التعليم السابق مطلوبة'),
  arabicLevel: z.enum(['none', 'basic', 'intermediate', 'advanced'], { 
    required_error: 'يرجى اختيار مستوى اللغة العربية' 
  }),
  quranLevel: z.enum(['none', 'basic', 'intermediate', 'advanced'], { 
    required_error: 'يرجى اختيار مستوى القرآن الكريم' 
  }),
  
  // Course Selection
  preferredCourse: z.enum(['hifz', 'tajweed', 'tarbiya', 'arabic'], { 
    required_error: 'يرجى اختيار دورة' 
  }),
  startDate: z.enum(['immediate', 'next-semester', 'next-year'], { 
    required_error: 'يرجى اختيار تاريخ البدء المفضل' 
  }),
  
  // Additional Information
  medicalConditions: z.string().optional(),
  additionalNotes: z.string().optional(),
  
  // Agreement
  agreement: z.boolean().refine(val => val === true, {
    message: 'يجب الموافقة على الشروط والأحكام'
  })
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const AdmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema)
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/admission', {
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
        alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
        console.error('Submission error:', result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl shadow-2xl border border-green-200 p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Send size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 arabic-text">تم تقديم الطلب بنجاح!</h3>
        <p className="text-gray-600 mb-6 arabic-text">
          شكراً لاهتمامك بمدرسة خباب بن الأرت. لقد استلمنا طلبك وسنتواصل معك خلال 2-3 أيام عمل لمناقشة الخطوات التالية.
        </p>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="btn-primary arabic-text"
        >
          تقديم طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-br from-white via-green-50/30 to-white rounded-3xl shadow-2xl border border-green-100 p-8 md:p-12 space-y-10">
      {/* Student Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center arabic-text">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <User size={24} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">معلومات الطالب</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              الاسم الكامل للطالب *
            </label>
            <input
              {...register('studentName')}
              type="text"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="أدخل الاسم الكامل للطالب"
              dir="rtl"
            />
            {errors.studentName && (
              <p className="mt-1 text-sm text-red-600">{errors.studentName.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              تاريخ الميلاد *
            </label>
            <input
              {...register('dateOfBirth')}
              type="date"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              الجنس *
            </label>
            <select
              {...register('gender')}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
              dir="rtl"
            >
              <option value="">اختر الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              الجنسية *
            </label>
            <input
              {...register('nationality')}
              type="text"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="مثال: صومالي"
              dir="rtl"
            />
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-600">{errors.nationality.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center arabic-text">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <Mail size={24} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">معلومات الاتصال</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              عنوان البريد الإلكتروني *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="student@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
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
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              العنوان *
            </label>
            <textarea
              {...register('address')}
              rows={3}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400 resize-none"
              placeholder="العنوان الكامل بما في ذلك الحي والمدينة"
              dir="rtl"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Guardian Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center arabic-text">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <Users size={24} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">معلومات الوصي</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              اسم الوصي *
            </label>
            <input
              {...register('guardianName')}
              type="text"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="الاسم الكامل للوصي"
              dir="rtl"
            />
            {errors.guardianName && (
              <p className="mt-1 text-sm text-red-600">{errors.guardianName.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              صلة الوصي بالطالب *
            </label>
            <input
              {...register('guardianRelation')}
              type="text"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="مثال: أب، أم، عم"
              dir="rtl"
            />
            {errors.guardianRelation && (
              <p className="mt-1 text-sm text-red-600">{errors.guardianRelation.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              رقم هاتف الوصي *
            </label>
            <input
              {...register('guardianPhone')}
              type="tel"
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400"
              placeholder="XX XXX XXXX"
            />
            {errors.guardianPhone && (
              <p className="mt-1 text-sm text-red-600">{errors.guardianPhone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Academic Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center arabic-text">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <BookOpen size={24} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">الخلفية الأكاديمية</span>
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              التعليم السابق *
            </label>
            <textarea
              {...register('previousEducation')}
              rows={3}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400 resize-none"
              placeholder="اوصف الخلفية التعليمية السابقة، المدارس التي التحقت بها، إلخ"
              dir="rtl"
            />
            {errors.previousEducation && (
              <p className="mt-1 text-sm text-red-600">{errors.previousEducation.message}</p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
                مستوى اللغة العربية *
              </label>
              <select
                {...register('arabicLevel')}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
                dir="rtl"
              >
                <option value="">اختر المستوى</option>
                <option value="none">لا يوجد معرفة</option>
                <option value="basic">أساسي (يمكن القراءة)</option>
                <option value="intermediate">متوسط (يمكن الفهم)</option>
                <option value="advanced">متقدم (طلاقة)</option>
              </select>
              {errors.arabicLevel && (
                <p className="mt-1 text-sm text-red-600">{errors.arabicLevel.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
                مستوى قراءة القرآن الكريم *
              </label>
              <select
                {...register('quranLevel')}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
                dir="rtl"
              >
                <option value="">اختر المستوى</option>
                <option value="none">لا يمكن القراءة</option>
                <option value="basic">أساسي (بمساعدة)</option>
                <option value="intermediate">متوسط (قراءة طلقة)</option>
                <option value="advanced">متقدم (مع التجويد)</option>
              </select>
              {errors.quranLevel && (
                <p className="mt-1 text-sm text-red-600">{errors.quranLevel.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Selection */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center arabic-text">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <Calendar size={24} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">اختيار الدورة</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              الدورة المفضلة *
            </label>
            <select
              {...register('preferredCourse')}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
              dir="rtl"
            >
              <option value="">اختر الدورة</option>
              <option value="hifz">حفظ القرآن الكريم</option>
              <option value="tajweed">التجويد (تلاوة القرآن)</option>
              <option value="tarbiya">التربية الإسلامية</option>
              <option value="arabic">دورة اللغة العربية الأساسية</option>
            </select>
            {errors.preferredCourse && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredCourse.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              تاريخ البدء المفضل *
            </label>
            <select
              {...register('startDate')}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
              dir="rtl"
            >
              <option value="">اختر تاريخ البدء</option>
              <option value="immediate">فوري</option>
              <option value="next-semester">الفصل الدراسي القادم</option>
              <option value="next-year">العام الدراسي القادم</option>
            </select>
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 arabic-text">
          <span className="bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">معلومات إضافية</span>
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              الحالات الطبية أو الاحتياجات الخاصة
            </label>
            <textarea
              {...register('medicalConditions')}
              rows={3}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400 resize-none"
              placeholder="يرجى ذكر أي حالات طبية أو احتياجات خاصة (اختياري)"
              dir="rtl"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 arabic-text">
              ملاحظات إضافية
            </label>
            <textarea
              {...register('additionalNotes')}
              rows={3}
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 placeholder:text-gray-400 resize-none"
              placeholder="أي معلومات إضافية تود إخبارنا بها (اختياري)"
              dir="rtl"
            />
          </div>
        </div>
      </div>

      {/* Agreement */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200/50">
        <div className="flex items-start">
          <input
            {...register('agreement')}
            type="checkbox"
            className="mt-1 h-5 w-5 text-green-600 focus:ring-green-500 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-200"
          />
          <label className="ml-3 text-sm font-medium text-gray-700 arabic-text cursor-pointer">
            أوافق على الشروط والأحكام لمدرسة خباب بن الأرت وأؤكد أن جميع المعلومات المقدمة دقيقة وكاملة. *
          </label>
        </div>
        {errors.agreement && (
          <p className="mt-2 text-sm text-red-600 font-medium">{errors.agreement.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              <span className="arabic-text">جاري تقديم الطلب...</span>
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              <span className="arabic-text">تقديم الطلب</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default AdmissionForm;
