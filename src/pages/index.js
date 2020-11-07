import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/nav';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {`
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Landscaping",
                    "provider": {
                        "@type: "LocalBusiness",
                        "name": "Culling's Landscaping"
                    },
                    "areaServed" : [
                        {
                            "@type": "City",
                            "name": "Dover",
                            "@id": "https://en.wikipedia.org/wiki/Dover,_New_Hampshire" 
                        },
                        {
                            "@type": "City",
                            "name": "Somersworth",
                            "@id": "https://en.wikipedia.org/wiki/Somersworth,_New_Hampshire"
                        },
                        {
                            "@type": "City",
                            "name": "Rochester",
                            "@id": "https://en.wikipedia.org/wiki/Rochester,_New_Hampshire"
                        }
                    ]

                }
            `}
        </script>
      </Helmet>
      <Nav />
      <p>yo</p>
    </div>
  );
}
