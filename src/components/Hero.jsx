const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: '#050505', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>
        EchoSee Official Website <span style={{ color: '#10b981' }}></span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '20px 0' }}>
        EchoSee Smart Glasses: Real-time subtitles for a better world.
      </p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button style={{ padding: '12px 24px', backgroundColor: '#10b981', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          Pre-Order Now
        </button>
        <button style={{ padding: '12px 24px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;