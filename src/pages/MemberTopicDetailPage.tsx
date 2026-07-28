import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Facebook, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BOARD_MEMBERS } from '../data';

export default function MemberTopicDetailPage() {
  const { id, topicId } = useParams();
  const member = BOARD_MEMBERS.find(m => m.id === id);
  const topic = member?.focus.find(f => f.id === topicId);

  useSEO({
    title: topic ? `${topic.title}` : "Tēma",
    description: topic ? `${topic.content.substring(0, 150)}...` : "Latvijas Restarts biedra darba virziens."
  });

  if (!member || !topic) return null;

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Link to={`/biedri/${member.id}`} className="inline-flex items-center gap-2 text-latvia-red font-black mb-8 hover:gap-4 transition-all text-[10px] uppercase border-b-2 border-latvia-red/10 pb-2">
          <ChevronRight className="w-4 h-4 rotate-180" /> Atpakaļ pie {member.name}
        </Link>
        
        <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 border-2 border-zinc-100">
          <div className="mb-10">
            <span className="text-latvia-red font-black uppercase text-[10px] tracking-widest block mb-3 border-l-4 border-latvia-red pl-4">Projekts / Darba virziens</span>
            <h1 className="text-xl md:text-2xl font-black uppercase text-zinc-900 leading-tight">{topic.title}</h1>
          </div>
          
          <div className="prose prose-lg prose-zinc mb-10">
            <div className="font-display text-lg text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap">
              {topic.content}
            </div>
          </div>

          {topic.link && (
            <a 
              href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-[#166fe5] transition-all shadow-lg hover:shadow-[#1877F2]/20 mb-12"
            >
              <Facebook className="w-5 h-5" />
              Skatīt ierakstu Facebook
            </a>
          )}
          
          <div className="mt-16 pt-12 border-t border-zinc-200 flex items-center gap-12">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-latvia-red/20 shrink-0">
               <div className="w-full h-full bg-transparent flex items-center justify-center text-zinc-400">
                 {member.image ? (
                   <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} loading="lazy" />
                 ) : (
                   <Users className="w-8 h-8" />
                 )}
               </div>
             </div>
             <div>
               <p className="text-xs font-black uppercase text-zinc-400 mb-1">Eksperts</p>
               <p className="font-black uppercase text-zinc-900">{member.name}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
