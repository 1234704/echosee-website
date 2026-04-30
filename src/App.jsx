import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Highlights from './components/Highlights';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar /> 
      <Hero />
      <Features />
      <Highlights />
    </main>
  );
}

export default App;