---
layout: pattern
title: Select box
categories: patterns
tags:
- forms
description: Configurable select box/text input
---
<span class="tag">v1.2</span>

<a href="https://github.com/jshjohnson/Choices">Choices.js</a> is a lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency.

To use:

- Include these two files:
<div class="callout" markdown="1">
``` html
<link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/styles/css/choices.min.css">
<script src="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/Choices/assets/scripts/dist/choices.min.js"></script>
```
</div>
- Invoke with the `Choices` function (view the source)
- For further configuration options, visit the <a href="https://github.com/jshjohnson/Choices">Choices GitHub repo</a>.

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

<!-- For syntax highlighting -->
<link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/ebi-code.css">
