# Technical-header. A responsive header for Technical Humans.
![Header Screen Shot](https://cloud.githubusercontent.com/assets/5528612/5929652/a775f6c0-a63a-11e4-8c05-c0e05a9e17e8.png)]
## Requirements

 - bower
 - jade
 - scss/sass

## Dependencies

 - [inuit-reset](https://github.com/inuitcss/generic.reset)
 - [inuit-normalize](https://github.com/inuitcss/generic.normalize)
 - [inuit-responsive-tools](https://github.com/inuitcss/tools.responsive)
 - [inuit-responsive-settings](https://github.com/inuitcss/settings.responsive)
 - [font-awesome](https://github.com/FortAwesome/Font-Awesome)

## Use
To use the header install it as a bower dependency in you application
I chose to use bower as I've based most of my principles and base off of inuit.css which uses bower for dependency management.

Once install be sure to include this file in your `main.scss` or `index.scss` file.

```
// Components
@import "bower_components/technical-header/components.technical-header";

```

Don't forget to set the font path to your fonts directory. Be sure to move the fonts from the font-awesome bower install to your fonts directory. Preferably in your `_variable.scss` file.

```
@fa-font-path: /path/to/font-directory
```

In your layout.jade file include the `technical-header.jade`:

```
include /path/to/technical-header.jade
```

Be sure your scss files these conventions:
[http://www.evoluted.net/thinktank/web-development/inuit-css-v5-0-the-object-oriented-css-framework]()

### Import order

Because inuitcss is broken apart into lots of small, composable modules, it is
important that you as the developer piece things together in the correct order.
That order is:

* **Settings:** Global variables, site-wide settings, config switches, etc.
* **Tools:** Site-wide mixins and functions.
* **Generic:** Low-specificity, far-reaching rulesets (e.g. resets).
* **Base:** Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).
* **Objects:** Objects, abstractions, and design patterns (e.g. `.media {}`).
* **Components:** Discrete, complete chunks of UI (e.g. `.carousel {}`). This is the one layer that inuitcss doesn’t get involved with.
* **Trumps:** High-specificity, very explicit selectors. Overrides and helper
  classes (e.g. `.hidden {}`).

## Development
Install the dependancies

```
npm install;
bower install;
```

To develop with this component simply run `gulp` and make edits to the `lib/test.html` `lib/test.scss`

To publish simply commit changes with appropriate version tags and and publish to the bower registry.
