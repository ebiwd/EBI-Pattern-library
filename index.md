---
layout: default
title: EBI Pattern library
description: Document and demonstrating EBI styles
---

<section id="overview" data-magellan-target="overview">

  Tired of updating a collection of screenshots (PSD/PDF) to show new website components? Remember the horror that was `homepage.v2.REVISED.UPDATED.psd`? You need a '*HTML/CSS Styleguide*'… Manually editing `HTML` and `CSS` files is hard work. This is where this style guide comes in.
  {: .lead}

  [Jekyll](http://jekyllrb.com) is a *static site generator*: a script that takes a folder of [Markdown](http://daringfireball.net/projects/markdown/) files and converts them to a complete website.

  This site documents and [demonstrates](https://ebiwd.github.io/EBI-Pattern-library/) patterns for the [EBI Visual framework](https://github.com/ebiwd/EBI-Framework).

  Jekyll's main focus is to quickly setup a weblog, but we can use it to create a collection of `HTML` and `CSS` *components* just as easily. Now, to add a new Component, simply create a new markdown (`.md` or `.html`) file with the HTML for your component in the `posts/components` folder and run `jekyll build` (or use the included `GulpJS` script).

  <h3>How to use this</h3>
  Use this as page and its associated assets as your boilerplate. Read through the text and draw on the examples. Use your browser's web inspector and view the source.
  <blockquote class="float-left">
    Do as I do, not as I say.
    <cite>This Framewok</cite>
  </blockquote>
  <p>This guide does not offer prescriptive solutions for every scenario, but integrates a wide range of pull quotes, form boxes, menus, and more to show you how things should be done.</p>
  <p>Also <a href="http://foundation.zurb.com/sites/docs/global.html">consult the Foundation 6 docs <i class="icon icon-generic" data-icon="x"></i></a>, as this framework leverages that toolset.</p>
  <p>We plan to host workshops to educate on the tooling and address issues or concerns, <a href="https://github.com/ebiwd/EBI-Framework/issues/1">register you interest here</a> or if you don't have a GitHub account e-mail khawkins@ebi.ac.uk</p>
  <p>If you need technical guidance or have questions, <a href="#help">see the help section</a>.</p>

  <div class="callout warning">
    <h1 class="training-color"><span class="icon icon-generic " data-icon="U"></span> Heads up!</h1>
    <p>This framework is in a very early stage of testing and is still being actively planned.</p>
    <p>The takeaway is that there are two goals here:</p>
    <ol>
      <li>Refresh the EBI Compliance theme to be more visually compliant with EMBL-EBI standards.</li>
      <li>Offer optional reusable tooling to make the lives of developers easier and to make EMBL-EBI sites look more consistent with less effort.</li>
    </ol>
    <p>The documentation below is a work in progress. We are looking for input and concerns about the scope, direction and technical solutions. Post to <a href="https://github.com/ebiwd/EBI-Framework/issues/1">the GitHub issue queue</a>, if you don't have a GitHub account: e-mail khawkins@ebi.ac.uk</p>
    <p>Also see the <a href="sample-site/">sample pages</a> to get an idea of how real content would look and work using the framework.</p>
  </div>

  <h3>Implementing the framework</h3>
  <p>There are two likely scenarios:</p>

  <blockquote class="float-right columns medium-5"><h5>Using Drupal?</h5> Contact Web Development. There is a Drupal 7 theme you can use, and a Drupal 8 version is coming soon(ish).</blockquote>

  <dl>
    <dt>Implementing a new project?</dt>
    <dd><p>If you're starting from scratch, check out the collection of boilerplate code, check out the source, and get going. <a href="https://ebiwd.github.io/EBI-Framework/sample-site/" class="readmore">To the boilerplate</a></p></dd>

    <dt>Updating an existing site?</dt>
    <dd><p>If you're updating a site that is already using the EBI Compliance theme, you'll just need to replace a few JS/CSS files, change some layout classes, and make minore tweaks. It could take as little as 30 minutes. <a href="https://github.com/ebiwd/EBI-Framework/commit/a49d3668f2b80058be8c277d875c8b06f47a7237" class="readmore">Check out the sample migration</a></p></dd>

  </dl>

  <h3>Requirements and what you get</h3>
  <p>The framework is built with modern best practices and targets browsers shipped within the past three years; though other browsers should still handle the content and appearance well (graceful degradation). The framework is also mobile responsive (Responsive Web Design), so you won't have to spend too much time adapting for mobile.</p>
  <p>To help us help you, we've used the Foundation Framework (version 6) as a baseline. Using this we get a robust set of web components (tool tips, forms, sliders, and modal boxes) as well as technical guidance and extensive open source community testing -- and, perhaps, you'll be fortunate enough to already have a developer with experience with Foundation.</p>
  <p>But we've taken care to make the implementation non-intrusive, so if you don't want to use these features, they won't likely get in your way.</p>
  <p>The easiest way to implement the style guide is to <a href="https://ebiwd.github.io/EBI-Framework/sample-site/#boilerplate">download the EBI boilerplate</a> - use those HTML files as a template for your own pages. It contains the HTML for the EBI header and footer and place holders for your project name / logo and page content. It also links to the core stylesheets you'll need to make your web pages look like part of the EBI website.</p>
  <p><a href="https://github.com/ebiwd/EBI-Framework/archive/master.zip" class="button sans-serif">Download the framework</a> or <a href="https://github.com/ebiwd/EBI-Framework/">view on Github</a></p>

  <h3>Framework components</h3>
  <p>This framework functions many front-end solutions.</p>
  <p>There are several files and structures that we use, generally these can be implemented seperately so you can use what you can or your own solution if required.</p>

  <div class="callout">
    <ol>
      <li>Core HTML structure: The basic HTML markkup structure for the page: global-nav black bar, local-nav area, main content div, footer, etc.</li>
      <li><a href="css/ebi-global.css">EBI base CSS styles</a>: Our basic look/colours.</li>
      <li><a href="https://ebiwd.github.io/EBI-Framework/libraries/foundation-6/css/foundation.css">Foundation base CSS styles</a>: this provides the base grid structure, style resets, and core structure of the page.</li>
      <li><a href="css/theme-embl-petrol.css">Your site's CSS colours</a>: Colours specific to your service/site.</li>
      <li>Fonts.css</li>
      <li>jQuery 1.10.2: Slightly older versions may be compatible.</li>
        <ul>
          <li>Foundation JS</li>
          <ul>
            <li><a href="https://ebiwd.github.io/EBI-Framework/js/foundationExtendEBI.js">EBI JS tweaks to Foundation</a>: A series of value adds that build atop Foundation.</li>
          </ul>
        </ul>
      <li>EBI JS</li>
      <li>Cookie JS</li>
      <li>Footer JS</li>
    </ol>
  </div>

  <p>In short: add header markup, footer markup, CSS and JS. Then add content.</p>
  <p>To get started check out the structure of the <a href="sample-site">sample boiler plate page</a>.</p>

  <div class="">
    <h3>FAQs</h3>
    <dl>
      <dt>JavaScript:</dt>
        <dd><p>The framework does not require jQuery, but if you do use it you will get more nice to haves and your life may be easier all around. The jQuery functionality is enable by default. For more see the section on disabling JavaScript addons (you'll comment out two lines -- need to write this...)</p></dd>
      <dt>Foundation:</dt>
        <dd><p>If you aren't able to use the included Foundation base CSS, we do provide some support for other frameworks (such as Bootstrap), but we've picked Foundation as the "recommended implementation" as it offers a path for more graceful integration of EBI styles and requirements.</p>
        <p>If you're unable to make use of the Frameworks JS or CSS tooling, use this page as a guide for how your site should look, feel, function. There's no reason that can't be done with any framework be it Angular, Material Design, or vanilla CSS3.</p>
        <p>For new websites or major reworks, we recommend you consider using the included Foundation CSS and JS, as you'll get more benefit from the work done in this framework, encounter fewer bugs, and help EBI web services have a more consistent function and feel.</p>
        </dd>
      <dt>Bootstrap:</dt>
        <dd><p>While the front-end framework provides a robust set of tooling and a broader use base, its base styling is more opinionated (121KB vs 43KB of minified baseline CSS). Foundation allows us to provide a slimmer and faster EBI theme layer. Further, non-jQuery using developers will find more benefit in a Foundation-powered ecosystem. For Bootstrap users unfamiliar with Foundation, you might <a href="https://www.codementor.io/css/tutorial/bootstrap-3-vs-foundation-5-front-end-framework-comparison">read this comparison</a> (note that it references the slightly older version of Foundation 5, but is substantially the same for the article's proposes).</p></dd>
      <dt>SASS:</dt>
        <dd><p>We have not used Foundation's compilable CSS, nor have we added any other compile required tooling. This was done to keep implementation as simple as possible, and it offered limited benefits. However, we have implement the vanilla release of Foundation, so there's no reason you couldn't swap that out. As internal users become more familiar with Foundation and we further optimise, a future release may use SASS.</p></dd>
      <dt>Animation:</dt>
        <dd><p>Using CSS3 and JavaScript animations there are many opportunities to make our sites look good and function better, but we want to take this one step at a time and get other items in order. Currently on target for v1.5. <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="Foundation does have a complementary animation toolset that we've not bundled, but you could...">Feel free to experiment with subtle animations</span>, let us know if you do.</p></dd>
    </dl>
  </div>
</section>

<section id="design-patterns" data-magellan-target="design-patterns">
  <h2>Design patterns</h2>
  <p>This page acts as a "living guide" by implementing a broad range of interface items, use them as a guide for how to make your page elements look and function.</p>

  <p>For edge cases not covered, please <a href="https://github.com/ebiwd/EBI-Framework/issues">open an issue in the tracker</a>. We'll update this living style guide with feedback that grows from there.</p>
</section>
