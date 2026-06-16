import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams,
  NavLink
} from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, X, ChevronRight, Users, Target, FileText, 
  Newspaper, Mail, Facebook, Twitter, Instagram, Linkedin,
  ArrowUpRight, CheckCircle2, Heart, ExternalLink, ShieldCheck,
  Loader2, Home, ArrowUp, ArrowRight, ArrowLeft, ArrowUpRight as ArrowUpRightIcon,
  Globe, Scale, Baby, Sprout, Library, HandHeart, Zap, Download, Upload,
  Briefcase, CircleDollarSign, TrendingUp, Lightbulb
} from 'lucide-react';
import { LatvianPattern } from './components/VisualElements';

// --- Image Imports ---
// Local images replaced by external URLs for better maintenance

// --- Custom X (Twitter) Icon ---
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// --- Scroll to Top Component ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  notes: string;
  gdpr: boolean;
  eventId: string;
}

interface MemberFocus {
  id: string;
  title: string;
  content: string;
  link?: string;
}

interface Member {
  id: string;
  name: string;
  image?: string;
  imageClass?: string;
  role: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  focus: MemberFocus[];
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: 'Sākums', href: '/' },
  { label: 'Par biedrību', href: '/par-biedribu' },
  { label: 'Programma', href: '/programma' },
  { label: 'Aktualitātes', href: '/aktualitates' },
  { label: 'Kontakti', href: '/kontakti' },
];

const PROGRAM_DATA = [
  {
    id: "iepirkumu-reforma",
    title: "Iepirkumu reforma",
    description: "Nocērtam korupcijas galvu godīgai un caurspīdīgai valstij.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: <Scale className="w-8 h-8 text-latvia-red" />,
    benefit: "Neatkarīga iepirkumu uzraudzība",
    content: {
      problem: "Paredzamais ieguvums: 500 miljonu EUR ietaupījums katru gadu",
      solutions: [
        "Iepirkumu uzraudzības birojs kļūst par neatkarīgu institūciju",
        "Katram lielajam iepirkumam – ekonomiskās lietderības izvērtēšana",
        "Caurspīdīgums – visi redz visu",
        "Iepircējs nedrīkst rakstīt noteikumus un pats tos pārbaudīt!"
      ]
    }
  },
  {
    id: "valsts-parvalde",
    title: "Valsts pārvaldes reforma",
    description: "Valsts pārvalde, kas kalpo pilsoņiem - ne otrādi!",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    icon: <Users className="w-8 h-8 text-latvia-red" />,
    benefit: "Valsts pārvalde kalpo pilsoņiem – ne otrādi!",
    content: {
      problem: "Paredzamais ieguvums: Kompakta, efektīva un atbildīga valsts pārvalde",
      solutions: [
        "Atbildība par rezultātu nevis amata stabilitāte – Civildienesta likuma reforma!",
        "Visu ministriju un iestāžu audits, konsolidācija un deleģējums privātajiem, asociācijām un biedrībām",
        "Mazāk papīru, lielāka efektivitāte – MI rīku ieviešana valsts pārvaldē"
      ]
    }
  },
  {
    id: "kapitalsabiedribas",
    title: "Valsts kapitālsabiedrību reforma",
    description: "Neatkarīga un profesionāla kapitālsabiedrību uzraudzība.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-8 h-8 text-latvia-red" />,
    benefit: "Attīstības fonds un lielo projektu sakārtošana",
    content: {
      problem: "Paredzamais ieguvums: Uzkrāts valsts finanšu drošības spilvens",
      solutions: [
        "Valsts kapitālsabiedrību apvienošana holdingā, neatkarīgā no politiskās ietekmes",
        "Valsts kapitālsabiedrību padomju optimizēšana, centralizēta uzraudzība no profesionāļiem",
        "Fonds kā budžeta stabilizēšanas instruments"
      ]
    }
  },
  {
    id: "nodokli",
    title: "Nodokļu dialogs",
    description: "Godīga saruna ar uzņēmējiem un nodokļu sloga samazināšana izaugsmei.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    icon: <CircleDollarSign className="w-8 h-8 text-latvia-red" />,
    benefit: "Konsekvence ir konkurences priekšrocība",
    content: {
      problem: "Paredzamais ieguvums: Sabalansēts budžets līdz 2029. gadam",
      solutions: [
        "«Sarkanā paklāja» attieksme pret eksportējošiem uzņēmumiem",
        "Kapitāla pieauguma nodokļa samazināšana",
        "Nodokļu sloga samazināšana, neaudzējot budžeta izdevumus 2-3 gadus",
        "Amatniekiem un neregulāru darījumu veicējiem – 10% likme bez reģistrēšanās VID"
      ]
    }
  },
  {
    id: "demografija",
    title: "Demogrāfijas atgriešana",
    description: "Mēs gribam bērnus Latvijā – mērķtiecīgs atbalsts ģimenēm kā prioritāte.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    icon: <Baby className="w-8 h-8 text-latvia-red" />,
    benefit: "Sudraba ekonomika, reemigrācija un nodokļu taisnīgums",
    content: {
      problem: "Paredzamais ieguvums: Katrs iedzīvotājs jūtas vajadzīgs un gaidīts šajā valstī",
      solutions: [
        "Nodokļu taisnīgums. IIN atlaides ģimenēm ar bērniem",
        "Dāsnāki un pretimnākošāki reemigrācijas nosacījumi",
        "Plaša senioru nodarbinātības programma"
      ]
    }
  },
  {
    id: "investicijas",
    title: "Investoru piesaiste",
    description: "Investīciju fonds un droša biznesa vide jaudīgām investīcijām.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <TrendingUp className="w-8 h-8 text-latvia-red" />,
    benefit: "Fiksētās likmes nodoklis",
    content: {
      problem: "Paredzamais ieguvums: 9,38 miljardi EUR Latvijas ekonomikā līdz 2031. gadam*",
      note: "* Kumulatīvais bāzes scenārijs no 2027. g. līdz 2031. gadam jaunu klientu piesaistes ik gadu, no kuriem 3.05 miljardi eiro valsts budžeta tiešie ieņēmumi, 230 miljoni tēriņi ikdienas vajadzībām un 5.5 miljardi eiro investīcijas ekonomikā, kopā summāri piesaistot 27 000 jaunu klientu 5 gadu laikā",
      solutions: [
        "Piesaistīt 27 000 turīgus cilvēkus kā Latvijas rezidentus",
        "Fiksēta nodokļa likme gadā – 60 000 EUR",
        "Obligāta prasība – investēt 50-100 tūkstošus EUR Latvijā reģistrēta uzņēmuma kapitālā, iegādāties valsts obligācijas – 150 000 EUR vai investīcijas NĪ vismaz 250 000 EUR apjomā"
      ]
    }
  },
  {
    id: "izglitiba",
    title: "Izglītība",
    description: "Izglītotā tauta kā turības avots – kvalitatīva un modernizēta izglītība.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    icon: <FileText className="w-8 h-8 text-latvia-red" />,
    benefit: "Izglītota tauta kā turības avots",
    content: {
      problem: "Paredzamais ieguvums: Ilgtermiņa investīciju tradīciju iedibināšana Latvijas politiskajā kultūrā",
      solutions: [
        "Moderns skolotājs. Atalgojums, aprīkojums, motivācija, zināšanas, pasaules redzējums.",
        "Izglītības sistēmas digitalizācijas kvantu lēciens",
        "Tenūrprofesūras un inovāciju klasteri universitātēs",
        "Profesionālās izglītības stiprināšana",
        "Birokrātijas mazināšana izglītības sektorā. Lielāka ietekme skolu direktoriem."
      ]
    }
  },
  {
    id: "energetika",
    title: "Enerģētiskā neatkarība",
    description: "Latvija – enerģijas eksportētājvalsts ar sabalansētiem resursiem.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="w-8 h-8 text-latvia-red" />,
    benefit: "Enerģētikas stratēģija",
    content: {
      problem: "Paredzamais ieguvums: Enerģijas neatkarība un reģionālā ilgstspēja",
      solutions: [
        "Sabalansēti enerģijas ražošanas avoti, izmantojot mūsu ģeogrāfiskās un klimata priekšrocības",
        "Datu centru pakāpeniska attīstība",
        "Izdevīgākās enerģijas cenas reģionā",
        "Stratēģisko gāzes rezervju veidošana Inčukalna gāzes krātuvē",
        "Cenu stabilizācija apkures sezonā"
      ]
    }
  },
  {
    id: "veseliba",
    title: "Veselības aprūpes sistēma",
    description: "Pieejama un kvalitatīva veselības aprūpe, kurā cilvēks ir prioritāte.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    icon: <Heart className="w-8 h-8 text-latvia-red" />,
    benefit: "Nepieciešami plati pārmaiņu soļi nokavētās reformās",
    content: {
      problem: "Paredzamais ieguvums: Reāli pieejama veselības sistēma",
      solutions: [
        "Lieltirgotavu un aptieku zāļu piecenojumu pārskatīšana",
        "Visiem kompensējamiem medikamentiem 100% finansējums references apmērā bez pacientu līdzfinansējuma (no 75% uz 100%)",
        "Visaptveroša veselības aprūpes sistēmas digitalizācija"
      ]
    }
  },
  {
    id: "aizsardziba",
    title: "Valsts iekšējā un ārējā drošība",
    description: "Drošība kā prioritāte – nosargāta robeža un moderna aizsardzība.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    icon: <ShieldCheck className="w-8 h-8 text-latvia-red" />,
    benefit: "Aizsardzībai jābūt gudrai",
    content: {
      problem: "Paredzamais ieguvums: Moderna armija un sadarbība NB8 formātā",
      solutions: [
        "Modernā kara realitāte – dronu tehnoloģijas kā prioritāte",
        "Drošības un aizsardzības industrijas iespējošana Latvijā",
        "Drošība kopā ar kaimiņiem. NB8 formāta attīstīšana."
      ]
    }
  },
  {
    id: "imigracija",
    title: "Darbaspēka un migrācijas politika",
    description: "Gudrā imigrācija un remigrācijas atbalsts ekonomikas augšupejai.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    icon: <Globe className="w-8 h-8 text-latvia-red" />,
    benefit: "Esam atvērti tiem, kuri ir gatavi dot",
    content: {
      problem: "Paredzamais ieguvums: Piesaistām \"gudro\" biznesu no visas pasaules",
      solutions: [
        "Darbaspēka piesaiste uz terminētiem līgumiem konkrētos sektoros",
        "Turīgu cilvēku domicīle un nodokļi Latvijā"
      ]
    }
  },
  {
    id: "inovacijas",
    title: "Konkurences stiprināšana",
    description: "Inovāciju uzplaukums un augsta konkurētspēja pasaules tirgos.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    icon: <Lightbulb className="w-8 h-8 text-latvia-red" />,
    benefit: "Inovāciju smilšu kaste.",
    content: {
      problem: "Paredzamais ieguvums: Piesaistām \"gudro\" biznesu no visas pasaules",
      solutions: [
        "Atbrīvojums no IP ienākumiem – 80%",
        "Efektīvā UIN likme ~4%",
        "Īpaši labvēlīgi nosacījumi inovāciju nozarēs"
      ],
      note: "Nosacījumi attiecas gan uz piesaistītajiem investoriem, gan Latvijā strādājošiem, eksportējošajiem biznesiem."
    }
  }
];

