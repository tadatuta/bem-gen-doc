Block `b-link` is a link. Is used inside other blocks.

For simple cases use `BEMJSON`:

    {
        block: 'b-link',
        url: 'http://example.com',
        title: 'Click here to learn more',
        target: '_blank',
        content: 'The best company all over the world'
    }

Property `url` generates `href` attribute. Properties `title` and `target` generate corresponding attributes.