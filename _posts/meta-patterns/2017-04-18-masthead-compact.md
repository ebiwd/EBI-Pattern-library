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

**Do**

  - Add the class `.compact-for-data` to your `div.masthead`
  - Disable the example search queries on your search box. Your user should have already searched or have arrived at their destination.
  - Use this on pages where the primary content is a large table or data visualisations where you want your service branding to "get out of the way"

**Consider**

  - Adding responsive classes to the menu to collapse into a thinner line

**Do not**

  - Use the sticky property for the global header
  - Use this on your homepage or generic content pages

For a sample implementation see the [search results](/EBI-Pattern-library/sample-site-v1.2/boilerplate/search-results.html) and [ultra wide](/EBI-Pattern-library/sample-site-v1.2/boilerplate/ultra-wide.html) boilerplate pages.
