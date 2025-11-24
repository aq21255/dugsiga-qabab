'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'so' : 'ar')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      aria-label={language === 'ar' ? 'U beddel Soomaali' : 'Switch to Arabic'}
      title={language === 'ar' ? 'U beddel Soomaali' : 'التبديل إلى العربية'}
    >
      <Languages size={24} />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {language === 'ar' ? 'U beddel Soomaali' : 'العربية'}
      </span>
    </button>
  )
}



