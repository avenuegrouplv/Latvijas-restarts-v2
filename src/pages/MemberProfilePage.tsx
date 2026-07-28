import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Facebook, Linkedin, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BOARD_MEMBERS } from '../data';
import { XIcon } from '../components/SharedUI';

export default function MemberProfilePage() {
  const { id } = useParams();
  const member = BOARD_MEMBERS.find(m => m.id === id);

  useSEO({
    title: member ? `${member.name} - ${member.role}` : "Biedra profils",
    description: member ? `${member.name} (${member.role}) darbība un tēmas biedrībā Latvijas Restarts.` : "Latvijas Restarts biedra profils."
  });

  if (!member) return null;

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 font-display">
        <Link to="/par-biedribu" className="inline-flex items-center gap-2 text-latvia-red font-black mb-8 hover:gap-4 transition-all text-[10px] uppercase border-b-2 border-latvia-red/20 pb-2">
          <ChevronRight className="w-4 h-4 rotate-180" /> Atpakaļ uz par biedrību
        </Link>
        
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-center mb-10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-transparent rounded-xl overflow-hidden border-2 border-latvia-red/10 shrink-0 shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-zinc-200">
              {member.image ? (
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} loading="lazy" />
              ) : (
                <Users className="w-6 h-6 md:w-8 md:h-8" />
              )}
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-lg md:text-xl font-black uppercase mb-1 text-zinc-900 leading-tight">{member.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-3 mt-1.5 mb-2">
              <span className="inline-block text-latvia-red text-[9px] font-black uppercase tracking-widest bg-latvia-red/5 px-2.5 py-1 rounded-full self-center sm:self-auto select-none">
                {member.role}
              </span>
              <div className="flex items-center justify-center gap-1.5">
                {member.facebook && (
                  <a 
                    href={member.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red text-zinc-600 hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red text-zinc-600 hover:text-white transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red text-zinc-600 hover:text-white transition-all shadow-sm"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-zinc-400 mb-8 tracking-widest flex items-center gap-3">
            <span className="w-8 h-1 bg-latvia-red"></span> Eksperta darba virzieni
          </h2>
          <div className="space-y-3 max-w-2xl">
            {member.focus.map((item) => (
              <Link 
                key={item.id}
                to={`/biedri/${member.id}/${item.id}`}
                className="group block bg-zinc-50 border border-zinc-100 rounded-2xl p-5 hover:border-latvia-red hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base font-black uppercase text-zinc-800 leading-tight pr-4">{item.title}</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-300 group-hover:bg-latvia-red group-hover:text-white transition-all shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
