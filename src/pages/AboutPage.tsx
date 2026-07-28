import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, FileText, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BOARD_MEMBERS } from '../data';
import { ModernTitle, SectionBottomNav } from '../components/SharedUI';

export default function AboutPage() {
  useSEO({
    title: "Par biedrību",
    description: "Uzziniet vairāk par biedrību Latvijas Restarts, mūsu mērķiem, vērtībām un rīcības komandu."
  });

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <ModernTitle 
          title="Par biedrību" 
          subtitle="Mūsu mērķi un vērtības"
        />
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div className="prose prose-lg prose-zinc max-w-none text-zinc-600 order-2 lg:order-1">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-zinc-800 mb-8 italic border-l-8 border-latvia-red pl-8">
              Biedrības "Latvijas Restarts" mērķis ir apvienot dažādu jomu ekspertus sekmīgai krīžu pārvarēšanai un dinamiskai Latvijas attīstībai.
            </p>
            <p className="text-lg">
              Mēs iestājamies un vēlamies radīt stipru, pašpietiekamu un konkurētspējīgu Latviju, kur ekonomiskā izaugsme, ģimeņu atbalsts, vesela sabiedrība un efektīva valsts pārvalde nodrošina drošību, labklājību un nākotnes attīstību.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-zinc-100 bg-zinc-200 mb-6">
              <img 
                src="https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Par%20biedr%C4%ABbu2.webp" 
                alt="Biedrība - Par mums" 
                className="w-full h-full object-cover hover:scale-[1.025] transition-transform duration-[3000ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="flex justify-center">
              <Link to="/statuti" className="bg-white border-2 border-latvia-red text-latvia-red px-8 py-3 rounded-full font-black uppercase text-sm hover:bg-latvia-red hover:text-white transition-all shadow-md flex items-center gap-2">
                Lasīt statūtus <FileText className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-sm font-black uppercase text-zinc-400 mb-10 tracking-widest flex items-center gap-3">
            <span className="w-8 h-1 bg-latvia-red"></span> Mūsu cilvēki
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {BOARD_MEMBERS.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group w-36 md:w-48">
                <Link to={`/biedri/${member.id}`} className="block w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-full mb-4 overflow-hidden relative border-2 border-latvia-red/10 group-hover:border-latvia-red transition-all">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-200">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} loading="lazy" />
                    ) : (
                      <Users className="w-10 h-10 md:w-12 md:h-12" />
                    )}
                  </div>
                </Link>
                <h3 className="text-xs md:text-sm font-black uppercase mb-1 leading-tight">{member.name}</h3>
                <p className="text-[9px] md:text-[10px] text-latvia-red font-bold uppercase tracking-tighter">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 mb-16">
          <div className="bg-zinc-100 rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-3 text-latvia-red leading-tight">Kas var kļūt par Biedrības biedru?</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Biedrībā var iestāties jebkura rīcībspējīga fiziska un juridiska persona, iesniedzot noteiktas formas rakstisku pieteikumu. Pieteikuma formu un tam klāt pievienojamo dokumentu sarakstu nosaka Biedrības valde.
            </p>
          </div>

          <div className="bg-zinc-100 rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-4 text-latvia-red leading-tight">Mūsu biedru tiesības</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Piedalīties Biedrības pārvaldē",
                "Saņemt informāciju par Biedrības darbību",
                "Iepazīties ar protokoliem, lēmumiem un rīkojumiem",
                "Piedalīties visos organizētajos pasākumos",
                "Iesniegt priekšlikumus darbības uzlabošanai",
                "Aizstāvēt savu viedokli"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-700 font-bold text-[11px] uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-latvia-red flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-100 rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-3 text-latvia-red leading-tight">Kas var kļūt par asociēto biedru?</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Par Biedrības asociēto biedru var kļūt jebkura rīcībspējīga fiziska persona, kura ir ieinteresēta Biedrības mērķu sasniegšanā un atbalsta Biedrības darbību, iesniedzot noteiktas formas rakstisku pieteikumu.
            </p>
          </div>

          <div className="bg-zinc-100 rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-4 text-latvia-red leading-tight">Mūsu asociēto biedru tiesības</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Piedalīties visos organizētajos pasākumos",
                "Iesniegt priekšlikumus un aizstāvēt viedokli",
                "Saņemt informāciju par Biedrības darbību",
                "Iepazīties ar protokoliem, lēmumiem un rīkojumiem",
                "Asociētajam biedram nav balsstiesības"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-700 font-bold text-[11px] uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-latvia-red flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-100 rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-3 text-latvia-red leading-tight">Kā kļūt par Biedrības biedru vai asociēto biedru?</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Jāiesniedz noteiktas formas rakstisks pieteikums. Lēmumu par biedra uzņemšanu pieņem valde tuvākās sēdes laikā, ne ilgāk kā divu nedēļu laikā no visu nepieciešamo dokumentu saņemšanas brīža.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-24 justify-center">
          <Link to="/iesniegums" className="bg-latvia-red text-white px-8 py-3 rounded-full font-black uppercase text-sm hover:shadow-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-2">
            Aizpildīt iesniegumu <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
}
