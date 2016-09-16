---
layout: default
title: EBI Pattern library
description: Document and demonstrating EBI styles
---

{:refdef: .lead}
This is a "living guide" that implements the broad range of interface functionality in the <a href="https://github.com/ebiwd/EBI-Framework">EBI Visual Framework</a>. This site will guide on how you should make your page elements look and function.
{: refdef}

Go on: check out some of the patterns on the << left. Or, read below for background on the pattern library.

### About the Framework

<p>The framework is a collection of JS, CSS, icons, coding conventions, and templated components that will help you build robust reliable web content faster than if you were to make it from scratch.</p>

<section id="overview" data-magellan-target="overview" markdown="1">

#### How to use this
<blockquote class="float-right lead quote ebi-color">
  Do as I do, not as I say.
  <cite class="text-right">This Framewok</cite>
</blockquote>

<p>This guide does not offer prescriptive solutions for every scenario, but integrates a wide range of pull quotes, form boxes, menus, and more to show you how things should be done.</p>

<p>Also <a href="http://foundation.zurb.com/sites/docs/global.html">consult the Foundation 6 documentation <i class="icon icon-generic" data-icon="x"></i></a> as this framework leverages that toolset.</p>

<p>If you have questions you can't find the answeres to, <a href="#help">see the help section</a>.</p>

### Implementing the framework</h3>

<p>There are two likely scenarios:</p>

<blockquote class="float-right columns medium-5"><h5>Using Drupal?</h5> Contact Web Development. There is <a href="https://github.com/ebiwd/drupal_7_ebi_framework">a Drupal 7 theme you can use</a>. A Drupal 8 version is coming soon(ish).</blockquote>

<dl>
  <dt>Implementing a new project?</dt>
  <dd><p>If you're starting from scratch, check out the collection of boilerplate code, check out the source, and get going. <a href="https://ebiwd.github.io/EBI-Pattern-library/sample-site/" class="readmore">To the boilerplate</a></p></dd>

  <dt>Updating an existing site?</dt>
  <dd><p>If you're updating an EBI Compliance theme site, you'll just need to replace a few JS/CSS files, change some layout classes, and make minore tweaks. It could take as little as 30 minutes. <a href="https://github.com/ebiwd/EBI-Framework/blob/gh-pages/sample-site/migrations/testMigration.js" class="readmore">Run your own sample auto-migration</a></p></dd>
</dl>

### Requirements and what you get

<p>The framework uses modern best practices and targets browsers shipped within the past three years; though other browsers will function through graceful degradation. The framework is also mobile responsive (Responsive Web Design), so you won't have to spend too much time adapting for mobile.</p>

<p>To help us help you, we've used the Foundation Framework (version 6) as a baseline. Using this we get a robust baseline (tool tips, forms, sliders, and modal boxes) as well as technical guidance and extensive open source community testing -- and, perhaps, you'll be fortunate enough to already be (or have) a developer with Foundation experience.</p>

<p>We've taken care to make the implementation very passive, so if you don't want to use these features they won't likely get in your way.</p>

<p>The easiest way to implement the style guide is to <a href="https://ebiwd.github.io/EBI-Pattern-library/sample-site/">download the EBI boilerplate</a> - use those HTML files as a template for your own pages. It contains the HTML for the EBI header, footer, place holders for your project name/logo and page content.</p>

### Framework components

<p>This framework functions similar to many front-end solutions: several files and structures are used and generally can be implemented seperately so you can use what you can or your own solution if required. We also leverage a NPM build process so there's no need to use all of the Foundation framework, if you don't need it.</p>


