---
layout: meta-pattern
title: Masthead compact
categories: meta-patterns
type:
- guidance
- v1.2
tags:
- navigation
- layout
description: For pages where the interface needs to get out of the way so users can focus on the data.
---

<span class="tag">v1.2 only</span>

In v1.2 we've [already shaved 10px off the black bar](https://github.com/ebiwd/EBI-Framework/issues/21), but the need remains for a yet-thinner `div#masthead` on inside pages that are search-result or data focused. In all it's 56% thinner than the current look.

Method:
**Do**

  - Add the class `.compact-for-data` to your `div.masthead`
  - Disable the example search queries on your search box. Your user should have already searched or have arrived at their destination.
  - Use this on pages where the primary content is a large table or data visualisations where you want your service branding to "get out of the way"

**Consider**

  - Adding responsive classes to the menu to collapse into a thinner line for large screens
    ![image](https://cloud.githubusercontent.com/assets/928100/25130644/d3476920-243a-11e7-829e-b330a8ca4684.png)
    <pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead compact-for-data<span class="pl-pds">"</span></span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead-black-bar<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>clearfix masthead-black-bar<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead-inner row<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>columns medium-7 large-3<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>local-title<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">h1</span>&gt;&lt;/<span class="pl-ent">h1</span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>columns medium-5 large-3 large-push-6<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">form</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>ebi_search<span class="pl-pds">"</span></span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/ebisearch/search.ebi<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">form</span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>columns large-6 large-pull-3<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">nav</span>&gt;&lt;/<span class="pl-ent">nav</span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
      &lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;</pre>

  - Or, without a search box:
    ![image](https://cloud.githubusercontent.com/assets/928100/25131281/0c3dd500-243d-11e7-8a2f-24833ed9fddc.png)
    <pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead compact-for-data<span class="pl-pds">"</span></span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead-black-bar<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>clearfix masthead-black-bar<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>masthead-inner row expanded<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>float-left inline-block padding-left-large<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>local-title<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">h1</span>&gt;&lt;/<span class="pl-ent">h1</span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">nav</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>float-left columns medium-7 large-8<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">nav</span>&gt;
      &lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;</pre>

**Do not**

  - Use the sticky property for the global header
  - Use this on your homepage or generic content pages

For a sample implementation see the [search results](/EBI-Pattern-library/sample-site-v1.2/boilerplate/search-results.html) and [ultra wide](/EBI-Pattern-library/sample-site-v1.2/boilerplate/ultra-wide.html) boilerplate pages.
