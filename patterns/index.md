---
layout: default
title: Pattern list
category: patterns
group: in_local_navigation 
order: 2
---

{% for pattern in site.categories[page.category] %}
<div class="" id="{{pattern.title}}">
  <h3><a href="{{site.baseurl}}{{pattern.url}}#component-detail">{{pattern.title|capitalize}}</a></h3>
  {{pattern.description}}
</div>
<hr />
{% endfor %}
