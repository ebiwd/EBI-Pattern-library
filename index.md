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

  <span class="secondary label"><i class="icon icon-generic" data-icon="i"></i> Framework version: 1.1 Alpha</span>

  <p class="lead">The framework is a collection of JS, CSS, icons, coding conventions, and templated components that will help you build robust web content faster than if you were to make it from scratch.</p>
  <p>This page offers guidance on building web site, pages, and content that comply with the EMBL-EBI: visual look and semantic structure.</p>


<section id="overview" data-magellan-target="overview">

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

  ### Requirements and what you get
  The framework is built with modern best practices and targets browsers shipped within the past three years; though other browsers should still handle the content and appearance well (graceful degradation). The framework is also mobile responsive (Responsive Web Design), so you won't have to spend too much time adapting for mobile.

  To help us help you, we've used the Foundation Framework (version 6) as a baseline. Using this we get a robust set of web components (tool tips, forms, sliders, and modal boxes) as well as technical guidance and extensive open source community testing -- and, perhaps, you'll be fortunate enough to already have a developer with experience with Foundation.
  
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

<section id="browser-compatibility" data-magellan-target="browser-compatibility">
  <h2>Browser compatibility</h2>

  <p>For browser support, aim for content and functionality to be unobstructed on browsers released within the last five years and have JavaScript enabled; this is represents virtually all users of the EMBL-EBI site (in excess of 99.9%).</p>
  <p>As a guiding rule, test for compatibility on any browser or device that represents more than 2% of the usage of <a href="http://www.ebi.ac.uk">www.ebi.ac.uk</a>.</p>
  <p>As <a href="http://people.opera.com/howcome/2006/phd/#h-30">intended</a> by the CSS specification, not all browsers, devices, or users render content to look exactly the same. Our aim is to create an accessible and visually consistent design across a broad range of clients, not pixel-prefect designs. Further, we build atop the basic functionality, adding <a href="https://en.wikipedia.org/wiki/Progressive_enhancement">progressive-enhancement</a> features to newer classes of browsers and devices.</p>

  <div class="callout warning">

    <h3><span class="icon icon-generic " data-icon="U"></span> How to use this</h3>
    <p>The below describes how the EMBL-EBI Web Development team analyses and supports the EBI Framework and sites the team maintains, we suggest you use this as a starting point, adapting it for the browsers of your users, and devices you can procure to test on.</p>
    <p>For further guidance, reach out to the Web Development team for assistance on how to set up a testing environment.</p>

  </div>


  <p>As of this writing (21/10/2015), currently supported desktop browsers and their usage:</p>

  <table>
    <tbody>
      <tr>
        <th>Browser</th>
        <th>Version(s)</th>
        <th>Traffic %</th>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>46, 45, 44</td>
        <td>40.0%</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>40, 39, 38</td>
        <td>18.6</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>9, 8, 7.1</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>IE</td>
        <td>12, 11</td>
        <td>6.6</td>
      </tr>
    </tbody>
  </table>

  <h3>Mobile and tablet support</h3>

  <div class="row">
    <div class="medium-7 columns">

      <p>The mobile and tablet space is highly fragmented with reliable guarantees of support often hard to offer as device maker, browser, and OS version are each a variable in HTML/CSS rendering. </p>
      <p>With this in mind, there are three classes of mobile and tablet support:</p>

      <dl>
        <dt>Primary support</dt>
        <dd>These devices represent a greater than 5% share of mobile traffic and the Web Dev team posses these devices to test against. Testing will be performed proactively for each major release (qualified as 0.1 increment in versioning, or greater).</dd>

        <dt>Best effort</dt>
        <dd>These devices represent a greater than 2.5% share of mobile traffic, and/or the Web Dev team does not have a device to test against. The Web Dev team will attempt to support these users but without physical devices to test against, cannot guarantee ongoing compatibility.</dd>
        <ul>
          <li>Where available, simulator/emulator tools will be used to test against during each major release</li>
          <li>Bug reports from users will be addressed, and documented in hopes of ensuring no degradation in future updates</li>
        </ul>

        <dt>Legacy</dt>
        <dd>Devices that represent less than 2.5% of mobile traffic and are on the decline month-over-month.</dd>
        <ul>
          <li>The Web Dev team does not thoroughly test against physical devices or emulated software</li>
          <li>The team will address user bug reports will be addressed, attempting a fix where it does not adversely affect performance or Best effort/Primary support devices</li>
        </ul>

      </dl>

    </div>

    <div class="medium-5 columns callout secondary">

      <h4>Current classifications</h4>
      <p>A synopsis of the ecosystem as of September 2015. This is targeted for a twice annual update, the classification of devices is subject to change if a high need browser or device is identified.</p>

      <table>
        <caption>Operating Systems</caption>
        <tbody>
          <tr>
            <th>OS</th>
            <th>Traffic</th>
            <th>Support level</th>
          </tr>
          <tr>
            <td>Android 4.x</td>
            <td>43.5%</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>Android 5.x</td>
            <td>20.4</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>iOS 9.x</td>
            <td>9.5</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>iOS 8.x</td>
            <td>8.1</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>Android 2.x</td>
            <td>3.1</td>
            <td>Best effort</td>
          </tr>
          <tr>
            <td>Windows Phone</td>
            <td>2.8</td>
            <td>Best effort</td>
          </tr>
        </tbody>
      </table>

      <table>
        <caption>Mobile Browsers</caption>
        <tbody>
          <tr>
            <th>Browser</th>
            <th>Traffic</th>
            <th>Support level</th>
          </tr>
          <tr>
            <td>Safari</td>
            <td>40.1%</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>Chrome</td>
            <td>30.7</td>
            <td>Primary support</td> 
          </tr>
          <tr>
            <td>Android</td>
            <td>9</td>
            <td>Primary support</td>
          </tr>
          <tr>
            <td>IE 11</td>
            <td>6.7</td>
            <td>Best effort</td>
          </tr>
          <tr>
            <td>UC Browser</td>
            <td>5.1</td>
            <td>Best effort</td>
          </tr>
          <tr>
            <td>Chrome iOS</td>
            <td>2.7</td>
            <td>Best effort</td>
          </tr>
        </tbody>
      </table>

      <p>Note on tablets: Currently all tablet devices are limited to best effort, as they represent less than 2.5% of traffic (currently at 1.8%).</p>

    </div>

  </div> <!-- /row -->

  <h5>Special targets</h5>
  <p>These devices, browsers, or OS versions have been identified as critical needs.</p>
  <p>None currently known.</p>

