import { readNews } from '@/data/newsStore'
import Image from 'next/image'

export default async function NewsPage() {
  const news = await readNews()

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="container-max px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-600 mb-3">Waxyaabaha Cusub</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Wararka & Cusboonaysiinta</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Halkan waxa aad ka heli doontaa qoraallada, sawirrada, iyo fiidiyowyada ugu dambeeyay ee Mu&apos;asasadda Khabab Binu Arrati.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max px-4">
          {news.length === 0 ? (
            <div className="text-center text-gray-500 py-20">Weli wax lama daabicin. Fadlan dib u eeg mar dambe.</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <article key={item.id} className="card overflow-hidden">
                  <div className="relative h-56 bg-gray-100">
                    {item.mediaType === 'image' ? (
                      <Image src={item.mediaUrl} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    ) : (
                      <iframe
                        src={item.mediaUrl}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-2">{new Date(item.createdAt).toLocaleString()}</p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {item.mediaType === 'image' ? 'Sawir' : 'Fiidiyow'}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

