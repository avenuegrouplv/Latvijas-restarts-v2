import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types';

export const useSEO = ({ title, description, ogType = 'website', ogImage, noIndex = false, articleData, serviceData }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Latvijas Restarts') ? title : `${title} | Latvijas Restarts`;
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
    const pageUrl = window.location.origin + location.pathname;
    setMetaTag({ property: 'og:url' }, pageUrl);
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

    // 6. Update Canonical Link
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // 7. Dynamic JSON-LD Schemas
    const updateSchema = (id: string, markup: Record<string, any>) => {
      let schemaScript = document.getElementById(id);
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = id;
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(markup);
    };

    const removeSchema = (id: string) => {
      const schemaScript = document.getElementById(id);
      if (schemaScript) {
        schemaScript.remove();
      }
    };

    // A. WebSite Schema
    updateSchema('jsonld-website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Biedrība Latvijas restarts",
      "url": window.location.origin,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/aktualitates?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });

    // B. Organization Schema
    const orgMarkup = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Biedrība Latvijas restarts",
      "url": window.location.origin,
      "logo": "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta2.webp",
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
    updateSchema('jsonld-org', orgMarkup);

    // C. WebPage Schema (for all pages)
    updateSchema('jsonld-webpage', {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": formattedTitle,
      "description": description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${window.location.origin}/#website`
      }
    });

    // D. BreadcrumbList Schema (if not home page)
    if (location.pathname !== '/') {
      const pathParts = location.pathname.split('/').filter(Boolean);
      const itemListElement = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Sākums",
          "item": window.location.origin
        }
      ];

      let accumulatedPath = '';
      pathParts.forEach((part, index) => {
        accumulatedPath += `/${part}`;
        let readableName = part;
        if (part === 'par-biedribu') readableName = 'Par biedrību';
        else if (part === 'statuti') readableName = 'Biedrības Statūti';
        else if (part === 'iesniegums') readableName = 'Iesniegums dalībai';
        else if (part === 'programma') readableName = 'Programma';
        else if (part === 'aktualitates') readableName = 'Aktualitātes';
        else if (part === 'kontakti') readableName = 'Kontakti';
        else if (part === 'privatuma-politika') readableName = 'Privātuma politika';
        else if (part === 'sikdatnu-politika') readableName = 'Sīkdatņu politika';
        else if (part === 'biedri') readableName = 'Biedri';
        else {
          readableName = title.split('|')[0].trim();
        }

        itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": readableName,
          "item": window.location.origin + accumulatedPath
        });
      });

      updateSchema('jsonld-breadcrumbs', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
      });
    } else {
      removeSchema('jsonld-breadcrumbs');
    }

    // E. Blog/Article Schema (News details)
    if (articleData) {
      updateSchema('jsonld-article', {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": articleData.headline,
        "image": articleData.image || defaultImage,
        "datePublished": articleData.datePublished || "2026-05-27",
        "author": {
          "@type": "Organization",
          "name": articleData.authorName || "Biedrība Latvijas restarts"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Biedrība Latvijas restarts",
          "logo": {
            "@type": "ImageObject",
            "url": "https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta2.webp"
          }
        },
        "description": description,
        "url": pageUrl
      });
    } else {
      removeSchema('jsonld-article');
    }

    // F. Service Schema (Program detail)
    if (serviceData) {
      updateSchema('jsonld-service', {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Rīcības programma",
        "name": serviceData.name,
        "provider": {
          "@type": "Organization",
          "name": "Biedrība Latvijas restarts",
          "url": window.location.origin
        },
        "description": serviceData.description
      });
    } else {
      removeSchema('jsonld-service');
    }

    // Cleanup on unmount or route change
    return () => {
      if (location.pathname === '/') {
        removeSchema('jsonld-breadcrumbs');
      }
      if (!articleData) {
        removeSchema('jsonld-article');
      }
      if (!serviceData) {
        removeSchema('jsonld-service');
      }
    };
  }, [title, description, ogType, ogImage, noIndex, location.pathname, articleData, serviceData]);
};
