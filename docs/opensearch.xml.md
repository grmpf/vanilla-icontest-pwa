## OpenSearch

Worth to give it a try some day but support and usefulness is semi-unknown or very limited.

```xml
<?xml version="1.0"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">
    <ShortName>Yoast.com</ShortName>
    <LongName>Yoast.com Search</LongName>
    <Description>Yoast.com search</Description>
    <Image height="64" width="64" type="image/png">https://yoast.com/assets/imgs/icons/icon-64x64.png</Image>
    <Image height="16" width="16" type="image/x-icon">https://yoast.com/favicon.ico</Image>
    <Url type="text/html" template="https://yoast.com/">
        <Param name="s" value="{searchTerms}"/>
    </Url>
    <Url type="text/html" template="https://yoast.com/?s2={searchTerms}&amp;plugin=1"/>
    <Query role="example" searchTerms="LOREM%20IPSUM" />
    <InputEncoding>UTF-8</InputEncoding>
    <OutputEncoding>UTF-8</OutputEncoding>
    <moz:SearchForm>https://yoast.com/</moz:SearchForm>
</OpenSearchDescription>
```

### OpenSearchDescription
|||
|-----|-----|
|`ShortName`|      TODO |
|`LongName`|       TODO |
|`Description`|    TODO |
|`InputEncoding`|  TODO |
|`Image`|          TODO |
|`Url`|            TODO |
|`Query`|          TODO |
|`InputEncoding`|  TODO |
|`OutputEncoding`| TODO |
|`xmlns:moz`+<br />`<moz:Xyz>`| Specials for FireFox. But: `<moz:SearchForm>` is kind of deprecated because confusing.

