import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo (6).png"
                alt="Mu'asasadda Khabab Binu Arrati Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Mu\'asasadda Khabab Binu Arrati
                </h3>
                <p className="text-green-200 text-sm arabic-text font-arabic">
                  مدرسة خباب بن الأرت للتعليم الإسلامي
                </p>
                <p className="text-green-200 text-sm">
                  Islamic Education Excellence
                </p>
              </div>
            </div>
            <p className="text-green-100 mb-4 max-w-md arabic-text">
              مكرسة لتقديم تعليم إسلامي عالي الجودة، ودراسات قرآنية، وتنمية الشخصية للطلاب من جميع الأعمار
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400 arabic-text">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-100 hover:text-white transition-colors arabic-text">
                  عن المدرسة
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-green-100 hover:text-white transition-colors arabic-text">
                  برامجنا
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-green-100 hover:text-white transition-colors arabic-text">
                  التسجيل
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-green-100 hover:text-white transition-colors arabic-text">
                  المعرض
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors arabic-text">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400 arabic-text">معلومات الاتصال</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-300 mt-1 flex-shrink-0" />
                <p className="text-green-100 text-sm">
                  wadajir, celqalow, Tabeelaha Hasan hilac, mogadisho, Somaaliya
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-300 flex-shrink-0" />
                <p className="text-green-100 text-sm">
                  615716751
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-300 flex-shrink-0" />
                <p className="text-green-100 text-sm">
                  Khabbabinuarrat@gmail.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-green-300 mt-1 flex-shrink-0" />
                <div className="text-green-100 text-sm arabic-text">
                  <p>السبت - الجمعة: 8:00 ص - 4:00 م</p>
                  <p>مفتوح طوال الأسبوع</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm arabic-text">
            © {new Date().getFullYear()} مدرسة خباب بن الأرت. جميع الحقوق محفوظة
          </p>
          <p className="text-green-300 text-xs mt-2 arabic-text">
            بُني بـ ❤️ للتعليم الإسلامي
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

