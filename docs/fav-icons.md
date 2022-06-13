## fav / icon

- `purpose: monochrome` `*`  
  The color information in the icon is discarded and only the alpha data is used.
- `purpose: maskable`  
  The image is designed with icon masks and safe zone in mind.
- `purpose: any` (default)  
  The user agent is free to display the icon in any context.

`*` Unclear if this means only full transparency (like a hole aka no path with fill) or also `fill-opacity`.

-----

## Icon Set

<!-- works locally

| | | |
|:---:|:---:|---|
| **1**|<img width='16'  height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/favicon-16x16.png" />                       |favicon-16x16.png<br />`*`|
| **2**|<img width='32'  height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/favicon-32x32.png" />                       |favicon-32x32.png<br />`*`|
| **3**|<img width='64'  height='auto' src="https://icontest-pwa.vercel.app/favicon.ico" />                                               |favicon.ico<br />`*` `**`|
| **4**|<img width='64'  height='auto' src="https://icontest-pwa.vercel.app/favicon.svg" />                                               |favicon.svg<br />`*` `**`|
| **5**|<img width='72' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-72x72.png" />                 |android-chrome-72x72.png<br />`**`|
| **6**|<img width='192' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-192x192.png" />              |android-chrome-192x192.png<br />`**`|
| **7**|<img width='192' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-512x512.png" />              |android-chrome-512x512.png<br />`**`|
| **8**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/apple-touch-icon.png" />                                      |apple-touch-icon.png<br />`*`|
| **9**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/favicon-maskable-inverted.svg" />           |favicon-maskable-inverted.svg<br />`**`|
|**10**|<img width='192' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-maskable-192x192.png" />     |android-chrome-maskable-192x192.png<br />`**`|
|**11**|<img width='192' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/android-chrome-maskable-512x512.png" />     |android-chrome-maskable-512x512.png<br />`**`|
|**12**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/mstile-70x70.png" />                        |mstile-70x70.png<br />`***`|
|**13**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/mstile-150x150.png" />                      |mstile-150x150.png<br />`***`|
|**14**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/mstile-310x150.png" />                      |mstile-310x150.png<br />`***`|
|**15**|<img width='104' height='auto' src="https://icontest-pwa.vercel.app/assets/imgs/icons/mstile-310x310.png" />                      |mstile-310x310.png<br />`***`|
-->

<!-- works but not if e.g. forked

| | | |
|:---:|:---:|---|
| **1**|<img width='16'  height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/favicon-16x16.png" />                       |favicon-16x16.png<br />`*`|
| **2**|<img width='32'  height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/favicon-32x32.png" />                       |favicon-32x32.png<br />`*`|
| **3**|<img width='64'  height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/favicon.ico" />                                               |favicon.ico<br />`*` `**`|
| **4**|<img width='64'  height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/favicon.svg" />                                               |favicon.svg<br />`*` `**`|
| **5**|<img width='72' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/android-chrome-72x72.png" />                 |android-chrome-72x72.png<br />`**`|
| **6**|<img width='192' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/android-chrome-192x192.png" />              |android-chrome-192x192.png<br />`**`|
| **7**|<img width='192' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/android-chrome-512x512.png" />              |android-chrome-512x512.png<br />`**`|
| **8**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/apple-touch-icon.png" />                                      |apple-touch-icon.png<br />`*`|
| **9**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/favicon-maskable-inverted.svg" />           |favicon-maskable-inverted.svg<br />`**`|
|**10**|<img width='192' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/android-chrome-maskable-192x192.png" />     |android-chrome-maskable-192x192.png<br />`**`|
|**11**|<img width='192' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/android-chrome-maskable-512x512.png" />     |android-chrome-maskable-512x512.png<br />`**`|
|**12**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/mstile-70x70.png" />                        |mstile-70x70.png<br />`***`|
|**13**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/mstile-150x150.png" />                      |mstile-150x150.png<br />`***`|
|**14**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/mstile-310x150.png" />                      |mstile-310x150.png<br />`***`|
|**15**|<img width='104' height='auto' src="https://raw.githubusercontent.com/grmpf/vanilla-icontest-pwa/master/assets/imgs/icons/mstile-310x310.png" />                      |mstile-310x310.png<br />`***`|
-->

<!-- only works on github -->

| | | |
|:---:|:---:|---|
| **1**|<img width='16' height='auto' src="/assets/imgs/icons/favicon-16x16.png?raw=true" />                               |favicon-16x16.png<br />`*`|
| **2**|<img width='32' height='auto' src="/assets/imgs/icons/favicon-32x32.png?raw=true" />                               |favicon-32x32.png<br />`*`|
| **3**|<img width='64' height='auto' src="/favicon.ico?raw=true" />                                                       |favicon.ico<br />`*` `**`|
| **4**|<img width='64' height='auto' src="/favicon.svg?raw=true&sanitize=true" />                                         |favicon.svg<br />`*` `**`|
| **5**|<img width='72' height='auto' src="/assets/imgs/icons/android-chrome-72x72.png?raw=true" />                        |android-chrome-72x72.png<br />`**`|
| **6**|<img width='192' height='auto' src="/assets/imgs/icons/android-chrome-192x192.png?raw=true" />                     |android-chrome-192x192.png<br />`**`|
| **7**|<img width='192' height='auto' src="/assets/imgs/icons/android-chrome-512x512.png?raw=true" />                     |android-chrome-512x512.png<br />`**`|
| **8**|<img width='104' height='auto' src="/apple-touch-icon.png?raw=true" />                                             |apple-touch-icon.png<br />`*`|
| **9**|<img width='104' height='auto' src="/assets/imgs/icons/favicon-maskable-inverted.svg?raw=true&sanitize=true" />    |favicon-maskable-inverted.svg<br />`**`|
|**10**|<img width='192' height='auto' src="/assets/imgs/icons/android-chrome-maskable-192x192.png?raw=true" />            |android-chrome-maskable-192x192.png<br />`**`|
|**11**|<img width='192' height='auto' src="/assets/imgs/icons/android-chrome-maskable-512x512.png?raw=true" />            |android-chrome-maskable-512x512.png<br />`**`|
|**12**|<img width='104' height='auto' src="/assets/imgs/icons/mstile-70x70.png?raw=true" />                        |mstile-70x70.png<br />`***`|
|**13**|<img width='104' height='auto' src="/assets/imgs/icons/mstile-150x150.png?raw=true" />                      |mstile-150x150.png<br />`***`|
|**14**|<img width='104' height='auto' src="/assets/imgs/icons/mstile-310x150.png?raw=true" />                      |mstile-310x150.png<br />`***`|
|**15**|<img width='104' height='auto' src="/assets/imgs/icons/mstile-310x310.png?raw=true" />                      |mstile-310x310.png<br />`***`|

`*` Used as `<link />` tag  
`**` Used in manifest.json  
`***` Windows only
