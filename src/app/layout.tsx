import type { Metadata } from 'next';
import { Unbounded, Pacifico, Manrope } from 'next/font/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
const display = Unbounded({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-display', display: 'swap' });
const emotional = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-emotional', display: 'swap' });
const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  title: 'Recanto dos Quatis | Hospedagem em Urubici, SC',
  description: 'Uma experiência que começa antes da chegada. Explore o Recanto dos Quatis em Urubici, Santa Catarina, e consulte sua próxima estadia.',
  openGraph: { title: 'Recanto dos Quatis | Urubici', description: 'Uma experiência que começa antes da chegada.', locale: 'pt_BR', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${emotional.variable} ${body.variable}`}>{children}</body></html>;
}
