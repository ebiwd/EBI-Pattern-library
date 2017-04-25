---
layout: pattern
title: Code highlighting
categories: patterns
tags:
- typography
description: If you need to showcase snippets of code, here's how to.
---
<span class="tag">v1.2</span>

### Inline code highlighting

If you want to do a bit of `inline-code`, use the the `<code>` element or `span.code`.

### Generic code block

Use a nested combination of `<pre>` and `<code>` for a code block.

```
<h1>This is a sample code block</h1>
<p>I'm text!</p>
```
<br/>

#### Stylised code block

If you use [Pygments code formatting](http://pygments.org/) you can use [ebi-code.css](http://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/ebi-code.css) for syntax highlighting, like so:

<link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/ebi-code.css">
<br/>

##### HTML

``` html
<h1>This is a sample HTML code block</h1>
<p>I'm text!</p>
```
<br/>

##### PHP

```php
function text() {
  print '<h1>This is a sample PHP code block</h1>' . '<p>I'm text!</p>';
  return true;
}
```
