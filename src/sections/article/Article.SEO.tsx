import React from 'react';

import SEO from '../../components/SEO';
import { IArticle, IAuthor } from '../../types';

interface IArticleSEO {
  url: string;
  article: IArticle;
  authors: IAuthor[];
  location: Location;
  name: string;
  siteUrl: string;
}

function ArticleSEO({
  url,
  article,
  authors,
  location,
  name,
  siteUrl,
}: IArticleSEO) {
  const authorsData = authors.map(author => ({
    '@type': 'Person',
    name: author.name,
  }));

  /**
   * For some reason `location.href` is undefined here when using `yarn build`.
   * That is why I am using static query `allSite` to get needed fields: name & siteUrl.
   */
  const microdata = `{
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${siteUrl + location.pathname}"
    },
    "headline": "${article.title}",
    "image": "${siteUrl + article.hero}",
    "datePublished": "${article.date}",
    "dateModified": "${article.updatedAt}",
    "author": ${JSON.stringify(authorsData)},
    "description": "${article.excerpt.replace(/"/g, '\\"')}",
    "publisher": {
      "@type": "Organization",
      "name": "${name}",
      "logo": {
        "@type": "ImageObject",
        "url": "${siteUrl}/icons/icon-512x512.png"
      }
    }
  }
`.replace(/"[^"]+"|(\s)/gm, function(matched, group1) {
    if (!group1) {
      return matched;
    }
    return '';
  });
  /**
   * See here for the explanation of the regex above:
   * https://stackoverflow.com/a/23667311
   */

  return (
    <SEO
      url={url}
      title={article.title}
      description={article.excerpt}
      image={article.hero}
      publishedDate={article.date}
      pathname={location.href}
    >
      <script type="application/ld+json">{microdata}</script>
    </SEO>
  );
}

export default React.memo(ArticleSEO);
