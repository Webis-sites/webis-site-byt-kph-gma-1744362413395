import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

// Define fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' });

// Define metadata for the site
export const metadata: Metadata = {
  title: 'בית קפה גמא - בית קפה מוביל בתחום האופנה',
  description: 'אנחנו בית קפה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: ['בית קפה', 'אופנה', 'קפה', 'גמא', 'בית קפה גמא'],
  authors: [{ name: 'בית קפה גמא' }],
  creator: 'בית קפה גמא',
  publisher: 'בית קפה גמא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.gamacafe.co.il',
    title: 'בית קפה גמא - בית קפה מוביל בתחום האופנה',
    description: 'אנחנו בית קפה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    siteName: 'בית קפה גמא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'בית קפה גמא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'בית קפה גמא - בית קפה מוביל בתחום האופנה',
    description: 'אנחנו בית קפה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.gamacafe.co.il',
    languages: {
      'he-IL': 'https://www.gamacafe.co.il',
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

// Define schema markup for the coffee shop
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'בית קפה גמא',
  image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  '@id': 'https://www.gamacafe.co.il',
  url: 'https://www.gamacafe.co.il',
  telephone: '+972-3-1234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב אלנבי 123',
    addressLocality: 'תל אביב',
    postalCode: '6100000',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.0853,
    longitude: 34.7818,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '22:00',
    },
  ],
  menu: 'https://www.gamacafe.co.il/menu',
  servesCuisine: 'קפה, מאפים, ארוחות בוקר',
  priceRange: '₪₪',
  paymentAccepted: 'מזומן, כרטיס אשראי',
  currenciesAccepted: 'ILS',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#FF6B6B" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-right font-heebo">
        <div className="fixed inset-0 bg-gradient-to-br from-pink-100 to-blue-100 opacity-50 z-[-1]"></div>
        
        {/* Main container with glassmorphism effect */}
        <div className="flex flex-col min-h-screen relative">
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm">
            <NavigationBar />
          </header>
          
          <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
            {children}
          </main>
          
          <Footer />
        </div>
        
        {/* Decorative elements */}
        <div className="fixed top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="fixed bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl z-[-1]"></div>
      </body>
    </html>
  );
}