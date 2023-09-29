import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import ScrollToTop from '@/components/Common/ScrollToTop';

const Layout = ({
  locales,
  navigation,
  children,
}: {
  locales: any;
  navigation: any;
  children: React.ReactNode;
}) => {
  return (
    <div className='text-slate-800'>
      <Header locales={locales} navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
