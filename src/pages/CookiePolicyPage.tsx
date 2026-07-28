import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function CookiePolicyPage() {
  useSEO({
    title: "Sīkdatņu politika",
    description: "Biedrības Latvijas Restarts sīkdatņu izmantošanas politika un pārvaldības noteikumi."
  });

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-zinc-100">
          <h1 className="text-3xl font-black uppercase mb-4 border-b-4 border-latvia-red pb-4 inline-block">Sīkdatņu politika</h1>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-12">Pēdējo reizi atjaunots: 28.04.2026</p>
          
          <div className="space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">1. Kas ir sīkdatnes?</h2>
              <p className="mb-4">Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.</p>
              <p>Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">2. Kāpēc mēs izmantojam sīkdatnes?</h2>
              <p className="mb-6">Biedrība “Latvijas Restarts” izmanto sīkdatnes šādiem mērķiem:</p>
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

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">3. Izmantoto sīkdatņu veidi</h2>
              <div className="space-y-6">
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <h3 className="font-black text-zinc-900 uppercase mb-2 text-sm">Nepieciešamās sīkdatnes</h3>
                  <p className="text-sm">Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.</p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <h3 className="font-black text-zinc-900 uppercase mb-2 text-sm">Analītikas sīkdatnes</h3>
                  <p className="text-sm">Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu informāciju par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">4. Kā pārvaldīt un izdzēst sīkdatnes?</h2>
              <p className="mb-8">Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.</p>
              
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
              <p className="italic text-zinc-500 mb-6">Ievērojiet: Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmeklja vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.</p>
              <div className="bg-latvia-red/5 p-8 rounded-[2rem] border border-latvia-red/10">
                <p className="font-bold text-zinc-900 mb-2">Jautājumu gadījumā:</p>
                <p>Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red font-black hover:underline">info@latvijasrestarts.lv</a></p>
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
