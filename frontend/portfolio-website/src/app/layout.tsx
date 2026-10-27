import type { Metadata } from 'next';
import './globals.css';
import { kedebideriRegular, michromaRegular } from './fonts';
import '@/styles/variables.css'; 
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Portfolio website',
  description: 'portfolio showcasing past projects and developer skills',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${kedebideriRegular.variable} ${michromaRegular.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-surface-background'>
        <Navigation />
        <main className='flex-1'>{children}</main>
      </body>
    </html>
  );
}
