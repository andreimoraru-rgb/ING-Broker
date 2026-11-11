import type {Language} from '../translations';

// Describes the subject of each existing page, without promising cover or availability.
const descriptions:Record<string,string>={
 property:'Asigurarea bunurilor companiei în Moldova: clădiri, echipamente și stocuri. Ce informații pregătești și ce condiții verifici în ofertă.',
 liability:'Răspunderea civilă generală a companiei: activitate, prejudicii față de terți, limite și excluderi. Întrebări utile înainte de analiza unei polițe.',
 professional:'Răspundere profesională în Moldova: servicii declarate, erori, pretenții și documente. Ce clarifici înainte de compararea propunerilor de asigurare.',
 do:'D&O în Moldova: funcții de conducere, persoane vizate și pretenții. Informații pentru analiza răspunderii directorilor și administratorilor.',
 cyber:'Asigurarea cyber pentru companii din Moldova: sisteme, securitate și întreruperea activității. Ce pregătești pentru analiza riscului cibernetic.',
 cargo:'Asigurarea CARGO în Moldova: mărfuri, rute și documente de transport. Ce verifici în propunere și cum separi marfa de răspunderea transportatorului.',
 fleet:'Asigurarea flotei auto în Moldova: vehicule, utilizare și reînnoiri. Pregătirea datelor pentru compararea polițelor și administrarea flotei.',
 credit:'Asigurarea creditului comercial: creanțe, cumpărători și plata amânată. Ce informații pregătește o companie din Moldova pentru analiza riscului.',
 construction:'Asigurarea lucrărilor de construcții și montaj în Moldova: proiect, etape, materiale și utilaje. Documente și întrebări pentru analiza șantierului.',
 benefits:'Asigurări pentru angajați în Moldova: nevoile echipei, date agregate și limite. Ce clarifici înainte de analiza beneficiilor și ofertelor disponibile.',
 renewable:'Proiecte de energie regenerabilă în Moldova: echipamente, construcție și exploatare. Informații utile pentru analiza unei propuneri de asigurare.',
 agriculture:'Riscuri agricole în Moldova: culturi, animale și utilaje. Ce inventar și documente pregătești înainte de analiza condițiilor unei asigurări.'
};
export function businessProductSeo(lang:Language,id:string,label:string){
 const suffix=lang==='ro'?'în Moldova':lang==='ru'?'в Молдове':'in Moldova';
 return {title:`${label} ${suffix} | ING Broker`,description:lang==='ro'?descriptions[id]||`${label}: informații și documente pentru analiza unei propuneri de asigurare în Moldova.`:lang==='ru'?`${label}: сведения о деятельности, документы и вопросы для анализа условий страхования в Молдове. Принятие риска и условия уточняются индивидуально.`:`${label}: business information, documents and questions for reviewing insurance terms in Moldova. Risk acceptance and terms require individual confirmation.`};
}
