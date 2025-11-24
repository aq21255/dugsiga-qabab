'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera, Users, BookOpen, Award } from 'lucide-react';
import type { Metadata } from 'next';

// Note: This would normally be generated server-side, but we're using 'use client' for the modal functionality
// In a real app, you might want to separate the modal into its own client component

const galleryImages = [
  {
    id: 1,
    src: '/WhatsApp Image 2025-11-18 at 3.34.45 PM.jpeg',
    alt: 'Students in Quran class',
    category: 'classes',
    title: 'Quran Memorization Class',
    description: 'Students engaged in Hifz (Quran memorization) session'
  },
  {
    id: 21,
    src: '/1.jpeg',
    alt: 'طلاب خلال نشاط',
    category: 'students',
    title: 'طلاب في الصف',
    description: 'لقطة لطلابنا خلال حصة تعليمية.'
  },
  {
    id: 22,
    src: '/2.jpeg',
    alt: 'فعالية مدرسية',
    category: 'events',
    title: 'فعالية المدرسة',
    description: 'لحظة من فعالية مدرسية مليئة بالحيوية.'
  },
  {
    id: 23,
    src: '/3.jpeg',
    alt: 'مرافق المدرسة',
    category: 'facilities',
    title: 'مرافق المدرسة',
    description: 'نظرة على بعض مرافقنا التعليمية الحديثة.'
  },
  {
    id: 24,
    src: '/4.jpeg',
    alt: 'نشاط طلابي',
    category: 'activities',
    title: 'نشاط طلابي',
    description: 'طلابنا يشاركون في نشاطات إثرائية.'
  },
  {
    id: 2,
    src: '/WhatsApp Image 2025-11-18 at 3.34.56 PM.jpeg',
    alt: 'Arabic language lesson',
    category: 'classes',
    title: 'Arabic Language Class',
    description: 'Interactive Arabic language learning session'
  },
  {
    id: 3,
    src: '/WhatsApp Image 2025-11-18 at 3.34.57 PM.jpeg',
    alt: 'Islamic studies class',
    category: 'classes',
    title: 'Islamic Studies',
    description: 'Students learning Islamic history and values'
  },
  {
    id: 4,
    src: '/WhatsApp Image 2025-11-18 at 3.35.01 PM.jpeg',
    alt: 'Tajweed practice session',
    category: 'classes',
    title: 'Tajweed Practice',
    description: 'Students practicing proper Quranic recitation'
  },
  {
    id: 5,
    src: '/WhatsApp Image 2025-11-18 at 3.35.03 PM.jpeg',
    alt: 'School assembly',
    category: 'events',
    title: 'Morning Assembly',
    description: 'Daily morning assembly and prayers'
  },
  {
    id: 6,
    src: '/WhatsApp Image 2025-11-18 at 3.35.04 PM.jpeg',
    alt: 'Students studying',
    category: 'activities',
    title: 'Study Session',
    description: 'Students engaged in focused study'
  },
  {
    id: 7,
    src: '/WhatsApp Image 2025-11-18 at 3.35.05 PM.jpeg',
    alt: 'Group learning',
    category: 'activities',
    title: 'Group Discussion',
    description: 'Collaborative learning and discussion'
  },
  {
    id: 8,
    src: '/WhatsApp Image 2025-11-18 at 3.35.06 PM.jpeg',
    alt: 'Graduation ceremony',
    category: 'events',
    title: 'Graduation Ceremony',
    description: 'Celebrating student achievements'
  },
  {
    id: 9,
    src: '/WhatsApp Image 2025-11-18 at 3.35.10 PM.jpeg',
    alt: 'School facilities',
    category: 'facilities',
    title: 'Learning Environment',
    description: 'Modern and comfortable learning spaces'
  },
  {
    id: 10,
    src: '/WhatsApp Image 2025-11-18 at 3.35.11 PM.jpeg',
    alt: 'Teacher instruction',
    category: 'classes',
    title: 'Teacher Instruction',
    description: 'Dedicated teachers providing quality education'
  },
  {
    id: 11,
    src: '/WhatsApp Image 2025-11-18 at 3.35.12 PM.jpeg',
    alt: 'Student activities',
    category: 'activities',
    title: 'Student Activities',
    description: 'Extracurricular and educational activities'
  },
  {
    id: 12,
    src: '/WhatsApp Image 2025-11-18 at 3.41.18 PM.jpeg',
    alt: 'School building',
    category: 'facilities',
    title: 'School Building',
    description: 'Our modern educational facility'
  },
  {
    id: 13,
    src: '/WhatsApp Image 2025-11-18 at 3.48.07 PM.jpeg',
    alt: 'Classroom environment',
    category: 'facilities',
    title: 'Classroom',
    description: 'Well-equipped classrooms for effective learning'
  },
  {
    id: 14,
    src: '/WhatsApp Image 2025-11-18 at 3.48.08 PM.jpeg',
    alt: 'Student presentation',
    category: 'activities',
    title: 'Student Presentation',
    description: 'Students presenting their learning'
  },
  {
    id: 15,
    src: '/WhatsApp Image 2025-11-18 at 3.48.10 PM.jpeg',
    alt: 'Community event',
    category: 'events',
    title: 'Community Event',
    description: 'Engaging with the local community'
  },
  {
    id: 16,
    src: '/sawirka madarasada.jpeg',
    alt: 'Mu\'asasadda building exterior',
    category: 'facilities',
    title: 'Mu\'asasadda Building',
    description: 'The main building of our institution'
  },
  {
    id: 17,
    src: '/muasaska dugsiga.jpeg',
    alt: 'Foundation ceremony',
    category: 'events',
    title: 'Foundation Day',
    description: 'Celebrating our institutional foundation'
  },
  {
    id: 18,
    src: '/Banner 4x2.5-01.jpg',
    alt: 'Mu\'asasadda banner',
    category: 'facilities',
    title: 'Mu\'asasadda Banner',
    description: 'Official banner of Mu\'asasadda Khabab Binu Arrati'
  }
];

const categories = [
  { id: 'all', name: 'جميع الصور', icon: Camera },
  { id: 'classes', name: 'الفصول', icon: BookOpen },
  { id: 'activities', name: 'الأنشطة', icon: Users },
  { id: 'events', name: 'الفعاليات', icon: Award },
  { id: 'facilities', name: 'المرافق', icon: Camera }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 islamic-pattern">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
              <span className="text-gradient">معرض</span> الصور
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              استكشف لحظات من مجتمعنا التعليمي الإسلامي النابض بالحياة. شاهد طلابنا ومعلمينا ومرافقنا في العمل
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="container-max py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 arabic-text ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                <category.icon size={18} className="ml-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openModal(image.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={16} className="text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2 arabic-text">لم يتم العثور على صور</h3>
              <p className="text-gray-500 arabic-text">جرب اختيار فئة مختلفة</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-200">{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-green-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text">
            كن جزءاً من قصتنا
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto arabic-text">
            انضم إلى مجتمع المتعلمين لدينا وكن جزءاً من التقليد الغني للتعليم الإسلامي في مدرسة خباب بن الأرت
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admission" className="btn-primary bg-white text-green-800 hover:bg-gray-100 arabic-text">
              قدم للقبول
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-green-800 arabic-text">
              زر حرمنا الجامعي
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
