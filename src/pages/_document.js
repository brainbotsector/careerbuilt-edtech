import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Beyond Career - Transform your career with expert mentorship and guidance from IIT alumni. Get real-world skills and job opportunities." />
        <meta name="keywords" content="career guidance, mentorship, job placement, IIT alumni, skill development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Beyond Career" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beyondcareer.com/" />
        <meta property="og:title" content="Beyond Career | Professional Mentorship & Career Guidance" />
        <meta property="og:description" content="Transform your career with expert mentorship and guidance from IIT alumni." />
        <meta property="og:image" content="https://beyondcareer.com/images/social-preview.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://beyondcareer.com/" />
        <meta name="twitter:title" content="Beyond Career | Professional Mentorship & Career Guidance" />
        <meta name="twitter:description" content="Transform your career with expert mentorship and guidance from IIT alumni." />
        <meta name="twitter:image" content="https://beyondcareer.com/images/social-preview.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect and Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Font Preloading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Beyond Career",
            "description": "Career mentorship and guidance services",
            "url": "https://beyondcareer.com",
            "logo": "https://beyondcareer.com/images/logo.png",
            "sameAs": [
              "https://facebook.com/beyondcareer",
              "https://twitter.com/beyondcareer",
              "https://linkedin.com/company/beyondcareer"
            ]
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://beyondcareer.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Beyond Career",
            "url": "https://beyondcareer.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://beyondcareer.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </body>
    </Html>
  );
}

// import { Html, Head, Main, NextScript } from 'next/document';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }


