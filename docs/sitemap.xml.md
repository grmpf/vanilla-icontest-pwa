## sitemap.xml

> - sitemap.xml should only contain links to the main language to tell which pages to index. Alternatives are linked with `<link>`.
> - Google might not like if all/too many lastmod dates are identical.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://icontest-pwa.vercel.app/</loc>
        <lastmod>2022-01-23T11:44:07.793Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://icontest-pwa.vercel.app/test.html</loc>
        <lastmod>2022-01-23T11:44:07.793Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
```


- `url`
    - `loc`:
    - `lastmod`:
    - `changefreq`: ...
    - `priority`: default 0.5
