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
- On the `<select>` element, add class `.form-control`
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

<!-- Single item -->
<div markdown="0">
<label for="topic">Single item selection</label>
<select name="topic" required id="topic" class="form-control">
  <optgroup label="General">
    <option value="EBI HELP: General Feedback" selected="selected">General Feedback or Please Select</option>
    <option value="EBI HELP: Usability">Sign up for usability testing</option>
  </optgroup>
  <optgroup label="Genes, Genomes &amp; Variation">
    <option value="EBI HELP: CRAM">CRAM</option>
    <option value="EBI HELP: DGVa">Database of Genomic Variants archive (DGVa)</option>
    <option value="EBI HELP: EMBL-Bank">EMBL-Bank</option>
    <option value="EBI HELP: EMBL-SVA">ENA Sequence Version Archive (SVA)</option>
    <option value="EBI HELP: EGA">European Genome-phenome Archive (EGA)</option>
    <option value="EBI HELP: ENA">European Nucleotide Archive (ENA)</option>
    <option value="EBI HELP: EVA">European Variation Archive (EVA)</option>
    <option value="EBI HELP: IMGT/HLA">IMGT/HLA</option>
    <option value="EBI HELP: IPD">Immuno Polymorphism Database (IPD)</option>
    <option value="EBI HELP: Metagenomics">Metagenomics</option>
    <option value="EBI HELP: Webin">Webin</option>
  </optgroup>
  <optgroup label="RNA, Protein &amp; Metabolite Expression">
    <option value="EBI HELP: ArrayExpress">ArrayExpress</option>
    <option value="EBI HELP: EGA">European Genome-phenome Archive (EGA)</option>
    <option value="EBI HELP: GXA">Expression Atlas</option>
    <option value="EBI HELP: MetabolLights">MetaboLights: Metabolomics archive and reference database</option>
    <option value="EBI HELP: PRIDE">PRoteomics IDEntifications database (PRIDE)</option>
  </optgroup>
  <optgroup label="Protein Sequences, Families &amp; Motifs">
    <option value="EBI HELP: Enzyme Portal">Enzyme Portal</option>
    <option value="EBI HELP: GOA">Gene Ontology Annotation (UniProt-GOA)</option>
    <option value="EBI HELP: IntEnz">Integrated relational Enzyme database (IntEnz)</option>
    <option value="EBI HELP: InterPro">InterPro: protein sequence analysis &amp; classification</option>
    <option value="EBI HELP: PRIDE">Proteomics Identifications database (PRIDE)</option>
    <option value="EBI HELP: TreeFam">TreeFam - database of animal gene trees</option>
    <option value="EBI HELP: UniProt">UniProt: The Universal Protein Resource</option>
    <option value="EBI HELP: UniParc">UniProt Archive (UniParc)</option>
    <option value="EBI HELP: UniSave">UniProtKB Sequence/Annotation Version Archive (UniSave)</option>
  </optgroup>
  <optgroup label="Molecular &amp; Cellular Structures">
    <option value="EBI HELP: EMDB">Electron Microscopy Data Bank (EMDB)</option>
    <option value="EBI HELP: PDB">Protein Data Bank (PDB)</option>
    <option value="EBI HELP: PDBe">Protein Data Bank in Europe (PDBe)</option>
    <option value="Thornton group: PDBsum">PDBsum</option>
  </optgroup>
  <optgroup label="Reactions, Interactions &amp; Pathways">
    <option value="EBI HELP: BioModels">BioModels Database</option>
    <option value="EBI HELP: IntAct">IntAct Molecular Interaction Database</option>
    <option value="EBI HELP: Rhea">Rhea: Enzyme-catalysed reactions</option>
    <option value="EBI HELP: SBO">Systems Biology Ontology (SBO)</option>
  </optgroup>
  <optgroup label="Chemogenomics &amp; Metabolomics">
    <option value="EBI HELP: ChEBI">Chemical Entities of Biological Interest (ChEBI)</option>
    <option value="EBI HELP: ChEMBL">ChEMBL: Bioactive data for drug discovery</option>
    <option value="EBI HELP: Enzyme Portal">Enzyme Portal</option>
    <option value="EBI HELP: MetabolLights">MetaboLights: Metabolomics archive and reference database</option>
    <option value="EBI HELP: Rhea">Rhea: Enzyme-catalysed reactions</option>
  </optgroup>
  <optgroup label="Taxonomies &amp; Controlled Vocabularies">
    <option value="EBI HELP: ChEBI">Chemical Entities of Biological Interest (ChEBI)</option>
    <option value="EBI HELP: EFO">Experimental Factor Ontology (EFO)</option>
    <option value="EBI HELP: GO">Gene Ontology (GO)</option>
    <option value="EBI HELP: IntEnz">Integrated relational Enzyme database (IntEnz)</option>
    <option value="EBI HELP: MIRIAM">MIRIAM Registry</option>
    <option value="EBI HELP: QuickGO">QuickGO</option>
    <option value="EBI HELP: SBO">Systems Biology Ontology (SBO)</option>
  </optgroup>

  <optgroup label="Literature - Scientific Publications &amp; Patents">
    <option value="EBI HELP: Europe PMC">Europe PubMed Central (Europe PMC)</option>
    <option value="EBI HELP: Patent Data">Patent Databases</option>
    <option value="EBI HELP: Whatizit">Whatizit</option>
  </optgroup>

  <optgroup label="Cross-domain Tools &amp; Resources">
    <option value="EBI HELP: BLAST">BLAST Sequence Search</option>
    <!-- option value="EBI HELP: BioMart">BioMart</option -->
    <option value="EBI HELP: Clustal">ClustalW Multiple Sequence Alignment</option>
    <option value="EBI HELP: EBI Search">EBI Search</option>
    <!-- option value="EBI HELP: Enzyme Portal">Enzyme Portal</option -->
    <option value="EBI HELP: FASTA">FASTA Sequence Search</option>
    <option value="EBI HELP: identifiers.org">identifiers.org</option>
    <option value="EBI HELP: Patent Data">Patent Data</option>
    <option value="EBI HELP: Web Services">Web Services</option>
  </optgroup>

  <optgroup label="Misc.">
    <option value="EBI HELP: Courses">Courses</option>
    <option value="EBI HELP: Database Query">Database Query</option>
    <option value="EBI HELP: Data Submission">Data Submission</option>
    <option value="EBI HELP: Error Message">Error Message</option>
    <option value="EBI HELP: Events Calendar">Events Calendar</option>
    <option value="EBI HELP: Jobs">Jobs</option>
    <option value="EBI HELP: Microarrays">Microarrays</option>
    <option value="EBI HELP: PhD Program">PhD Program</option>
    <option value="EBI HELP: Research">Research</option>
    <option value="EBI HELP: Sequence Alignment">Sequence Alignment</option>
    <option value="EBI HELP: Sequences">Sequences</option>
    <option value="EBI HELP: Software Error">Software Error</option>
    <option value="EBI HELP: Structures">Structures</option>
    <option value="EBI HELP: Survey">Survey</option>
    <option value="EBI HELP: Technical Services">Technical Services</option>
    <option value="EBI HELP: Training &amp; Education">Training &amp; Education</option>
    <option value="EBI HELP: Usability">Usability testing</option>
    <option value="EBI HELP: Other">Other feedback</option>
  </optgroup>
</select>
</div>
<span class="form-error">Please select a relevant topic.</span>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var supportFormSelect = new Choices('#topic', {
      removeItemButton: true,
    });
  });
</script>



<!-- For syntax highlighting -->
<link rel="stylesheet" href="//wwwdev.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/ebi-code.css">
