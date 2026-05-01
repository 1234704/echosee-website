import React, { useEffect, useState, useRef } from 'react';

function Impact() {
  const [counts, setCounts] = useState({ global: 0, pakistan: 0, target: 0 });
  const sectionRef = useRef(null);
  const animated = useRef(false);

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

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          
          const animateCount = (end, setter, duration = 2000) => {
            let start = 0;
            const increment = end / (duration / 16);
            let current = start;
            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setter(end);
                clearInterval(timer);
              } else {
                setter(Math.floor(current));
              }
            }, 16);
          };

          animateCount(430, (val) => setCounts(prev => ({ ...prev, global: val })));
          animateCount(20, (val) => setCounts(prev => ({ ...prev, pakistan: val })));
          animateCount(50, (val) => setCounts(prev => ({ ...prev, target: val })));
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) countObserver.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(180deg, #050912 0%, #0a0f1e 100%)' 
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div className="animate-on-scroll fade-up" data-animation="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff, #00df9a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Market & Social Impact
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Real numbers, real change - making hearing accessible for everyone
          </p>
        </div>

        {/* Three Statistics Cards */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '80px'
        }}>
          
          {/* Card 1 - Global */}
          <div className="animate-on-scroll zoom-in" data-animation="zoom-in" style={{ 
            background: 'linear-gradient(135deg, #7000ff, #8b3dff)',
            borderRadius: '28px',
            padding: '50px 30px',
            textAlign: 'center',
            cursor: 'pointer',
            width: '300px',
            boxShadow: '0 10px 30px rgba(112,0,255,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#fff' }}>
              {counts.global}M+
            </div>
            <p style={{ color: '#ffffffcc', marginTop: '15px', fontSize: '1.1rem', fontWeight: '500' }}>
              Global Hearing Loss
            </p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#ffffffaa' }}>
              🌍 Worldwide Population
            </div>
          </div>

          {/* Card 2 - Pakistan */}
          <div className="animate-on-scroll zoom-in" data-animation="zoom-in" style={{ 
            background: 'linear-gradient(135deg, #00df9a, #00b87a)',
            borderRadius: '28px',
            padding: '50px 30px',
            textAlign: 'center',
            cursor: 'pointer',
            width: '300px',
            boxShadow: '0 10px 30px rgba(0,223,154,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#fff' }}>
              {counts.pakistan}M+
            </div>
            <p style={{ color: '#ffffffcc', marginTop: '15px', fontSize: '1.1rem', fontWeight: '500' }}>
              Pakistan's Hearing Impaired
            </p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#ffffffaa' }}>
              🇵🇰 National Health Priority
            </div>
          </div>

          {/* Card 3 - Target Users */}
          <div className="animate-on-scroll zoom-in" data-animation="zoom-in" style={{ 
            background: 'linear-gradient(135deg, #ff6b35, #ff8c5a)',
            borderRadius: '28px',
            padding: '50px 30px',
            textAlign: 'center',
            cursor: 'pointer',
            width: '300px',
            boxShadow: '0 10px 30px rgba(255,107,53,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#fff' }}>
              {counts.target}M+
            </div>
            <p style={{ color: '#ffffffcc', marginTop: '15px', fontSize: '1.1rem', fontWeight: '500' }}>
              Target Users
            </p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#ffffffaa' }}>
              📈 Next 5 Years Growth
            </div>
          </div>

        </div>

        {/* Map Highlight Section */}
        <div className="animate-on-scroll fade-left" data-animation="fade-left" style={{ 
          textAlign: 'center', 
          marginBottom: '80px',
          background: 'linear-gradient(135deg, rgba(112,0,255,0.1), rgba(0,223,154,0.05))',
          borderRadius: '32px',
          padding: '50px',
          border: '1px solid rgba(112,0,255,0.2)'
        }}>
          <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '25px', fontWeight: '600' }}>
            Global Impact Map
          </h3>
          <div style={{ fontSize: '5rem' }} className="float">🌍</div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            marginTop: '30px',
            flexWrap: 'wrap'
          }}>
            <span style={{ background: '#7000ff', padding: '8px 24px', borderRadius: '30px', color: '#fff', fontWeight: '500' }}>
              🇮🇳 South Asia
            </span>
            <span style={{ background: '#00df9a', padding: '8px 24px', borderRadius: '30px', color: '#000', fontWeight: '500' }}>
              🌍 Africa
            </span>
            <span style={{ background: '#ff6b35', padding: '8px 24px', borderRadius: '30px', color: '#fff', fontWeight: '500' }}>
              🌏 Southeast Asia
            </span>
          </div>
          <p style={{ color: '#94a3b8', marginTop: '30px' }}>
            Highest need regions requiring immediate attention and accessibility solutions
          </p>
        </div>

        {/* Bottom Three Impact Cards */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          
          <div className="animate-on-scroll fade-left" data-animation="fade-left" style={{ 
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '24px',
            padding: '35px',
            border: '1px solid rgba(255,255,255,0.08)',
            width: '350px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div className="float" style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
            <h3 style={{ color: '#00df9a', fontSize: '1.4rem', marginBottom: '15px', fontWeight: '600' }}>
              Target Users
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Hearing impaired individuals, elderly citizens, students with hearing challenges, and professionals.
            </p>
          </div>

          <div className="animate-on-scroll zoom-in" data-animation="zoom-in" style={{ 
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '24px',
            padding: '35px',
            border: '1px solid rgba(255,255,255,0.08)',
            width: '350px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div className="float" style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
            <h3 style={{ color: '#00df9a', fontSize: '1.4rem', marginBottom: '15px', fontWeight: '600' }}>
              Market Size
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              $10B+ global assistive technology market by 2028, with 15% annual growth rate.
            </p>
          </div>

          <div className="animate-on-scroll fade-right" data-animation="fade-right" style={{ 
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '24px',
            padding: '35px',
            border: '1px solid rgba(255,255,255,0.08)',
            width: '350px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div className="float" style={{ fontSize: '3rem', marginBottom: '20px' }}>❤️</div>
            <h3 style={{ color: '#00df9a', fontSize: '1.4rem', marginBottom: '15px', fontWeight: '600' }}>
              Social Impact
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Empowering millions to communicate better, reducing social isolation, and creating inclusive opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Impact;