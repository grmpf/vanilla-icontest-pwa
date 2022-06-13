## JSON-LS - Basics
- AFAIK `@id` is just a unique identifier which can be used to reference things. Unsure if the domain really needs to be part of it...
- ...

### Homepage - `/`

```
<script type="application/ld+json" class="jsonld-schema-graph">
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://icontest-pwa.vercel.app/#organization",
            "url": "https://icontest-pwa.vercel.app/",
            "name": "IconTest PWA",
            "slogan": "4 Testing Stuff",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://icontest-pwa.vercel.app/#logo",
                "url": "https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-512x512.png",
                "contentUrl": "https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-512x512.png",
                "width": 512,
                "height": 512,
                "caption": "IconTest PWA"
            },
            "image": {
                "@id": "https://icontest-pwa.vercel.app/#logo"
            },
            "sameAs":[
                "https://twitter.com/grmpf_",
                "https://github.com/grmpf"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://icontest-pwa.vercel.app/#website",
            "url": "https://icontest-pwa.vercel.app/",
            "name": "IconTest PWA",
            "publisher": {
                "@id": "https://icontest-pwa.vercel.app/#organization"
            },
            "potentialAction": [
                {
                    "@type": "SearchAction",
                    "query-input": "required name=search_term_string",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://icontest-pwa.vercel.app/?text={search_term_string}"
                    }
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://icontest-pwa.vercel.app/#webpage",
            "url": "https://icontest-pwa.vercel.app/",
            "name": "A little Test PWA",
            "description": "Simple PWA to test different things",
            "isPartOf": {
                "@id": "https://icontest-pwa.vercel.app/#website"
            },
            "about": {
                "@id": "https://icontest-pwa.vercel.app/#organization"
            },
            "image": {
                "@type": "ImageObject",
                "@id": "https://icontest-pwa.vercel.app/#primaryimage",
                "url": "https://icontest-pwa.vercel.app/assets/imgs/share.jpg",
                "width": 1200,
                "height": 630,
                "caption": "Interactive Background: Clock, Custom Text and more to come..."
            },
            "primaryImageOfPage": {
                "@id": "https://icontest-pwa.vercel.app/#primaryimage"
            }
        }
    ]
}
</script>
```


### Test Page - `/test.html`

```
<script type="application/ld+json" class="jsonld-schema-graph">
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://icontest-pwa.vercel.app/#organization",
            "url": "https://icontest-pwa.vercel.app/",
            "name": "IconTest PWA",
            "slogan": "4 Testing Stuff",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://icontest-pwa.vercel.app/#logo",
                "url": "https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-512x512.png",
                "contentUrl": "https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-512x512.png",
                "width": 512,
                "height": 512,
                "caption": "IconTest PWA"
            },
            "image": {
                "@id": "https://icontest-pwa.vercel.app/#logo"
            },
            "sameAs":[
                "https://twitter.com/grmpf_",
                "https://github.com/grmpf"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://icontest-pwa.vercel.app/#website",
            "url": "https://icontest-pwa.vercel.app/",
            "name": "IconTest PWA",
            "publisher": {
                "@id": "https://icontest-pwa.vercel.app/#organization"
            },
            "potentialAction": [
                {
                    "@type": "SearchAction",
                    "query-input": "required name=search_term_string",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://icontest-pwa.vercel.app/?text={search_term_string}"
                    }
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://icontest-pwa.vercel.app/test.html#webpage",
            "url": "https://icontest-pwa.vercel.app/test.html",
            "name": "A little Test PWA",
            "description": "Simple PWA to test different things",
            "isPartOf": {
                "@id": "https://icontest-pwa.vercel.app/#website"
            },
            "about": {
                "@id": "https://icontest-pwa.vercel.app/#organization"
            },
            "image": {
                "@type": "ImageObject",
                "@id": "https://icontest-pwa.vercel.app/test.html#primaryimage",
                "url": "https://icontest-pwa.vercel.app/assets/imgs/share-test.png",
                "width": 1200,
                "height": 630,
                "caption": "PD Logo"
            },
            "primaryImageOfPage": {
                "@id": "https://icontest-pwa.vercel.app/test.html#primaryimage"
            }
        }
    ]
}
</script>
```



### Breadcrumbs
??? why are there 2 @id's
```
{
    "@type": "BreadcrumbList",
    "@id": "https://icontest-pwa.vercel.app/de/test.html#breadcrumb", // #/schema/breadcrumb/detest
    "itemListElement":  [
        {
            "@type": "ListItem",
            "position":1,
            "@id": "https://icontest-pwa.vercel.app/#home",
            "item": {
                "@type": "WebPage",
                "@id": "https://icontest-pwa.vercel.app/#home",
                "url": "https://icontest-pwa.vercel.app/",
                "name": "Home"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id": "https://icontest-pwa.vercel.app/de/test.html#webpage"
            }
        }
    ]
}
```