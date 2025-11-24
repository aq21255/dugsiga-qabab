'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Users, GraduationCap, Award, Star, Heart, Sparkles } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'
import CounterAnimation from '@/components/CounterAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { language, t } = useLanguage()
  
  // Calculate years of excellence dynamically
  const foundingYear = 2013
  const currentYear = new Date().getFullYear()
  const yearsOfExcellence = currentYear - foundingYear

  const stats = [
    { icon: Users, labelKey: 'home.stats.students', value: '500+' },
    { icon: GraduationCap, labelKey: 'home.stats.teachers', value: '12+' },
    { icon: BookOpen, labelKey: 'home.stats.programs', value: '8' },
    { icon: Award, labelKey: 'home.stats.years', value: '12' },
  ]

  const features = [
    {
      icon: BookOpen,
      titleKey: 'home.features.quran.title',
      descriptionKey: 'home.features.quran.desc',
      subjects: language === 'ar' 
        ? ['الحفظ', 'قواعد التجويد', 'العربية القرآنية', 'التفسير']
        : ['Xifdinta', 'Qawaaniinta Tajwiidka', 'Carabiga Quraanka', 'Tafsiirka']
    },
    {
      icon: Star,
      titleKey: 'home.features.arabic.title',
      descriptionKey: 'home.features.arabic.desc',
      subjects: language === 'ar'
        ? ['النحو العربي', 'الصرف العربي', 'الأدب العربي', 'ممارسة المحادثة']
        : ['Naxwaha Carabiga', 'Sarfaha Carabiga', 'Suugaanta Carabiga', 'Wada Hadalka']
    },
    {
      icon: Heart,
      titleKey: 'home.features.islamic.title',
      descriptionKey: 'home.features.islamic.desc',
      subjects: language === 'ar'
        ? ['العقيدة', 'الفقه', 'علوم الحديث', 'السيرة النبوية', 'التاريخ الإسلامي']
        : ['Aqida', 'Fiqh', 'Cilmi Xadiiska', 'Siirada Nebiga', 'Taariikhda Islaamka']
    },
    {
      icon: Users,
      titleKey: 'home.features.character.title',
      descriptionKey: 'home.features.character.desc',
      subjects: language === 'ar'
        ? ['الأخلاق الإسلامية', 'تدريب القيادة', 'خدمة المجتمع', 'مهارات الحياة']
        : ['Dabeecadaha Islaamka', 'Tababarka Hogaaminta', 'Adeegga Bulshada', 'Xirfadaha Nolosha']
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* Clean Professional Background with Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/banerka gadal.jpeg")',
            opacity: 0.4
          }}
        ></div>
        {/* Clean Light Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#111827', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <span style={{ background: 'linear-gradient(to right, #059669, #047857)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mu\'asasadda Khabab</span>
                <br />
                <span style={{ color: '#166534' }}>Binu Arrati</span>
              </h1>
              <div className={`${language === 'ar' ? 'arabic-text' : ''} text-2xl md:text-3xl text-green-700 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('home.title')}
              </div>
              <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                {t('home.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admission" className={`btn-primary text-center ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {t('home.register')}
                </Link>
                <Link href="/contact" className={`btn-secondary text-center ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {t('home.contact')}
                </Link>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200} className="relative">
              {/* Banner Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4">
                <Image
                  src="/banerka fiican.jpeg"
                  alt="مؤسسة خباب بن الأرت للقرآن الكريم والعلوم الشرعية"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm font-semibold text-gray-700 ${language === 'ar' ? 'arabic-text' : ''}`}>{yearsOfExcellence}+ {t('common.yearsExcellence')}</span>
                  </div>
                </div>
              </div>
              
              {/* Small Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/WhatsApp Image 2025-11-18 at 3.35.04 PM.jpeg"
                    alt="طلاب يحفظون القرآن"
                    width={200}
                    height={120}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/WhatsApp Image 2025-11-18 at 3.35.05 PM.jpeg"
                    alt="حصة التجويد"
                    width={200}
                    height={120}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/WhatsApp Image 2025-11-18 at 3.35.06 PM.jpeg"
                    alt="الدراسات الإسلامية"
                    width={200}
                    height={120}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className={`text-xs ${language === 'ar' ? 'arabic-text' : ''}`}>
                    {language === 'ar' ? 'طالب وطالبة' : 'Arday iyo Ardayad'}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Founder Welcome Section - 2nd Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-gold-50 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                  <Image
                    src="/goo mamule.png"
                    alt={language === 'ar' ? 'إبراهيم طالب حسن - مؤسس المدرسة' : 'Ibraahim Taalib Xasan - Aasaaska Dugsiga'}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
                  {/* Decorative Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="text-xs font-semibold text-green-600 mb-1" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      {language === 'ar' ? 'المؤسس' : 'Aasaaska'}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-green-50/30">
                  <div className="mb-6">
                    <div className={`inline-block px-4 py-2 bg-green-100 rounded-full mb-4 ${language === 'ar' ? 'arabic-text' : ''}`}>
                      <span className="text-sm font-semibold text-green-700">{t('home.founder.greeting')}</span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-3 ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {t('home.founder.title')}
                    </h2>
                    <h3 className={`text-2xl md:text-3xl font-bold text-green-700 mb-2 ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {t('home.founder.welcome')}
                    </h3>
                    <p className={`text-lg text-gold-600 font-semibold ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {t('home.founder.role')}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {t('home.founder.message')}
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {t('home.founder.impact')}
                    </p>
                  </div>
                  
                  {/* Gratitude Box */}
                  <div className="bg-gradient-to-r from-green-50 to-gold-50 rounded-xl p-6 border-l-4 border-green-600">
                    <div className="flex items-start">
                      <div className="bg-green-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <Heart size={20} className="text-white" />
                      </div>
                      <p className={`text-gray-800 font-medium leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                        {t('home.founder.gratitude')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Quote */}
                  <div className="mt-8 pt-6 border-t border-green-200">
                    <p className={`text-center text-gray-500 italic ${language === 'ar' ? 'arabic-text' : ''}`}>
                      {language === 'ar' 
                        ? '"التعليم هو الأساس الذي نبني عليه المستقبل"'
                        : '"Waxbarashadu waa aasaaska aan mustaqbalka ku dhisno"'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white relative overflow-hidden py-20">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              // Extract number from value (e.g., "500+" -> 500, "15+" -> 15, "8" -> 8)
              const numericValue = parseInt(stat.value.replace(/\D/g, ''))
              const suffix = stat.value.includes('+') ? '+' : ''
              
              return (
                <ScrollAnimation key={index} delay={index * 150} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon size={32} className="text-white" />
                </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 min-h-[3rem] flex items-center justify-center">
                      <CounterAnimation 
                        end={numericValue} 
                        duration={2000}
                        suffix={suffix}
                        className="text-white"
                      />
                    </div>
                    <div className={`text-green-100 md:text-lg font-medium ${language === 'ar' ? 'arabic-text' : ''}`}>{t(stat.labelKey)}</div>
              </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <ScrollAnimation className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {language === 'ar' ? (
                <>لماذا تختار <span className="text-gradient">مدرستنا</span></>
              ) : (
                t('home.whyChoose')
              )}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('home.whyChooseDesc')}
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 150} className="card p-8 text-center">
                <div className="flex flex-col items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <feature.icon size={32} className="text-green-600" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 ${language === 'ar' ? 'arabic-text' : ''}`}>{t(feature.titleKey)}</h3>
                </div>
                <p className={`text-gray-600 mb-6 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>{t(feature.descriptionKey)}</p>
                <div className="space-y-3">
                  <h4 className={`font-semibold text-gray-800 text-sm ${language === 'ar' ? 'arabic-text' : ''}`}>
                    {language === 'ar' ? 'المواد الأساسية:' : 'Koorsooyinka Aasaasiga:'}
                  </h4>
                  <ul className="space-y-2">
                    {feature.subjects.map((subject, subIndex) => (
                      <li key={subIndex} className={`flex items-center justify-center text-sm text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full ml-2 flex-shrink-0"></div>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="relative">
              <Image
                src="/muasaska dugsiga.jpeg"
                alt="Mu\'asasadda Foundation"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                loading="lazy"
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? (
                  <><span className="text-gradient">رسالتنا</span></>
                ) : (
                  t('home.about.title')
                )}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                {t('home.about.desc1')}
              </p>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${language === 'ar' ? 'arabic-text' : ''}`}>
                {t('home.about.desc2')}
              </p>
              <Link href="/about" className={`btn-primary ${language === 'ar' ? 'arabic-text' : ''}`}>
                {t('home.about.learnMore')}
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-geometric opacity-20"></div>
        <div className="container-max section-padding text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'ar' ? 'arabic-text' : ''}`}>
            {t('home.cta.title')}
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-3xl mx-auto ${language === 'ar' ? 'arabic-text' : ''}`}>
            {t('home.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission" className={`btn-primary bg-white text-green-800 hover:bg-gray-100 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('home.cta.apply')}
            </Link>
            <Link href="/courses" className={`btn-secondary border-white text-white hover:bg-white hover:text-green-800 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {t('home.cta.programs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
