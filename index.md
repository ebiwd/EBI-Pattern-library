---
layout: default
title: EBI Pattern library overview
description: Document and demonstrating EBI styles
group: in_local_navigation 
order: 1
---

{:refdef: .lead}
This is a living guide that implements the broad range of interface functionality in the <a href="https://github.com/ebiwd/EBI-Framework">EBI Visual Framework</a>. This site will guide on how you should make your page elements look and function.
{: refdef}

On the right you'll find details on patterns, and below your can read background on the pattern library.

<section id="overview" data-magellan-target="overview" markdown="1">

This guide does not offer prescriptive solutions for every scenario, but integrates a wide range of pull quotes, form boxes, menus, and more to show you how things should be done.


<div class="row">
  <div class="columns callout medium-10 medium-push-1">
    <h3><i class="icon icon-generic padding-right-medium" data-icon="i"></i>Quick info</h3>

    <p>This is a collection of JS, CSS, icons, coding conventions, and templated components that will help you build robust reliable web content faster than if you were to make it from scratch.</p>

    <div class="columns medium-up-3 row " data-equalizer data-equalize-on="medium">
      <div class="column">
        <a data-equalizer-watch class="industry-background button" href="/EBI-Pattern-library/patterns/page-structure/">
          <h6 class="white-color text-left">Learn about the EMBL-EBI page structure</h6>
        </a>
      </div>
      <div class="column">
        <a data-equalizer-watch class="industry-background button" href="/EBI-Pattern-library/patterns/">
          <h6 class="white-color text-left">View all EBI Visual Framewowk patterns</h6>
        </a>
      </div>
      <div class="column">
        <a data-equalizer-watch class="industry-background button" target="_blank" href="http://foundation.zurb.com/sites/docs/global.html">
          <h6 class="white-color text-left">Consult the Foundation 6 patterns <i class="icon icon-generic" data-icon="x"></i></h6>
        </a>
      </div>
    </div>

  </div>
</div>

## Implementing

<p>There are two likely scenarios:</p>

<div class="float-right columns callout medium-5"><h5>Using Drupal?</h5> There is <a href="https://github.com/ebiwd/drupal_7_ebi_framework">a Drupal 7 theme you can use</a>.</div>

**Implementing a new project?**
: If you're starting from scratch, check out the collection of boilerplate code, check out the source, and get going. <a href="/EBI-Pattern-library/patterns/sample-pages/" class="readmore">To the sample pages</a> <a href="/EBI-Pattern-library/patterns/page-structure/" class="readmore">Learn about the EMBL-EBI page structure</a>

**Updating an existing site?**
: If you're updating an EBI Compliance theme site, you'll just need to replace a few JS/CSS files, change some layout classes, and make minore tweaks. It could take as little as 30 minutes. <a href="https://github.com/ebiwd/EBI-Framework/blob/gh-pages/sample-site/migrations/testMigration.js" class="readmore">Run your own sample auto-migration</a>

## Requirements and what you get

<blockquote class="float-right lead quote ebi-color">
  Do as I do, not as I say.
  <cite class="text-right">This pattern library</cite>
</blockquote>

The framework uses modern best practices and targets browsers shipped within the past three years (<a href="/EBI-Pattern-library/components/browser-compatibility/" class="">more on browser support</a>); though other browsers will function through the an implementation of [graceful degradation](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement). The framework is also mobile responsive (Responsive Web Design), so you won't have to spend too much time adapting for mobile.

To help us help you, we've used the Foundation Framework (version 6) as a baseline. Using this we get a robust baseline (tool tips, forms, sliders, and modal boxes) as well as technical guidance and extensive open source community testing -- and, perhaps, you'll be fortunate enough to already be (or have) a developer with Foundation experience.

We've taken care to make the implementation very passive, so if you don't want to use these features they won't likely get in your way.

The easiest way to implement the style guide is to <a href="/EBI-Pattern-library/patterns/sample-pages/">follow the EBI boilerplate</a> -- use those HTML files as a template for your own pages. It contains the HTML for the EBI header, footer, place holders for your project name/logo and page content. And be sure to <a href="/EBI-Pattern-library/patterns/page-structure/" class="readmore">read up on the EMBL-EBI page strucutre</a>

## Framework components

This framework functions similar to many front-end solutions: several files and structures are used and generally can be implemented separately so you can use what you can or your own solution if required. We also leverage a NPM build process so there's no need to use all of the Foundation framework, if you don't need it.

