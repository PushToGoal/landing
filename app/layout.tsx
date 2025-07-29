import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Push to Goal - Платформа геймификации для бизнеса',
  description: 'White-label решение для каршеринга и таксопарков. Стимулируем зарядки, смены, аккуратное вождение через миссии, статусы и награды.',
  keywords: ['геймификация', 'каршеринг', 'таксопарки', 'мотивация пользователей', 'B2B решение'],
  authors: [{ name: 'Push to Goal' }],
  creator: 'Push to Goal',
  publisher: 'Push to Goal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Push to Goal - Платформа геймификации для бизнеса',
    description: 'White-label решение для каршеринга и таксопарков. Стимулируем зарядки, смены, аккуратное вождение через миссии, статусы и награды.',
    url: 'https://push-to-goal.vercel.app',
    siteName: 'Push to Goal',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}