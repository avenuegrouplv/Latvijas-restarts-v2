import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Lock, Sliders } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function CookiePolicyPage() {
  useSEO({
    title: "Sīkdatņu politika",
    description: "Biedrības Latvijas Restarts sīkdatņu izmantošanas politika un pārvaldības noteikumi."
  });

  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent-v2');
      if (consent) {
        const parsed = JSON.parse(consent);
        if (parsed && typeof parsed === 'object') {
          if (typeof parsed.analytics === 'boolean') setAnalytics(parsed.analytics);
          if (typeof parsed.functional === 'boolean') setFunctional(parsed.functional);
          if (typeof parsed.marketing === 'boolean') setMarketing(parsed.marketing);
        }
      }
    } catch (e) {}
  }, []);

  const handleSavePreferences = () => {
    try {
      localStorage.setItem('cookie-consent-v2', JSON.stringify({
        necessary: true,
        analytics,
        functional,
        marketing,
        timestamp: new Date().toISOString()
      }));
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    } catch (e) {}
  };

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-xl border border-zinc-100">
          <h1 className="text-2xl sm:text-3xl font-black uppercase mb-4 border-b-4 border-latvia-red pb-4 inline-block">
            Sīkdatņu politika
          </h1>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-12">
            Pēdējo reizi atjaunots: 07.08.2026
          </p>
          
          <div className="space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base">
            {/* 1. Kas ir sīkdatnes? */}
            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">
                1. Kas ir sīkdatnes?
              </h2>
              <p className="mb-4">
                Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.
              </p>
              <p>
                Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.
              </p>
            </div>

            {/* 2. Kāpēc mēs izmantojam sīkdatnes? */}
            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">
                2. Kāpēc mēs izmantojam sīkdatnes?
              </h2>
              <p className="mb-6">
                Biedrība “Latvijas Restarts” izmanto sīkdatnes šādiem mērķiem:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                  <div>
                    <strong className="text-zinc-900">Vietnes funkcionalitātes nodrošināšanai:</strong>
                    <p>Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                  <div>
                    <strong className="text-zinc-900">Lietošanas pieredzes uzlabošanai:</strong>
                    <p>Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                  <div>
                    <strong className="text-zinc-900">Analītikai un statistikai:</strong>
                    <p>Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 3. Sīkdatņu kategorijas un to pielāgošana */}
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h2 className="font-black text-zinc-900 uppercase text-xl">
                  3. Sīkdatņu kategorijas un to pielāgošana
                </h2>
              </div>
              <p className="mb-6 text-zinc-600 text-sm">
                Jūs varat pielāgot savas sīkdatņu preferences tieši šeit:
              </p>

              <div className="space-y-6">
                {/* Nepieciešamās */}
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-zinc-500" />
                      <h3 className="font-black text-zinc-900 uppercase text-sm">
                        Nepieciešamās sīkdatnes (Obligātas)
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-full shrink-0">
                      <Check className="w-3.5 h-3.5 text-zinc-600" />
                      Vienmēr aktīvas
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600">
                    Šīs sīkdatnes ir nepieciešamas vietnes pamata funkcijām, drošībai un nepārtrauktai darbībai (piemēram, sesijas uzturēšanai, navigācijai un kontaktformu apstrādei). Bez tām vietne nevar pareizi darboties.
                  </p>
                </div>

                {/* Analītiskās */}
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-black text-zinc-900 uppercase text-sm">
                      Analītiskās & Statistiskās sīkdatnes
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input 
                        type="checkbox" 
                        checked={analytics} 
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-sm text-zinc-600">
                    Izmanto trešo pušu analītikas rīkus (piemēram, Google Analytics), lai apkopotu anonīmu statistiku par apmeklētāju skaitu, populārākajām lapām un uzturēšanās ilgumu. Tas palīdz uzlabot vietnes struktūru un saturu.
                  </p>
                </div>

                {/* Funkcionālās */}
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-black text-zinc-900 uppercase text-sm">
                      Funkcionālās sīkdatnes
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input 
                        type="checkbox" 
                        checked={functional} 
                        onChange={(e) => setFunctional(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-sm text-zinc-600">
                    Ļauj vietnei atcerēties Jūsu veiktās izvēles (piemēram, valodas iestatījumus, fontu izmēru un reģionu), nodrošinot ērtāku un personalizētāku lietošanu.
                  </p>
                </div>

                {/* Mārketinga */}
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-black text-zinc-900 uppercase text-sm">
                      Mārketinga & Reklāmas sīkdatnes
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input 
                        type="checkbox" 
                        checked={marketing} 
                        onChange={(e) => setMarketing(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-latvia-red"></div>
                    </label>
                  </div>
                  <p className="text-sm text-zinc-600">
                    Izmanto, lai rādītu Jūsu interesēm atbilstošākus paziņojumus un piedāvājumus sociālajos tīklos vai sadarbības partneru vietnēs.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button 
                    onClick={handleSavePreferences}
                    className="py-3 px-6 bg-latvia-red text-white font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-zinc-900 transition-all cursor-pointer shadow-md"
                  >
                    Saglabāt izvēli
                  </button>
                  {savedMessage && (
                    <span className="text-green-600 text-xs font-bold animate-fade-in flex items-center gap-1">
                      <Check className="w-4 h-4" /> Iestatījumi saglabāti!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 4. Kā pārvaldīt un izdzēst sīkdatnes? */}
            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">
                4. Kā pārvaldīt un izdzēst sīkdatnes?
              </h2>
              <p className="mb-8">
                Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.
              </p>
              
              <p className="font-bold mb-6">Instrukcijas populārākajām pārlūkprogrammām:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                  <span className="font-black uppercase text-xs tracking-wider">Google Chrome</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
                </a>
                <a href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                  <span className="font-black uppercase text-xs tracking-wider">Safari</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
                </a>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                  <span className="font-black uppercase text-xs tracking-wider">Mozilla Firefox</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
                </a>
                <a href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                  <span className="font-black uppercase text-xs tracking-wider">MS Edge</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-12 border-t-2 border-zinc-50">
              <p className="italic text-zinc-500 mb-6">
                Ievērojiet: Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmekļa vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.
              </p>
              <div className="bg-latvia-red/5 p-8 rounded-[2rem] border border-latvia-red/10">
                <p className="font-bold text-zinc-900 mb-2">Jautājumu gadījumā:</p>
                <p>
                  Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red font-black hover:underline">info@latvijasrestarts.lv</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 pt-12 border-t border-zinc-100">
            <Link to="/" className="bg-latvia-red text-white px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-zinc-900 transition-all shadow-xl font-display tracking-widest">
              Aizvērt
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
