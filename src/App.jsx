import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AnalyticsGrid from './components/AnalyticsGrid'; 
import Highlights from './components/Highlights';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar /> 
      <Hero />
      <Features />
      
      
      <AnalyticsGrid />
      
      <Highlights />
    </main>
  );
}

export default App;