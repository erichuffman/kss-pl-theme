# KSS PL Theme

## A style guide theme for KSS that mimics the Pattern Lab UI

## How To Use This "Theme"

This is a custom builder for the [twig version of kss-node](https://github.com/kss-node/kss-twig).

Swap the `index.twig` file in your current `builder` directory for the one in this repo, as well as the `kss.css` located in `builder/kss-assets`.

You'll also need to include a copy of the `kss-menu.js` file from this repo in your `builder/kss-assets` directory, and if you're not already including jQuery and the `rainbow.min.js` library, include those files too.

## Live Demo ##

To see the KSS PL theme in action, go here: https://erichuffman-mc.github.io/kss-pl-theme/

## Add Custom Settings

In your KSS script add two custom options: `Layout` and `Classes`.

Example:

```
custom: ['Layout','Classes']

```

Then in your KSS comments you can include a Layout option of `page`, and the result for that stye guide entry would be a full page instead of the standard style guide listing layout. This allows you to create full page prototypes, and have them available in a "Pages" section of the style guide.

For example:

```
// Homepage
//
// Markup: homepage.twig
//
// Layout: page
//
// Classes: page--homepage l-3-col
//
// Style guide: Pages.Homepage
```

When the style guide is built this would result in an `item-pages-homepage.html` file, which would only include the "shell" of the `index.twig` file, and any markup you add to your `homepage.twig` file is included within the `<body>` tag. Any classes you include in the `Classes` setting will be included in the `body` tag's `class` attribute.

For standard style guide listings you can include classes that allow the listing to be displayed in a full-width layout, or with dark/medium gray background:

- `kss-full-width` will display the listing full width of the page
- `kss-bg-dark` will display the listing with a dark gray background (#222222).
- `kss-bg-mid` will display the listing with a mid-gray background (#595959).

## Customizing

See the Sass partials included in `kss-assets/sass` if you want to customize colors, default font-family, etc., and recompile into an updated `kss.css` file. Note that some helper classes are available in the `_kss-helpers.scss` partial which are useful for marking up elements like color swatches.

Also see the `index.twig` file where you can update what breakpoints are used for the breakpoint menu, which functions like Pattern Lab where you can quickly resize the viewport of the style guide to different breakpoints.

## @TODO

The `kss-menu.js` could be refactored as vanilla js so jQuery isn't required (and could probably be cleaned up a bit).
