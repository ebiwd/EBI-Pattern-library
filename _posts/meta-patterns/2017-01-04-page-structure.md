---
layout: meta-pattern
title: Page structure
categories: meta-patterns
group: in_local_navigation
tags:
- layout
- navigation
description: The layout used by the Framework is a wrapper that helps structure your page.
---

This structure is informed by a large amount of UX research, team feedback, and tweaked to be compliant with the EMBL and EMBL-EBI branding.

In short: using the boilerplate formats will help save you time, deliver a better experience to the users and keep the branding watchdogs happier.

### What is the structure?

We have divided the page areas into three types:

1. Centrally governed: here content and structure are managed by EMBL-EBI (global masthead and global footer);
2. Structured with custom content: the content is managed by a service, but structure is managed by EMBL-EBI (i.e. local masthead and local footer); and
3. Custom: content and structure are governed by the service with guidance from within this pattern library.

<img src="../../static/images/layout/diagram-page.svg" />
<cite>Placement of the above three region types and associated content regions.</cite>

See also: <a href="../sample-pages" class="readmore">Sample pages</a>

### What are the regions of the site?

#### <a name="global" id="global"></a>Global masthead (aka: global menu)

The global navigation menu sits at the top of every page. It is designed to be easy to find yet unobtrusive, so as not to confuse users who wish to use the navigation menu for your site.

<h4><a name="local" id="local"></a>Local masthead (aka: local menu)</h4>
<p>The local menu is the navigation menu for your website and it sits below the main banner. It is optional, since not all projects require their own menu. Since it is a horizontal menu, you need to think about the text length of labels. We recommend that your first menu link is "Home" and your last one is "About [project-name]".</p>

<h4><a name="breadcrumb" id="breadcrumb"></a>Breadcrumb trail</h4>
<p>A breadcrumb can help users understand the structure of sites with a large degree of hierarchy, but you should first rely on the global header, local title, and local menu to indicate structure, using a breadcrumb only when that fails. For guidance on your information architecture, contact the web development team.</p>

<img src="https://www.ebi.ac.uk/sites/ebi.ac.uk/files/images/EBI-nav-breadcrumb.png" alt="EBI breadcrumb trail navigation example" width="228" height="149" style="border: 0px;" />
[UPDATE IMAGE...]

#### <a name="content" id="content"></a>Content area

The <code>#content</code> area is where your core information and application will live, this area should contain content and any secondary navigation.

##### Main content area
The `#main-content-area` holds the core content of your page. This ID will also be used to improve the behaviour of the sticky menu and improve JS Event tracking.

##### <a name="secondary" id="secondary"></a>Secondary menus
Once the user has selected an item from your local menu, the section may require a secondary navigation menu to display its own child content. Depending on the breadth and depth of content options, there are two possibilites:

 <div class="callout medium-4 small-12 float-right">
   <img src="../../static/images/navigation/secondary-strip.png" />
   <cite class="text-right"><a href="https://www.ebi.ac.uk/about">www.ebi.ac.uk/about</a></cite>
 </div>

#### <a name="secondary-strip" id="secondary-strip"></a>Secondary strip navigation
If your page has a few child pages, use this pattern of tabs. It occupies both a highly visible and conceptually similar spot to the local menu.

We recommend using this for no more than eight child pages/links.

Use a <code>ul</code> element with classes <code>.menu.secondary-menu</code>; see a full example <a class="readmore" href="https://www.ebi.ac.uk/about/">on the EMBL-EBI main site</a>

 <div class="callout medium-4 small-12 float-right">
   <img src="../../static/images/navigation/secondary-book.png" />
   <cite class="text-right"><a href="https://www.ebi.ac.uk/about/jobs/career-profiles">www.ebi.ac.uk/about/jobs/career-profiles</a></cite>
 </div>
 <h5><a name="secondary-book" id="secondary-book"></a>Secondary book navigation</h5>
 <p>If your page has many child pages and some of those pages have their own child structure, we recommend using this index-like navigation pattern as it will allow you to show dozens of pages of varying depth and allow the reader to track their progress and location.</p>
 <p>Use a <code>ul</code> element with classes <code>.menu.vertical</code>; see a full example to the right or <a class="readmore" href="https://www.ebi.ac.uk/about/jobs/career-profiles">on the EMBL-EBI main site</a></p>

<h4><a name="relationships" id="relationships"></a>Relationships</h4>
<p>Use the (<code>#relationships</code>) area to place information and logos from your sponsors/affiliates/collaborators/endorsers. For more guidance <a href="/EBI-Pattern-library/sample-site/boilerplate/affiliates.html">see the affiliates boilerplate page</a>.</p>

<h4><a name="localfooter" id="localfooter"></a>Local footer</h4>
<p>Use the local footer (<code>#local-footer</code>) to describe information that applies to your whole website or to indicate citation information.</p>

<h4><a name="footer" id="footer"></a>Global footer</h4>
<p>In the global footer of every page there is an expanded version of the global menu, including all sub-items. This acts as a top-level sitemap, available on any page. This will be automatically populated with Javascript into your <code>#global-footer</code>.</p>
<p><img src="images/documentation/footer.png" alt="EBI expanded global navigation menu in footer example" /></p>
