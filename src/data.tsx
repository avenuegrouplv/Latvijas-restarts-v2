import React from 'react';
import { 
  Scale, Users, Briefcase, CircleDollarSign, Baby, 
  TrendingUp, FileText, Zap, Heart, ShieldCheck, 
  Globe, Lightbulb, Target, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import { NavItem, Member, NewsItem, GoalItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sākums', href: '/' },
  { label: 'Par biedrību', href: '/par-biedribu' },
  { label: 'Programma', href: '/programma' },
  { label: 'Aktualitātes', href: '/aktualitates' },
  { label: 'Kontakti', href: '/kontakti' },
];

export const PROGRAM_DATA = [
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

export const GOALS: GoalItem[] = [
  {
    number: "01",
    title: "Ekonomikas restarts",
    desc: "Veicināt inovatīvu uzņēmējdarbību un birokrātijas mazināšanu Latvijas konkurētspējai."
  },
  {
    number: "02",
    title: "Taisnīga pārvaldība",
    desc: "Caurspīdīga valsts pārvalde un atbildība pret katru Latvijas iedzīvotāju."
  },
  {
    number: "03",
    title: "Modernas tehnoloģijas",
    desc: "Digitālā transformācija visos līmeņos – no izglītības līdz valsts pakalpojumiem."
  },
  {
    number: "04",
    title: "Cilvēkkapitāls",
    desc: "Ieguldījums izglītībā un veselībā kā galvenais valsts attīstības dzinējspēks."
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "pilsoniska-sabiedriba-un-valsts-finansejums",
    date: "07.08.2026",
    title: "Jānis Jenzis: Pilsoniskā sabiedrība un valsts finansējums",
    excerpt: "“Vienmēr esmu iestājies par stiprām NVO, sabiedrības līdzdalību lēmumu pieņemšanā, aktīvāku pilsonisko sabiedrību. Visai nodokļu maksātāju naudai jāaiziet atbalstam tām NVO, kas dara svētīgu darbu...”",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/janis%20jenzis3.webp",
    imageClass: "object-cover object-top",
    detailImageClass: "object-contain bg-zinc-50 w-full h-full",
    content: [
      "Vienmēr esmu iestājies par stiprām NVO, sabiedrības līdzdalību lēmumu pieņemšanā, aktīvāku pilsonisko sabiedrību. Esmu ieguldījis pats savu laiku bez atlīdzības darbojoties dažādās organizācijās, sarēķināju, ka dzīves laikā tie ir 2 pilni gadi. Uzskatu, ka sabiedrībai ir jādod, jākalpo, nevis jāprasa no tās. Kalpošana atmaksājas un labie darbi tiek uzskaitīti tur augšā un enerģijas veidā atgriežas ar uzviju.",
      "Pēdējā laika diskusijas ietvaros esmu noraizējies, ka ap 50 marginālu cilvēku, kas pulcējas jebkurā protestā par jebkuru tēmu, izvelk Palestīnas karogus un ir dusmīgi, ka vairs nevarēs saņemt valsts finansējumu, uzdodas par mums - par pilsonisko sabiedrību - un it kā raizējas par demokrātijas nākotni.",
      "Esmu par demokrātiju un brīvu iespēju paust savu viedokli arī sarežģītā Izraēlas un Palestīnas konfliktā, bet ne par mūsu, nodokļu maksātāju naudu.",
      "10% NVO, kas faktiski, būdamas atsevišķu partiju jauniešu jeb satelīta organizācijas, ir saņēmušas valsts finansējumu diezgan mīklainos apstākļos un tagad met ēnu uz visu NVO sektoru, kuram esam pateicību parādā, ka daudzas sabiedrības grupas dzīvo labāk. Vai tās būtu organizācijas, kas iestājas par pacientu tiesībām, par cilvēku ar īpašām vajadzībām ikdienas nepieciešamībām, par mūsu bērnu un jauniešu veselību, par cilvēku, paliatīvās aprūpes klientu, tiesībām cieņpilni aiziet no šīs dzīves, vai tās organizācijas, kas pārstāv seniorus, sniedz sociālus pakalpojumus un dara citu svētus darbus.",
      "Es atbalstu premjerministru Andri Kulbergu, ka neviens cents no valsts budžeta nevar aiziet organizācijām, kuri grib protestēt protestu dēļ, izvilkt Palestīnas karogu vai palielināt nelegālo imigrantu krīzi Latvijā. Un šeit ir vajadzīga pilnīga finanšu caurskatāmība un pārraudzība. Visai nodokļu maksātāju naudai jāaiziet atbalstam tām NVO, kas dara svētīgu darbu.",
      "Autors: Jānis Jenzis"
    ]
  },
  {
    id: "es-kohezijas-politika",
    date: "16.07.2026",
    title: "Aiva Vīksna: Jāmaina ES kohēzijas politika",
    excerpt: "“Es mainītu ES kohēzijas politiku - no naudas apgūšanas uz izmērāmu ekonomisko atdevi. Katram Eiropas eiro Latvijā jārada lielāka produktivitāte, eksports, privātās investīcijas...”",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Prioritates.webp",
    imageClass: "object-[center_34%]",
    detailImageClass: "object-contain bg-zinc-50 w-full h-full",
    content: [
      "Ja man būtu iespēja mainīt vienu lietu ES budžetā vai ES politikā, kas dotu vislielāko ieguvumu Latvijai nākamajos 10 – 20 gados?\n\nĪsā mana atbilde:\n“Es mainītu ES kohēzijas politiku - no naudas apgūšanas uz izmērāmu ekonomisko atdevi. Katram Eiropas eiro Latvijā jārada lielāka produktivitāte, eksports, privātās investīcijas un labi apmaksātas darbavietas.”",
      "Manuprāt, viena pārmaiņa, kas Latvijai dotu vislielāko ieguvumu nākamajos 10 - 20 gados, būtu ES kohēzijas politikas pārorientēšana no naudas apgūšanas uz produktivitātes, privāto investīciju un reģionu ekonomiskās jaudas palielināšanu.",
      "Ja man būtu iespēja mainīt vienu lietu Eiropas Savienības budžetā, es panāktu, lai kohēzijas finansējuma galvenais kritērijs būtu nevis tas, cik daudz naudas valsts ir iztērējusi, bet gan tas, kādu ilgtermiņa ekonomisko atdevi šī nauda rada.",
      "Latvijai nākamajos 10 - 20 gados vairs nepietiek tikai ar jauniem ceļiem, renovētām ēkām un atsevišķiem projektiem. Mums nepieciešams Eiropas finansējumu daudz mērķtiecīgāk ieguldīt produktivitātē, eksportspējīgos uzņēmumos, tehnoloģijās, enerģētiskajā neatkarībā, profesionālajā izglītībā un reģionu uzņēmējdarbībā.",
      "Es rosinātu noteikt, ka būtiska kohēzijas finansējuma daļa jāizmanto kopā ar privāto kapitālu. Katram Eiropas budžeta eiro būtu jāpiesaista papildu privātās investīcijas, jārada labi apmaksātas darbavietas un jāpalielina Latvijas eksports.",
      "Tas būtu īpaši nozīmīgi Latvijas reģioniem. Finansējums būtu jāpiešķir ne tikai pēc iedzīvotāju skaita, bet arī ņemot vērā pierobežas drošību, iedzīvotāju skaita samazināšanos, attālumu no lielajiem Eiropas tirgiem un infrastruktūras izmaksas.",
      "Mūsu mērķim jābūt skaidram, ka pēc 15 vai 20 gadiem Latvijai nav jākļūst par valsti, kas joprojām gaida nākamo Eiropas fondu periodu. Latvijai jākļūst par valsti, kuras uzņēmumi, cilvēkkapitāls un reģioni spēj paši radīt arvien lielākus ienākumus.",
      "Tādēļ mana viena izvēle būtu Eiropas kohēzijas politika, kas finansē nevis patēriņu un formālu naudas apguvi, bet Latvijas ekonomisko izrāvienu.",
      "Šāda nostāja is īpaši aktuāla, jo ES pašlaik apspriež gandrīz divus triljonus eiro lielo budžetu 2028. - 2034. gadam, vienlaikus palielinot finansējumu konkurētspējai, drošībai un aizsardzībai. Latvijai kohēzijas finansējuma saglabāšana ir oficiāli noteikta kā viena no galvenajām sarunu prioritātēm, un Eiropas Komisija norāda, ka Latvijas investīciju atjaunošanos jau būtiski veicina ES fondu ieplūde.",
      "Autors: Aiva Vīksna"
    ]
  },
  {
    id: "strategija-2026",
    date: "03.06.2026",
    title: "Mūsu darbi: Budžeta tēriņu noraidīšana",
    excerpt: "⛔️  03.06.2026 Budžeta komisijā noraidījām Siliņas valdības sagatavoto apropriāciju pieprasījumu 52,4 miljonu eiro apmērā. Šādi papildu izdevumi radītu negatīvu ietekmi...",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Noraidita-iecere-par-budzeta-izdevumiem.jpeg",
    content: [
      "⛔️  03.06.2026 Budžeta komisijā noraidījām Siliņas valdības sagatavoto apropriāciju pieprasījumu 52,4 miljonu eiro apmērā. Šādi papildu izdevumi radītu negatīvu ietekmi uz budžetu, un tajos bija iekļautas pozīcijas, kuras neuzskatu par prioritārām nodokļu maksātāju naudas izlietojumā.",
      "➡️ Starp pieprasītajiem tēriņiem bija komandējumi un konsultācijas, mobilo tālruņu un portatīvo datoru nomaiņa, starptautisku konferenču organizēšana, mediju treniņi un personāla atlases pakalpojumi.",
      "❗️ Katrs eiro jāiegulda pārdomāti un atbildīgi, tādēļ šis pieprasījums ir jāpārstrādā."
    ]
  },
  {
    id: "samazinatais-pvn",
    date: "19.06.2026",
    title: "Samazinātais PVN",
    excerpt: "Latvijas Restorānu biedrības (LRB) pārstāvji 18.jūlijā tikās ar Saeimas Budžeta komisijas vadītāju Aivu Vīksnu, lai pārrunātu kritiski svarīgo samazinātas PVN likmes...",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
    content: [
      "Latvijas Restorānu biedrības (LRB) pārstāvji 18.jūlijā tikās ar Saeimas Budžeta komisijas vadītāju Aivu Vīksnu, lai pārrunātu kritiski svarīgo samazinātās PVN likmes ieviešanu ēdināšanas nozarei. LRB prezidents Jānis Jenzis sarunā akcentēja samazinātās PVN likmes nozīmi nozares situācijas stabilizēšanai. Kā veiksmīgu piemēru viņš minēja Vāciju, kur kopš šā gada 1. janvāra ieviestā 7 % PVN likme ēdināšanai jau devusi pozitīvu pienesumu ekonomikai un palīdzējusi izdzīvot mazajiem un vidējiem ģimenes uzņēmumiem. Vienlaikus būtiskas ir arī sabiedrības intereses – samazināta PVN likme ļautu samazināt ēdināšanas pakalpojumu cenas, kas pašreiz pārtikas cenu ietekmē ir sasniegušas griestus.",
      "Aiva Vīksna apliecināja, ka izprot situācijas nopietnību un sadarbībā ar Finanšu ministriju meklējot iespējamos risinājumus, lai šo jautājumu virzītu tālākai izskatīšanai. Esam gandarīti par uzklausīšanu un konstruktīvo dialogu."
    ]
  }
];

export const BOARD_MEMBERS: Member[] = [
  { 
    id: "andris-kulbergs",
    name: "Andris Kulbergs", 
    image: "/andris-kulbergs.webp",
    imageClass: "scale-[1.015] origin-top object-[center_14.4%]",
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
    id: "aiva-viksna",
    name: "Aiva Vīksna", 
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
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/guntars%20vitols.webp",
    imageClass: "scale-[1.3] origin-top object-[center_0%] -translate-x-[4%]",
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
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/valters%20bolevics2.webp",
    imageClass: "scale-[1.3] translate-y-[14%] -translate-x-[3%]",
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
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/aivis%20cerins.webp",
    imageClass: "scale-[1.46] origin-top object-[center_20%]",
    role: "Biedrības biedrs",
    facebook: "https://www.facebook.com/aivis.cerins",
    focus: [
      {
        id: "f1",
        title: "SABIEDRISKĀS ATTIECĪBAS UN KOMINIKĀCIJA",
        content: "Izglītojošu diskusiju un viedokļu platformu radīšana par aktuālajiem Latvijas attīstības jautājumiem."
      },
      {
        id: "f2",
        title: "STARPTAUTISKIE FORUMI",
        content: "Rīgai un Latvijai kopumā ir visi nepieciešamie izejas dati, lai tā kļūtu par Baltijas tīklošanās metropoli kā biznesa, tā izklaides forumos un pasākumos. Organizatoriskais līmenis jau šobrīd mums ir krietni augstāks par kaimiņvalstīm. Tas ir mans secinājums esot šajā industrijā 12 gadus."
      },
      {
        id: "f3",
        title: "MEDIJU REFORMA REĢIONOS",
        content: "Neatkarīgu un profesionālu reģionālo un nacionālo mediju atbalsts, sabiedrisko mediju attīstība. Skaidra un saprotama finasējuma piešķiršana mediju atbalstam. Reģinālo mediju reformēšana, modernizēšana. (Ar finansējuma piešķiršanu izaicinājums netiek atrisināts. Reģinālajiem medijiem ir jāspēj iet līdz laikam, esošo saturu veidojot dažādām vecuma auditorijām). Sabiedriskā medija pozīcijas stiprināšana, Baltijas mediju telpas fokušēšana."
      },
      {
        id: "f4",
        title: "JAUNSARDZE ZEMESSARDZE UN CIVILMILITĀRĀ AIZSARDZĪBA",
        content: `Uz doto brīdi Latvijā ir aizsākta intensīva ārējās drošības kampaņa, kuras pamatkodolu veido gaisa un akvatorijas aizsardzība, kā arī sauszemes spēki. Kara gadījumā Zemessardze nokļūst NBS vadībā. Būtībā katrs zemessargs tiek pielīdzināts profesionļaā dienesta karavīram. 
Jaunsardzē un Zemessardzē strauji jāstriprina materiāltehniskā bāze, jāpārskata apmācību saturs, kas daudzviet atpaliek no mūsdienu karavešanas aktuālitātēm. Valsts aizsardzības dienests, jaunsardze un zemessardze ir jāpadara par goda lietu katram pilsonim. Jau šobrīd ir uzsākts darbs pie civilmilitārās sadrabības starp bruņotajiem spēkiem, pašvaldībām un uzņēmējiem. Šis darba ir jāpaplašina, iesaistot pēc iespējas plašāku civilo perosnu skaitu, jo konflikta situācijā, monolītai sadarbībai būs izšķirīga loma valsts aizsardzībā.`
      }
    ]
  },
  {
    id: "janis-liepins",
    name: "Jānis Liepiņš",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/janis%20liepins2.webp",
    imageClass: "scale-[1.3] translate-y-[11%]",
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
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/renars%20putnins.webp",
    imageClass: "scale-[1.1] origin-top object-[center_0%] -translate-y-[2.5%]",
    role: "Biedrības biedrs",
    facebook: "https://www.facebook.com/renars.putnins",
    focus: [
      { 
        id: "f1", 
        title: "VESELĪBAS APRŪPES SISTĒMAS REFORMA", 
        content: "Esmu Renārs Putniņš – neiroķirurgs un veselības aprūpes nozares vadītājs, kurš ikdienā strādā ar cilvēkiem un redz gan Latvijas medicīnas sistēmas stiprās puses, gan problēmas, kas prasa izlēmīgu rīcību. Gadu gaitā esmu guvis pieredzi ne tikai pacientu ārstēšanā, bet arī slimnīcu darba organizēšanā un pārmaiņu vadībā." 
      },
      { 
        id: "f2", 
        title: "MEDICĪNAS PERSONĀLA PIESAISTE REĢIONIEM", 
        content: "Politikā iesaistos ar pārliecību, ka valstij nepieciešami profesionāļi ar praktisku pieredzi un spēju pieņemt atbildīgus lēmumus. Mana prioritāte ir pieejama, kvalitatīva un uz pacientu vērsta veselības aprūpe visā Latvijā, īpaši reģionos, kur cilvēkiem nereti jāmēro liels attālums, lai saņemtu nepieciešamo palīdzību." 
      },
      { 
        id: "f3", 
        title: "SLIMNĪCU PĀRVALDĪBAS EFEKTIVITĀTE", 
        content: "Ticu, ka Latvija var veidot modernu veselības aprūpes sistēmu, kurā tiek novērtēti mediķi, gudri izmantoti resursi un tehnoloģijas kalpo cilvēkam. Mūsu valstij jāspēj izmantot arī Eiropas labā pieredze, vienlaikus aizstāvot Latvijas iedzīvotāju intereses." 
      },
      { 
        id: "f4", 
        title: "PACIENTU TIESĪBU AIZSARDZĪBA", 
        content: "Pacientam ir tiesības uz cieņpilnu attieksmi, saprotamu informāciju un iesaisti lēmumu pieņemšanā par savu veselību." 
      },
      { 
        id: "f5", 
        title: "MEDICĪNAS DIGITALIZĀCIJA UN E-VESELĪBA", 
        content: "Digitālajiem risinājumiem jāatvieglo gan pacientu, gan mediķu ikdiena. E-veselībai jābūt drošai, ērtai un efektīvai sistēmai, kas samazina administratīvo slogu, uzlabo informācijas apriti un palīdz nodrošināt kvalitatīvāku veselības aprūpi. Mana pārliecība - Veselības aprūpei jābūt pieejamai tuvāk cilvēka mājām. Latvijas iedzīvotāji ir pelnījuši savlaicīgu, profesionālu un cieņpilnu aprūpi neatkarīgi no tā, kurā Latvijas reģionā viņi dzīvo. Savu pieredzi medicīnā un veselības aprūpes vadībā vēlos izmantot, lai veidotu atbildīgu politiku, kuras pamatā ir zināšanas, praktiski risinājumi un rūpes par cilvēku. 2026. gada Saeimas vēlēšanās esmu gatavs šo pieredzi ieguldīt Latvijas attīstībā." 
      }
    ]
  },
  {
    id: "martins-brencis",
    name: "Mārtiņš Brencis",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/martins%20brencis.webp",
    imageClass: "scale-[1.4] origin-top object-[center_20%]",
    role: "Biedrības biedrs",
    focus: [
      {
        id: "f1",
        title: "VALSTS PĀRVALDE",
        content: `Visu savu profesionālo mūžu esmu strādājis valsts pārvaldē. Šie 25 gadi man ir devuši ne tikai pieredzi un izpratni par valsts pārvaldes darbu, bet arī pārliecību, ka mūsu valsts var būt daudz efektīvāka, godīgāka un cilvēkiem tuvāka.

Kopš Ministru prezidenta amatā stājās Andris Kulbergs, esmu strādājis ar viņu plecu pie pleca. Kopīgi veidojām valdības deklarāciju. Un šis darbs ir tikai nostiprinājis manu pārliecību, ka valsts pārvaldē ir iespējama cita pieeja – prasīgāka, atklātāka, mērķtiecīgāka un balstīta reālos darbos, nevis tukšos solījumos.`
      },
      {
        id: "f2",
        title: "IZGLĪTĪBA",
        content: `Esmu lielu daļu savas dzīves pavadījis Latvijas Universitātē. Gan studējot LU "juristos", gan darbojoties fakultātes pašpārvaldē, gan darbojoties LU Studentu padomē. Esmu bijis arī Latvijas Studenu apvienības valdes loceklis kas man iemācīja demokrātijas skolu - sadarboties, diskutēt, risināt. Esmu piedalījies septiņos Fizmatu laivu braucienos, iepazinis lieliskus un interesantus domu biedrus.

Uzskatu, ka izcila augstākā izglītība ir iespējama Latvijā tad, ja centrā ir students. Tāpēc jautājumi par studiju kvalitāti, drošu studiju vidi, pieejamiem pakalpojumiem un mākslīgā intelekta saprātīga izmantošana ir jārisina jau šodien, nevis kaut kad nākotnē.

2015.gadā ar domu biedriem izveidojām LU Absolventu klubu, kura mērķis ir apvienot absolventus un celt LU diploma vērtību. Šī gada jūlijā turpināšu darbu ar LU padomē, kur man būs viena galvenā prioritāte - studiju kvalitāte.`
      }
    ]
  },
  {
    id: "janis-jenzis",
    name: "Jānis Jenzis",
    image: "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/janis%20jenzis3.webp",
    imageClass: "scale-[1.38] translate-y-[14.5%] -translate-x-[2%]",
    role: "Biedrības biedrs",
    focus: [
      {
        id: "f1",
        title: "Tūrisms un viesmīlība",
        content: `Tūrisma un viesmīlības nozare kopš 2020. gada piedzīvojusi vairākas smagas krīzes – Covid-19 pandēmiju, Krievijas agresiju Ukrainā un energoresursu sadārdzinājumu. Rezultātā Latvija ir pēdējā vietā Eiropas Savienībā pēc ārvalstu viesu nakšņojumu atjaunošanās, salīdzinot ar 2019. gadu, kamēr lielākā daļa Eiropas valstu šo līmeni jau ir sasniegušas vai pārsniegušas.

Lai situāciju mainītu, nepieciešams mērķtiecīgs un profesionāls Latvijas tūrisma mārketings, pietiekams finansējums un cieša sadarbība starp valsti un nozari.

Nacionālajai aviokompānijai airBaltic jābūt vienam no galvenajiem instrumentiem tūristu piesaistei Latvijai, nevis citu valstu pilsētām. Tikpat svarīgi ir atjaunot regulāru prāmju satiksmi ar Rīgu un skaidri komunicēt starptautiskajai auditorijai, ka Latvija ir droša valsts darījumu, kultūras, sporta un atpūtas tūrismam.

Tūrisma nozarei nepieciešams profesionāls krīžu menedžments, regulārs dialogs ar uzņēmējiem un datos balstīti lēmumi.`
      },
      {
        id: "f2",
        title: "Bērni un jaunieši",
        content: `Latvijas nākotne sākas ar kvalitatīvu izglītību. Mums jāveido izglītības sistēma, kur skolotāji un pasniedzēji saņem konkurētspējīgu un cilvēka cienīgu atalgojumu, bet galvenās investīcijas tiek ieguldītas cilvēkos, nevis tikai infrastruktūrā.

Jau no skolas gadiem bērniem jāapgūst finanšu pratība, uzņēmējdarbības pamati un praktiss darba iemaņas. Valstij ir jārada vide, kur jaunieši var iegūt pirmo darba pieredzi, vienlaikus nezaudējot ģimenēm paredzētos nodokļu atvieglojumus. Vecāki nevar tikt sodīti par to, ka viņu bērni strādā, atņemot viņiem nodokļu atvieglojumus. Darbiem viesmīlības uzņēmumos, produktus piegādēs ir jābūt pieejamiem mūsu jauniešiem, ne trešo valstu pilsoņiem, lai mūsu jaunieši varētu iegūt pirmās sociālās prasmes strādājot un palīdzot stiprināt savas ģimenes budžetu.`
      },
      {
        id: "f3",
        title: "Kultūra",
        content: `Latvija ir talantu valsts. Nav pieņemami, ka izciliem māksliniekiem un profesionāliem mūziķiem jāstrādā vairākās darbavietās, lai nodrošinātu sev cienīgu dzīvi, vai jāmeklē iespējas ārvalstīs. Mums nepieciešama mērķtiecīga kultūrpolitika, kas palīdz saglabāt talantus Latvijā. Rīgai nepieciešama moderna akustiskā koncertzāle. Daudzu Eiropas pilsētu pieredze pierāda, ka tā kļūst ne tikai par kultūras centru, bet arī par nozīmīgu tūrisma un ekonomikas attīstības virzītāju.`
      },
      {
        id: "f4",
        title: "Atbildīga valsts budžeta pārvaldība",
        content: `Valsts budžets ir mūsu visu, nodokļu maksātāju, nauda. Tāpēc tai jābūt pārvaldītai atbildīgi, caurskatāmi un efektīvi.

Atbalstu nulles budžeta principa ieviešanu, regulāru ministriju un valsts iestāžu izdevumu izvērtēšanu, analizējot katras aktivitātes lietderību un pienesumu sabiedrībai. Nepieciešams atteikties no novecojušām vai neefektīvām aktivitātēm un vairāk ieguldīt tajās jomās, kas rada ilgtermiņa ieguvumu – veselības aprūpē, izglītībā, kultūrā, drošībā un uzņēmējdarbības attīstībā. Tikpat svarīga ir valsts budžeta lielāka atklātība un saprotamība, lai sociālie partneri, uzņēmēji un sabiedrība varētu pilnvērtīgi iesaistīties diskusijās par nodokļu maksātāju līdzekļu efektīvu izmantošanu.`
      }
    ]
  }
];
