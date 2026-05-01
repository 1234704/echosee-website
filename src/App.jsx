import React from 'react';
import ProductPage from './components/Product/ProductPage';
import PricingSection from './components/Pricing/PricingSection';

function App() {
  return (
    
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 antialiased overflow-x-hidden selection:bg-cyan-500/30">
      
    
      
      <main>
        <ProductPage />
        <PricingSection />
      </main>
      
    </div>
  );
}

export default App;