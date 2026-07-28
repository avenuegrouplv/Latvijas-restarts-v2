import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { PROGRAM_DATA } from '../data';
import { ModernTitle, SectionBottomNav } from '../components/SharedUI';
import { LatvianPattern } from '../components/VisualElements';

export default function ProgramPage() {
  useSEO({
    title: "Mūsu Programma",
    description: "Iepazīstieties ar Latvijas Restarts rīcības plānu ekonomikas, valsts pārvaldes, nodokļu reformām un valsts drošībai."
  });

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-zinc-50 min-h-screen relative overflow-hidden">
      <LatvianPattern className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ModernTitle 
          title="Mūsu Programma" 
          subtitle="Rīcība rezultātam"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {PROGRAM_DATA.map((item) => (
            <div key={item.id} className="bg-white border-2 border-latvia-red/10 rounded-2xl overflow-hidden shadow-sm hover:border-latvia-red transition-all group flex flex-col h-full relative">
              <div className="aspect-video overflow-hidden relative bg-zinc-100">
                <img 
                  src={item.image.replace(/w=\d+/, 'w=600')} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-display text-lg md:text-xl font-bold uppercase text-zinc-900 leading-tight mb-4 group-hover:text-latvia-red transition-colors">{item.title}</h3>
                
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-6 flex-grow line-clamp-3">{item.description}</p>
                <Link 
                  to={`/programma/${item.id}`} 
                  className="inline-flex items-center gap-2 text-latvia-red font-black font-display text-[10px] md:text-xs uppercase hover:gap-4 transition-all w-fit group-hover:text-zinc-900"
                >
                  Uzzināt vairāk <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
}
