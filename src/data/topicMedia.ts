// Images reviewed visually on 2026-10-26. Selection is semantic, never array-position based.
import { articleMedia } from './articleMedia';
import type { Language } from '../translations';

const stock = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1920`;
type Media = { image: string; imageAlt: string };
const rules: [RegExp, string, [string, string, string]][] = [
  [/drone/, stock('1508614589041-895b88991e3e'), ['Dronă cu cameră', 'Дрон с камерой', 'Camera drone']],
  [/biciclet|trotinet/, stock('1485965120184-e220f721d03e'), ['Bicicletă', 'Велосипед', 'Bicycle']],
  [/obiecte-arta/, stock('1544967082-d9d25d867d66'), ['Lucrare de artă abstractă', 'Абстрактная картина', 'Abstract artwork']],
  [/calator|storno|bagaje|avioane|aeroport|elicopter/, stock('1436491865332-7a61a109cc05'), ['Aripa unui avion în zbor', 'Крыло самолёта в полёте', 'Aircraft wing in flight']],
  [/animale-companie/, stock('1450778869180-41d0601e046e'), ['Câine și pisică', 'Собака и кошка', 'Dog and cat']],
  [/ipotec|locuint|cladiri|centre-comerciale|bunuri-imobile|property/, '/commercial-property-insurance.jpg', ['Clădire de birouri', 'Офисное здание', 'Office building']],
  [/viata/, '/legal-asist.webp', ['Analiza documentelor înainte de alegerea unui contract', 'Проверка документов перед выбором договора', 'Reviewing documents before choosing a contract']],
  [/ferme-zootehnice/, '/zootehnie.webp', ['Bovine într-o fermă', 'Крупный рогатый скот на ферме', 'Cattle on a farm']],
  [/agricol|livezi|viticultur|cereale/, '/horticultura.png', ['Activitate într-o livadă', 'Работа в саду', 'Work in an orchard']],
  [/solar|fotovoltaic|eolien|energie|hidrocentr|biogaz/, '/asigurare-energie-regenerabila-moldova.jpg', ['Instalații de producere a energiei regenerabile', 'Установки возобновляемой энергетики', 'Renewable energy installations']],
  [/cyber|cibernetic|echipamente-it|telecomunicatii|centre-date|software|civila-it/, stock('1550751827-4bd374c3f58b'), ['Circuite și echipamente electronice', 'Электронные схемы и оборудование', 'Electronic circuits and equipment']],
  [/cargo|marfa|bunuri-tranzit|depozite-logistice/, stock('1586528116311-ad8dd3c8310d'), ['Depozit cu mărfuri pregătite pentru transport', 'Склад с товарами для перевозки', 'Warehouse with goods prepared for transport']],
  [/casco|rca|carte-verde|civila-auto|flot|rutiera/, stock('1533473359331-0135ef1b58bf'), ['Autoturism pe un drum', 'Автомобиль на дороге', 'Passenger vehicle on a road']],
  [/construct|montaj|mentenanta|garantii|buna-executie|infrastructura/, '/constructie-inginerie.jpg', ['Verificarea planurilor de construcție', 'Проверка строительных планов', 'Reviewing construction plans']],
  [/hotel|restaurant|cafenele/, '/horeca.jpg', ['Administrarea unui restaurant', 'Управление рестораном', 'Restaurant management']],
  [/sanatate|medical|malpraxis|clinici|spital|stomatolog|optica|maternitate|kinetoterapie|boli|check-up/, stock('1505751172876-fa1923c5c528'), ['Stetoscop pentru examinare medicală', 'Стетоскоп для медицинского осмотра', 'Stethoscope for a medical examination']],
  [/eveniment|expozitii|concerte|festival|targuri/, stock('1511578314322-379afb476865'), ['Sală pregătită pentru un eveniment', 'Зал для проведения мероприятия', 'Venue prepared for an event']],
  [/angajat|angajator|accident/, '/it-companies.jpg', ['Echipă la locul de muncă', 'Команда на рабочем месте', 'Team at work']],
  [/utilaje|rechemare|civila-produs/, stock('1586528116311-ad8dd3c8310d'), ['Instalații și mărfuri într-un centru logistic', 'Оборудование и товары в логистическом центре', 'Equipment and goods in a logistics centre']],
  [/credit|financ|fintech|bani|valori|directori|profesional|civila|juridic|eroare|omisiune/, '/legal-asist.webp', ['Documente contractuale analizate la birou', 'Проверка договорных документов', 'Reviewing contract documents']],
];

export function topicMedia(slug: string, lang: Language): Media {
  const approved = articleMedia[slug];
  if (approved) return { image: approved.image, imageAlt: lang === 'ro' ? approved.imageAlt :
    lang === 'ru' ? 'Тематическая иллюстрация, созданная с помощью ИИ. Не изображает реального клиента.' :
    'Topic illustration generated with AI. Not a photograph of an actual client.' };
  const rule = rules.find(([pattern]) => pattern.test(slug));
  const labels = rule?.[2] || ['Analiza documentelor de asigurare', 'Проверка страховых документов', 'Reviewing insurance documents'];
  return { image: rule?.[1] || '/legal-asist.webp', imageAlt: labels[lang === 'ro' ? 0 : lang === 'ru' ? 1 : 2] };
}

export function alignArticleImages(content: string, slug: string, lang: Language): string {
  const selected = topicMedia(slug, lang);
  // The legacy generated template used unrelated office photographs in every article.
  // Keep its existing image positions; show the subject and contract review instead.
  return content.replace(/<img\b[^>]*>/g, tag => {
    let image = '', alt = '';
    if (tag.includes('photo-1450101499163-c8848c66ca85') || tag.includes('photo-1556761175-4b46a572b786')) {
      image = selected.image; alt = selected.imageAlt;
    } else if (tag.includes('photo-1521737604893-d14cc237f11d')) {
      image = selected.image === '/legal-asist.webp' ? stock('1454165804606-c3d57bc86b40') : '/legal-asist.webp';
      alt = lang === 'ro' ? 'Verificarea documentelor contractuale' : lang === 'ru' ? 'Проверка условий договора' : 'Reviewing contract documents';
    } else return tag;
    return `<img src="${image}" alt="${alt}" loading="lazy" decoding="async" width="1200" height="800" class="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg" />`;
  });
}
