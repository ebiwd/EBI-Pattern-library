---
layout: default
title: EBI Pattern library
description: Document and demonstrating EBI styles
---

Tired of updating a collection of screenshots (PSD/PDF) to show new website components? Remember the horror that was `homepage.v2.REVISED.UPDATED.psd`? You need a '*HTML/CSS Styleguide*'… Manually editing `HTML` and `CSS` files is hard work. This is where this style guide comes in.
{: .lead}

[Jekyll](http://jekyllrb.com) is a *static site generator*: a script that takes a folder of [Markdown](http://daringfireball.net/projects/markdown/) files and converts them to a complete website.

This site documents and [demonstrates](https://ebiwd.github.io/EBI-Pattern-library/) patterns for the [EBI Visual framework](https://github.com/ebiwd/EBI-Framework).

Jekyll's main focus is to quickly setup a weblog, but we can use it to create a collection of `HTML` and `CSS` *components* just as easily. Now, to add a new Component, simply create a new markdown (`.md` or `.html`) file with the HTML for your component in the `posts/components` folder and run `jekyll build` (or use the included `GulpJS` script).
