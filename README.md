## <a href="#readme"><img valign="bottom" width="32px" height="32px" src="/favicon.svg?raw=true&sanitize=true" /></a>&nbsp; IconTest PWA

### Main Goals
- [x] Reference for favicon (.svg) implementation.
- [ ] Reference for PWA-icon implementation.  
  🚧 Still incomplete and needs better documentation.
- [ ] Collecting and displaying test data about browser support/behaviour (feedback welcome).  
  🚧️ Lack of data and difficulties displaying things.
- [ ] Support for IE11 and newer (older stuff: if then only as reference).
- [ ] Detailed documentation about what/where/why of all points above.  
  🚧️ Work in progress
- [ ] Reference and get in touch with some favicon researchers/experts.

### Extra Goals
- [ ] Best practice reference for building websites  
  TODO: Triple check everything
- [ ] Testing and showcasing PWA Features.  
  TODO: Collect more testing data

-----

### TODOs
#### For testing and showcasing best-practice of:
- `favicon` [svg + ico] + `icons` [PWA]
  - [x] Minimal/recommended version
  - [ ] Extended/excessive version
  - [ ] Future version (how it should be[come])
- PWA features
  - [x] `screenshots`  
  - [x] `shortcuts`  
    TODO: testing (support + icons)
  - [ ] `share_target`  
    TODO: receive and show sent data
  - [ ] [`display_override: window-controls-overlay`](https://web.dev/window-controls-overlay/)
- Website Setup
  - [x] Meta-Tags (Title, Canonical, etc.)
  - [x] (Fav)Icons
  - [x] JSON-LD (Organization, WebSite, WebPage, BreadcrumbList)
  - [x] OpenGraph
  - [x] sitemap.xml
  - [x] robot.txt
  - [ ] manifest.json 🚧
- App-Stores? (Google, Apple, Windows)

-----

### Run locally

> ⚠️ The ServiceWorker (sw.js) will cache the used files. This can cause weird behaviour later on which a non-default port can avoid.   
> In Chrome this cache can be deleted in `Developer Tools->Application->Cache Storage`.  
> Changing `cacheName` in **sw.js** works as well for testing.

> ⚠️ And to get rid of the ServiceWorker:  
> `chrome://serviceworker-internals/?devtools`

- `yarn dev` same as `npx serve -p 3232`  
  Needs `node.js` and loads and runs `serve` via npx.
- **OR:** `yarn dev2` same as `node server.js 3131`  
  Needs `node.js` and uses the `server.js` from the project root.

-----

### Different ways of testing
1. Initial load (when opening the page the first time)
1. Clicking a sub-page link
1. Reload by clicking a link to same page (e.g. EN/DE and ↺)
1. Reload via Browser button ("should" be the same as "Normal reload via Shortcut 1")
1. Normal reload via Shortcut 1 (mac: Cmd-R | win: Crlt-R I guess)
1. Hard reload via Shortcut 2 (mac: Cmd-Shift-R | win: ???)
1. (Right-click reload button when Developer Tools are open)
1. Empty cache + hard reload: By installing the PWA

-----

### Known Issues

- Chrome loads `144x144.png` when set in manifest.json for an unknown reason. 
- Problem with SVG animation loop on iOS (test.html; super low prio). 
- Google Translator in Chrome

-----

### Testing Data
- [/docs/testdata.md](docs/testdata.md) 🚧

-----

### Docs / Links

- [/docs/...](docs#readme)
- ...


### References

- ...

