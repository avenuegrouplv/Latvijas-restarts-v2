import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { NEWS } from '../data';
import { ModernTitle, SectionBottomNav } from '../components/SharedUI';

export default function NewsPage() {
  useSEO({
    title: "Aktualitātes un Jaunumi",
    description: "Lasiet jaunākās ziņas, viedokļus un paziņojumus par biedrības Latvijas Restarts aktivitātēm un mērķiem."
  });

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <ModernTitle 
          title="Aktualitātes" 
          subtitle="Aktualitātes"
        />

        <h3 className="text-xl font-black uppercase mb-8 border-l-4 border-latvia-red pl-4">Aktualitātes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {NEWS.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-all max-w-sm mx-auto w-full">
              <div className="h-40 overflow-hidden relative">
                <img src={item.image} alt={item.title} className={`w-full h-full ${item.imageClass || ''}`} loading="lazy" />
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
        <SectionBottomNav />
      </div>
    </section>
  );
}
