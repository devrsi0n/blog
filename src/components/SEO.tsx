import React from 'react';
import Head from 'next/head';

import site from '../../site';

interface ISEOProps {
  url: string;
  pathname?: string;
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  publishedDate?: string;
}

/**
 * Use the Next/Head on pages to generate SEO and meta content
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */
function SEO({
  url,
  pathname,
  title = site.title,
  description = site.description,
  image = '/preview.jpg',
  children,
  publishedDate,
}: ISEOProps) {
  const fullURL = (path: string) =>
    path ? `${site.siteUrl}${path}` : site.siteUrl;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <link rel="canonical" href={fullURL(pathname)} />
      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullURL(image)} />
      <meta name="description" content={description} />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${site.name}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={`@${site.name}`} />
      <meta name="twitter:image" content={fullURL(image)} />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullURL(image)} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={site.name} />
      <meta name="article:published_time" content={publishedDate} />
      <title>{title}</title>
      {children}
    </Head>
  );
}

export default SEO;
