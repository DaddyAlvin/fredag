import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Subslayer from './pages/Subslayer';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('js');
    return () => document.documentElement.classList.remove('js');
  }, []);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }

    document.title = location.pathname === '/subslayer'
      ? 'SubSlayer – Alvin Sandgren'
      : 'Alvin Sandgren – Portfolio';
  }, [location]);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
    const targets = sectionLinks
      .map((link) => document.getElementById(link.dataset.sectionLink))
      .filter(Boolean);
    let ticking = false;

    const update = () => {
      ticking = false;
      const max = root.scrollHeight - window.innerHeight;
      if (!reduceMotion) {
        root.style.setProperty('--progress', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      }

      let current = null;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = target.id;
        }
      }
      if (targets.length && max > 0 && window.scrollY >= max - 2) {
        current = targets[targets.length - 1].id;
      }

      sectionLinks.forEach((link) => {
        if (link.dataset.sectionLink === current) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    const reveals = document.querySelectorAll('.reveal');
    if (!reduceMotion && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((element) => observer.observe(element));

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        observer.disconnect();
      };
    }

    reveals.forEach((element) => element.classList.add('in'));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !finePointer) return undefined;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const ease = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      document.documentElement.style.setProperty('--mx', currentX.toFixed(3));
      document.documentElement.style.setProperty('--my', currentY.toFixed(3));
      const moving = Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002;
      frame = moving ? window.requestAnimationFrame(ease) : 0;
    };

    const onPointerMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = (event.clientY / window.innerHeight) * 2 - 1;
      if (!frame) frame = window.requestAnimationFrame(ease);
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <div className="fog fog--far" aria-hidden="true" />
      <div className="fog fog--near" aria-hidden="true" />
      <Header />
      <Routes>
        <Route path="/subslayer" element={<Subslayer />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
