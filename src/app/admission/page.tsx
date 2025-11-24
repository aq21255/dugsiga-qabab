import { CheckCircle, Clock, FileText, Users, BookOpen, Award } from 'lucide-react'
import AdmissionForm from '@/components/AdmissionForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admission - Mu\'asasadda Khabab Binu Arrati',
  description: 'Apply for admission to Mu\'asasadda Khabab Binu Arrati. Learn about our admission requirements, process, and submit your application online.',
  keywords: 'admission, enrollment, Islamic school admission, Mu\'asasadda application, student registration',
}

export default function Admission() {
  const requirements = [
    {
      icon: FileText,
      title: 'الوثائق المطلوبة',
      items: [
        'شهادة الميلاد أو إثبات العمر',
        'سجلات المدرسة السابقة (إن وجدت)',
        'وثائق هوية الوصي',
        'صور حديثة بحجم جواز السفر (2)',
        'شهادة طبية (إن لزم الأمر)'
      ]
    },
    {
      icon: Users,
      title: 'متطلبات العمر',
      items: [
        'حفظ القرآن الكريم: من 6 إلى 16 سنة',
        'فصول التجويد: من 8 سنوات فما فوق',
        'الدراسات الإسلامية: من 10 سنوات فما فوق',
        'اللغة العربية: من 12 سنة فما فوق',
        'برامج الكبار: من 18 سنة فما فوق'
      ]
    },
    {
      icon: BookOpen,
      title: 'المتطلبات الأكاديمية',
      items: [
        'قراءة عربية أساسية (للدورات المتقدمة)',
        'الالتزام بالحضور المنتظم',
        'احترام القيم الإسلامية وآدابها',
        'الاستعداد لاتباع قواعد المدرسة',
        'دعم ومشاركة الوالدين/الوصي'
      ]
    }
  ]

  const admissionProcess = [
    {
      step: 1,
      title: 'تقديم الطلب',
      description: 'أكمل وقدم نموذج الطلب عبر الإنترنت مع جميع المعلومات المطلوبة',
      icon: FileText
    },
    {
      step: 2,
      title: 'مراجعة الوثائق',
      description: 'يراجع فريق القبول لدينا طلبك والوثائق الداعمة',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'التقييم',
      description: 'تقييم الطالب لتحديد الفصل المناسب وتقييم مستوى المهارة',
      icon: Award
    },
    {
      step: 4,
      title: 'التسجيل',
      description: 'عند القبول، أكمل عملية التسجيل وابدأ الفصول',
      icon: Users
    }
  ]

  const fees = [
    {
      course: 'حفظ القرآن الكريم',
      monthlyFee: 'مجاني',
      registrationFee: 'مجاني',
      includes: 'الكتب والمواد ومتابعة التقدم'
    },
    {
      course: 'فصول التجويد',
      monthlyFee: 'مجاني',
      registrationFee: 'مجاني',
      includes: 'كتب التجويد والمواد الصوتية'
    },
    {
      course: 'الدراسات الإسلامية',
      monthlyFee: 'مجاني',
      registrationFee: 'مجاني',
      includes: 'الكتب المدرسية وأوراق العمل والشهادات'
    },
    {
      course: 'اللغة العربية',
      monthlyFee: 'مجاني',
      registrationFee: 'مجاني',
      includes: 'كتب اللغة ومواد الممارسة'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 islamic-pattern">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
              عملية <span className="text-gradient">القبول</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              ابدأ رحلتك في التعلم الإسلامي معنا. اتبع عملية القبول البسيطة للانضمام إلى مجتمعنا من الطلاب والعلماء المتفانين
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              كيفية <span className="text-gradient">التقديم</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              عملية القبول لدينا مصممة لتكون بسيطة ومباشرة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon size={24} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 arabic-text">{process.title}</h3>
                <p className="text-gray-600 text-sm arabic-text">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              متطلبات <span className="text-gradient">القبول</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              يرجى التأكد من استيفاء هذه المتطلبات قبل التقديم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="card p-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <requirement.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 arabic-text">{requirement.title}</h3>
                </div>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600 arabic-text">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">تعليم مجاني</span> للجميع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              تعليم إسلامي مجاني بالكامل - لا توجد رسوم أو تكاليف
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((fee, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 arabic-text">{fee.course}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600 mb-1 arabic-text">{fee.monthlyFee}</div>
                  <div className="text-sm text-gray-500 arabic-text">شهرياً</div>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-green-700 arabic-text">{fee.registrationFee}</div>
                  <div className="text-sm text-gray-500 arabic-text">رسوم التسجيل</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 arabic-text">{fee.includes}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="card p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 arabic-text">خيارات الدفع</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-900 mb-2 arabic-text">الدفع الشهري</div>
                  <p className="arabic-text">ادفع الرسوم الشهرية بحلول الخامس من كل شهر</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2 arabic-text">الدفع الفصلي</div>
                  <p className="arabic-text">ادفع للفصل الدراسي الكامل مع خصم 5%</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2 arabic-text">الدفع السنوي</div>
                  <p className="arabic-text">ادفع للعام الكامل مع خصم 10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">نموذج</span> الطلب
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              أكمل النموذج أدناه لبدء عملية القبول
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AdmissionForm />
          </div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="bg-green-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text">
            تحتاج مساعدة في طلبك؟
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto arabic-text">
            فريق القبول لدينا هنا لمساعدتك خلال العملية. 
            اتصل بنا إذا كان لديك أي أسئلة أو تحتاج إلى مساعدة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+252615716751" className="btn-primary bg-white text-green-800 hover:bg-gray-100">
              Call Us: 615716751
            </a>
            <a href="mailto:Khabbabinuarrat@gmail.com" className="btn-secondary border-white text-white hover:bg-white hover:text-green-800">
              Email: Khabbabinuarrat@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
