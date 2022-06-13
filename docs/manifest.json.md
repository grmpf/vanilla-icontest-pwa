## manifest.json


```xhtml
<link rel="manifest" href="/site.webmanifest"/>
<!-- OR -->
<link rel="manifest" href="/manifest.json"/>
```

`Content-Type 'application/manifest+json; charset=utf-8'`


The use-credentials value must be used when fetching a manifest that requires credentials, even if the file is from the same origin.
```xhtml
<link rel="manifest" crossorigin="use-credentials" href="???" />
```


-----


## `icons`
- The most appropriate icon should be picked automatically based on browsers preference and provided information like size.
- Remember: all icons are only recommendations for the browser to choose from.
- Icons might scale-up if a smaller image is the best match (aka: the biggest available icon will scale to all even bigger icon sizes requested).
- Currently, svg support for PWA icons is semi-unknown(?) and browser specific. Therefore, they're only safe to use in addition to png/jpg with the hope that some browsers prefer svg over png/jpg and pick them up.  
  In my opinion `favicon.svg` should become the new `favicon.ico` and SVG the go-to icon format.

```json5
{
  //"id": something to take care of after mid 2022
  "name": "Lorem ipsum dolor sit amet",
  "short_name": "Lorem ipsum",
  "description": "Nulla ac dolor ex. Sed maximus ligula vitae hendrerit mattis. Maecenas quis malesuada elit, id egestas arcu.",
  "scope": "/",
  "start_url": "/?source=pwa", 
  "display_override": ["window-controls-overlay"],
  "display": "standalone", //  "fullscreen", "standalone", "minimal-ui", "browser"
  "orientation": "any", //"orientation": "landscape", // https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
  "theme_color": "#1d508f", // #5299d1 ?
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 48x48 32x32 24x24 16x16",
      "type": "image/x-icon",
      "purpose": "any"
    },
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/imgs/icons/maskable_icon.png",
      "sizes": "196x196",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      // 1px bigger than the biggest png/jpeg version (as fallback for anything bigger)
      // adding all known sizes as try to overwrite the pngs/jpegs for those who need some friendly force to use the SVG
      "src": "favicon.svg",
      "sizes": "513x513 512x512 384x384 196x196 192x192 152x152 128x128 96x96 72x72 64x64 48x48 32x32 24x24 16x16",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      // with 30% padding could work, 40% to be safe
      // TODO: add some demo svg with masks as demonstrate
      "src": "favicon-inverted.svg",
      "sizes": "513x513 512x512 384x384 196x196 192x192 152x152 128x128 96x96 72x72 64x64 48x48 32x32 24x24 16x16",
      "type": "image/svg+xml",
      "purpose": "maskable"
    },
    {
      // not sure yet where this would be used (safari-pinned-tab? windows metro? high-contrast?)
      "src": "favicon-mono.svg",
      "sizes": "513x513 512x512 384x384 196x196 192x192 152x152 128x128 96x96 72x72 64x64 48x48 32x32 24x24 16x16",
      "type": "image/svg+xml",
      "purpose": "monochrome"
    }
  ],
  
  // TODO: test platform:wide (desktop?) and platform:narrow (mobile landscape?)
  "screenshots": [
    {
      "src": "assets/imgs/screenshots/screenshot-1.jpg",
      "type": "image/jpeg",
      "sizes": "1920x1080", // 1920x1080 would be good
      //"platform": "wide", // wide || narrow
      "label": "Homescreen of Awesome App"
    },
    {
      "src": "assets/imgs/screenshots/screenshot-2.jpg",
      "type": "image/jpeg",
      "sizes": "1920x1080",
      "label": "Some other screen"
    },
    {
      "src": "assets/imgs/screenshots/screenshot-3.jpg",
      "type": "image/jpeg",
      "sizes": "1920x1080",
      "label": "Screen 3"
    },
    {
      "src": "assets/imgs/screenshots/screenshot-4.jpg",
      "type": "image/jpeg",
      "sizes": "1920x1080",
      "label": "Screen 4"
    }
  ],
  "splash_pages": null, // Need more insight -> sometimes autogenerated with logo and background_color. Don't want to generate a screen for each and every screen size
  "shortcuts": [
    {
      "name": "Clock (HH:MM)",
      "short_name": "Clock",
      "description": "Test Desc 1",
      "url": "/?source=pwa&embed=1&type=clock&size=40&ls=8&color=ff9b06"
    },
    {
      "name": "Clock (HH:MM:SS)",
      "short_name": "Clock (+sec)",
      "description": "Test Desc 2",
      "url": "/?source=pwa&embed=1&type=clock&size=40&ls=8&color=ff9b06&sec=1"
    },
    {
      "name": "Only Clouds",
      "short_name": "Clouds",
      "description": "Test Desc 3",
      "url": "/?source=pwa&embed=1&type=text&text=",
      "icons": [
        {
          "src": "favicon.ico",
          "type": "image/svg+xml",
          "purpose": "any"
        }
      ]
    },
    {
      "name": "Demo 1",
      "short_name": "Demo 1",
      "description": "Test Desc 4",
      "url": "/?source=pwa&embed=1&type=text&size=22&ls=-14&color=ff9b06&lh=0.9&text=D%20%20O%20%20N%20%20%27%20%20%20T%20%20%20%20%20%20IIIIIIIIIIIIIIIIIIIIIII~T%20%20H%20%20E%20%20%20%20%20%20I%20%20N%20%20T%20%20E%20%20R%20%20N%20%20E%20%20T"
    },
    {
      "name": "Config",
      "short_name": "Config",
      "description": "Test Desc 5",
      "url": "/?source=pwa&embed=0",
      "icons": [
        {
          "src": "assets/imgs/icons/icon-192x192.png",
          "sizes": "192x192"
        }
      ]
    }
  ],
  "share_target": {
    "action": "/share-receive",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": { // values works as mapping to a specific param
      "text": "text",
      "url": "url",
      "files": [
        {
          "name": "img",
          "accept": ["image/png", "image/jpeg", "image/svg+xml"]
        }
      ]
    }
  }
}


```
