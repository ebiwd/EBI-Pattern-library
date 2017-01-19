---
layout: default
title: All patterns
category: patterns
group: in_local_navigation 
permalink: patterns/index
order: 2
---



## All EMBL-EBI Patterns

<div id="livefilterdemo" class="">
  <div class="input-group">
    <span class="input-group-label"><i data-icon="1" class="icon icon-functional"></i></span>
    <input class="filter clearable input-group-field" type="text" value="" placeholder="Filter the patterns" />
  </div>

  <div class="live-filter-target-granularity">

    <!-- Documents -->
    <h3>Meta patterns</h3>
    <p>These are documentation-style patterns that affect how, where, and when you should use general patterns.</p>

    {% capture documentationcollection %}
      {% for documentation in site.categories['meta-patterns'] %}
        NEWENTRY
        <div class="live-filter-target-granularity" id="{{documentation.title}}">
          <dt><a href="{{site.baseurl}}{{documentation.url}}#component-detail">{{documentation.title|capitalize}}</a></dt>
          <dd class="padding-left-large">{{documentation.description}}
          {% for tag in documentation.tags %}
            <span class="tag secondary-background">{{ tag }} </span>
          {% endfor %}
          {% for type in documentation.types %}
            <span class="tag secondary-background">{{ type }} </span>
          {% endfor %}
          </dd>
        </div>
      {% endfor %}
    {% endcapture %}

    {% assign sorteddocumentation = documentationcollection | split:'NEWENTRY' | sort %}

    {% for documentation in sorteddocumentation %}
      {{ documentation }}
    {% endfor %}


    <!-- Patterns -->
    <h3>General patterns</h3>
    {% capture patterncollection %}
      {% for pattern in site.categories[page.category] %}
        NEWENTRY
        <div class="live-filter-target-granularity" id="{{pattern.title}}">
          <dt><a href="{{site.baseurl}}{{pattern.url}}#component-detail">{{pattern.title|capitalize}}</a></dt>
          <dd class="padding-left-large">{{pattern.description}}
          {% for tag in pattern.tags %}
            <span class="tag secondary-background">{{ tag }} </span>
          {% endfor %}
          {% for type in pattern.types %}
            <span class="tag secondary-background">{{ type }} </span>
          {% endfor %}
          </dd>
        </div>
      {% endfor %}
    {% endcapture %}

    {% assign sortedpatterns = patterncollection | split:'NEWENTRY' | sort %}

    {% for pattern in sortedpatterns %}
      {{ pattern }}
    {% endfor %}
  </div>

  <!-- Include live filtering -->
  <!-- Note that we've loaded this with "defer", this technique may not be appropriate for your uses.
       If not, load this JS after jQuery. -->
  <script defer src="https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.1/libraries/LiveFilter/js/jquery.liveFilter.js"></script>
  <script type="text/javascript">
    window.addEventListener('load',function() {
      $(document).ready(function() {
        $('#livefilterdemo').liveFilter({
          fitlerTargetCustomDiv: 'div.live-filter-target-granularity',
          defaultText: '',
          noMatches: '<p>No matching patterns found.</p>'
        });
      });
    });
  </script>

</div> <!-- /livefilter -->
