import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { NEWS } from '../data';
import { SectionBottomNav } from '../components/SharedUI';

export default function NewsDetailPage({ openRegistration }: { openRegistration?: (id: string) => void }) {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS.find(item => item.id === id);

  useSEO({
    title: newsItem ? `${newsItem.title}` : "Jaunumi",
    description: newsItem ? `${newsItem.excerpt}` : "Biedrības Latvijas Restarts aktualitāšu raksts.",
    ogType: 'article',
    ogImage: newsItem?.image,
    articleData: newsItem ? {
      headline: newsItem.title,
      image: newsItem.image,
      datePublished: newsItem.date,
      authorName: "Biedrība Latvijas restarts"
    } : undefined
  });
  
  if (!newsItem) {
    return <div className="pt-52 text-center min-h-screen">Raksts netika atrasts.</div>;
  }

  return (
    <section className="pt-52 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/aktualitates" className="inline-flex items-center gap-2 text-latvia-red font-bold mb-8 hover:gap-4 transition-all">
          <ChevronRight className="w-5 h-5 rotate-180" /> Atpakaļ uz aktualitātēm
        </Link>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm">
          <span className="text-sm font-bold text-latvia-red uppercase border-b-2 border-latvia-red pb-1">{newsItem.date}</span>
          <h1 className="text-2xl md:text-4xl font-black mt-6 mb-8 leading-tight uppercase">
            {newsItem.title}
          </h1>
          
          <div className="max-w-2xl mx-auto aspect-video rounded-3xl overflow-hidden mb-12 shadow-md bg-zinc-50">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className={`w-full h-full ${(newsItem as any).detailImageClass || 'object-cover ' + ((newsItem as any).imageClass || '')}`} 
            />
          </div>

          <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed space-y-6">
            {(newsItem as any).content ? (
              (newsItem as any).content.map((p: string, idx: number) => (
                <p key={idx} className="whitespace-pre-line">
                  {p}
                </p>
              ))
            ) : (
              <>
                <p className="whitespace-pre-line">
                  ⛔️  03.06.2026 Budžeta komisijā noraidījām Siliņas valdības sagatavoto apropriāciju pieprasījumu 52,4 miljonu eiro apmērā. Šādi papildu izdevumi radītu negatīvu ietekmi uz budžetu, un tajos bija iekļautas pozīcijas, kuras neuzskatu par prioritārām nodokļu maksātāju naudas izlietojumā.
                </p>

                <p className="whitespace-pre-line">
                  ➡️ Starp pieprasītajiem tēriņiem bija komandējumi un konsultācijas, mobilo tālruņu un portatīvo datoru nomaiņa, starptautisku konferenču organizēšana, mediju treniņi un personāla atlases pakalpojumi.
                </p>

                <p className="whitespace-pre-line">
                  ❗️ Katrs eiro jāiegulda pārdomāti un atbildīgi, tādēļ šis pieprasījums ir jāpārstrādā.
                </p>
              </>
            )}
          </div>
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
}
