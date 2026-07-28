import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { ModernTitle, SectionBottomNav } from '../components/SharedUI';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useSEO({
    title: "Kontakti un rekvizīti",
    description: "Sazinieties ar biedrību Latvijas Restarts. Adrese, tālrunis, e-pasts un bankas rekvizīti."
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
      .then(async (response) => {
        const res = await response.json();
        if (res.success) {
          setSubmitted(true);
        } else {
          console.error("Web3Forms submission error:", res);
          setSubmitted(true);
        }
      })
      .catch((error) => {
        console.error("Web3Forms connection error:", error);
        setSubmitted(true);
      });
  };

  return (
    <section className="pt-52 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <ModernTitle 
          title="Kontakti" 
          subtitle="Sazinies ar mums"
        />
        <div className="bg-zinc-50 rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-24 grid md:grid-cols-2 gap-12 md:gap-20 shadow-xl border border-zinc-100">
          <div>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight text-latvia-red py-2">Mēs esam šeit, lai dzirdētu Jūs</h3>
            <p className="font-display text-base md:text-lg mb-6 md:mb-10 font-medium text-zinc-600">Rakstiet mums, ja jums ir jautājumi, ieteikumi vai vēlaties sazināties par sadarbību.</p>
            <div className="space-y-4 px-4 md:px-0">
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-0.5">Biedrība</span>
                <p className="font-display text-base font-bold mb-1 text-zinc-900 border-b border-latvia-red/10 pb-1 w-fit">Latvijas Restarts</p>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-0.5">Reģistrācijas numurs</span>
                <p className="font-display text-base font-bold text-zinc-900">40008317099</p>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-0.5">Adrese</span>
                <p className="font-display text-base font-bold text-zinc-900">Rīga, Ogļu iela 12A, LV-1048</p>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-0.5">E-pasts</span>
                <a href="mailto:info@latvijasrestarts.lv" className="font-display text-base font-bold text-zinc-900 hover:text-latvia-red transition-colors w-fit">info@latvijasrestarts.lv</a>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-0.5">Bankas rekvizīti</span>
                <p className="font-display text-base font-bold text-zinc-900">AS "Swedbank"</p>
                <p className="font-display text-sm font-bold text-zinc-800 font-mono">LV44HABA0001234567890</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
             <div className="absolute top-0 right-0 w-32 h-32 bg-latvia-red/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
             
             <AnimatePresence mode="wait">
               {!submitted ? (
                 <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="relative z-10 space-y-6"
                 >
                    <input type="hidden" name="access_key" value="3d857782-378e-44ae-b59e-1e13eba708f3" />
                    <input type="hidden" name="subject" value="Jauna ziņa no Latvijas Restarts mājaslapas" />
                    <input type="hidden" name="from_name" value="Latvijas Restarts" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    <div className="group">
                      <label className="font-display text-xs font-bold uppercase text-zinc-400 block mb-3 group-focus-within:text-latvia-red transition-colors">
                        Jūsu vārds <span className="text-latvia-red">*</span>
                      </label>
                      <div className="relative">
                        <input required type="text" name="name" placeholder="Ierakstiet vārdu..." className="w-full p-4 bg-zinc-50 rounded-2xl border-2 border-transparent focus:border-latvia-red focus:bg-white outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300" />
                      </div>
                    </div>
                    <div className="group">
                      <label className="font-display text-xs font-bold uppercase text-zinc-400 block mb-3 group-focus-within:text-latvia-red transition-colors">
                        E-pasta adrese <span className="text-latvia-red">*</span>
                      </label>
                      <input required type="email" name="email" placeholder="piemērs@pasts.lv" className="w-full p-4 bg-zinc-50 rounded-2xl border-2 border-transparent focus:border-latvia-red focus:bg-white outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300" />
                    </div>
                    <div className="group">
                      <label className="font-display text-xs font-bold uppercase text-zinc-400 block mb-3 group-focus-within:text-latvia-red transition-colors">
                        Ziņas teksts <span className="text-latvia-red">*</span>
                      </label>
                      <textarea required name="message" placeholder="Kā mēs varam palīdzēt?" rows={4} className="w-full p-4 bg-zinc-50 rounded-2xl border-2 border-transparent focus:border-latvia-red focus:bg-white outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-latvia-red text-white border-2 border-latvia-red font-bold text-sm rounded-2xl hover:bg-latvia-red/90 hover:shadow-latvia-red/20 transition-all shadow-lg font-display uppercase tracking-widest active:scale-[0.98]">SŪTĪT ZIŅU</button>
                 </motion.form>
               ) : (
                 <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-12"
                 >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="font-display text-2xl font-bold mb-4 text-zinc-900">Paldies!</h4>
                    <p className="font-display text-zinc-600 mb-8 max-w-xs mx-auto">Jūsu ziņa ir veiksmīgi nosūtīta. Mēs sazināsimies ar Jums tuvākajā laikā.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-latvia-red font-bold text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                    >
                      Sūtīt jaunu ziņu
                    </button>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
}
