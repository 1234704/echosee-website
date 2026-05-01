import React, { useEffect } from 'react';

function Partnerships() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target.dataset.animation;
          if (animation) {
            entry.target.classList.add(animation);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: "Schools & Universities", icon: "🎓", type: "Education", color: "#7000ff" },
    { name: "NGOs & Healthcare", icon: "🏥", type: "Healthcare", color: "#00df9a" },
    { name: "Corporate CSR", icon: "🏢", type: "Corporate", color: "#ff6b35" }
  ];

  const companies = [
    { name: "Microsoft", logo: "/logos/microsoft.png" },
    { name: "Google", logo: "/logos/google.png" },
    { name: "UNICEF", logo: "/logos/unicef.png" },
    { name: "WHO", logo: "/logos/who.png" },
    { name: "Harvard", logo: "/logos/harvard.png" },
    { name: "MIT", logo: "/logos/mit.png" }
  ];

  return (
    <section style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1525 100%)' 
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="animate-on-scroll" data-animation="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff, #00df9a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Our Partnerships
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Collaborating with leading institutions to create inclusive technology
          </p>
        </div>

        {/* Partner Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '35px',
          marginBottom: '100px'
        }}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="animate-on-scroll card-hover"
              data-animation="flip-card"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                backdropFilter: 'blur(10px)',
                borderRadius: '28px',
                padding: '45px 25px',
                textAlign: 'center',
                border: `1px solid ${partner.color}20`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="float" style={{ fontSize: '5rem', marginBottom: '20px' }}>{partner.icon}</div>
              <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: '600' }}>{partner.name}</h3>
              <p style={{ color: partner.color, fontSize: '1rem', fontWeight: '500' }}>{partner.type}</p>
            </div>
          ))}
        </div>

        {/* Logo Carousel with Logo + Company Name */}
        <div className="animate-on-scroll" data-animation="fade-up" style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#fff', 
            fontSize: '1.8rem', 
            marginBottom: '40px',
            fontWeight: '600'
          }}>
            Trusted by <span style={{ color: '#00df9a' }}>100+ Organizations</span>
          </h3>
          
          <div className="marquee-container">
            <div className="marquee-track">
              {[...companies, ...companies, ...companies].map((company, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    margin: '0 15px', 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '10px 25px', 
                    borderRadius: '40px',
                    border: '1px solid rgba(112,0,255,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00df9a';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.background = 'rgba(112,0,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(112,0,255,0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {/* Logo Image */}
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    style={{ 
                      height: '30px', 
                      width: 'auto',
                      maxWidth: '60px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Company Name */}
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '500',
                    color: '#fff',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}>
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Partnerships;