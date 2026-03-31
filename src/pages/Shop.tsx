import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopContent from '@/components/ShopContent';

const Shop = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16">
          <ShopContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Shop;
