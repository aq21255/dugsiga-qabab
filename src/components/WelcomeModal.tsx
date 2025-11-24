'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    // Check if user has seen the welcome modal before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
    
    if (!hasSeenWelcome) {
      // Show modal after a short delay for better UX
      setTimeout(() => {
        setIsOpen(true)
      }, 500)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that user has seen the welcome modal
    localStorage.setItem('hasSeenWelcome', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
          aria-label={language === 'ar' ? 'إغلاق' : 'Xidh'}
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header with Image */}
          <div className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/logo (6).png"
                alt="Mu'asasadda Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <Sparkles size={18} className="text-green-600" />
              <span className={`text-sm font-semibold text-green-700 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'مرحباً بك' : 'Soo Dhawoow'}
              </span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-3 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {language === 'ar' ? 'مرحباً بك في' : 'Ku Soo Dhawoow'}
            </h2>
            <h3 className={`text-2xl font-bold text-green-700 ${language === 'ar' ? 'arabic-text' : ''}`}>
              {language === 'ar' ? 'مدرسة خباب بن الأرت' : 'Madrasa Khabab Binu Arrati'}
            </h3>
          </div>

          {/* Welcome Message */}
          <div className={`space-y-4 text-gray-700 leading-relaxed mb-8 ${language === 'ar' ? 'arabic-text' : ''}`}>
            <p className="text-lg">
              {language === 'ar' 
                ? 'نحن سعداء بزيارتك لموقعنا الإلكتروني. مدرسة خباب بن الأرت تقدم تعليماً إسلامياً شاملاً يجمع بين الدراسات القرآنية واللغة العربية والتربية الإسلامية.'
                : 'Waxaan ku faraxsanahay inaad booqatay websaydhkeena. Madrasa Khabab Binu Arrati waxay bixisaa waxbarasho Islaami ah oo buuxda oo isku daraysa barashada Quraanka, luuqada Carabiga iyo tarbiyada Islaamka.'
              }
            </p>
            <p>
              {language === 'ar'
                ? 'استكشف موقعنا لمعرفة المزيد عن برامجنا التعليمية، معلمينا المتفانين، وإنجازاتنا في مجال التعليم الإسلامي.'
                : 'Wax ka baro websaydhkeena si aad u ogaato koorsooyinkeena, macallimiinteena dadaalka, iyo guulahaheena ee waxbarashada Islaamka.'
              }
            </p>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
              <div className="bg-green-600 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'حفظ القرآن الكريم' : 'Xifdinta Quraanka'}
                </p>
                <p className={`text-sm text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'برنامج شامل للحفظ والتجويد' : 'Koorso buuxda oo xifdinta iyo tajwiidka'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'اللغة العربية' : 'Luuqada Carabiga'}
                </p>
                <p className={`text-sm text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'تعليم شامل للغة العربية' : 'Waxbarasho buuxda oo luuqada Carabiga'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
              <div className="bg-yellow-600 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'الدراسات الإسلامية' : 'Barashada Islaamka'}
                </p>
                <p className={`text-sm text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'تعليم إسلامي شامل' : 'Waxbarasho Islaami ah oo buuxda'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'تنمية الشخصية' : 'Horumarinta Shakhsiyadda'}
                </p>
                <p className={`text-sm text-gray-600 ${language === 'ar' ? 'arabic-text' : ''}`}>
                  {language === 'ar' ? 'بناء شخصية إسلامية قوية' : 'Dhisidda shakhsiyad Islaami ah oo adag'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleClose}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'ابدأ الاستكشاف' : 'Bilow Baadhitaanka'}
              </span>
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'إغلاق' : 'Xidh'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

