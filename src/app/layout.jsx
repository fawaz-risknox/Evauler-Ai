import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://www.evaluerai.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'EvaluerAI | Startup valuation and investability score',
  description:
    'EvaluerAI scores your company on 88 criteria and returns an entity valuation and an investability score from your business, financials, market, and risk data.',
  keywords: [
    'EvaluerAI',
    'Startup Valuation',
    'Investability Score',
    'Entity Valuation',
    '88 evaluation criteria',
    '5 dimension evaluation',
    'VC cohort analytics',
    'ESG startup scoring',
    'pitch deck readiness',
  ],
  authors: [{ name: 'EvaluerAI' }],
  icons: {
    icon: '/tab-preview.png',
    shortcut: '/tab-preview.png',
    apple: '/tab-preview.png',
  },
  openGraph: {
    title: 'EvaluerAI | Startup valuation and investability score',
    description:
      'Score your company on 88 criteria across five dimensions. Get a valuation report and a ranked list of what to fix.',
    url: '/',
    siteName: 'EvaluerAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvaluerAI | Startup valuation and investability score',
    description:
      'Score your company on 88 criteria across five dimensions. Get a valuation report and a ranked list of what to fix.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-mesh">
          <div className="ambient-grid"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
