---
layout: default
title: Components
category: components
---

{% for component in site.categories[page.category] %}
<div class="row" id="{{component.title}}">
  <h3><a href="{{site.baseurl}}{{component.url}}#component-detail">{{component.title|capitalize}}</a></h3>
  {{component.description}}
</div>
<hr />
{% endfor %}
