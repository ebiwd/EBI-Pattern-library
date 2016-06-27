---
layout: default
title: EBI Pattern library
description: Document and demonstrating EBI styles
---

Tired of updating a collection of screenshots (PSD/PDF) to show new website components? Remember the horror that was `homepage.v2.REVISED.UPDATED.psd`? You need a '*HTML/CSS Styleguide*'… Manually editing `HTML` and `CSS` files is hard work. This is where this style guide comes in.{: .pre}

[Jekyll](http://jekyllrb.com) is a *static site generator*: a script that takes a folder of [Markdown](http://daringfireball.net/projects/markdown/) files and converts them to a complete website.

This site documents and [demonstrates](https://ebiwd.github.io/EBI-Pattern-library/) patterns for the [EBI Visual framework](https://github.com/ebiwd/EBI-Framework).

Jekyll's main focus is to quickly setup a weblog, but we can use it to create a collection of `HTML` and `CSS` *components* just as easily. Now, to add a new Component, simply create a new markdown (`.md` or `.html`) file with the HTML for your component in the `posts/components` folder and run `jekyll build` (or use the included `GulpJS` script).

## Table Of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#install)
- [Using Jekyll Styleguide](#usage)
- [Troubleshooting](#troubleshooting)

### Overview

- Creates a simple Pattern Library of HTML components in `posts/components`.
- `@import` your Sass files in `static/scss/app.scss`...
  - ...or just add `your.css` to `_includes/head.html`
- Source Highlighting through [PrismJS](http://prismjs.com/)
- \[Optional\] [GulpJS](http://GulpJS.com) workflow (compile Sass, concat and autoprefix, auto-run Jekyll)
- \[Optional\] Themes: see `static/scss/themes/`

### Requirements

{: .message} So, I basically created this for [myself](http://twitter.com/valuedstandards). I am on a Mac. This *probably* works on Windows and \*nix but you'd have to probably change a bunch of stuff. So, these instructions are Mac only a.t.m. Sorry.

[Jekyll requires Ruby, Rubygems and a Linux, Unix or Mac OSX system](http://jekyllrb.com/docs/installation/). If you do not yet have those installed—and are on Mac OSX—I strongly advise you to install those as follows:

{: .message .message--warning} **Note:** Skip these steps if you already have the needed tools (Ruby, Gems, etc) installed. Avoid using `sudo`

1. Make sure you have the [OSX Xcode *Command Line Tools* installed](https://encrypted.google.com/search?hl=en&q=How+to+install+Xcode+command+line+tools)
2. Install Ruby via [RVM](http://rvm.io):  
`\curl -sSL https://get.rvm.io | bash -s stable`
