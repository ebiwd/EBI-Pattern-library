---
layout: default
title: Pattern list
category: patterns
group: in_local_navigation 
order: 2
---



<div id="livefilterdemo" class="">
  <div class="input-group">
    <span class="input-group-label"><i data-icon="1" class="icon icon-functional"></i></span>
    <input class="filter clearable input-group-field" type="text" value="" />
  </div>

  <div class="live-filter-target-granularity">
    {% for pattern in site.categories[page.category] %}
    <div class="live-filter-target-granularity" id="{{pattern.title}}">
      <h3><a href="{{site.baseurl}}{{pattern.url}}#component-detail">{{pattern.title|capitalize}}</a></h3>
      {{pattern.description}}
      <hr />
    </div>
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
          defaultText: 'Type to filter the patterns',
          noMatches: '<p>No matching patterns found.</p>'
        });
      });
    });
  </script>

</div> <!-- /livefilter -->
