import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Language } from '../translations';

const copy = {
  ro: {
    title: 'Pagina nu a fost găsită',
    description: 'Adresa solicitată nu există sau a fost mutată.',
    home: 'Înapoi la pagina principală',
    contact: 'Contactează ING Broker',
  },
  ru: {
    title: 'Страница не найдена',
    description: 'Запрошенная страница не существует или была перемещена.',
    home: 'На главную',
    contact: 'Связаться с ING Broker',
  },
  en: {
    title: 'Page not found',
    description: 'The requested page does not exist or has been moved.',
    home: 'Back to the homepage',
    contact: 'Contact ING Broker',
  },
};

export function NotFoundPage({ lang }: { lang: Language }) {
  const text = copy[lang];

  return (
    <main className="min-h-[70vh] bg-white px-6 py-32 text-center">
      <Helmet>
        <title>404 — {text.title} | ING Broker</title>
        <meta name="description" content={text.description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <p className="mb-4 text-sm font-bold tracking-[0.25em] text-primary">404</p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-secondary md:text-6xl">
        {text.title}
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">{text.description}</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link className="bg-secondary px-7 py-4 font-bold text-white" to="/">
          {text.home}
        </Link>
        <Link className="border border-secondary px-7 py-4 font-bold text-secondary" to="/contact">
          {text.contact}
        </Link>
      </div>
    </main>
  );
}
