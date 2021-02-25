import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const website_title = 'Agriturismo San Lorenzo';
const website_description =
  'Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. Offriamo stupendi appartamenti completamente accessoriati.';

export default function Seo({ description, title, keywords }) {
  const router = useRouter();

  const pageTitle = `${website_title} - ${title}`;

  const microformats = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: pageTitle,
    url: 'https://agriturismosanlorenzodipersegno.it',
  };

  const globalMicroformats = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: website_title,
    description: description || website_description,
    URL: 'https://agriturismosanlorenzodipersegno.it',
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description || website_description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={pageTitle} />
      <meta
        property='og:description'
        content={description || website_description}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={`https://agriturismosanlorenzodipersegno.it/${router?.asPath}`}
      />
      {/*  <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@timsy.io' />
      <meta name='twitter:title' content={`Timsy — ${title}`} />
      <meta name='twitter:image' content='' />
      <meta name='twitter:description' content={description || website_description} /> */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(microformats) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalMicroformats) }}
      />
      <link
        rel='canonical'
        href={`https://agriturismosanlorenzodipersegno.it${router?.asPath}`}
      />
    </Head>
  );
}