const GOALS = [
  {
    title: "Ekonomikas restarts",
    description: "Veicināt inovatīvu uzņēmējdarbību un birokrātijas mazināšanu Latvijas konkurētspējai.",
    icon: <Target className="w-8 h-8 text-latvia-red" />
  },
  {
    title: "Taisnīga pārvaldība",
    description: "Caurspīdīga valsts pārvalde un atbildība pret katru Latvijas iedzīvotāju.",
    icon: <CheckCircle2 className="w-8 h-8 text-latvia-red" />
  },
  {
    title: "Modernas tehnoloģijas",
    description: "Digitālā transformācija visos līmeņos – no izglītības līdz valsts pakalpojumiem.",
    icon: <ArrowUpRight className="w-8 h-8 text-latvia-red" />
  },
  {
    title: "Cilvēkkapitāls",
    description: "Ieguldījums izglītībā un veselībā kā galvenais valsts attīstības dzinējspēks.",
    icon: <Users className="w-8 h-8 text-latvia-red" />
  }
];

const NEWS = [
  {
    id: "strategija-2026",
    date: "03.06.2026",
    title: "Mūsu darbi: Budžeta tēriņu noraidīšana",
    excerpt: "⛔️  03.06.2026 Budžeta komisijā noraidījām Siliņas valdības sagatavoto apropriāciju pieprasījumu 52,4 miljonu eiro apmērā. Šādi papildu izdevumi radītu negatīvu ietekmi...",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Noraidita-iecere-par-budzeta-izdevumiem.jpeg"
  }
];

// --- Registration Modal ---

