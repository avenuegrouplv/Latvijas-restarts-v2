import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, X, Facebook, Instagram, CheckCircle2, 
  ExternalLink, ShieldCheck, Loader2, ArrowUp, Home,
  Sliders, Check, Lock
} from 'lucide-react';
import { NAV_ITEMS, NEWS } from '../data';
import { RegistrationFormData } from '../types';
import { LatvianPattern } from './VisualElements';

export const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export const ModernTitle = ({ title, subtitle, centered = false, dark = false }: { title: string; subtitle?: string; centered?: boolean; dark?: boolean }) => (
  <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
    <div className={`relative inline-flex flex-col ${centered ? 'items-center' : 'items-start'}`}>
      <h2 className={`font-display text-2xl md:text-4xl font-bold leading-tight mb-2 ${dark ? 'text-white' : 'text-latvia-red'}`}>
        {title}
      </h2>
      <div className="flex w-24 h-1 overflow-hidden rounded-full">
        <div className="flex-grow bg-latvia-red" />
        <div className="w-1/4 bg-white" />
        <div className="flex-grow bg-latvia-red" />
      </div>
    </div>
    {subtitle && (
      <p className={`mt-4 font-display text-xs md:text-sm font-semibold uppercase ${dark ? 'text-white/60' : 'text-zinc-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const Logo = ({ className = "h-[53px]", isDark = false }: { className?: string, isDark?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative h-[85%] aspect-square flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img 
          src="https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta2.webp" 
          alt="Latvijas Restarts" 
          width="512"
          height="512"
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="flex flex-col justify-center space-y-0.5">
        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} font-black text-sm md:text-base tracking-tight leading-none uppercase font-display`}>Latvijas</span>
        <span className="text-latvia-red font-black text-sm md:text-base tracking-tight leading-none uppercase font-display">Restarts</span>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-zinc-50 shadow-xl border-b-2 border-latvia-red/20 py-1' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <Logo className={`${scrolled ? 'h-10 md:h-20' : 'h-14 md:h-32'} transition-all duration-300 ${scrolled ? '' : 'drop-shadow-lg'}`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.href} 
              className={({ isActive }) => `font-display text-sm font-bold uppercase transition-colors hover:text-latvia-red ${isActive ? 'text-latvia-red' : (scrolled ? 'text-zinc-900' : 'text-zinc-700 drop-shadow-sm')}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/kontakti" className="bg-latvia-red text-white border-2 border-latvia-red px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-900 hover:border-zinc-900 transition-all font-display uppercase">
            Sazināties
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-zinc-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold uppercase ${location.pathname === item.href ? 'text-latvia-red' : 'text-zinc-900'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/kontakti" className="bg-latvia-red text-white w-full py-4 rounded-full font-bold text-center border-2 border-latvia-red">
              Sazināties
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);
  
  return (
    <>
      <footer className="bg-zinc-900 text-white pt-20 pb-12 overflow-hidden relative">
        <LatvianPattern className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 flex flex-col justify-start">
              <Link to="/" className="inline-block mb-6 group w-fit">
                <Logo className="h-16 md:h-[120px] transition-transform group-hover:scale-105" isDark={true} />
              </Link>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-6">
                Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/andris.kulbergs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/andriskulbergs?s=11&t=Y_-qbzD0uVknm-rkHOPh8A" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold uppercase text-red-500 mb-6 text-xs tracking-wider">Navigācija</h3>
              <ul className="space-y-2 text-zinc-300">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}><Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase text-red-500 mb-6 text-xs tracking-wider">Kontakti</h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li className="text-white mb-2 font-bold select-none">Biedrība "Latvijas Restarts"</li>
                <li>Reģ. Nr. 40008317099</li>
                <li>Rīga, Ogļu iela 12A, LV-1048</li>
                <li>info@latvijasrestarts.lv</li>
                <li>+371 6700 0000</li>
                <li className="pt-2 font-bold text-white/90">Bankas rekvizīti:</li>
                <li>AS "Swedbank"</li>
                <li>LV44HABA0001234567890</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
            <div className="flex items-center gap-4 text-center md:text-left">
              <p className="w-full">2026 © Biedrība “Latvijas restarts” | Visas tiesības aizsargātas</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <Link to="/privatuma-politika" className="hover:text-white transition-colors">Privātuma politika</Link>
              <Link to="/sikdatnu-politika" className="hover:text-white transition-colors">Sīkdatņu politika</Link>
            </div>
          </div>
        </div>
      </footer>
      <CookiesModal isOpen={isCookiesModalOpen} onClose={() => setIsCookiesModalOpen(false)} />
    </>
  );
};

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-latvia-red selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-latvia-red z-[110] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export const CookiesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
                id="cookies-modal-close"
                aria-label="Aizvērt"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-black mb-2 uppercase text-latvia-red">Sīkdatņu politika</h3>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-8">Pēdējo reizi atjaunots: 28.04.2026</p>

              <div className="space-y-8 text-zinc-600 leading-relaxed text-sm text-justify">
                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">1. Kas ir sīkdatnes?</h4>
                  <p>
                    Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.
                  </p>
                  <p className="mt-2 text-zinc-500">
                    Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.
                  </p>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">2. Kāpēc mēs izmantojam sīkdatnes?</h4>
                  <p>Biedrība “Latvijas Restarts” izmanto sīkdatnes šādiem mērķiem:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Vietnes funkcionalitātes nodrošināšanai:</strong> Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.</li>
                    <li><strong>Lietošanas pieredzes uzlabošanai:</strong> Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.</li>
                    <li><strong>Analītikai un statistikai:</strong> Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">3. Izmantoto sīkdatņu veidi</h4>
                  <div className="space-y-4">
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                      <h5 className="font-black text-zinc-800 uppercase text-xs mb-1">Nepieciešamās sīkdatnes</h5>
                      <p className="text-xs">Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                      <h5 className="font-black text-zinc-800 uppercase text-xs mb-1">Analītikas sīkdatnes</h5>
                      <p className="text-xs">Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu informāciju par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">4. Kā pārvaldīt un izdzēst sīkdatnes?</h4>
                  <p>Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.</p>
                  <p className="mt-6 mb-4 font-black uppercase text-xs text-zinc-400 tracking-widest">Instrukcijas populārākajām pārlūkprogrammām:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Google Chrome</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Safari</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Mozilla Firefox</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">MS Edge</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                  </div>
                </section>

                <div className="p-6 bg-latvia-red/5 rounded-2xl border border-latvia-red/10 text-center sm:text-left">
                  <p className="text-zinc-800 font-bold mb-2">Ievērojiet!</p>
                  <p className="text-xs">Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmekļa vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.</p>
                  <p className="mt-4 text-zinc-600 text-xs italic">
                    Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: <br className="sm:hidden" />
                    <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red font-black not-italic hover:underline ml-1">info@latvijasrestarts.lv</a>
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center pb-4">
                <button 
                  onClick={onClose}
                  className="bg-latvia-red text-white px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-zinc-900 transition-all shadow-xl font-display tracking-widest"
                >
                  Aizvērt
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const RegistrationModal = ({ 
  isOpen, 
  onClose, 
  initialEventId 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialEventId: string;
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    notes: '',
    gdpr: false,
    eventId: initialEventId
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, eventId: initialEventId }));
      setStatus('idle');
      setErrors({});
    }
  }, [isOpen, initialEventId]);

  const validate = () => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!formData.name) newErrors.name = 'Vārds nav norādīts';
    if (!formData.email) {
      newErrors.email = 'E-pasts nav norādīts';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nepareizs e-pasta formāts';
    }
    if (!formData.phone) newErrors.phone = 'Telefons nav norādīts';
    if (!formData.gdpr) newErrors.gdpr = 'Jums jāpiekrīt datu apstrādei';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (formData.email.includes('error')) throw new Error('Simulation error');
      
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClasses = "w-full p-4 bg-zinc-100 rounded-xl border-2 border-transparent focus:border-latvia-red focus:bg-white transition-all outline-none text-zinc-900";
  const labelClasses = "block text-sm font-bold font-display uppercase mb-2 text-zinc-500";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Aizvērt"
              >
                <X className="w-6 h-6" />
              </button>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase">Paldies!</h3>
                  <p className="text-zinc-600 text-lg mb-8">
                    Jūsu pieteikums ir veiksmīgi saņemts!<br />Uz tikšanos pasākumā.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-zinc-900 text-white border-2 border-latvia-red px-10 py-4 rounded-full font-bold hover:bg-latvia-red hover:text-white transition-all font-display uppercase"
                  >
                    Aizvērt
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black mb-2 uppercase">Pieteikties pasākumam</h3>
                  <p className="text-zinc-500 mb-8">Lūdzu, aizpildiet formu, lai rezervētu savu dalību.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={labelClasses}>Izvēlēties pasākumu</label>
                      <select 
                        className={inputClasses}
                        value={formData.eventId}
                        onChange={e => setFormData(prev => ({ ...prev, eventId: e.target.value }))}
                      >
                        {NEWS.map(item => (
                          <option key={item.id} value={item.id}>{item.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Vārds, uzvārds</label>
                        <input 
                          type="text" 
                          className={`${inputClasses} ${errors.name ? 'border-latvia-red' : ''}`}
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.name}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>E-pasta adrese</label>
                        <input 
                          type="email" 
                          className={`${inputClasses} ${errors.email ? 'border-latvia-red' : ''}`}
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Telefona numurs</label>
                        <input 
                          type="tel" 
                          className={`${inputClasses} ${errors.phone ? 'border-latvia-red' : ''}`}
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.phone}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>Organizācija (neobligāti)</label>
                        <input 
                          type="text" 
                          className={inputClasses}
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Piezīmes / Jautājumi (neobligāti)</label>
                      <textarea 
                        rows={3}
                        className={inputClasses}
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="gdpr"
                        className="mt-1 w-5 h-5 flex-shrink-0 cursor-pointer accent-latvia-red"
                        checked={formData.gdpr}
                        onChange={e => setFormData({ ...formData, gdpr: e.target.checked })}
                      />
                      <label htmlFor="gdpr" className="text-sm text-zinc-500 cursor-pointer">
                        Piekrītu savu personas datu apstrādei saskaņā ar biedrības privātuma politiku un šī pasākuma organizēšanas vajadzībām (GDPR).
                        {errors.gdpr && <span className="block text-latvia-red font-bold uppercase text-[10px] mt-1">{errors.gdpr}</span>}
                      </label>
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-latvia-red/10 border-2 border-latvia-red text-latvia-red rounded-xl font-bold text-center">
                        Radās kļūda. Lūdzu mēģiniet vēlreiz.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-latvia-red text-white border-2 border-latvia-red font-bold text-xl rounded-2xl hover:bg-zinc-900 hover:border-zinc-900 transition-all flex items-center justify-center gap-3 disabled:opacity-70 font-display uppercase"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" /> APSTRĀDĀ...
                        </>
                      ) : (
                        'PIETEIKTIES PASĀKUMAM'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const EventCard = ({ 
  title, 
  date, 
  location, 
  time, 
  onRegister 
}: { 
  title: string; 
  date: string; 
  location: string; 
  time: string; 
  onRegister?: () => void;
}) => (
  <div className="bg-latvia-red text-white p-10 rounded-3xl mt-16 shadow-xl relative overflow-hidden">
    <LatvianPattern className="absolute inset-0 opacity-10 pointer-events-none" />
    <h3 className="text-2xl font-black mb-6 relative z-10 uppercase">{title}</h3>
    <p className="text-lg mb-8 relative z-10 font-medium">
      Biedrība "Latvijas Restarts" aicina Jūs uz paplašinātu forumu ar nozares ekspertiem, kurā prezentēsim mūsu redzējumu un uzklausīsim Jūsu ieteikumus.
    </p>
    <div className="flex flex-col gap-2 relative z-10">
      <span className="font-bold text-xl">Datums: {date}</span>
      <span className="font-bold text-xl">Vieta: {location}</span>
      <span className="font-bold text-xl">Laiks: {time}</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <button 
        onClick={onRegister}
        className="mt-10 bg-white text-latvia-red border-2 border-latvia-red px-10 py-4 rounded-full font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all relative z-10 uppercase font-display"
      >
        REĢISTRĒTIES PASĀKUMAM
      </button>
      <p className="mt-4 text-sm font-bold text-white/70 uppercase relative z-10 italic">
        * Vietu skaits ir ierobežots
      </p>
    </div>
  </div>
);

export const SectionBottomNav = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-16 border-t border-zinc-200 mt-16">
      <button 
        onClick={scrollToTop}
        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-50 text-zinc-600 border border-zinc-200 rounded-full text-xs font-black uppercase tracking-widest hover:bg-latvia-red hover:text-white hover:border-latvia-red transition-all cursor-pointer shadow-sm active:scale-95"
      >
        <ArrowUp className="w-4 h-4" />
        Uz augšu
      </button>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-50 text-zinc-600 border border-zinc-200 rounded-full text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-sm active:scale-95"
      >
        <Home className="w-4 h-4" />
        Uz sākumu
      </Link>
    </div>
  );
};

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);

  // Cookie preference states
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      // Clear legacy storage keys if present so fresh consent banner can pop up
      localStorage.removeItem('cookie-consent-v3');
      localStorage.removeItem('cookie-consent-v2');
      localStorage.removeItem('cookie-consent');
      
      consent = localStorage.getItem('cookie-consent-v4');
      if (consent) {
        const parsed = JSON.parse(consent);
        if (parsed && typeof parsed === 'object') {
          if (typeof parsed.analytics === 'boolean') setAnalytics(parsed.analytics);
          if (typeof parsed.functional === 'boolean') setFunctional(parsed.functional);
          if (typeof parsed.marketing === 'boolean') setMarketing(parsed.marketing);
        }
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    
    if (!consent) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }

    const handleOpen = () => {
      setIsVisible(true);
      setShowCustomizeModal(false);
    };

    window.addEventListener('open-cookie-banner', handleOpen);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('open-cookie-banner', handleOpen);
    };
  }, []);

  const savePreferences = (prefs: { necessary: boolean; analytics: boolean; functional: boolean; marketing: boolean }) => {
    try {
      localStorage.setItem('cookie-consent-v4', JSON.stringify({
        ...prefs,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {}
    setIsVisible(false);
    setShowCustomizeModal(false);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setFunctional(true);
    setMarketing(true);
    savePreferences({ necessary: true, analytics: true, functional: true, marketing: true });
  };

  const handleDeclineAll = () => {
    setAnalytics(false);
    setFunctional(false);
    setMarketing(false);
    savePreferences({ necessary: true, analytics: false, functional: false, marketing: false });
  };

  const handleSaveCustom = () => {
    savePreferences({ necessary: true, analytics, functional, marketing });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showCustomizeModal && (
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-white border-t border-zinc-200/90 shadow-[0_-10px_35px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-latvia-red" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 relative">
              <div className="flex items-start gap-3.5 flex-1 pr-6 md:pr-0">
                <div className="w-9 h-9 bg-latvia-red/10 rounded-xl flex items-center justify-center text-latvia-red shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black uppercase text-xs sm:text-sm tracking-tight text-zinc-900 mb-1">
                    Šī vietne izmanto sīkdatnes
                  </h3>
                  <p className="text-zinc-600 text-[11px] sm:text-xs md:text-sm leading-relaxed font-medium">
                    Mēs izmantojam sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi, nodrošinātu vietnes darbību un analizētu apmeklētāju plūsmu. Jūs varat piekrist visām sīkdatnēm vai pielāgot savas izvēles. Vairāk informācijas mūsu <Link to="/privatuma-politika" className="text-latvia-red underline font-bold hover:text-zinc-900 transition-colors">Privātuma politikā</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 w-full md:w-auto shrink-0 justify-end flex-wrap sm:flex-nowrap">
                <button 
                  onClick={handleAcceptAll}
                  className="py-2.5 px-4 sm:px-5 bg-latvia-red text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-zinc-900 transition-all shadow-sm active:scale-[0.98] font-display flex-1 md:flex-none text-center cursor-pointer whitespace-nowrap"
                >
                  Piekrītu visām
                </button>
                <button 
                  onClick={() => setShowCustomizeModal(true)}
                  className="py-2.5 px-4 sm:px-5 bg-zinc-800 text-white hover:bg-zinc-900 text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-[0.98] font-display flex-1 md:flex-none text-center cursor-pointer whitespace-nowrap"
                >
                  Pielāgot
                </button>
                <button 
                  onClick={handleDeclineAll}
                  className="py-2.5 px-4 sm:px-5 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-[0.98] font-display flex-1 md:flex-none text-center cursor-pointer whitespace-nowrap"
                >
                  Noraidīt
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Customize Preferences Modal */}
      <AnimatePresence>
        {isVisible && showCustomizeModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-zinc-200 overflow-hidden relative my-auto max-h-[90vh] flex flex-col"
            >
              <div className="p-6 sm:p-8 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-latvia-red" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-latvia-red/20 text-latvia-red rounded-xl flex items-center justify-center shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black uppercase text-base sm:text-lg tracking-tight">
                      Sīkdatņu iestatījumu pielāgošana
                    </h3>
                    <p className="text-zinc-400 text-xs">
                      Pārvaldiet savas sīkdatņu preferences katrai kategorijai
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCustomizeModal(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-zinc-800 text-sm">
                {/* 1. Necessary */}
                <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-zinc-500" />
                      <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                        Nepieciešamās sīkdatnes (Obligātas)
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-full">
                      <Check className="w-3.5 h-3.5 text-zinc-600" />
                      Vienmēr aktīvas
                    </span>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Šīs sīkdatnes ir nepieciešamas vietnes pamata funkcijām, drošībai un nepārtrauktai darbībai (piemēram, sesijas uzturēšanai, navigācijai un kontaktformu apstrādei). Bez tām vietne nevar pareizi darboties.
                  </p>
                </div>

                {/* 2. Analytics */}
                <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      Analītiskās & Statistiskās sīkdatnes
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={analytics} 
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Izmanto trešo pušu analītikas rīkus (piemēram, Google Analytics), lai apkopotu anonīmu statistiku par apmeklētāju skaitu, populārākajām lapām un uzturēšanās ilgumu. Tas palīdz uzlabot vietnes struktūru un saturu.
                  </p>
                </div>

                {/* 3. Functional */}
                <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      Funkcionālās sīkdatnes
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={functional} 
                        onChange={(e) => setFunctional(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Ļauj vietnei atcerēties Jūsu veiktās izvēles (piemēram, valodas iestatījumus, fontu izmēru un reģionu), nodrošinot ērtāku un personalizētāku lietošanu.
                  </p>
                </div>

                {/* 4. Marketing */}
                <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      Mārketinga & Reklāmas sīkdatnes
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={marketing} 
                        onChange={(e) => setMarketing(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Izmanto, lai rādītu Jūsu interesēm atbilstošākus paziņojumus un piedāvājumus sociālajos tīklos vai sadarbības partneru vietnēs.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-zinc-100 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button 
                  onClick={handleDeclineAll}
                  className="w-full sm:w-auto py-2.5 px-5 bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-all font-display text-center cursor-pointer"
                >
                  Noraidīt
                </button>
                <button 
                  onClick={handleSaveCustom}
                  className="w-full sm:w-auto py-2.5 px-5 bg-zinc-900 text-white hover:bg-black text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-sm font-display text-center cursor-pointer"
                >
                  Saglabāt izvēli
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto py-2.5 px-5 bg-latvia-red text-white hover:bg-zinc-900 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md font-display text-center cursor-pointer"
                >
                  Piekrītu visām
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
