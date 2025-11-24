import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mu\'asasadda Khabab Binu Arrati - Islamic Education Excellence',
    short_name: 'Mu\'asasadda Khabab',
    description: 'Premier Islamic educational institution offering comprehensive Islamic education in Mogadishu, Somalia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#166534',
    icons: [
      {
        src: '/logo (6).png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
