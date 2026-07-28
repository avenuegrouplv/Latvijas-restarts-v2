import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function StatutesPage() {
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
}