</section>

<section id="accesibility" data-magellan-target="accesibility">
  <h2>accessibility</h2>
  <p>The information and data that we provide via our website should be accessible to as many people as possible, regardless of their abilities.</p>
  <p>Considering accessibility is not a bolt-on activity or after-thought, but a core part of our design activities. It is therefore not an extra piece of work that you need to do - with thoughtful, standards-compliant coding and good design, you can radically improve the accessibility of your web pages.</p>
  <h4>Recommendations</h4>
  <p>There are a number of basic things you can do (some of these are repeated elsewhere in these guidelines)</p>
  <ul>
   <li>Provide appropriate alternative text</li>
   <li>Ensure content is well structured and clearly written</li>
   <li>Help users navigate to relevant content</li>
   <li>Provide headers for data tables</li>
   <li>Do not rely on colour alone to convey meaning</li>
   <li>Ensure users can complete and submit all forms</li>
   <li>Ensure links make sense out of context</li>
  </ul>
  <p>For further detail, <a href="//www.ebi.ac.uk/web/guidelines" title="">see the Accessibility advice provided</a> in the overall EBI Website guidelines.</p>

</section>

<section id="help" data-magellan-target="help">
  <h2>Need help?</h2>

  <div class="row">

    <div class="columns medium-6">

      <p>If you a question about the background of this guide or have philisophical suggestion <a href="https://www.ebi.ac.uk/seqdb/confluence/display/WGC/Web+Guidelines+committee">contact the EBI Web Guidelines Committee</a>, whom is responsibile for the governance and direction.</p>
      <p>For technical matters of "how do I do?", <a href="https://github.com/ebiwd/EBI-Framework/issues">visit the issue queue on GitHub</a>.</p>

    </div>

    <div class="columns callout secondary medium-6">
      <h3>Want to offer help?</h3>
      <p>Get in touch, or subscribe to the issue queue, collaboration and pull requests welcome!</p>
      <a href="https://github.com/ebiwd/EBI-Framework/" class="button readmore">To the GitHub repo!</a>
    </div>

  </div>

</section>
