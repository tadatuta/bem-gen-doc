`level` modifier sets the level of heading.

    // page.bemjson.js
    {
        block: 'headline',
        mods: { level: 3 },
        content: 'Lorem ipsum'
    }

    <!-- page.html -->
    <h3 class="headline headline_level_3">Lorem ipsum</h3>

Default — **1**