import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { PROGRAM_DATA } from '../data';
import { SectionBottomNav } from '../components/SharedUI';
import { LatvianPattern } from '../components/VisualElements';

export default function ProgramDetailPage() {
  const { id } = useParams();
  const item = PROGRAM_DATA.find(p => p.id === id);

  useSEO({
    title: item ? `${item.title}` : "Programma",
    description: item ? `${item.description.substring(0, 150)}` : "Biedrības Latvijas Restarts rīcības programma un darba joma.",
    serviceData: item ? {
      name: item.title,
      description: item.description
    } : undefined
  });

  if (!item) {
    return <div className="pt-52 text-center min-h-screen font-display">Informācija netika atrasta.</div>;
  }

  return (
    <section className="pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/programma" className="inline-flex items-center gap-2 text-latvia-red font-bold mb-12 hover:gap-4 transition-all font-display uppercase bg-latvia-red/5 px-4 py-2 rounded-full border border-latvia-red/10">
          <ChevronRight className="w-5 h-5 rotate-180" /> Atpakaļ uz programmu
        </Link>
        
        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl relative bg-zinc-100">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
          <h1 className="absolute bottom-10 left-10 right-10 font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            {item.title}
          </h1>
        </div>

        <div className="prose prose-lg max-w-none prose-zinc">
          <div className="bg-latvia-red text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] mb-12 shadow-xl relative overflow-hidden">
            <LatvianPattern className="absolute inset-0 opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-xl md:text-2xl font-medium text-white leading-tight tracking-tight">
                {item.content.problem}
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-latvia-red mb-6 uppercase flex items-center gap-3">
              <span className="w-8 h-1 bg-latvia-red inline-block" /> Mērķis
            </h2>
            <div className="bg-zinc-50/50 p-7 md:p-9 rounded-[2rem] border-l-[8px] border-latvia-red shadow-sm">
              <p className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight">{(item as any).benefit}</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-latvia-red mb-8 uppercase flex items-center gap-3">
              <span className="w-8 h-1 bg-latvia-red inline-block" /> Taktika
            </h2>
            <div className="space-y-8">
              {item.content.solutions.map((solution, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center border-2 border-zinc-100 shadow-xl group-hover:scale-110 transition-transform relative overflow-hidden">
                    <LatvianPattern className="absolute inset-0 opacity-5" />
                    <span className="text-latvia-red font-black text-lg md:text-xl relative z-10">R</span>
                  </div>
                  <p className="text-xl md:text-3xl font-display font-extra-bold text-[#4a0e0e] leading-tight tracking-tight">{solution}</p>
                </div>
              ))}
            </div>
            {(item.content as any).note && (
              <div className="mt-12 p-8 bg-zinc-50 rounded-[2rem] border-2 border-zinc-100 italic text-zinc-600 text-lg md:text-xl">
                {(item.content as any).note}
              </div>
            )}
          </section>

          <div className="flex justify-center mt-24">
            <Link to="/kontakti" className="bg-latvia-red text-white border-2 border-latvia-red px-12 py-5 rounded-full font-bold text-xl hover:bg-zinc-900 hover:border-zinc-900 transition-all font-display uppercase shadow-2xl">
              Sazināties ar mums
            </Link>
          </div>
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
}
