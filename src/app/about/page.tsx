'use client'

import Image from 'next/image'
import { BookOpen, Target, Eye, Users, Award, Heart, Star, GraduationCap } from 'lucide-react'
import CounterAnimation from '@/components/CounterAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { language, t } = useLanguage()
  
  const teachers = [
    {
      name: 'إبراهيم طالب حسن',
      nameEn: 'Ibrahim Dhaalib Hasan',
      role: 'أساس المدرسة',
      specialization: 'جامعي إلى الماجستير',
      experience: 'مؤسس ومدير',
      image: '/muasaska dugsiga.jpeg'
    }
  ]

  const values = [
    {
      icon: BookOpen,
      title: 'التميز في التعليم',
      description: 'نسعى لتحقيق أعلى المعايير في التعليم الإسلامي، ونجمع بين الأساليب التقليدية والنهج الحديثة.'
    },
    {
      icon: Heart,
      title: 'تنمية الشخصية',
      description: 'بناء شخصية أخلاقية قوية مبنية على القيم الإسلامية وتعاليم النبي صلى الله عليه وسلم.'
    },
    {
      icon: Users,
      title: 'بناء المجتمع',
      description: 'تعزيز الإحساس القوي بالأخوة الإسلامية والمجتمع بين الطلاب والعائلات.'
    },
    {
      icon: Star,
      title: 'التعلم الشامل',
      description: 'تنمية النمو الروحي والفكري لشخصيات إسلامية متكاملة.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-gold-50 islamic-star-pattern overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 floating-animation"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold-200 rounded-full opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
              عن <span className="text-gradient">مدرستنا</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              اكتشف التاريخ الغني والرسالة النبيلة لمدرسة خباب بن الأرت، منارة التعليم الإسلامي في الصومال
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? (
                  <><span className="text-gradient">تاريخنا</span></>
                ) : (
                  t('about.history.title')
                )}
              </h2>
              <div className={`space-y-6 text-lg text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                <p>
                  {language === 'ar' ? (
                    <>تأسست مدرسة خباب بن الأرت في عام 2013 برؤية تقديم التعليم الإسلامي الأصيل لشباب الصومال. أسسها الأستاذ <strong className="text-green-700">إبراهيم طالب حسن</strong> الذي كان له الدور الأساسي في إنشاء هذه المؤسسة التعليمية المتميزة. سميت المدرسة على اسم الصحابي الجليل خباب بن الأرت رضي الله عنه، وتجسد مؤسستنا روح التفاني والمثابرة في طلب العلم</>
                  ) : (
                    t('about.history.p1')
                  )}
                </p>
                <p>
                  {t('about.history.p2')}
                </p>
                <p>
                  {t('about.history.p3')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Foundation Image */}
                <div className="relative">
                  <Image
                    src="/muasaska dugsiga.jpeg"
                    alt="تأسيس المدرسة - Foundation of the School"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-xl shadow-lg">
                    <div className="text-xl font-bold arabic-text">2013</div>
                    <div className="text-xs arabic-text">التأسيس</div>
                  </div>
                </div>
                
                {/* Current Building */}
                <div className="relative">
                  <Image
                    src="/sawirka madarasada.jpeg"
                    alt="مبنى المدرسة الحالي - Current School Building"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white p-3 rounded-xl shadow-lg">
                    <div className="text-xl font-bold arabic-text">2025</div>
                    <div className="text-xs arabic-text">اليوم</div>
                  </div>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="mt-8 bg-gradient-to-r from-green-50 to-gold-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 arabic-text text-center">رحلة 12 عاماً من التميز</h3>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-green-700 arabic-text">2013</div>
                    <div className="text-xs text-gray-600 arabic-text">البداية</div>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-gold-500 mx-4 rounded"></div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-gold-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-gold-600 arabic-text">2025</div>
                    <div className="text-xs text-gray-600 arabic-text">500+ طالب</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Target size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 arabic-text">رسالتنا</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed arabic-text">
                تقديم تعليم إسلامي شامل ينمي التطور الروحي والفكري والأخلاقي لطلابنا، وإعدادهم ليكونوا مسلمين صالحين وأعضاء منتجين في المجتمع مع الحفاظ على التعاليم الإسلامية الأصيلة
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gold-100 p-3 rounded-full mr-4">
                  <Eye size={32} className="text-gold-600" />
                </div>
                <h3 className={`text-2xl font-bold text-gray-900 ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.vision.title')}</h3>
              </div>
              <p className={`text-gray-600 text-lg leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                {t('about.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">قيمنا الأساسية</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              المبادئ التي توجه كل ما نقوم به في مدرسة خباب بن الأرت
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <value.icon size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 arabic-text">{value.title}</h3>
                <p className="text-gray-600 arabic-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('about.structure.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-2 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('about.structure.subtitle')}
            </p>
            <p className={`text-lg text-gray-500 max-w-2xl mx-auto ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('about.structure.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: language === 'ar' ? 'حفظ القرآن الكريم' : 'Xifdinta Quraanka',
                description: language === 'ar' ? 'حفظ كامل للقرآن الكريم مع التجويد الصحيح' : 'Xifdinta buuxda ee Quraanka iyadoo la xifdiyo si sax ah',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'قواعد التجويد' : 'Qawaaniinta Tajwiidka',
                description: language === 'ar' ? 'تعلم قواعد التجويد الصحيحة' : 'Barashada qawaaniinta tajwiidka saxda ah',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'اللغة العربية' : 'Luuqada Carabiga',
                description: language === 'ar' ? 'تعلم اللغة العربية من الأساسيات إلى المتقدم' : 'Barashada luuqada Carabiga laga bilaabo aasaasiga ilaa heerka sare',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'النحو والصرف' : 'Naxwaha iyo Sarfaha',
                description: language === 'ar' ? 'قواعد اللغة العربية النحو والصرف' : 'Qawaaniinta luuqada Carabiga naxwaha iyo sarfaha',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'العقيدة الإسلامية' : 'Aqida Islaamka',
                description: language === 'ar' ? 'دراسة العقيدة الإسلامية الصحيحة' : 'Barashada aqida Islaamka saxda ah',
                color: 'from-teal-500 to-teal-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'الفقه الإسلامي' : 'Fiqh Islaamka',
                description: language === 'ar' ? 'دراسة الفقه الإسلامي' : 'Barashada fiqh Islaamka',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'علوم الحديث' : 'Cilmi Xadiiska',
                description: language === 'ar' ? 'دراسة الحديث النبوي الشريف' : 'Barashada xadiiska Nebiga scw',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'السيرة النبوية' : 'Siirada Nebiga',
                description: language === 'ar' ? 'دراسة سيرة النبي محمد صلى الله عليه وسلم' : 'Barashada siirada Nebi Muxamed scw',
                color: 'from-amber-500 to-amber-600'
              },
              {
                icon: BookOpen,
                title: language === 'ar' ? 'التاريخ الإسلامي' : 'Taariikhda Islaamka',
                description: language === 'ar' ? 'دراسة التاريخ الإسلامي' : 'Barashada taariikhda Islaamka',
                color: 'from-rose-500 to-rose-600'
              }
            ].map((subject, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-green-400"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon size={28} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold text-gray-900 mb-2 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {subject.title}
                </h3>
                <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto">
            {teachers.map((teacher, index) => (
              <div key={index} className="card p-8 text-center animate-fade-in relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-100 rounded-full opacity-20 -ml-12 -mb-12"></div>
                
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={200}
                      height={200}
                      className="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl border-4 border-green-200 ring-4 ring-green-100"
                    />
                    <div className="absolute inset-0 w-40 h-40 rounded-full mx-auto bg-gradient-to-t from-green-600/30 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-4 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-full shadow-xl">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 arabic-text">{teacher.name}</h3>
                <p className="text-green-600 font-semibold text-lg mb-3 arabic-text">{teacher.role}</p>
                <p className="text-gray-600 mb-4 arabic-text">{teacher.specialization}</p>
                <div className="inline-flex items-center justify-center text-gold-700 text-sm font-medium bg-gold-50 rounded-full px-4 py-2 border border-gold-200">
                  <Award size={18} className="ml-2" />
                  <span className="arabic-text">{teacher.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-green-800 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('about.achievements.title')}
            </h2>
            <p className={`text-xl text-green-100 max-w-3xl mx-auto ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('about.achievements.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-gold-300 min-h-[4rem] flex items-center justify-center">
                <CounterAnimation end={500} suffix="+" duration={2000} className="text-gold-300" />
              </div>
              <div className={`text-green-200 mb-2 text-lg ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.graduates')}</div>
              <p className={`text-green-100 text-sm ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.graduatesDesc')}</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-gold-300 min-h-[4rem] flex items-center justify-center">
                <CounterAnimation end={12} suffix="+" duration={2000} className="text-gold-300" />
              </div>
              <div className={`text-green-200 mb-2 text-lg ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.years')}</div>
              <p className={`text-green-100 text-sm ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.yearsDesc')}</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-gold-300 min-h-[4rem] flex items-center justify-center">
                <CounterAnimation end={3000} suffix="+" duration={2500} className="text-gold-300" />
              </div>
              <div className={`text-green-200 mb-2 text-lg ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.memorizers')}</div>
              <p className={`text-green-100 text-sm ${language === 'ar' ? 'arabic-text' : ''}`}>{t('about.achievements.memorizersDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
