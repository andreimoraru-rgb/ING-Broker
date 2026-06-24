import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schemas: object[];
}

/**
 * Componentă reutilizabilă pentru injectarea schemelor JSON-LD în <head>.
 * Utilizare: <SchemaMarkup schemas={[schema1, schema2]} />
 */
export function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  if (!schemas || schemas.length === 0) return null;

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
