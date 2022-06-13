## Notes
- Safari loads `/manifest.json` when the share menu is opened.





## Testing Data V1 - Markdown Syntax

**Pro:** Smaller height than V2.  
**Con:** A row becomes super wide with no overview.

| Browser | Initial Load Data | Reload Data | Link Load Data |
|---|---|---|---|
| Chrome / 97.0 | 1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/favicon.svg<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png | 1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/favicon.svg<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png | 1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png |
| Chrome / 97.0<br />Extras when devTools are opened | 1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json | 1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json | 1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json |
| Chrome / 97.0<br />Extras when installing PWA | Everything defined in sw.js -> install-event.<br />This should be the same for all browsers (IF the install-event is called)| ditto | ditto |
|  |  |  |  |
| Safari / 14.1.2 | 1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js | 1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js | 1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js |





## Testing Data V2 - HTML Syntax

**Pro:** Better overview than V1 and allows colspan and more fine-tuning.  
**Con:** A block becomes super long.

<table>
  <tr>
    <th>Browser</th>
    <th>Initial Load Data</th>
    <th>Reload Data</th>
    <th>Link Load Data</th>
  </tr>
  <tr>
    <td valign="top">
      Chrome / 97.0
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/favicon.svg<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/favicon.svg<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js<br />1×&nbsp;/manifest.json<br />1×&nbsp;/assets/imgs/icons/icon-144x144.png
    </td>
  </tr>
  <tr>
    <td valign="top">
      Chrome / 97.0<br />Extras when devTools are opened
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json
    </td>
    <td valign="top">
      1×&nbsp;/assets/styles/main.css<br />1×&nbsp;/manifest.json
    </td>
  </tr>
  <tr>
    <td valign="top">Chrome / 97.0<br />Extras when installing PWA</td>
    <td valign="top" colspan="3">
      Everything defined in sw.js -> install-event.<br />
      This should be the same for all browsers (IF the install-event is called)
    </td>
  </tr>
  <tr>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td valign="top">
      Safari / 14.1.2
    </td>
    <td valign="top">
      1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js
    </td>
    <td valign="top">
      1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js
    </td>
    <td valign="top">
      1×&nbsp;/assets/imgs/icons/favicon-16x16.png <br />1×&nbsp;/assets/styles/main.css <br />1×&nbsp;/assets/scripts/main.js <br />1×&nbsp;/assets/scripts/stats.js
    </td>
  </tr>
</table>
