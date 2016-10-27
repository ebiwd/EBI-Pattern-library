---
layout: default
title: Tags
category: patterns
---

<!--
http://stackoverflow.com/a/21002505
-->
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}

{% assign sortedtags = tags | split:' ' | sort %}
{% if sortedtags %}

  <dl id="tag-list">
    {% for tag in sortedtags %}
      <dt><h4 id="tag-{{tag|downcase}}" name="tag-{{tag|downcase}}">{{tag|capitalize}}</h4></dt>
      
      {% for post in site.tags[tag] %}
        <dd><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></dd>
      {% endfor %}
    
    <hr />
    {% endfor %}
  </dl>
{% endif %}