<div class="button-grid small-collapse margin-bottom-large" markdown="0">
  <div class="columns">
    <div class="row" style="position: relative;">
      <div class="columns small-4">
        <div class="row small-collapse">
          <a class="button secondary columns small-6 small-push-3" href="https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css">fonts.css</a>
          <a class="button secondary columns small-12" href="css/theme-embl-petrol.css">Custom CSS<br/><small> Colours and patterns specific to your service/site</small></a>
          <a class="button primary columns small-12" href="css/ebi-global.css">
            EBI base CSS styles<br/>
            <small>EMBL-EBI look, colours</small></a>
          <a class="button primary columns small-12" href="https://ebiwd.github.io/EBI-Framework/libraries/foundation-6/css/foundation.css">Foundation base CSS styles<br/>
          <small>The base grid structure, style resets, core page styling</small></a>
        </div>
      </div>
      <div class="columns small-8" style="position: absolute;bottom: 0;right: 0;">
        <div class="row small-collapse" data-equalizer data-equalize-on="medium" style="position: relative;">
          <div class="columns small-7" data-equalizer-watch>
            <a class="button secondary columns small-12" href="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/js/foundationExtendEBI.js">FoundationExtendEBI.js <small>EBI JS tweaks to Foundation: A series of value adds that build atop Foundation</small></a>
            <a class="button secondary columns small-12" href="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/libraries/foundation-6/js/foundation.js">foundation.js</a>
            <a class="button secondary columns small-12" href="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">jQuery 1.10.2<br/><small>Slightly older versions may be compatible</small></a>
          </div>
          <div class="columns small-5" style="position: absolute;bottom: 0;right: 0;">
            <!-- todo: come up with a pattern to bottom align columns, or do we hold out for v1.2 and switch to flex gird? http://foundation.zurb.com/sites/docs/flex-grid.html -->
            <a class="button primary columns small-12" href="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/js/cookiebanner.js">EBI cookiebanner.js</a>
            <a class="button primary columns small-6" href="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/js/foot.js">EBI footer.js</a>
            <a class="button primary columns small-6" href="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/js/script.js">EBI script.js</a>
          </div>
        </div>
        <div class="row">
          <a class="button primary columns small-12" href="#">JavaScript</a>
        </div>
      </div>
    </div>

    <a class="button primary columns small-12" href="https://ebiwd.github.io/EBI-Pattern-library/sample-site/">Core HTML structure<br/><small>The basic HTML tag structure for the page (global-nav black bar, local-nav area, main content div, footer, etc)</small></a>
  </div>
</div>

<div class="columns medium-5 float-right text-right">
  <small>Stack legend</small><br/>
  <span class="tag secondary-background white-color">Optional, but recommended</span> <span class="tag white-color">Required</span>
</div>

In short: add header markup, footer markup, CSS and JS. Then add content.

To get started check out the structure of the <a href="sample-site">sample boiler plate page</a>.

## FAQs

**JavaScript**
: The framework does not require jQuery, but using it will get more nice to haves easing your life. The boilerplate includes jQuery functionality by default, if you do not wish to use jQuery you will also need to remove references to <code>foundation.js</code> and <code>FoundationExtendEBI.js</code> files.

**Foundation**
: If you aren't able to use the included Foundation base CSS, we do provide some support for other frameworks (such as Bootstrap), but we've picked Foundation as the "recommended implementation" as it offers a path for more graceful integration of EBI styles and requirements.
: If you're unable to make use of the Frameworks JS or CSS tooling, use this page as a guide for how your site should look, feel, function. There's no reason that can't be done with any framework be it Angular, Material Design, or vanilla CSS3.
: For new websites or major reworks, we recommend you consider using the included Foundation CSS and JS, as you'll get more benefit from the work done in this framework, encounter fewer bugs, and help EBI web services have a more consistent function and feel.

**Bootstrap**
: While the front-end framework provides a robust set of tooling and a broader use base, its base styling is more opinionated (121KB vs 43KB of minified baseline CSS). Foundation allows us to provide a slimmer and faster EBI theme layer. Further, non-jQuery using developers will find more benefit in a Foundation-powered ecosystem. For Bootstrap users unfamiliar with Foundation, you might <a href="https://www.codementor.io/css/tutorial/bootstrap-3-vs-foundation-5-front-end-framework-comparison">read this comparison</a> (note that it references the slightly older version of Foundation 5, but is substantially the same for the article's proposes).

</section>

<section id="help" data-magellan-target="help" markdown="1">

### Need help?

<div class="row">

<div class="columns medium-6" markdown="1">

For questions about the background of this guide or a philosophical suggestion <a href="https://github.com/ebiwd/EBI-Pattern-library/issues">post to the issue queue</a> for discussion and support. 

Note that the <a href="//www.ebi.ac.uk/seqdb/confluence/display/WGC/Web+Guidelines+committee">EBI Web Guidelines Committee</a> is responsible for the governance and direction of the patterns and framework.

</div>

<div class="columns callout secondary medium-6" markdown="1">

### Want to offer help?

Get in touch, or subscribe to the issue queue, collaboration and pull requests welcome!

<a href="https://github.com/ebiwd/EBI-Pattern-library/" class="button readmore">To the GitHub repo</a>
</div>

</div>

</section>
