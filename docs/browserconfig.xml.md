## browserconfig.xml - IE11

IE11 is looking for `browserconfig.xml` in the root folder unless
- `<meta name="msapplication-config" content="none" />`
- OR `<meta name="msapplication-config" content="/path/to/browserconfig.xml" />`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#5299d1</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```

## Edge

manifest.json?
