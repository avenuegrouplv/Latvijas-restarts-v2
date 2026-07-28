import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { PROGRAM_DATA, NEWS, BOARD_MEMBERS } from '../data';
import { ModernTitle } from '../components/SharedUI';
import { LatvianPattern } from '../components/VisualElements';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#f8faf7]">
      <div className="absolute inset-0 z-0 text-white">
        <img 
          src="https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Fons3.webp" 
          alt="Latvijas Restarts" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[30%_center] md:object-center opacity-100"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/5 to-transparent z-10" />
      </div>
      <LatvianPattern className="absolute top-0 right-0 w-1/2 h-full z-20 opacity-5 pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-40">
        <div className="max-w-3xl pt-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block text-latvia-red">LATVIJAS</span>
              <div className="flex items-center gap-4">
                <span className="text-zinc-900">RESTARTS</span>
                <div className="flex-grow h-2 bg-latvia-red relative overflow-hidden hidden md:block">
                  <div className="absolute inset-0 flex justify-center py-[1px]">
                    <div className="w-full h-[1px] bg-white opacity-40" />
                  </div>
                </div>
              </div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/kontakti" className="bg-latvia-red text-white border-2 border-latvia-red flex items-center justify-center font-bold text-sm px-5 py-2.5 rounded-full hover:bg-zinc-900 hover:border-zinc-900 transition-all shadow-md font-display uppercase">
                Sazināties ar mums
              </Link>
              <Link to="/programma" className="bg-white border-2 border-latvia-red text-latvia-red flex items-center justify-center text-sm px-5 py-2.5 font-bold hover:bg-latvia-red hover:text-white transition-all shadow-sm rounded-full font-display uppercase">
                Programma
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSummary = () => (
  <section className="pt-16 pb-4 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-[500px] rounded-[3rem] overflow-hidden relative group border-2 border-latvia-red/10 aspect-[16/10] bg-zinc-100 shadow-2xl">
            <img 
              src="https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Par%20biedr%C4%ABbu2.webp" 
              alt="Biedrība - Par mums" 
              width={1600}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-latvia-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
        <div className="relative">
          <ModernTitle 
            title="Par biedrību" 
            subtitle="Mūsu saknes un nākotne" 
          />
          <p className="font-display text-lg text-zinc-600 mb-8 leading-relaxed font-medium">
            Biedrības "Latvijas Restarts" mērķis ir apvienot dažādu jomu profesionāļus sekmīgai krīžu pārvarēšanai un dinamiskai Latvijas attīstībai. Mēs iestājamies par stipru, pašpietiekamu un konkurētspējīgu valsti, kur ekonomiskā izaugsme un efektīva pārvalde nodrošina labklājību.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/par-biedribu" className="inline-flex items-center gap-2 bg-white text-latvia-red border-2 border-latvia-red px-8 py-3 rounded-full font-bold font-display uppercase text-sm hover:bg-latvia-red hover:text-white transition-all shadow-sm">
              UZZINĀT VAIRĀK PAR MUMS <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BoardSummary = () => (
  <section className="pt-8 pb-8 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <ModernTitle 
        title="Mūsu cilvēki" 
        subtitle=""
        centered 
      />
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {BOARD_MEMBERS.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center group w-36 md:w-48">
            <Link to={`/biedri/${member.id}`} className="block w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-full mb-4 overflow-hidden relative border-2 border-latvia-red/10 group-hover:border-latvia-red transition-all">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-200">
                {member.image ? (
                  <img
                    src={member.image} 
                    alt={member.name}
                    width={256}
                    height={256}
                    className={`w-full h-full object-cover ${member.imageClass || ''}`} 
                    loading="lazy" 
                  />
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
  </section>
);

const ProgramSummary = () => (
  <section className="pt-4 pb-16 bg-zinc-100/50">
    <div className="max-w-7xl mx-auto px-6">
      <ModernTitle 
        title="Mūsu programma" 
        subtitle="Rīcības plāns Latvijas nākotnei"
        centered 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {PROGRAM_DATA.map((item) => (
          <div key={item.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-xl transition-all group">
            <div className="mb-6 scale-125 origin-left">{(item as any).icon}</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-latvia-red transition-colors">{item.title}</h3>
            
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-8 flex-grow">{item.description}</p>
            <Link 
              to={`/programma/${item.id}`} 
              className="inline-flex items-center gap-2 text-latvia-red font-bold hover:gap-4 transition-all font-display uppercase text-xs md:text-sm"
            >
              Lasīt vairāk <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/programma" className="inline-flex items-center gap-2 bg-white text-latvia-red border-2 border-latvia-red px-8 py-3 rounded-full font-bold font-display uppercase text-sm hover:bg-latvia-red hover:text-white transition-all">
          Skatīt pilno programmu <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const NewsSummary = () => (
  <section className="pt-4 pb-16 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <ModernTitle 
          title="Aktualitātes" 
          subtitle="Jaunumi un biedrības mērķi"
        />
        <Link to="/aktualitates" className="inline-flex items-center gap-2 bg-white text-latvia-red border-2 border-latvia-red px-8 py-3 rounded-full font-bold font-display uppercase text-sm hover:bg-latvia-red hover:text-white transition-all">
          Visi jaunumi <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {NEWS.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-all max-w-sm mx-auto w-full">
            <div className="h-40 overflow-hidden relative">
              <img
                src={item.image} 
                alt={item.title}
                width={800}
                height={500}
                className={`w-full h-full object-cover ${item.imageClass || ''}`} 
                loading="lazy" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-black text-latvia-red uppercase tracking-wider mb-2">{item.date}</span>
              <h3 className="text-lg font-black mb-3 leading-tight text-zinc-900 line-clamp-2">{item.title}</h3>
              <p className="text-zinc-500 mb-6 text-xs leading-relaxed line-clamp-3">{item.excerpt}</p>
              <Link to={`/aktualitates/${item.id}`} className="mt-auto font-black flex items-center gap-2 text-latvia-red hover:gap-4 transition-all text-[10px] uppercase">Lasīt vairāk <ArrowUpRight className="w-3.5 h-3.5"/></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default function HomePage() {
  useSEO({
    title: "Latvijas Restarts | Par Latvijas nākotni un cilvēku labklājību",
    description: "Biedrība Latvijas Restarts apvieno profesionāļus un ekspertus Latvijas izaugsmei, ekonomikas reformām un valsts pārvaldes uzlabošanai."
  });

  return (
    <>
      <Hero />
      <AboutSummary />
      <BoardSummary />
      <ProgramSummary />
      <NewsSummary />
    </>
  );
}