<div class="button-grid">
  <a class="button primary columns medium-12" href="#">Core HTML structure: The basic HTML markup structure for the page: global-nav black bar, local-nav area, main content div, footer, etc</a>
  <a class="button primary columns medium-12" href="css/ebi-global.css">EBI base CSS styles: Our basic look/colours</a>
  <a class="button primary columns medium-12" href="https://ebiwd.github.io/EBI-Framework/libraries/foundation-6/css/foundation.css">Foundation base CSS styles: this provides the base grid structure, style resets, and core structure of the page</a>
  <a class="button primary columns medium-12" href="css/theme-embl-petrol.css">Your site's CSS colours: Colours specific to your service/site</a>
  <a class="button primary columns medium-12" href="#">Font and iconfont stylesheets</a>
  <a class="button primary columns medium-12" href="#">jQuery 1.10.2: Slightly older versions may be compatible</a>
  <a class="button primary columns medium-12" href="#"><a href="https://ebiwd.github.io/EBI-Framework/js/foundationExtendEBI.js">EBI JS tweaks to Foundation</a>: A series of value adds that build atop Foundation.</a>
  <a class="button primary columns medium-12" href="#">EBI JS</a>
  <a class="button primary columns medium-12" href="#">Cookie JS</a>
  <a class="button primary columns medium-12" href="#">Footer JS</a>
</div>

<span class="icon icon-fileformats" data-icon="p"></span>

<p>In short: add header markup, footer markup, CSS and JS. Then add content.</p>
<p>To get started check out the structure of the <a href="sample-site">sample boiler plate page</a>.</p>

### FAQs
JavaScript:
:<p>The framework does not require jQuery, but using it will get more nice to haves easing your life. The boilerplate includes jQuery functionality by default, if you do not wish to use jQuery you will also need to remove references to <code>foundation.js</code> and <code>FoundationExtendEBI.js</code> files.</p>

Foundation:
:<p>If you aren't able to use the included Foundation base CSS, we do provide some support for other frameworks (such as Bootstrap), but we've picked Foundation as the "recommended implementation" as it offers a path for more graceful integration of EBI styles and requirements.</p>
<p>If you're unable to make use of the Frameworks JS or CSS tooling, use this page as a guide for how your site should look, feel, function. There's no reason that can't be done with any framework be it Angular, Material Design, or vanilla CSS3.</p>
<p>For new websites or major reworks, we recommend you consider using the included Foundation CSS and JS, as you'll get more benefit from the work done in this framework, encounter fewer bugs, and help EBI web services have a more consistent function and feel.</p>

Bootstrap:
:<p>While the front-end framework provides a robust set of tooling and a broader use base, its base styling is more opinionated (121KB vs 43KB of minified baseline CSS). Foundation allows us to provide a slimmer and faster EBI theme layer. Further, non-jQuery using developers will find more benefit in a Foundation-powered ecosystem. For Bootstrap users unfamiliar with Foundation, you might <a href="https://www.codementor.io/css/tutorial/bootstrap-3-vs-foundation-5-front-end-framework-comparison">read this comparison</a> (note that it references the slightly older version of Foundation 5, but is substantially the same for the article's proposes).</p>

SASS:
:<p>We have not used Foundation's compilable CSS, nor have we added any other compile required tooling. This was done to keep implementation as simple as possible, and it offered limited benefits. However, we have implement the vanilla release of Foundation, so there's no reason you couldn't swap that out. As internal users become more familiar with Foundation and we further optimise, a future release may use SASS.</p>

Animation:
:<p>Using CSS3 and JavaScript animations there are many opportunities to make our sites look good and function better, but we want to take this one step at a time and get other items in order. Currently on target for v1.5. <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="Foundation does have a complementary animation toolset that we've not bundled, but you could...">Feel free to experiment with subtle animations</span>, let us know if you do.</p>

</section>

<section id="help" data-magellan-target="help">
<h2>Need help?</h2>

<div class="row">

  <div class="columns medium-6">
    <p>For questions about the background of this guide or a philosophical suggestion <a href="https://www.ebi.ac.uk/seqdb/confluence/display/WGC/Web+Guidelines+committee">contact the EBI Web Guidelines Committee</a>, whom is responsible for the governance and direction.</p>
    <p>For technical matters of "how do I do?", <a href="https://github.com/ebiwd/EBI-Pattern-library/issues">visit the issue queue on GitHub</a>.</p>
  </div>

  <div class="columns callout secondary medium-6">
    ### Want to offer help?</h3>
    <p>Get in touch, or subscribe to the issue queue, collaboration and pull requests welcome!</p>
    <a href="https://github.com/ebiwd/EBI-Pattern-library/" class="button readmore">To the GitHub repo!</a>
  </div>

</div>

</section>
