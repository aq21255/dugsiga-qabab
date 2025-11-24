import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Clock, Users, Award, Star, Heart, Globe, GraduationCap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Courses - Mu\'asasadda Khabab Binu Arrati',
  description: 'Explore our comprehensive Islamic education courses including Quran memorization, Tajweed, Arabic language, and Islamic studies programs.',
  keywords: 'Islamic courses, Quran memorization, Tajweed, Arabic language, Islamic studies, Tarbiya Islaami',
}

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Qur\'an Memorization (Hifz)',
      titleArabic: 'حفظ القرآن الكريم',
      description: 'حفظ كامل للقرآن الكريم مع النطق الصحيح والفهم. برنامجنا المنظم يضمن للطلاب الحفظ بدقة وثبات. يتعلم الطلاب مع معلمين حفاظ معتمدين باستخدام الطرق التقليدية المجربة',
      duration: '3-5 سنوات',
      level: 'جميع المستويات',
      students: '150+ طالب',
      features: [
        'إشراف فردي مع حفاظ مؤهلين',
        'جلسات مراجعة يومية',
        'متابعة التقدم والتقييم',
        'شهادة إجازة عند الإكمال',
        'تصحيح التجويد أثناء الحفظ',
        'فهم المعاني والتفسير'
      ],
      image: '/WhatsApp Image 2025-11-18 at 3.35.04 PM.jpeg',
      icon: BookOpen,
      color: 'green'
    },
    {
      id: 2,
      title: 'Tajweed (Quranic Recitation)',
      titleArabic: 'علم التجويد',
      description: 'إتقان فن التلاوة القرآنية الجميلة مع النطق الصحيح والإيقاع واللحن وفقاً لقواعد التجويد الكلاسيكية. التعلم من قراء معتمدين بأصوات جميلة',
      duration: '1-2 سنة',
      level: 'من المبتدئ إلى المتقدم',
      students: '200+ طالب',
      features: [
        'قواعد التجويد الكلاسيكية (أحكام التجويد)',
        'تدريب الصوت والتحكم في التنفس',
        'أساليب القراءات المختلفة (حفص، ورش، إلخ)',
        'فرص الأداء في المسابقات',
        'تدريب المقامات الموسيقية',
        'جلسات التسجيل والتغذية الراجعة'
      ],
      image: '/WhatsApp Image 2025-11-18 at 3.35.05 PM.jpeg',
      icon: Star,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Tarbiya Islaami (Islamic Education)',
      titleArabic: 'التربية الإسلامية',
      description: 'دراسات إسلامية شاملة تغطي العقيدة والفقه والسيرة والتاريخ الإسلامي لبناء شخصية إسلامية قوية ومعرفة راسخة. منهج كامل مبني على المصادر الإسلامية الأصيلة',
      duration: '4 سنوات',
      level: 'جميع المستويات',
      students: '300+ طالب',
      features: [
        'العقيدة الإسلامية - دراسات التوحيد',
        'الفقه الإسلامي - أحكام الحياة اليومية',
        'السيرة النبوية - دراسة كاملة للحياة',
        'التاريخ والحضارة الإسلامية',
        'دراسات الحديث مع التوثيق',
        'الآداب والأخلاق الإسلامية',
        'القضايا الإسلامية المعاصرة',
        'تدريب القيادة المجتمعية'
      ],
      image: '/WhatsApp Image 2025-11-18 at 3.35.06 PM.jpeg',
      icon: Heart,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Arabic Language Course',
      titleArabic: 'دورة اللغة العربية',
      description: 'برنامج شامل للغة العربية من المستوى المبتدئ إلى المتقدم. التركيز على العربية الفصحى والعربية القرآنية ومهارات التواصل الحديثة. مثالي لفهم النصوص الإسلامية',
      duration: '2-3 سنوات',
      level: 'من المبتدئ إلى المتقدم',
      students: '180+ طالب',
      features: [
        'الأبجدية العربية والخط العربي',
        'النحو والصرف',
        'بناء المفردات',
        'ممارسة المحادثة والتحدث',
        'تخصص العربية القرآنية',
        'الأدب والشعر العربي',
        'مهارات الكتابة والإنشاء',
        'تمارين الترجمة'
      ],
      image: '/WhatsApp Image 2025-11-18 at 3.35.10 PM.jpeg',
      icon: Globe,
      color: 'orange'
    }
  ]

  const additionalPrograms = [
    {
      title: 'الدراسات الإسلامية لعطلة نهاية الأسبوع',
      description: 'برنامج مرن للطلاب العاملين والبالغين',
      icon: Clock
    },
    {
      title: 'البرامج المكثفة الصيفية',
      description: 'تعلم متسارع خلال العطلات الصيفية',
      icon: Award
    },
    {
      title: 'فصول تعليم الكبار',
      description: 'فصول خاصة مصممة للمتعلمين البالغين',
      icon: Users
    },
    {
      title: 'دعم التعلم عبر الإنترنت',
      description: 'موارد رقمية وخيارات التعلم عن بُعد',
      icon: GraduationCap
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'from-green-500 to-green-600 bg-green-100 text-green-600'
      case 'blue':
        return 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600'
      case 'purple':
        return 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
      case 'orange':
        return 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600'
      default:
        return 'from-green-500 to-green-600 bg-green-100 text-green-600'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 islamic-pattern">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">برامجنا</span> التعليمية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              برامج تعليمية إسلامية شاملة مصممة لتنمية النمو الروحي والتميز الأكاديمي وتطوير الشخصية
            </p>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div key={course.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-xl w-full h-auto object-cover"
                    />
                    <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${getColorClasses(course.color).split(' ')[0]} ${getColorClasses(course.color).split(' ')[1]} text-white p-4 rounded-xl shadow-lg`}>
                      <course.icon size={32} />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getColorClasses(course.color).split(' ')[2]} ${getColorClasses(course.color).split(' ')[3]}`}>
                    Course {course.id}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h2>
                  <div className="arabic-text text-xl text-green-600 mb-4 font-arabic">
                    {course.titleArabic}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed arabic-text">
                    {course.description}
                  </p>
                  
                  {/* Course Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900 arabic-text">{course.duration}</div>
                      <div className="text-xs text-gray-500 arabic-text">المدة</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <GraduationCap size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900 arabic-text">{course.level}</div>
                      <div className="text-xs text-gray-500 arabic-text">المستوى</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900 arabic-text">{course.students}</div>
                      <div className="text-xs text-gray-500 arabic-text">الطلاب</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 arabic-text">ما ستتعلمه:</h3>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 arabic-text">
                          <div className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(course.color).split(' ')[0]} ${getColorClasses(course.color).split(' ')[1]}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/admission" className="btn-primary arabic-text">
                    سجل الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">برامج</span> إضافية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              خيارات تعلم مرنة لتناسب الجداول الزمنية المختلفة وتفضيلات التعلم
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPrograms.map((program, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <program.icon size={32} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 arabic-text">{program.title}</h3>
                <p className="text-gray-600 text-sm arabic-text">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Requirements */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">متطلبات</span> الدورات
            </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 arabic-text">المتطلبات العامة</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">قدرة أساسية على قراءة العربية (للدورات المتقدمة)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">الالتزام بالحضور المنتظم</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">احترام القيم والآداب الإسلامية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">التسجيل المناسب للعمر (يختلف حسب الدورة)</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 arabic-text">ما نقدمه</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">جميع الكتب والمواد اللازمة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">معلمون مؤهلون وذوو خبرة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">تقارير التقدم والتقييمات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="arabic-text">شهادات عند إكمال الدورة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text">
            هل أنت مستعد لبدء رحلتك في التعلم الإسلامي؟
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto arabic-text">
            انضم إلى آلاف الطلاب الذين استفادوا من برامجنا التعليمية الإسلامية الشاملة. ابدأ عملية التسجيل اليوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission" className="btn-primary bg-white text-green-800 hover:bg-gray-100 arabic-text">
              قدم للقبول
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-green-800 arabic-text">
              اتصل للمزيد من المعلومات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
