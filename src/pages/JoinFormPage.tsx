import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Download, Upload } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function JoinFormPage() {
  useSEO({
    title: "Iesniegums dalībai",
    description: "Aizpildiet un iesniedziet pieteikuma anketu, lai kļūtu par biedrības Latvijas Restarts biedru vai asociēto biedru."
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    idCode: '',
    email: '',
    phone: '',
    address: '',
    memberType: 'biedrs',
    motivation: '',
    file: null as File | null
  });

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const hasData = Object.entries(formData).some(([key, value]) => {
        if (key === 'memberType') return false;
        if (key === 'file') return value !== null;
        return typeof value === 'string' && value.trim() !== '';
      });

      if (hasData && !submitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData, submitted]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/assets/Biedru pieteikums.docx';
    a.download = 'Biedru pieteikums.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="pt-32 md:pt-52 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/par-biedribu" className="inline-flex items-center gap-2 text-latvia-red font-bold mb-12 hover:gap-4 transition-all">
          <ChevronRight className="w-5 h-5 rotate-180" /> Atpakaļ uz "Par biedrību"
        </Link>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-zinc-100">
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-black uppercase mb-4 text-zinc-900 font-display">Pieteikums saņemts!</h2>
              <p className="text-zinc-600 mb-8 max-w-sm mx-auto font-medium">
                Paldies par interesi! Mēs izskatīsim Jūsu pieteikumu vai augšupielādēto anketu un sazināsimies ar Jums drīzumā.
              </p>
              <Link to="/par-biedribu" className="inline-block bg-latvia-red text-white px-12 py-4 rounded-full font-bold uppercase transition-all shadow-lg hover:bg-zinc-900">
                Atgriezties
              </Link>
            </motion.div>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 text-zinc-900 font-display leading-tight">Iesniegums</h1>
              <p className="text-zinc-500 mb-8 font-medium">Aizpildiet tiešsaistes formu vai lejupielādējiet, parakstiet un augšupielādējiet anketu.</p>
              
              <div className="mb-12 p-8 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200 text-center">
                <h3 className="font-black uppercase text-sm mb-4">Lejupielādēt pieteikuma veidlapu</h3>
                <p className="text-xs text-zinc-500 mb-6 font-medium">Sagatavojiet dokumentu pašrocīgai parakstīšanai vai parakstīšanai ar e-parakstu.</p>
                <button 
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-900 px-8 py-3 rounded-full font-black uppercase text-xs hover:bg-zinc-900 hover:text-white transition-all shadow-sm"
                >
                  Lejupielādēt .DOCX <Download className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-widest text-latvia-red">1. Izvēlieties statusu</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, memberType: 'biedrs'})}
                      className={`p-4 rounded-2xl border-2 font-black uppercase text-xs transition-all ${formData.memberType === 'biedrs' ? 'border-latvia-red bg-latvia-red/5 text-latvia-red' : 'border-zinc-100 bg-zinc-50 text-zinc-400 hover:border-zinc-200'}`}
                    >
                      Biedrs
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, memberType: 'asocietais'})}
                      className={`p-4 rounded-2xl border-2 font-black uppercase text-xs transition-all ${formData.memberType === 'asocietais' ? 'border-latvia-red bg-latvia-red/5 text-latvia-red' : 'border-zinc-100 bg-zinc-50 text-zinc-400 hover:border-zinc-200'}`}
                    >
                      Asociētais biedrs
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-widest text-latvia-red">2. Personas dati</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      required 
                      type="text" 
                      placeholder="Vārds, Uzvārds *"
                      className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-latvia-red outline-none transition-all font-bold"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required 
                      type="text" 
                      placeholder="Personas kods *"
                      className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-latvia-red outline-none transition-all font-bold"
                      value={formData.idCode}
                      onChange={e => setFormData({...formData, idCode: e.target.value})}
                    />
                    <input 
                      required 
                      type="email" 
                      placeholder="E-pasts *"
                      className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-latvia-red outline-none transition-all font-bold"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder="Tālrunis *"
                      className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-latvia-red outline-none transition-all font-bold"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <input 
                    required 
                    type="text" 
                    placeholder="Dzīvesvietas adrese *"
                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-latvia-red outline-none transition-all font-bold"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-widest text-latvia-red">3. Pievienojiet anketu</h3>
                  <div className="relative group">
                    <input 
                      type="file" 
                      id="file-upload"
                      className="hidden"
                      onChange={e => setFormData({...formData, file: e.target.files?.[0] || null})}
                    />
                    <label 
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center p-8 bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-3xl cursor-pointer group-hover:border-latvia-red transition-all"
                    >
                      <Upload className="w-8 h-8 text-zinc-300 mb-2 group-hover:text-latvia-red transition-all" />
                      <span className="text-xs font-black uppercase text-zinc-400 group-hover:text-latvia-red">
                        {formData.file ? formData.file.name : 'Augšupielādēt aizpildītu anketu'}
                      </span>
                    </label>
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-latvia-red text-white py-5 rounded-full font-black uppercase tracking-widest text-sm hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Iesniegt pieteikumu <ArrowUpRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