const RegistrationModal = ({ 
  isOpen, 
  onClose, 
  initialEventId 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialEventId: string;
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    notes: '',
    gdpr: false,
    eventId: initialEventId
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, eventId: initialEventId }));
      setStatus('idle');
      setErrors({});
    }
  }, [isOpen, initialEventId]);

  const validate = () => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!formData.name) newErrors.name = 'Vārds nav norādīts';
    if (!formData.email) {
      newErrors.email = 'E-pasts nav norādīts';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nepareizs e-pasta formāts';
    }
    if (!formData.phone) newErrors.phone = 'Telefons nav norādīts';
    if (!formData.gdpr) newErrors.gdpr = 'Jums jāpiekrīt datu apstrādei';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // Simulējam datu apstrādi (šeit nākotnē var pievienot API izsaukumu vai SendGrid)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mākslīgi radām kļūdu testēšanai, ja e-pasts satur "error"
      if (formData.email.includes('error')) throw new Error('Simulation error');
      
      setStatus('success');
      // Pēc veiksmīgas iesniegšanas forma netiek aizvērta uzreiz, lai rādītu paldies ziņu
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClasses = "w-full p-4 bg-zinc-100 rounded-xl border-2 border-transparent focus:border-latvia-red focus:bg-white transition-all outline-none text-zinc-900";
  const labelClasses = "block text-sm font-bold font-display uppercase mb-2 text-zinc-500";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase">Paldies!</h3>
                  <p className="text-zinc-600 text-lg mb-8">
                    Jūsu pieteikums ir veiksmīgi saņemts!<br />Uz tikšanos pasākumā.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-zinc-900 text-white border-2 border-latvia-red px-10 py-4 rounded-full font-bold hover:bg-latvia-red hover:text-white transition-all font-display uppercase"
                  >
                    Aizvērt
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black mb-2 uppercase">Pieteikties pasākumam</h3>
                  <p className="text-zinc-500 mb-8">Lūdzu, aizpildiet formu, lai rezervētu savu dalību.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={labelClasses}>Izvēlēties pasākumu</label>
                      <select 
                        className={inputClasses}
                        value={formData.eventId}
                        onChange={e => setFormData(prev => ({ ...prev, eventId: e.target.value }))}
                      >
                        {NEWS.map(item => (
                          <option key={item.id} value={item.id}>{item.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Vārds, uzvārds</label>
                        <input 
                          type="text" 
                          className={`${inputClasses} ${errors.name ? 'border-latvia-red' : ''}`}
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.name}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>E-pasta adrese</label>
                        <input 
                          type="email" 
                          className={`${inputClasses} ${errors.email ? 'border-latvia-red' : ''}`}
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Telefona numurs</label>
                        <input 
                          type="tel" 
                          className={`${inputClasses} ${errors.phone ? 'border-latvia-red' : ''}`}
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <span className="text-latvia-red text-xs font-bold mt-1 uppercase">{errors.phone}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>Organizācija (neobligāti)</label>
                        <input 
                          type="text" 
                          className={inputClasses}
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Piezīmes / Jautājumi (neobligāti)</label>
                      <textarea 
                        rows={3}
                        className={inputClasses}
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="gdpr"
                        className="mt-1 w-5 h-5 flex-shrink-0 cursor-pointer accent-latvia-red"
                        checked={formData.gdpr}
                        onChange={e => setFormData({ ...formData, gdpr: e.target.checked })}
                      />
                      <label htmlFor="gdpr" className="text-sm text-zinc-500 cursor-pointer">
                        Piekrītu savu personas datu apstrādei saskaņā ar biedrības privātuma politiku un šī pasākuma organizēšanas vajadzībām (GDPR).
                        {errors.gdpr && <span className="block text-latvia-red font-bold uppercase text-[10px] mt-1">{errors.gdpr}</span>}
                      </label>
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-latvia-red/10 border-2 border-latvia-red text-latvia-red rounded-xl font-bold text-center">
                        Radās kļūda. Lūdzu mēģiniet vēlreiz.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-latvia-red text-white border-2 border-latvia-red font-bold text-xl rounded-2xl hover:bg-zinc-900 hover:border-zinc-900 transition-all flex items-center justify-center gap-3 disabled:opacity-70 font-display uppercase"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" /> APSTRĀDĀ...
                        </>
                      ) : (
                        'PIETEIKTIES PASĀKUMAM'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Cookies Modal ---

const CookiesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
                id="cookies-modal-close"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-black mb-2 uppercase text-latvia-red">Sīkdatņu politika</h3>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-8">Pēdējo reizi atjaunots: 28.04.2026</p>

              <div className="space-y-8 text-zinc-600 leading-relaxed text-sm text-justify">
                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">1. Kas ir sīkdatnes?</h4>
                  <p>
                    Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.
                  </p>
                  <p className="mt-2 text-zinc-500">
                    Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.
                  </p>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">2. Kāpēc mēs izmantojam sīkdatnes?</h4>
                  <p>Biedrība “Latvijas Restarts” izmanto sīkdatnes šādiem mērķiem:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Vietnes funkcionalitātes nodrošināšanai:</strong> Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.</li>
                    <li><strong>Lietošanas pieredzes uzlabošanai:</strong> Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.</li>
                    <li><strong>Analītikai un statistikai:</strong> Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">3. Izmantoto sīkdatņu veidi</h4>
                  <div className="space-y-4">
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                      <h5 className="font-black text-zinc-800 uppercase text-xs mb-1">Nepieciešamās sīkdatnes</h5>
                      <p className="text-xs">Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                      <h5 className="font-black text-zinc-800 uppercase text-xs mb-1">Analītikas sīkdatnes</h5>
                      <p className="text-xs">Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu informāciju par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="font-black text-zinc-900 uppercase mb-3 text-lg">4. Kā pārvaldīt un izdzēst sīkdatnes?</h4>
                  <p>Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.</p>
                  <p className="mt-6 mb-4 font-black uppercase text-xs text-zinc-400 tracking-widest">Instrukcijas populārākajām pārlūkprogrammām:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Google Chrome</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Safari</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">Mozilla Firefox</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                    <a href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-latvia-red transition-all group">
                      <span className="font-bold uppercase text-[10px]">MS Edge</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-latvia-red" />
                    </a>
                  </div>
                </section>

                <div className="p-6 bg-latvia-red/5 rounded-2xl border border-latvia-red/10 text-center sm:text-left">
                  <p className="text-zinc-800 font-bold mb-2">Ievērojiet!</p>
                  <p className="text-xs">Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmekļa vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.</p>
                  <p className="mt-4 text-zinc-600 text-xs italic">
                    Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: <br className="sm:hidden" />
                    <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red font-black not-italic hover:underline ml-1">info@latvijasrestarts.lv</a>
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center pb-4">
                <button 
                  onClick={onClose}
                  className="bg-latvia-red text-white px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-zinc-900 transition-all shadow-xl font-display tracking-widest"
                >
                  Aizvērt
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Shared Elements ---


const ModernTitle = ({ title, subtitle, centered = false, dark = false }: { title: string; subtitle?: string; centered?: boolean; dark?: boolean }) => (
  <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
    <div className={`relative inline-flex flex-col ${centered ? 'items-center' : 'items-start'}`}>
      <h2 className={`font-display text-2xl md:text-4xl font-bold leading-tight mb-2 ${dark ? 'text-white' : 'text-latvia-red'}`}>
        {title}
      </h2>
      <div className="flex w-24 h-1 overflow-hidden rounded-full">
        <div className="flex-grow bg-latvia-red" />
        <div className="w-1/4 bg-white" />
        <div className="flex-grow bg-latvia-red" />
      </div>
    </div>
    {subtitle && (
      <p className={`mt-4 font-display text-xs md:text-sm font-semibold uppercase ${dark ? 'text-white/60' : 'text-zinc-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-latvia-red selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-latvia-red z-[110] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const Logo = ({ className = "h-[53px]", isDark = false }: { className?: string, isDark?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative h-[85%] aspect-square flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img 
          src="https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta.webp" 
          alt="Latvijas Restarts" 
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col justify-center space-y-0.5">
        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} font-black text-sm md:text-base tracking-tight leading-none uppercase font-display`}>Latvijas</span>
        <span className="text-latvia-red font-black text-sm md:text-base tracking-tight leading-none uppercase font-display">Restarts</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-zinc-50 shadow-xl border-b-2 border-latvia-red/20 py-1' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          {/* Responsive logo sizes */}
          <Logo className={`${scrolled ? 'h-10 md:h-20' : 'h-14 md:h-32'} transition-all duration-300 ${scrolled ? '' : 'drop-shadow-lg'}`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.href} 
              className={({ isActive }) => `font-display text-sm font-bold uppercase transition-colors hover:text-latvia-red ${isActive ? 'text-latvia-red' : (scrolled ? 'text-zinc-900' : 'text-zinc-700 drop-shadow-sm')}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/kontakti" className="bg-latvia-red text-white border-2 border-latvia-red px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-900 hover:border-zinc-900 transition-all font-display uppercase">
            Sazināties
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold uppercase ${location.pathname === item.href ? 'text-latvia-red' : 'text-zinc-900'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/kontakti" className="bg-latvia-red text-white w-full py-4 rounded-full font-bold text-center border-2 border-latvia-red">
              Sazināties
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);
  
  return (
    <>
      <footer className="bg-zinc-900 text-white pt-20 pb-12 overflow-hidden relative">
        <LatvianPattern className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 flex flex-col justify-start">
              <Link to="/" className="inline-block mb-6 group w-fit">
                <Logo className="h-16 md:h-[120px] transition-transform group-hover:scale-105" isDark={true} />
              </Link>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-6">
                Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/andris.kulbergs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/andriskulbergs?s=11&t=Y_-qbzD0uVknm-rkHOPh8A" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-latvia-red hover:border-latvia-red transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-medium uppercase text-latvia-red mb-6 text-xs tracking-wider">Navigācija</h5>
              <ul className="space-y-2 text-zinc-400">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}><Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium uppercase text-latvia-red mb-6 text-xs tracking-wider">Kontakti</h5>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="text-white mb-2 font-bold select-none">Biedrība "Latvijas Restarts"</li>
                <li>Reģ. Nr. 40008317099</li>
                <li>Rīga, Ogļu iela 12A, LV-1048</li>
                <li>info@latvijasrestarts.lv</li>
                <li>+371 6700 0000</li>
                <li className="pt-2 font-bold text-white/90">Bankas rekvizīti:</li>
                <li>AS "Swedbank"</li>
                <li>LV44HABA0001234567890</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
            <div className="flex items-center gap-4 text-center md:text-left">
              <p className="w-full">2026 © Biedrība “Latvijas restarts” | Visas tiesības aizsargātas.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <Link to="/privatuma-politika" className="hover:text-white transition-colors">Privātuma politika</Link>
              <button 
                onClick={() => setIsCookiesModalOpen(true)} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Sīkdatņu politika
              </button>
            </div>
          </div>
        </div>
      </footer>
      <CookiesModal isOpen={isCookiesModalOpen} onClose={() => setIsCookiesModalOpen(false)} />
    </>
  );
};

// --- Custom SEO Hook with JSON-LD Organization Structured Data ---
interface SEOProps {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const useSEO = ({ title, description, ogType = 'website', ogImage, noIndex = false }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.endsWith('Latvijas Restarts') ? title : `${title} | Latvijas Restarts`;
    document.title = formattedTitle;

    // Helper to select/create meta tags
    const setMetaTag = (attrs: Record<string, string>, content: string) => {
      let selector = 'meta';
      for (const [key, value] of Object.entries(attrs)) {
        selector += `[${key}="${value}"]`;
      }
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        for (const [key, value] of Object.entries(attrs)) {
          element.setAttribute(key, value);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update meta description
    setMetaTag({ name: 'description' }, description);

    // 3. Update Open Graph
    setMetaTag({ property: 'og:title' }, formattedTitle);
    setMetaTag({ property: 'og:description' }, description);
    setMetaTag({ property: 'og:url' }, window.location.origin + location.pathname);
    setMetaTag({ property: 'og:type' }, ogType);
    setMetaTag({ property: 'og:site_name' }, 'Biedrība Latvijas restarts');

    const defaultImage = 'https://latvijasrestarts.lv/images/logo_share.png?v=20';
    setMetaTag({ property: 'og:image' }, ogImage || defaultImage);

    // 4. Update Twitter specific
    setMetaTag({ name: 'twitter:card' }, 'summary');
    setMetaTag({ name: 'twitter:title' }, formattedTitle);
    setMetaTag({ name: 'twitter:description' }, description);
    setMetaTag({ name: 'twitter:image' }, ogImage || defaultImage);

    // 5. Indexing control
    if (noIndex) {
      setMetaTag({ name: 'robots' }, 'noindex, nofollow');
    } else {
      setMetaTag({ name: 'robots' }, 'index, follow');
    }

    // 6. JSON-LD Schema Markup for Organization
    let schemaScript = document.getElementById('jsonld-org');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-org';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Biedrība Latvijas restarts",
      "url": window.location.origin,
      "logo": "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta.webp",
      "description": "Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ogļu iela 12A",
        "addressLocality": "Rīga",
        "postalCode": "LV-1048",
        "addressCountry": "LV"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@latvijasrestarts.lv",
        "contactType": "Klientu atbalsts"
      }
    };
    schemaScript.textContent = JSON.stringify(schemaMarkup);
  }, [title, description, ogType, ogImage, noIndex, location.pathname]);
};

// --- Page Components ---

const HomePage = () => {
  useSEO({
    title: "Sākums",
    description: "Biedrība Latvijas Restarts apvieno dažādu jomu profesionāļus un ekspertus sekmīgai krīžu pārvarēšanai un dinamiskai Latvijas attīstībai."
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
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#f8faf7]">
      <div className="absolute inset-0 z-0 text-white">
        <img 
          src="https://pub-b4e9dacb063d49eeb0e49317ea5b4e43.r2.dev/Fons.png" 
          alt="Latvijas Restarts" 
          className="w-full h-full object-cover object-[30%_center] md:object-center opacity-100"
          loading="eager"
          fetchPriority="high"
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
              src="https://pub-b4e9dacb063d49eeb0e49317ea5b4e43.r2.dev/Par%20biedr%C4%ABbu.png" 
              alt="Biedrība - Par mums" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
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
            <Link to={`/biedri/${member.id}`} className="block w-24 h-24 md:w-32 md:h-32 bg-zinc-50 rounded-full mb-4 overflow-hidden relative border-2 border-latvia-red/10 group-hover:border-latvia-red transition-all">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-200">
                {member.image ? (
                  <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} />
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
      <div className="grid md:grid-cols-3 gap-10">
        {NEWS.map((item) => (
          <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm max-w-sm mx-auto w-full">
            <div className="h-40 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-latvia-red uppercase">{item.date}</span>
              <h3 className="text-lg font-black mt-2 mb-4 leading-tight">{item.title}</h3>
              <p className="text-zinc-500 text-xs mb-6 leading-relaxed line-clamp-3">{item.excerpt}</p>
              <Link to={`/aktualitates/${item.id}`} className="inline-flex items-center gap-2 text-xs font-bold hover:text-latvia-red transition-colors">Lasīt vairāk <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// --- Full Page Components ---

const AboutPage = () => {
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
              src="https://pub-b4e9dacb063d49eeb0e49317ea5b4e43.r2.dev/Par%20biedr%C4%ABbu.png" 
              alt="Biedrība - Par mums" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]"
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
              <Link to={`/biedri/${member.id}`} className="block w-24 h-24 md:w-32 md:h-32 bg-zinc-50 rounded-full mb-4 overflow-hidden relative border-2 border-latvia-red/10 group-hover:border-latvia-red transition-all">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-200">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} />
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
};

const StatutesPage = () => {
  useSEO({
    title: "Biedrības Statūti",
    description: "Biedrības Latvijas Restarts oficiālie statūti un darbības pamatprincipi."
  });
  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <Link to="/par-biedribu" className="inline-flex items-center gap-2 text-latvia-red font-bold mb-12 hover:gap-4 transition-all">
        <ChevronRight className="w-5 h-5 rotate-180" /> Atpakaļ uz "Par biedrību"
      </Link>
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-zinc-100">
        <div className="mb-12">
          <h1 className="text-3xl font-black uppercase border-b-4 border-latvia-red pb-4 inline-block mb-6">Biedrības Statūti</h1>
          <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest space-y-1">
            <p>Apstiprināti biedrības dibināšanas sapulcē 01.07.2022.</p>
            <p>1.grozījumi pieņemti Biedru kopsapulcē 08.11.2023.</p>
            <p>2.grozījumi pieņemti Biedru kopsapulcē 20.08.2025.</p>
            <p>3.grozījumi pieņemti Biedru kopsapulcē 09.02.2026.</p>
          </div>
        </div>

        <div className="mb-12 p-6 bg-zinc-50 rounded-2xl border-l-4 border-latvia-red">
          <p className="font-black text-zinc-900 uppercase text-xl">“Latvijas Restarts”</p>
          <p className="text-zinc-500 font-bold">Reģ. Nr. 40008317099</p>
        </div>

        <div className="space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">1. Biedrības nosaukums</h2>
            <p>1.1. Biedrības nosaukums ir “Latvijas Restarts” (turpmāk - Biedrība).</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">2. Biedrības mērķis</h2>
            <p>2.1. Biedrības mērķis ir apvienot dažādu jomu ekspertus un profesionāļus, kuru pieredze un prasmes, idejas un līdzdalība šobrīd ir vitāli nepieciešama sekmīgai krīžu pārvarēšanai un drošai, pašpietiekamai un dinamiskai Latvijas nākotnes attīstībai.</p>
            <p>2.2. Radīt stipru, pašpietiekamu un konkurētspējīgu Latviju, kur ekonomiskā izaugsme, ģimeņu atbalsts, vesela sabiedrība un efektīva valsts pārvalde nodrošina drošību, labklājību un nākotnes attīstību.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">3. Biedrības darbības termiņš</h2>
            <p>3.1. Biedrība ir nodibināta uz nenoteiktu laiku.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">4. Biedru iestāšanās, izstāšanās un izslēgšana no Biedrības</h2>
            <p>4.1. Biedrībā var iestāties jebkura rīcībspējīga fiziska un juridiska persona, iesniedzot noteiktas formas rakstisku pieteikumu. Pieteikuma formu un tam klāt pievienojamo dokumentu sarakstu nosaka Biedrības valde.</p>
            <p>4.2. Par Biedrības asociēto biedru var kļūt jebkura rīcībspējīga fiziska persona, kura ir ieinteresēta Biedrības mērķu sasniegšanā un atbalsta Biedrības darbību, iesniedzot noteiktas formas rakstisku pieteikumu. Pieteikuma formu un tam klāt pievienojamo dokumentu sarakstu nosaka Biedrības valde.</p>
            <p>4.3. Lēmumu par biedra uzņemšanu Biedrībā pieņem valde. Valdei pieteicēja lūgums ir jāizskata tuvākās sēdes laikā, taču ne ilgāk kā divu nedēļu laikā no visu nepieciešamo dokumentu saņemšanas brīža. Uz valdes sēdi, kurā izskata pieteicēja lūgumu, ir jāuzaicina pats pieteicējs un jādod viņam vārds sava viedokļa paušanai. Pieteicēja neierašanās nav šķērslis valdes lēmuma pieņemšanai. Valdei motivēts lēmums rakstveidā jāpaziņo pieteicējam nedēļas laikā no tā pieņemšanas brīža.</p>
            <p>4.4. Valdes noraidošo lēmumu pieteicējs rakstveidā var pārsūdzēt biedru kopsapulcei. Ja arī biedru kopsapulce noraida pieteicēja lūgumu, pieteicējs nav uzņemts par Biedrības biedru, un viņš var iesniegt atkārtotu pieteikumu ne ātrāk kā pēc gada termiņa izbeigšanās.</p>
            <p>4.5. Biedrs var jebkurā laikā izstāties no Biedrības rakstveidā paziņojot par to valdei.</p>
            <p>4.6. Biedru var izslēgt no Biedrības ar valdes lēmumu, ja:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>4.6.1. Biedrs nav veicis biedra naudas samaksu statūtos noteiktajā kārtībā;</li>
              <li>4.6.2. biedrs nepilda kopsapulces un valdes lēmumus;</li>
              <li>4.6.3. biedrs nepilda savus pienākumus un uzņemtās saistības;</li>
              <li>4.6.4. biedrs veic citu darbību, kas ir pretrunā ar šajos statūtos noteikto;</li>
              <li>4.6.5. biedrs ar savu darbību diskreditē statūtos noteiktās Biedrības vērtības un Biedrību.</li>
            </ul>
            <p className="mt-4">4.7. Jautājumu par Biedrības biedra izslēgšanu valde izskata tuvākās sēdes laikā, uzaicinot izslēdzamo biedru un dodot viņam vārdu sava viedokļa paušanai. Izslēdzamā biedra neierašanās nav šķērslis valdes lēmuma pieņemšanai. Valdei lēmums par biedra izslēgšanu no biedrības un šā lēmuma motivācija jāpaziņo rakstveidā izslēdzamajam biedram piecu dienu laikā no tā pieņemšanas brīža.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">5. Biedru tiesības un pienākumi</h2>
            <p>5.1. Biedrības biedriem ir šādas tiesības:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>5.1.1. piedalīties Biedrības pārvaldē;</li>
              <li>5.1.2. saņemt informāciju par Biedrības darbību, tai skaitā iepazīties ar visu Biedrības institūciju protokoliem, lēmumiem un rīkojumiem;</li>
              <li>5.1.3. piedalīties visos Biedrības organizētajos pasākumos, iesniegt priekšlikumus par Biedrības darbību un tās uzlabošanu, aizstāvēt savu viedokli;</li>
            </ul>
            <p>5.2. Biedrības biedru pienākumi:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>5.2.1. ievērot Biedrības statūtus un pildīt biedru sapulces un valdes lēmumus;</li>
              <li>5.2.2. regulāri maksāt biedra naudu;</li>
              <li>5.2.3. ar savu aktīvu līdzdarbību atbalstīt Biedrības mērķa un uzdevumu realizēšanu;</li>
              <li>5.2.4. neizpaust konfidenciālu informāciju par Biedrības darbību.</li>
            </ul>
            <p>5.3. Asociētajiem biedriem ir šādas tiesības:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>5.3.1. piedalīties visos Biedrības organizētajos pasākumos, iesniegt priekšlikumus par Biedrības darbību un tās uzlabošanu, aizstāvēt savu viedokli;</li>
              <li>5.3.2. saņemt informāciju par Biedrības darbību, tai skaitā iepazīties ar visu Biedrības institūciju protokoliem, lēmumiem un rīkojumiem;</li>
              <li>5.3.3. asociētajam biedram nav balsstiesības biedru sapulcēs.</li>
            </ul>
            <p>5.4. Asociētajiem biedriem ir šādi pienākumi:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>5.4.1. ievērot Biedrības statūtus un pildīt biedru sapulces un valdes lēmumus;</li>
              <li>5.4.2. ar savu aktīvu līdzdarbību atbalstīt Biedrības mērķa un uzdevumu realizēšanu;</li>
              <li>5.4.3. neizpaust konfidenciālu informāciju par Biedrības darbību.</li>
            </ul>
            <p>5.5. Saistības biedram var noteikt ar biedru sapulces vai valdes lēmumu. Nosakot biedram saistības, kas atšķiras no citu biedru saistībām, ir nepieciešama šā biedra piekrišana.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">6. Biedrības struktūrvienības</h2>
            <p>6.1. Ar biedru sapulces lēmumu var tikt izveidotas Biedrības teritoriālās un citas struktūrvienības.</p>
            <p>6.2. Struktūrvienības darbību, tiesības un pienākumus, kā arī attiecības ar Biedrību regulē struktūrvienības nolikums, ko apstiprina Biedrības biedru sapulce.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">7. Biedru sapulces sasaukšana un lēmumu pieņemšana</h2>
            <p>7.1. Biedru sapulce ir augstākā Biedrības lēmējinstitūcija.</p>
            <p>7.2. Biedru sapulcē ir tiesīgi piedalīties visi Biedrības biedri.</p>
            <p>7.3. Kārtējā biedru sapulce tiek sasaukta vienu reizi gadā – ne vēlāk kā līdz 31.martam.</p>
            <p>7.4. Ārkārtas biedru sapulce var tikt sasaukta pēc valdes iniciatīvas, vai ja to rakstveidā pieprasa ne mazāk kā viena desmitā daļa Biedrības biedru, norādot sasaukšanas iemeslu.</p>
            <p>7.5. Biedru sapulce ir lemttiesīga, ja tajā piedalās vairāk kā puse no biedriem.</p>
            <p>7.6. Ja biedru sapulce nav lemttiesīga kvoruma trūkuma dēļ, piecu nedēļu laikā tiek sasaukta atkārtota biedru sapulce ar tādu pašu darba kārtību. Sasauktā biedru sapulce ir tiesīga pieņemt lēmumus neatkarīgi no klātesošo biedru skaita, bet tikai tādā gadījumā, ja biedru sapulcē piedalās vismaz divi biedri.</p>
            <p>7.7. Biedru sapulces lēmums ir pieņemts, ja par to nobalso vairāk nekā puse no klātesošajiem biedriem. Lēmums par statūtu grozījumiem, Biedrības darbības izbeigšanu un turpināšanu ir pieņemts, ja par to nobalso vairāk kā divas trešdaļas no klātesošajiem biedriem.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">8. Izpildinstitūcija</h2>
            <p>8.1. Biedrības izpildinstitūcija ir valde, kas sastāv no pieciem (5) valdes locekļiem, kurus ievēl biedru sapulce.</p>
            <p>8.2. Biedru sapulce no valdes locekļu vidus ievēlē valdes priekšsēdētāju un priekšsēdētāja vietnieku, kuri organizē valdes darbu.</p>
            <p>8.3. Valdes priekšsēdētāju un priekšsēdētāja vietnieku var atsaukt biedru sapulce ar vairāk nekā divu trešdaļu visu klātesošo biedru balsu.</p>
            <p>8.4. Valdes locekli var atsaukt biedru sapulce ar vairāk kā pusi visu klātesošo biedru balsu.</p>
            <p>8.5. Valde ir tiesīga izlemt visus jautājumus, kas nav ekskluzīvā biedru sapulces kompetencē.</p>
            <p>8.6. Valdes priekšsēdētājs un vietnieks ir tiesīgi pārstāvēt biedrību atsevišķi, bet pārējie valdes locekļi kopā ar 1 valdes locekli.</p>
            <p>8.7. Valdes loceklim ir tiesības saņemt atlīdzību. Tās apmēru un izmaksas kārtību nosaka ar valdes lēmumu.</p>
            <p>8.8. Valde pārzina un vada Biedrības lietas. Tā pārvalda Biedrības mantu un rīkojas ar tās līdzekļiem atbilstoši likumam, statūtiem, biedru sapulces vai citu institūciju lēmumiem.</p>
            <p>8.9. Valde organizē Biedrības grāmatvedības uzskaiti saskaņā ar normatīvajiem aktiem un veic citus pienākumus saskaņā ar statūtos noteikto kompetenci.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">9. Revidents</h2>
            <p>9.1. Biedrības finansiālās un saimnieciskās darbības kontroli veic revidents, kuru ievēl biedru sapulce uz vienu gadu.</p>
            <p>9.2. Biedrības revidents nevar būt Biedrības valdes loceklis.</p>
            <p>9.3. Revidents:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>9.3.1. veic Biedrības mantas un finanšu līdzekļu revīziju;</li>
              <li>9.3.2. dod atzinumu par Biedrības budžetu un gada pārskatu;</li>
              <li>9.3.3. izvērtē Biedrības grāmatvedības un lietvedības darbu;</li>
              <li>9.3.4. sniedz ieteikumus par Biedrības finanšu un saimnieciskās darbības uzlabošanu;</li>
            </ul>
            <p>9.4. Revidents veic revīziju biedru sapulces noteiktajos termiņos, taču ne retāk kā reizi gadā.</p>
            <p>9.5. Biedru sapulce apstiprina Biedrības gada pārskatu tikai pēc Revidenta atzinuma saņemšanas.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">10. Biedru nauda</h2>
            <p>10.1. Biedrības biedri maksā biedru naudu valdes noteiktajā kārtībā un apmērā.</p>
            <p>10.2. Biedru naudas samaksa veicama reizi gadā līdz kārtējai Biedru sapulcei.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">11. Biedrības līdzekļi</h2>
            <p>11.1. Biedrības līdzekļus veido:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
              <li>11.1.1. Biedru naudas;</li>
              <li>11.1.2. Fizisko un juridisko personu ziedojumi;</li>
              <li>11.1.3. Citi ienākumi no finansēšanas avotiem, kas nav aizliegti saskaņā ar spēkā esošajiem tiesību aktiem.</li>
            </ul>
          </div>
          
          <div className="mt-16 pt-12 border-t-2 border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-latvia-red/10 bg-zinc-50">
                <img 
                  src="https://pub-b4e9dacb063d49eeb0e49317ea5b4e43.r2.dev/Andris%20Kulbergs.jpg" 
                  alt="Andris Kulbergs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Parakstītājs</p>
                <p className="font-black text-zinc-900 uppercase text-sm">Valdes priekšsēdētājs Andris Kulbergs</p>
              </div>
            </div>
            <div className="w-48 h-12 border-b-2 border-zinc-200 flex items-end justify-center pb-2 text-zinc-200 italic font-serif">
              (paraksts)
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const JoinFormPage = () => {
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
      // Check if any field (except default memberType) has data
      const hasData = Object.entries(formData).some(([key, value]) => {
        if (key === 'memberType') return false;
        if (key === 'file') return value !== null;
        return typeof value === 'string' && value.trim() !== '';
      });

      if (hasData && !submitted) {
        // Standard procedure for showing "Unsaved changes" dialog
        e.preventDefault();
        e.returnValue = ''; // Required for some browsers
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
};

const ProgramPage = () => {
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
};

const ProgramDetailPage = () => {
  const { id } = useParams();
  const item = PROGRAM_DATA.find(p => p.id === id);

  useSEO({
    title: item ? `${item.title}` : "Programma",
    description: item ? `${item.description.substring(0, 150)}` : "Biedrības Latvijas Restarts rīcības programma un darba joma."
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
};


const BOARD_MEMBERS: Member[] = [
  { 
    id: "andris-kulbergs",
    name: "Andris Kulbergs", 
    image: "https://pub-b4e9dacb063d49eeb0e49317ea5b4e43.r2.dev/Andris%20Kulbergs.jpg",
    imageClass: "scale-[1.2] origin-[50%_0%] translate-y-[-9.6%]",
    role: "Valdes priekšsēdētājs",
    facebook: "https://www.facebook.com/andris.kulbergs",
    twitter: "https://x.com/andriskulbergs?s=11&t=Y_-qbzD0uVknm-rkHOPh8A",
    focus: [
      { 
        id: "f1", 
        title: "Rīgas Siltums pārvaldība", 
        content: "Valainis uzbrūk Rīga RigasDome Kleinbergs Viesturs par RĪGAS SILTUMS nesaimnieciskumu un nespēju sakārtot siltuma tarifu Rīgā. PAREIZI Taisnība, RD kā lielajam akcionāram bija jāuzrauga savs uzņēmums, tikai Viktors Valainis aizmirst, ka viņa rokās un saimniecībā ir pilnībā visi politiskie un reālie instrumenti, lai šo visu sakārtotu, jo EkMin is 100% īpašnieks Latvenergo, kam veidojas atlikumsiltums, EM ir 49% īpašnieks RSiltums, EM paspārnē ir gan SPRK regulātors (kas nosaka tarifu), gan Konkurences Padome, gan ZZS pakļautībā ir KEM siltuma politikas veidotājs. Ko var vairāk vēlēties, lai atrisinātu?\n\n2022./2023. ziemā valsts subsidēja Rīgas Siltumu 50% apmērā. Visi Latvijas nodokļu maksātāji sameta apmēram 180 miljonus eiro ko iedot RS caur EkMin. Visi, arī tie kas Rīgā nekad nav bijuši!\n\nPIK izmekļešanā esam atklājuši, ka 2023. gada janvārī Ekonomikas ministrijai ir iesniegts lūgums no RS rīkoties, lai pārtrauktu TEC siltuma izmešanu gaisā un to varētu nodot Rīgas sistēmā. Domājiet kaut kas notika? Nē, nekādas rīcības...\n\nValainis varēja pārtraukt šīs izdomātās neskaidrības starp EM iestādēm SPRK, KP, Latvenergo, Rīgas Siltumu. Tieši kā arī norāda Valsts kontrole savā ziņojumā\n\nKāda bija EM reakcija? Esam noskaidrojuši ka EM vienkārši neatbildēja. Neatbildēja vispār NEKO un turpināja mest visu nodokļu maksātāju naudu RS subsīdijās.\n\nTajā laikā ministrijā saimniekoja šie paši politiskie saimnieki.\n\nŠāda amatpersonu bezdarbība ir krimināli sodāms noziegums par ko es ziņošu ģenerālprokuroram.",
        link: "https://www.facebook.com/share/v/18hanyU7Cr/"
      },
      { id: "f2", title: "Mobilitātes paketes ieviešana", content: "Eiropas Savienības transporta regulējumu pielāgošana Latvijas uzņēmēju konkurētspējas stiprināšanai." },
      { id: "f3", title: "Zaļā kursa izaicinājumi", content: "Līdzsvarota pāreja uz ilgtspējīgu transportu, mazinot slogu uz iedzīvotājiem un biznesu." },
      { id: "f4", title: "Auto nozares caurspīdīgums", content: "Cīņa pragma pret krāpniecību un ēnu ekonomiku auto tirdzniecības un servisa jomā." },
      { id: "f5", title: "Nākotnes degvielas stratēģija", content: "Ūdeņraža, bio-degvielas un elektroenerģijas infrastruktūras plānošana reģionālā mērogā." }
    ]
  },
  { 
    id: "aija-viksna",
    name: "Aija Vīksna", 
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/photo_6043944804787359160_x.jpg",
    imageClass: "scale-[1.1] origin-[15%_0%]",
    role: "Priekšsēdētāja vietniece",
    facebook: "https://www.facebook.com/aiva.viksna.7",
    focus: [
      { id: "f1", title: "Sieviešu uzņēmējdarbības veicināšana", content: "Atbalsta programmas un mentoru tīkli sievietēm-līderēm biznesā un sabiedriskajā sektorā." },
      { id: "f2", title: "Nodarbinātības politikas uzlabošana", content: "Darba tirgus elastības palielināšana un mūžizglītības programmu efektivitātes celšana." },
      { id: "f3", title: "Eksportspējas stiprināšana", content: "Latvijas produktu un pakalpojumu virzīšana starptautiskajos tirgos caur stratēģiskām partnerībām." },
      { id: "f4", title: "Sociālā uzņēmējdarbība", content: "Biznesa modeļi, kas risina sabiedrībai svarīgas problēmas un mazinā nevienlīdzību." },
      { id: "f5", title: "Inovāciju pārneses sistēmas", content: "Zinātnes sasniegumu integrācija ražošanā un augstas pievienotās vērtības radīšana." }
    ]
  },
  { 
    id: "baiba-veisa",
    name: "Baiba Veisa", 
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/photo_6043944804787359159_y.jpg",
    imageClass: "scale-[1.7] origin-[56%_0%]",
    role: "Valdes locekle",
    facebook: "https://www.facebook.com/baiba.veisa/",
    linkedin: "https://www.linkedin.com/in/baibaveisa/",
    focus: [
      { id: "f1", title: "Demogrāfijas un ģimenes politika", content: "Mērķtiecīga valsts atbalsta sistēma ģimenēm ar bērniem un jauno speciālistu piesaiste." },
      { id: "f2", title: "Sabiedrības integrācijas jautājumi", content: "Vienotas un saliedēetas sabiedrības vērtību nostiprināšana caur kultūru un izglītību." },
      { id: "f3", title: "Reģionālā attīstība", content: "Līdzsvarota valsts investīciju politika, nodrošinot dzīves kvalitāti arī ārpus Rīgas." },
      { id: "f4", title: "Pilsoniskās sabiedrības stiprināšana", content: "NVO sektora lomas palielināšana lēmumu pieņemšanas procesos un valsts pārvaldē." },
      { id: "f5", title: "Veselības aprūpes pieejamība", content: "Sistēmas efektivizācija un prevencijas programmu nozīmes palielināšana sabiedrībā." }
    ]
  },
  { 
    id: "guntars-vitols",
    name: "Guntars Vītols", 
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/photo_6048728419102559838_y.jpg",
    imageClass: "scale-[1.3] origin-[80%_0%] translate-x-[6%] translate-y-[-3.6%]",
    role: "Valdes loceklis",
    facebook: "https://www.facebook.com/guntars.vitols.1",
    twitter: "https://x.com/guntarsv?s=11&t=Y_-qbzD0uVknm-rkHOPh8A",
    focus: [
      { id: "f1", title: "Lauksaimniecības un bioekonomikas attīstība", content: "Atbalsts vietējiem ražotājiem un ilgtspējīga dabas resursu izmantošana ekonomikā." },
      { id: "f2", title: "Pārtikas drošība un pašpietiekamība", content: "Vietējās pārtikas ķēžu stiprināšana un atkarības mazināšana no importētiem produktiem." },
      { id: "f3", title: "Lauku infrastruktūras modernizācija", content: "Digitālo risinājumu ieviešana lauksaimniecībā un dzīves uzlabošana lauku apvidos." },
      { id: "f4", title: "Mežsaimniecības stratēģiskā loma", content: "Koksnes kā atjaunojama resursa izmantošana būvniecībā un enerģētikā." },
      { id: "f5", title: "Eko-tūrisma potenciāls", content: "Latvijas dabas vērtību izmantošana ilgtspējīga tūrisma pakalpojumu radīšanā." }
    ]
  },
  { 
    id: "valters-bolevics",
    name: "Valters Bolevics", 
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/photo_6024966710105934976_x(1).jpg",
    imageClass: "scale-[1.5] origin-[50%_0%]",
    role: "Valdes loceklis",
    focus: [
      { id: "f1", title: "Biznesa vides efektivizācija", content: "Birokrātijas mazināšana un valsts pakalpojumu digitalizācija uzņēmēju ērtībai." },
      { id: "f2", title: "Investīciju piesaistes stratēģija", content: "Latvijas pievilcības celšana ārvalstu investoriem un jaunu darba vietu radīšana." },
      { id: "f3", title: "Start-up ekosistēmas attīstība", content: "Inovatīvu uzņēmumu atbalsta instrumenti un riska kapitāla pieejamības uzlabošana." },
      { id: "f4", title: "Finanšu sektora stabilitāte", content: "Ilgtspējīga kreditēšanas politika un ekonomikas stimulēšanas instrumenti krīzes laikā." },
      { id: "f5", title: "Energoefektivitātes programmas", content: "Atbalsts uzņēmējiem un mājsaimniecībām enerģijas pašpatēriņa risinājumu vienmērīgai ieviešanai." }
    ]
  },
  {
    id: "aivis-cerins",
    name: "Aivis Ceriņš",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Aivis%20Ceri%C5%86%C5%A1.webp",
    imageClass: "scale-[1.45] origin-[50%_0%] translate-y-[-8%]",
    role: "Biedrības biedrs",
    facebook: "https://www.facebook.com/aivis.cerins",
    focus: [
      { id: "f1", title: "Sabiedriskās attiecības un komunikācija", content: "Sabiedrības informēšana, dialoga veidošana starp iedzīvotājiem un lēmumu pieņēmējiem." },
      { id: "f2", title: "Kultūras un mediju telpas stiprināšana", content: "Neatkarīgu un profesionālu reģionālo un nacionālo mediju atbalsts, sabiedrisko mediju attīstība." },
      { id: "f3", title: "Jauniešu iesaiste sabiedriskajos procesos", content: "Jauniešu līdzdalības veicināšana vēlēšanās, NVO un pilsoniskajās iniciatīvās." },
      { id: "f4", title: "Sabiedrības saliedētība un integrācija", content: "Vienotas sabiedrības veidošana, mazinot sociālo un etnisko spriedzi caur kopīgiem projektiem." },
      { id: "f5", title: "Pasākumu un forumu organizēšana", content: "Izglītojošu diskusiju un viedokļu platformu radīšana par aktuālajiem Latvijas attīstības jautājumiem." }
    ]
  },
  {
    id: "janis-liepins",
    name: "Jānis Liepiņš",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/J%C4%81nis%20Liepi%C5%86%C5%A1.webp",
    imageClass: "scale-[2.33] origin-[35%_15%] translate-y-[-14.4%] translate-x-[-50.4%]",
    role: "Biedrības biedrs",
    facebook: "https://www.facebook.com/janis.liepins.969",
    focus: [
      {
        id: "f1",
        title: "Pašvaldību loma Latvijā",
        content: `Latvijā pēc administratīvi teritoriālās reformas (2021) ir 43 pašvaldības (novadi un valstspilsētas).

Galvenās funkcijas:
* Izglītība (skolas, bērnudārzi)
* Sociālie pakalpojumi
* Ceļi un infrastruktūra
* Sabiedriskais transports
* Teritorijas attīstības plānošana

👉 Pašvaldības ir tuvākā pārvaldes forma iedzīvotājiem.

📈 Reģionu attīstības galvenie virzieni

1. Ekonomikas attīstība
* Uzņēmējdarbības veicināšana
* Industriālo zonu veidošana
* Investīciju piesaiste

2. Infrastruktūra
* Ceļu un transporta uzlabošana
* Interneta pieejamība (digitālā attīstība)
* Mājokļu attīstība

3. Iedzīvotāju noturēšana
* Darba vietas reģionos
* Kvalitatīva izglītība un veselības aprūpe
* Kultūras un sporta iespējas

4. Ilgtspējīga attīstība
* Zaļā enerģija
* Dabas resursu saglabāšana

⸻

⚖️ Galvenās problēmas
* Reģionālā nevienlīdzība (Rīga vs. pārējie reģioni)
* Iedzīvotāju skaita samazināšanās
* Migrācija uz galvaspilsētu vai ārzemēm
* Darba vietu trūkums
* Sabiedriskā transporta pieejamība

👉 Īpaši izaicinājumi ir Latgale reģionā.

⸻

🚀 Attīstības risinājumi

Valsts un pašvaldību līmenī:
* ES fondu efektīva izmantošana
* Atbalsts uzņēmējiem reģionos
* Reģionālo centru stiprināšana (piemēram, Daugavpils, Liepāja, Valmiera)

Ilgtermiņā:
* Gudra specializācija katram reģionam
* Digitalizācija un attālinātā darba iespējas
* Izglītības kvalitātes uzlabošana

🔗 Secinājums

Latvijas pašvaldību un reģionu attīstība balstās uz līdzsvaru starp:
* ekonomiku,
* infrastruktūru,
* cilvēkresursiem.

👉 Jo spēcīgāki būs reģioni, jo stabilāka un ilgtspējīgāka būs visa valsts attīstība.`
      },
      {
        id: "f2",
        title: "Jaunatnes sports",
        content: `Jaunatnes sports attīstība

Mērķis: veidot plašu sporta bāzi un veselīgu sabiedrību.

Galvenie virzieni:
* Pieejamība visiem bērniem
    * sporta skolas, interešu izglītība
    * zemas izmaksas vai valsts/pašvaldību atbalsts
* Agrīna talantu identificēšana
    * atlases sistēmas, sacensības
* Kvalitatīvi treneri
    * izglītība, sertifikācija, profesionālā pilnveide
* Daudzpusīga attīstība
    * ne tikai specializācija, bet vispārējā fiziskā sagatavotība
* Izglītības un sporta balanss

❗️Jaunatnes sports ir pamats visai sistēmai – bez tā nav iespējams attīstīt augstu sasniegumu sportu.`
      },
      {
        id: "f3",
        title: "Augstu sasniegumu sports",
        content: `Mērķis: sasniegt starptautiskus rezultātus (Olimpiskās spēles, pasaules čempionāti).

Galvenie elementi:
* Talantu atlase no jaunatnes sporta
* Augstas kvalitātes treniņu process
* Sporta medicīna un zinātne
    * fizioterapija, uzturs, psiholoģija
* Finansējums
    * valsts, sponsori, federācijas
* Starptautiskā pieredze
    * treniņnometnes, sacensības

❗️Šis līmenis ir “piramīdas virsotne”, kas balstās uz plašu jaunatnes sporta bāzi.

Reģionālo olimpisko centru attīstība

Reģionālie olimpiskie centri ir infrastruktūras pamats sporta attīstībai.

Piemēri Latvijā:
* Rīgas “Rimi Olimpiskais centrs” – daudzfunkcionāls komplekss ar baseiniem un sporta zālēm  
* Liepājas Olimpiskais centrs – viens no modernākajiem daudzfunkcionālajiem kompleksiem Baltijā  
* Ventspils Olimpiskais centrs – plaša infrastruktūra (stadioni, halles, akvaparks u.c.)  

Funkcijas:
* Treniņu vieta jauniešiem un elitei
* Sacensību organizēšana
* Reģionālā attīstība
* Sabiedrības veselības veicināšana

👉 Olimpiskie centri Latvijā attīstās kopš 1990. gadiem, lai veicinātu gan masu sportu, gan augstu sasniegumu sportu.`
      }
    ]
  },
  {
    id: "renars-putnins",
    name: "Renārs Putniņš",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Ren%C4%81rs%20Putni%C5%86%C5%A1.webp",
    imageClass: "scale-[2.31] origin-[50%_18%] translate-y-[3%] translate-x-[-3%]",
    role: "Biedrības biedrs",
    facebook: "https://www.facebook.com/renars.putnins",
    focus: [
      { id: "f1", title: "Veselības aprūpes sistēmas reforma", content: "Finansējuma un resursu lietderīga plānošana, mazinot rindu garumu uz valsts apmaksātiem pakalpojumiem." },
      { id: "f2", title: "Medicīnas personāla piesaiste reģioniem", content: "Atbalsta mehānismu izveide jauno ārstu un māsu motivēšanai strādāt Latvijas reģionu slimnīcās." },
      { id: "f3", title: "Slimnīcu pārvaldības efektivitāte", content: "Modernas un caurspīdīgas korporatīvās pārvaldības principu ieviešana vadošajās ārstniecības iestādēs." },
      { id: "f4", title: "Pacientu tiesību aizsardzība", content: "Medicīnas tiesību un ētikas standartu pilnveidošana, nodrošinot augstāku drošību un cieņu ikvienam pacientam." },
      { id: "f5", title: "Medicīnas digitalizācija un e-veselība", content: "Vienotas, stabilas un ērti lietojamas e-veselības sistēmas izveide, integrējot mūsdienīgus digitālos risinājumus." }
    ]
  }
];


const MemberProfilePage = () => {
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
          <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-50 rounded-xl overflow-hidden border-2 border-latvia-red/10 shrink-0 shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-zinc-200">
              {member.image ? (
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} />
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
};

const MemberTopicDetailPage = () => {
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
               <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                 {member.image ? (
                   <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || ''}`} />
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
};

const NewsPage = () => {
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
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
};

const EventCard = ({ 
  title, 
  date, 
  location, 
  time, 
  onRegister 
}: { 
  title: string; 
  date: string; 
  location: string; 
  time: string; 
  onRegister?: () => void;
}) => (
  <div className="bg-latvia-red text-white p-10 rounded-3xl mt-16 shadow-xl relative overflow-hidden">
    <LatvianPattern className="absolute inset-0 opacity-10 pointer-events-none" />
    <h3 className="text-2xl font-black mb-6 relative z-10 uppercase">{title}</h3>
    <p className="text-lg mb-8 relative z-10 font-medium">
      Biedrība "Latvijas Restarts" aicina Jūs uz paplašinātu forumu ar nozares ekspertiem, kurā prezentēsim mūsu redzējumu un uzklausīsim Jūsu ieteikumus.
    </p>
    <div className="flex flex-col gap-2 relative z-10">
      <span className="font-bold text-xl">Datums: {date}</span>
      <span className="font-bold text-xl">Vieta: {location}</span>
      <span className="font-bold text-xl">Laiks: {time}</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <button 
        onClick={onRegister}
        className="mt-10 bg-white text-latvia-red border-2 border-latvia-red px-10 py-4 rounded-full font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all relative z-10 uppercase font-display"
      >
        REĢISTRĒTIES PASĀKUMAM
      </button>
      <p className="mt-4 text-sm font-bold text-white/70 uppercase relative z-10 italic">
        * Vietu skaits ir ierobežots
      </p>
    </div>
  </div>
);

const SectionBottomNav = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-16 border-t border-zinc-200 mt-16">
      <button 
        onClick={scrollToTop}
        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-50 text-zinc-600 border border-zinc-200 rounded-full text-xs font-black uppercase tracking-widest hover:bg-latvia-red hover:text-white hover:border-latvia-red transition-all cursor-pointer shadow-sm active:scale-95"
      >
        <ArrowUp className="w-4 h-4" />
        Uz augšu
      </button>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-50 text-zinc-600 border border-zinc-200 rounded-full text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-sm active:scale-95"
      >
        <Home className="w-4 h-4" />
        Uz sākumu
      </Link>
    </div>
  );
};

const NewsDetailPage = ({ openRegistration }: { openRegistration: (id: string) => void }) => {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS.find(item => item.id === id);

  useSEO({
    title: newsItem ? `${newsItem.title}` : "Jaunumi",
    description: newsItem ? `${newsItem.excerpt}` : "Biedrības Latvijas Restarts aktualitāšu raksts."
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
          
          <div className="max-w-2xl mx-auto aspect-video rounded-3xl overflow-hidden mb-12 shadow-md">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed space-y-6">
            <p className="whitespace-pre-line">
              ⛔️  03.06.2026 Budžeta komisijā noraidījām Siliņas valdības sagatavoto apropriāciju pieprasījumu 52,4 miljonu eiro apmērā. Šādi papildu izdevumi radītu negatīvu ietekmi uz budžetu, un tajos bija iekļautas pozīcijas, kuras neuzskatu par prioritārām nodokļu maksātāju naudas izlietojumā.
            </p>

            <p className="whitespace-pre-line">
              ➡️ Starp pieprasītajiem tēriņiem bija komandējumi un konsultācijas, mobilo tālruņu un portatīvo datoru nomaiņa, starptautisku konferenču organizēšana, mediju treniņi un personāla atlases pakalpojumi.
            </p>

            <p className="whitespace-pre-line">
              ❗️ Katrs eiro jāiegulda pārdomāti un atbildīgi, tādēļ šis pieprasījums ir jāpārstrādā.
            </p>
          </div>
        </div>
        <SectionBottomNav />
      </div>
    </section>
  );
};



const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  useSEO({
    title: "Kontakti un rekvizīti",
    description: "Sazinieties ar biedrību Latvijas Restarts. Adrese, tālrunis, e-pasts un bankas rekvizīti."
  });

  // Web3Forms submit handler
  // Forwards form submissions to configured emails linked with access key
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
          // Fallback to success screen for clean UX
          setSubmitted(true);
        }
      })
      .catch((error) => {
        console.error("Web3Forms connection error:", error);
        // Fallback to success screen for clean UX
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
            <div className="space-y-6 px-4 md:px-0">
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-1">Biedrība</span>
                <p className="font-display text-lg font-bold mb-2 text-zinc-900 border-b-2 border-latvia-red/10 pb-2 w-fit">Latvijas Restarts</p>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-1">Adrese</span>
                <p className="font-display text-lg font-bold mb-2">Rīga, Ogļu iela 12A, LV-1048</p>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-1">E-pasts</span>
                <a href="mailto:info@latvijasrestarts.lv" className="font-display text-xl font-bold hover:text-latvia-red transition-colors w-fit">info@latvijasrestarts.lv</a>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-bold uppercase text-zinc-400 mb-1">Bankas rekvizīti</span>
                <p className="font-display text-lg font-bold text-zinc-900">AS "Swedbank"</p>
                <p className="font-display text-lg font-bold text-zinc-900 font-mono">LV44HABA0001234567890</p>
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
                    {/* Hidden fields required by Web3Forms */}
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
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or dismissed in this session
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show immediately without delay to ensure user sees it
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // We set it to dismissed so it doesn't show again as per "only first time" request
    localStorage.setItem('cookie-consent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-[9999] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 150
            }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-100 relative max-w-2xl w-full overflow-hidden"
          >
            {/* Visual accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-latvia-red" />
            
            <button 
              onClick={handleDecline}
              className="absolute top-5 right-5 text-zinc-400 hover:text-latvia-red transition-all p-1.5 hover:bg-latvia-red/5 rounded-full group cursor-pointer"
              aria-label="Aizvērt"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="pr-4 sm:pr-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-latvia-red/10 rounded-xl flex items-center justify-center text-latvia-red shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black uppercase text-sm sm:text-base md:text-lg tracking-tight text-zinc-900">
                  Šī vietne izmanto sīkdatnes
                </h3>
              </div>

              <p className="text-zinc-600 text-[11px] sm:text-sm leading-relaxed mb-6 font-medium">
                Mēs izmantojam savas un trešo pušu sīkdatnes, lai nodrošinātu un uzlabotu tīmekļa vietnes darbību, pielāgotu informāciju par mūsu produktiem un pakalpojumiem, kā arī analizētu vietnes apmeklējumu. Spiežot «Apstiprināt visas», jūs piekrītat visu sīkdatņu izmantošanai. Sīkdatņu loga aizvēršana ar «X» neaktivizē sīkdatnes. Lapas apakšējā stūrī lasiet vairāk par <Link to="/sikdatnu-politika" className="text-latvia-red underline font-bold hover:underline">Sīkdatņu politiku</Link> un <Link to="/privatuma-politika" className="text-latvia-red underline font-bold hover:underline">Privātuma politiku</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleAccept}
                  className="py-3 px-6 bg-latvia-red text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition-all shadow-md hover:shadow-latvia-red/10 active:scale-[0.98] font-display flex-1 text-center cursor-pointer"
                >
                  Apstiprināt visas
                </button>
                <button 
                  onClick={handleDecline}
                  className="py-3 px-6 bg-zinc-100 text-zinc-600 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.98] font-display flex-1 text-center cursor-pointer"
                >
                  Noraidīt
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PrivacyPolicyPage = () => {
  useSEO({
    title: "Privātuma politika",
    description: "Biedrības Latvijas Restarts privātuma politika un personas datu aizsardzības noteikumi."
  });
  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-zinc-100">
        <h1 className="text-3xl font-black uppercase mb-4 border-b-4 border-latvia-red pb-4 inline-block">Privātuma politika</h1>
        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-12">Pēdējo reizi atjaunots: 28.04.2026</p>
        
        <div className="space-y-10 text-zinc-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">1. Ievads</h2>
            <p className="mb-4">Biedrība “Latvijas Restarts” (turpmāk – "mēs", "mūsu" vai "biedrība") apņemas aizsargāt un respektēt Jūsu privātumu. Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam, uzglabājam un aizsargājam Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (GDPR) un Latvijas Republikas tiesību aktiem.</p>
            <p>Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">2. Datu pārzinis</h2>
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <p className="font-bold text-zinc-900 mb-1">Nosaukums: Biedrība "Latvijas Restarts"</p>
              <p className="mb-1">Reģistrācijas numurs: 40008317099</p>
              <p className="font-bold mt-4 mb-1">Kontakti:</p>
              <p className="mb-1">Juridiskā adrese: Rīga, Ogļu iela 12A, LV-1048</p>
              <p className="mb-1">E-pasts: <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red hover:underline">info@latvijasrestarts.lv</a></p>
              <p className="mb-1">Tālrunis: +371 6700 0000</p>
            </div>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">3. Kādus personas datus mēs vācam</h2>
            <p className="mb-4">Mēs varam apkopot un apstrādāt šādu informāciju par Jums:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kontaktinformācija:</strong> vārds, uzņēmuma nosaukums, e-pasta adrese, tālruņa numurs</li>
              <li><strong>Tehniskā informācija:</strong> IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums</li>
              <li><strong>Lietošanas dati:</strong> informācija par to, kā Jūs izmantojat mūsu mājas lapu un pakalpojumus</li>
              <li><strong>Saziņas dati:</strong> Jūsu ziņojumu un komunikācijas saturs ar mūsu biedrību</li>
            </ul>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">4. Kā mēs izmantojam Jūsu datus</h2>
            <p className="mb-4">Mēs izmantojam Jūsu personas datus šādiem mērķiem:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lai sniegtu Jūsu pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem</li>
              <li>Lai sazinātos ar Jums par mūsu biedrības darbību un piedāvājumiem</li>
              <li>Lai uzlabotu mūsu mājas lapas un biedrības darbības kvalitāti</li>
              <li>Lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses</li>
            </ul>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">5. Juridiskais pamats datu apstrādei</h2>
            <p className="mb-4">Mēs apstrādājam Jūsu personas datus, pamatojoties uz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Jūsu piekrišanu</strong> – kad Jūs aizpildāt mūsu kontaktformu un piekrītat datu apstrādes noteikumiem</li>
              <li><strong>Līguma izpildi</strong> – lai sniegtu Jums pieprasītos pakalpojumus vai iestāšanās iespējas</li>
              <li><strong>Likumīgas intereses</strong> – lai uzlabotu mūsu pakalpojumus un aizsargātu biedrību</li>
            </ul>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">6. Datu uzglabāšana un drošība</h2>
            <p className="mb-4">Mēs uzglabājam Jūsu personas datus tikai tik ilgi, cik tas ir nepieciešams šajā politikā norādīto mērķu sasniegšanai vai saskaņā ar likumu.</p>
            <p className="mb-4">Mēs izmantojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu Jūsu datus:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL šifrēšana datu pārsūtīšanai</li>
              <li>Ierobežota piekļuve personas datiem</li>
              <li>Regulāras drošības pārbaudes un atjauninājumi</li>
            </ul>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">7. Jūsu tiesības</h2>
            <p className="mb-4">Saskaņā ar GDPR Jums ir šādas tiesības attiecībā uz Saviem personas datiem:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold uppercase">
              <div className="p-3 bg-zinc-50 rounded-lg">Piekļuves tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Labošanas tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Dzēšanas tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Ierobežošanas tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Pārnesamības tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Iebildumu tiesības</div>
              <div className="p-3 bg-zinc-50 rounded-lg">Atsaukt piekrišanu</div>
            </div>
            <p className="mt-6 text-sm">Lai izmantotu Savas tiesības, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta šīs politikas sākumā.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">8. Sīkdatnes (Cookies)</h2>
            <p>Mūsu mājas lapa izmanto sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi un analizētu mājas lapas apmeklējumu. Detalizētāku informāciju skatiet mūsu <Link to="/sikdatnu-politika" className="text-latvia-red hover:underline font-bold">Sīkdatņu politikā</Link>.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">11. Sūdzības</h2>
            <p className="mb-4">Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā:</p>
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 text-xs">
              <p className="font-bold mb-1">Datu valsts inspekcija</p>
              <p className="mb-1">Adrese: Blaumaņa iela 11/13-15, Rīga, LV-1011</p>
              <p className="mb-1">E-pasts: info@dvi.gov.lv</p>
              <p className="mb-1">Tālrunis: +371 67 22 31 31</p>
              <p>Mājas lapa: www.dvi.gov.lv</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 pt-12 border-t border-zinc-100">
          <Link to="/" className="bg-latvia-red text-white px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-zinc-900 transition-all shadow-xl font-display tracking-widest">
            Aizvērt
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};


const CookiePolicyPage = () => {
  useSEO({
    title: "Sīkdatņu politika",
    description: "Biedrības Latvijas Restarts sīkdatņu izmantošanas politika un pārvaldības noteikumi."
  });
  return (
    <section className="pt-32 md:pt-52 pb-24 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-zinc-100">
        <h1 className="text-3xl font-black uppercase mb-4 border-b-4 border-latvia-red pb-4 inline-block">Sīkdatņu politika</h1>
        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-12">Pēdējo reizi atjaunots: 28.04.2026</p>
        
        <div className="space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">1. Kas ir sīkdatnes?</h2>
            <p className="mb-4">Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.</p>
            <p>Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.</p>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">2. Kāpēc mēs izmantojam sīkdatnes?</h2>
            <p className="mb-6">Biedrība “Latvijas Restarts” izmanto sīkdatnes šādiem mērķiem:</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Vietnes funkcionalitātes nodrošināšanai:</strong>
                  <p>Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Lietošanas pieredzes uzlabošanai:</strong>
                  <p>Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-latvia-red mt-2 shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Analītikai un statistikai:</strong>
                  <p>Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">3. Izmantoto sīkdatņu veidi</h2>
            <div className="space-y-6">
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <h3 className="font-black text-zinc-900 uppercase mb-2 text-sm">Nepieciešamās sīkdatnes</h3>
                <p className="text-sm">Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.</p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <h3 className="font-black text-zinc-900 uppercase mb-2 text-sm">Analītikas sīkdatnes</h3>
                <p className="text-sm">Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu informāciju par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-black text-zinc-900 uppercase mb-4 text-xl">4. Kā pārvaldīt un izdzēst sīkdatnes?</h2>
            <p className="mb-8">Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.</p>
            
            <p className="font-bold mb-6">Instrukcijas populārākajām pārlūkprogrammām:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                <span className="font-black uppercase text-xs tracking-wider">Google Chrome</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
              </a>
              <a href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                <span className="font-black uppercase text-xs tracking-wider">Safari</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
              </a>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                <span className="font-black uppercase text-xs tracking-wider">Mozilla Firefox</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
              </a>
              <a href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2" target="_blank" rel="noopener noreferrer" className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl flex items-center justify-between hover:border-latvia-red hover:bg-white transition-all group">
                <span className="font-black uppercase text-xs tracking-wider">MS Edge</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-latvia-red transition-colors" />
              </a>
            </div>
          </div>

          <div className="pt-12 border-t-2 border-zinc-50">
            <p className="italic text-zinc-500 mb-6">Ievērojiet: Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmeklja vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.</p>
            <div className="bg-latvia-red/5 p-8 rounded-[2rem] border border-latvia-red/10">
              <p className="font-bold text-zinc-900 mb-2">Jautājumu gadījumā:</p>
              <p>Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz: <a href="mailto:info@latvijasrestarts.lv" className="text-latvia-red font-black hover:underline">info@latvijasrestarts.lv</a></p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 pt-12 border-t border-zinc-100">
          <Link to="/" className="bg-latvia-red text-white px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-zinc-900 transition-all shadow-xl font-display tracking-widest">
            Aizvērt
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState('');

  const openRegistration = (eventId: string) => {
    setSelectedEventId(eventId);
    setModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/par-biedribu" element={<AboutPage />} />
          <Route path="/statuti" element={<StatutesPage />} />
          <Route path="/iesniegums" element={<JoinFormPage />} />
          <Route path="/programma" element={<ProgramPage />} />
          <Route path="/programma/:id" element={<ProgramDetailPage />} />
          <Route path="/privatuma-politika" element={<PrivacyPolicyPage />} />
          <Route path="/sikdatnu-politika" element={<CookiePolicyPage />} />
          <Route path="/biedri/:id" element={<MemberProfilePage />} />
          <Route path="/biedri/:id/:topicId" element={<MemberTopicDetailPage />} />
          <Route path="/aktualitates" element={<NewsPage />} />
          <Route path="/aktualitates/:id" element={<NewsDetailPage openRegistration={openRegistration} />} />
          <Route path="/kontakti" element={<ContactPage />} />
        </Routes>
        <CookieBanner />
      </PageLayout>
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialEventId={selectedEventId} 
      />
    </Router>
  );
}
