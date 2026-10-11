import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'UPFREAK LLC | Administrative & Business Support Services',
    description:
      'UPFREAK LLC provides reliable administrative and business support services for individuals, entrepreneurs, and small businesses across the United States.',
  },
  '/services': {
    title: 'Services | UPFREAK LLC',
    description:
      'Administrative support, research, scheduling, customer support assistance, document organization, and business operations support from UPFREAK LLC.',
  },
  '/about': {
    title: 'About | UPFREAK LLC',
    description:
      'UPFREAK LLC is a California limited liability company providing straightforward, dependable administrative and business support services across the United States.',
  },
  '/contact': {
    title: 'Contact | UPFREAK LLC',
    description:
      'Contact UPFREAK LLC to discuss your administrative and business support needs. Tell us what you need help with and we will get back to you.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | UPFREAK LLC',
    description:
      'Privacy Policy for UPFREAK LLC, a California-based provider of administrative and business support services.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | UPFREAK LLC',
    description:
      'Terms of Service for UPFREAK LLC, a California-based provider of administrative and business support services.',
  },
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const meta = pageMeta[location.pathname] ?? pageMeta['/'];

  useEffect(() => {
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }
  }, [meta]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
