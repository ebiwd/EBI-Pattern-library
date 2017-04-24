---
layout: pattern
title: Select box
categories: patterns
tags:
- forms
description: Configurable select box/text input
---
<span class="tag">v1.2</span>

Choices.js is a lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency.

To use:
1. Include these two files
  ```
  <link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/styles/css/choices.min.css">
  <script src="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/scripts/dist/choices.min.js"></script>
  ```
2. Invoke with the `Choices` function (view the source)
3. For all config options, visit the <a href="https://github.com/jshjohnson/Choices">Choices GitHub repo</a>.

<link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/styles/css/choices.min.css">
<script src="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/scripts/dist/choices.min.js"></script>

<label for="choices-multiple-remove-button">Demo</label>
<select class="form-control" name="choices-multiple-remove-button" id="choices-multiple-remove-button" placeholder="This is a placeholder" multiple>
<option value="Dropdown item 1" selected>Dropdown item 1</option>
<option value="Dropdown item 2">Dropdown item 2</option>
<option value="Dropdown item 3">Dropdown item 3</option>
<option value="Dropdown item 4">Dropdown item 4</option>
</select>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
      delimiter: ',',
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
    });
  });
</script>
