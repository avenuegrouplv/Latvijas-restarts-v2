import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function PrivacyPolicyPage() {
  useSEO({
    title: "Privātuma politika",
    description: "Biedrības Latvijas Restarts privātuma politika un personas datu aizsardzības noteikumi."
  });

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-zinc-100">
          <h1 className="text-3xl font-black uppercase mb-4 border-b-4 border-latvia-red pb-4 inline-block">Privātuma politika</h1>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-12">Pēdējo reizi atjaunots: 28.04.2026</p>
          
          <div className="space-y-10 text-zinc-700 leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">1. Ievads</h2>
              <p className="mb-4">Biedrība “Latvijas Restarts” (turpmāk – "mēs", "mūsu" vai "biedrība") apņemas aizsargāt un respektēt Jūsu privātumu. Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam, uzglabājam un aizsargājam Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (GDPR) un Latvijas Republikas tiesību aktiem.</p>
              <p>Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">2. Datu pārzinis</h2>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <p className="font-bold text-zinc-900 mb-1">Nosaukums: Biedrība "Latvijas Restarts"</p>
                <p className="mb-1">Reģistrācijas numurs: 40008317099</p>
                <p className="font-bold mt-4 mb-1">Kontakti:</p>
                <p className="mb-1">Juridiskā adrese: Rīga, Ogļu iela 12A, LV-1048</p>
                <p className="mb-1">E-pasts: <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red hover:underline">info@latvijasrestarts.lv</a></p>
                <p className="mb-1">Tālrunis: +371 6700 0000</p>
              </div>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">3. Kādus personas datus mēs vācam</h2>
              <p className="mb-4">Mēs varam apkopot un apstrādāt šādu informāciju par Jums:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontaktinformācija:</strong> vārds, uzņēmuma nosaukums, e-pasta adrese, tālruņa numurs</li>
                <li><strong>Tehniskā informācija:</strong> IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums</li>
                <li><strong>Lietošanas dati:</strong> informācija par to, kā Jūs izmantojat mūsu mājas lapu un pakalpojumus</li>
                <li><strong>Saziņas dati:</strong> Jūsu ziņojumu un komunikācijas saturs ar mūsu uzņēmumu</li>
              </ul>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">4. Kā mēs izmantojam Jūsu datus</h2>
              <p className="mb-4">Mēs izmantojam Jūsu personas datus šādiem mērķiem:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lai sniegtu Jums pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem</li>
                <li>Lai sazinātos ar Jums par mūsu pakalpojumiem un piedāvājumiem</li>
                <li>Lai uzlabotu mūsu mājas lapu un pakalpojumu kvalitāti</li>
                <li>Lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses</li>
              </ul>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">5. Juridiskais pamats datu apstrādei</h2>
              <p className="mb-4">Mēs apstrādājam Jūsu personas datus, pamatojoties uz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Jūsu piekrišanu</strong> – kad Jūs aizpildāt mūsu kontaktformu un piekrītat datu apstrādes noteikumiem</li>
                <li><strong>Līguma izpildi</strong> – lai sniegtu Jums pieprasītos pakalpojumus</li>
                <li><strong>Likumīgas intereses</strong> – lai uzlabotu mūsu pakalpojumus un aizsargātu uzņēmumu</li>
              </ul>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">6. Datu uzglabāšana un drošība</h2>
              <p className="mb-4">Mēs uzglabājam Jūsu personas datus tikai tik ilgi, cik tas ir nepieciešams šajā politikā norādīto mērķu sasniegšanai vai saskaņā ar likumu.</p>
              <p className="mb-4">Mēs izmantojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu Jūsu datus pret nesankcionētu piekļuvi, izmantošanu vai izpaušanu:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL šifrēšana datu pārsūtīšanai</li>
                <li>Ierobežota piekļuve personas datiem</li>
                <li>Regulāras drošības pārbaudes un atjauninājumi</li>
              </ul>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">7. Jūsu tiesības</h2>
              <p className="mb-4">Saskaņā ar GDPR Jums ir šādas tiesības attiecībā uz Saviem personas datiem:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Piekļuves tiesības</strong> – pieprasīt piekļuvi Saviem personas datiem</li>
                <li><strong>Labošanas tiesības</strong> – labot neprecīzus vai nepilnīgus datus</li>
                <li><strong>Dzēšanas tiesības</strong> – pieprasīt Savu datu dzēšanu (&quot;tiesības tikt aizmirstam&quot;)</li>
                <li><strong>Ierobežošanas tiesības</strong> – ierobežot Savu datu apstrādi</li>
                <li><strong>Pārnesamības tiesības</strong> – saņemt Savus datus strukturētā formātā</li>
                <li><strong>Iebildumu tiesības</strong> – iebilst pret Savu datu apstrādi</li>
                <li><strong>Atsaukt piekrišanu</strong> – jebkurā laikā atsaukt Savu piekrišanu datu apstrādei</li>
              </ul>
              <p className="text-sm">Lai izmantotu Savas tiesības, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta šīs politikas sākumā.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">8. Sīkdatnes (Cookies)</h2>
              <p className="mb-4">Mūsu mājas lapa izmanto sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi un analizētu mājas lapas apmeklējumu. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē.</p>
              <p>Mēs izmantojam nepieciešamās sīkdatnes (nodrošina pamata funkcionalitāti) un analītikas sīkdatnes (palīdz saprast, kā apmeklētāji izmanto lapu). Jūs varat pārvaldīt sīkdatnes Savā pārlūkprogrammā.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">9. Trešo pušu pakalpojumi</h2>
              <p>Mēs varam izmantot uzticamus trešo pušu pakalpojumu sniedzējus, piemēram, mājas lapas mitināšanas pakalpojumus, e-pasta sūtīšanas pakalpojumus un analītikas rīkus (Google Analytics). Šie sniedzēji piekļūst datiem tikai tiktāl, cik tas nepieciešams to uzdevumu veikšanai.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">10. Izmaiņas privātuma politikā</h2>
              <p>Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stāsies spēkā, tiklīdz atjauninātā politika tiks publicēta mūsu mājas lapā.</p>
            </div>

            <div>
              <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">11. Sūdzības</h2>
              <p className="mb-4">Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā:</p>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 text-xs md:text-sm">
                <p className="font-bold mb-1">Datu valsts inspekcija</p>
                <p className="mb-1">Adrese: Blaumaņa iela 11/13-15, Rīga, LV-1011</p>
                <p className="mb-1">E-pasts: info@dvi.gov.lv</p>
                <p className="mb-1">Tālrunis: +371 67 22 31 31</p>
                <p>Mājas lapa: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-latvia-red hover:underline">www.dvi.gov.lv</a></p>
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
