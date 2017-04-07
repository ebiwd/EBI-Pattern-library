---
layout: meta-pattern
title: EBI Search indexing
categories: meta-patterns
type:
- guidance
tags:
- search
description: The EBI provides a global search service across most of the data sources available at the institute.
---
{% include notice-review.html %}

<a name="searchglossary" id="searchglossary"></a>

### <a name="Glossaryoftermsusedinthesearchguidelines" id="Glossaryoftermsusedinthesearchguidelines"></a> Glossary of terms used in the search guidelines

- <strong>Document</strong>: Lucene term
  A document is a virtual document consisting of a set of fields. A document can have several fields with the same name.</li>
- <strong>Field</strong>: Lucene term
  Part of a Document (see above). A field is a &lt;<em>name, content</em>&gt; pair. The name provides metadata, e.g. row name in a database or the different parts of a web page or email (header, body, ...). The content contains the actual data. Both parts of a field are indexed but the <em>name</em> is only available as structural information, i.e. one can search for something with a specific <em>field-name</em> but a <em>field-name</em> usually will not appear in the search result.
- <strong>Domain</strong>: EB-eye term
  A data source, most of the times a database. For example: UniProtKB, PDBe, ...
- <strong>Domain tree, hierarchy</strong>: EB-eye term
  All domains in the EB-eye are organised in a tree. Nodes of the tree are for example <em>Protein Sequences</em> or <em>Small Molecules</em>. Leaves of the tree are for example <em>UniProtKB</em> (parent <em>Protein Sequences</em>) or <em>ChEBI </em>(parent <em>Small Molecules</em>)
- <strong>Data provider</strong>: EB-eye term
  A group/person who provides the data for a domain.

<ul>
<li><strong>SERP</strong>: search engine results page</li>
<li><strong>SEO</strong>: search engine optimisation</li>
</ul>
<h2><a name="HowdoImakemydataavailableforsearchingontheEBIwebsite" id="HowdoImakemydataavailableforsearchingontheEBIwebsite"></a> How do I make my data available for searching on the EBI website?</h2>
<p><a name="what" id="what"></a></p>
<h3><a name="WhatistheEBeyeandhowcanithelpme" id="WhatistheEBeyeandhowcanithelpme"></a> What is the EB-eye and how can it help me?</h3>
<p>The EBI provides a global search service across most of the data sources available at the institute. The Lucene EBI search engine (aka EB-eye) is a search engine aimed at providing unified summary results for global searches over the majority of the EBI databases. The engine is responsible for indexing a meaningful subset of data from the databases and returns summary information containing links to the original databases.</p>
<p>The engine has been built to accommodate the vast variety of data available amongst all databases at the EBI. Most of the databases at the EBI already have flat files or XML dumps which are used by the search engine. Some databases use the XML format specifically defined for EB-eye to dump their data and make them available through the search engine.</p>
<p><a name="overview" id="overview"></a></p>
<h3><a name="AnoverviewofhowtheEBeyeworks" id="AnoverviewofhowtheEBeyeworks"></a> An overview of how the EB-eye works</h3>
<h4><a name="AutomaticUpdates" id="AutomaticUpdates"></a> Automatic Updates</h4>
<p>To make it easier to maintain, and to guarantee the most up-to-date data, EB-eye has a mechanism for updating data automatically. At least once a day, all data sources will be checked and analyzed to identify possible updates and the system will automatically re-index them.</p>
<p>After each update, a footprint is generated and represents a signature for the data source. A new footprint is generated before each new update and is compared to the previous one. If they are equal, i.e. the data has not changed, no update is needed. If they are different, the data gets updated.</p>
<h4><a name="DataIndexing" id="DataIndexing"></a> Data Indexing</h4>
<p>In order to index data properly the EB-eye indexer needs some information:</p>
<table>
<tbody>
 <tr>
  <th>Information needed for the EB-eye indexer</th>
  <th>Description
  </th>
  <th>Example</th>
 </tr>
 <tr>
  <td>Analyser</td>
  <td>Extracts information out of documents and transforms them into tokens, which than can be indexed.</td>
  <td>For example, dates can be written in different formats. A date analyser tries to find the used format and transforms it into an internal representation and returns this as a token. EB-eye provides several analysers. Most of them are derived from Lucene's analysers, but we also developed our own analysers, e.g. for chemical writing. If no analyser is available for a field, the standard analyser is used. This means a user can only find something if she is querying the exact term.</td>
 </tr>
 <tr>
  <td>Store</td>
  <td>Should the data be stored. Possible values for store are: YES, NO, COMPRESSED. At a first glance a NO might be confusing but EB-eye can index data without storing it.</td>
  <td>This can be useful for example for keywords. An entry can have several keywords, these can be indexed with the entry so that the entry will be found, if searched for the keywords. However, on the result page the keywords will not appear because they was not stored.</td>
 </tr>
 <tr>
  <td>Boost</td>
  <td>Value for the "importance" of a field. EB-eye can give fields a boost factor. The higher the boost factor the higher this entry will be ranked (actually, it is a little bit more complicated).</td>
  <td>Boost factors should be used, if at all, only for very important fields, like IDs. For more information about the boost factor, please refer to the Lucene documentation.</td>
 </tr>
</tbody>
</table>
<p>There are various input indexer implementations available in EB-eye, but mostly two are used. These two implementations are based on parsers which are used to describe the structure of the source files and index them.</p>
<p>By default, the source data are indexed in a distributed environment. The files are split into several chunks (set of entries) or grouped into set of files and are indexed in parallel by several machine. This allows us, if necessary, to index all domains in one go in less than half a day.</p>
<h5><a name="ParsingandGrammar" id="ParsingandGrammar"></a> Parsing and Grammar</h5>
<p>The previous section explained what information are needed in order to index data. The input indexer most of the time relies on the use of parsers which in turn rely on a grammar to extract information from input files.</p>
<p>The grammar is a lexical representation of the data associated with a set of actions to be executed. The grammar helps to extract the structure of an entry and its various fields from the data source. Actions can be associated with this structure, this means that from the grammar, an action can be executed for each entry and for each of its fields (i.e. dates, cross-references, authors), typically extracting the information and indexing it. A set of predefined actions using the information from the configuration files are available to ease the indexing. That's why it's important to have a detailed description of the format of the data files to make sure the parsers match properly the corresponding data structure.</p>
<h4><a name="DataSearching" id="DataSearching"></a> Data Searching</h4>
<p>After the data has been indexed it is available for searching through the global search engine. Several types of searches are possible. Note, the following subsections refer to the internal search mechanisms. For the user interface skip to the next section "Web Interface".</p>
<h5><a name="BasicSearches" id="BasicSearches"></a> Basic Searches</h5>
<p>The simplest search is the global search in all the fields indexed for a particular domain.</p>
<p>A more specific search is the field-specific search, where a query term is only searched in a particular field. This type of search is typically what an advanced search offers. Every field indexed for a domain will be available for a field-specific search, including the cross-reference fields.</p>
<h5><a name="CrossReferences" id="CrossReferences"></a> Cross References</h5>
<p>An important feature of the search engine is the ability to use cross-references to navigate between different domains by jumping from entries to entries.</p>
<p>During the indexing of the data, the cross-references information is extracted from the source files and stored as cross-reference fields in the index. Lucene imposes some restrictions that had to be by-passed and, as a result, the name of the reference database and the ID of the entry referenced are the only information stored.</p>
<p>When launching a cross-reference search, the system will try to find the cross-references by looking for exact matches for the stored IDs. This means if cross-references indexed for a particular domain don't use IDs but an accession number or another kind of identifier the system will not be able to retrieve the cross-reference. In this case the name for the cross reference needs to be specified in the configuration file.</p>
<h4><a name="WebInterface" id="WebInterface"></a> Web Interface</h4>
<p>The previous sections explained how the EB-eye search engine works internally, from the automatic update and the indexing of the data to the handling of several types of querys and the retrieval of search results.</p>
<p>Another important element of the EB-eye is its web interface. The aim for the EB-eye web interface should be a "design" as simple as possible. The following text provides some basic guidelines.</p>
<h5><a name="SearchForm" id="SearchForm"></a> Search Form</h5>
<p>A basic search form should be present on all EBI pages and always at the same position. The syntax of the basic search form should be:</p>
<ul>
<li>Terms in a query are logically AND combined.<br>
A term is the atomic entity for a search field. A term is either a sequence of characters, separated by spaces or words enclosed in quotes: term1 "this is one term because it is between quotes".<br>
Note, because everything between quotes is considered as one term only entries containing <em>exactly</em> the string between quotes will match.</li>
<li>The pattern <em>id:term</em> will match only field with the name id and the content <em>term</em>.<br>
This allows to restrict the search to a particular field. Although not recommended it could be possible to allow something like "go:12345" not to be considered as <em>id:term</em> because users in some domains are used to search for names like this. It should be stressed, that this is not recommended because this will confuse all other users.</li>
<li>Backslash is escape character.<br>
Escape characters make it possible to search for characters used by the search syntax. For example to search for something containing a ":" by using "\:".</li>
</ul>
<h5><a name="ResultPage" id="ResultPage"></a> Result Page</h5>
<p>Presenting search results is part of the focused group exercise and therefore likely to be subject to changes. The following text gives therefore only very rough guidelines for result pages.</p>
<p>When searching for some information, the way the results are displayed is essential for the user experience. Not enough detail is annoying when browsing through the results, too much information on the other hand might discourage users from using the service.</p>
<ul>
<li>Results should be displayed in a list.<br>
In some areas it might be useful to display entries in another layout. However, before doing so, please try to somehow fit the results in a list.</li>
<li>The first line of every entry should be a link to the original data.</li>
<li>Additional text for every entry should not span more then 8 lines</li>
<li>Links should always be <span style="text-decoration: underline;">underlined</span>.</li>
<li>Different fonts should be used sparsely and consistently! E.g. only links should be underlined, only searched terms should be bold, if at all.</li>
</ul>


<h3><a name="HowtogettheEBeyesearchenginetoindexyourdata" id="HowtogettheEBeyesearchenginetoindexyourdata"></a> How to get the EB-eye search engine to index your data</h3>
<p>EB-eye can parse and index data files of different formats but also defines its own XML format (<a href="//www.ebi.ac.uk/ebisearch/XML4dbDumps.xsd">XML4dbDumps</a>). This can be used for databases that currently don't have a flat file or an XML formatted dump and where there is no requirement to dump the whole database in a specified format.</p>
<p>As a rule of thumb:</p>
<p>An existing file format is preferable if:</p>
<ul>
<li>The format is broadly known/used by the users (e.g. PDB, taxonomy, medline).</li>
<li>The file contains entries of the same kind, each entry being identified by an ID (a RDF format is NOT of this kind!)</li>
<li>The file is an XML defined by a schema/DTD/RELAX NG or is a flat file 'easily' parsed by a lexical parser, meaning that ideally you can create a Backus--Naur Form of the file format.</li>
</ul>
<p>XML4dbDumps format is preferable if:</p>
<ul>
<li>There is no existing dump of the database.</li>
<li>You want to have control over what is indexed and presented by only dumping relevant information.</li>
<li>You want to easily add information without EB-eye team having to recreate a new parser each time.</li>
<li>The file is not easily parseable by a lexical parser.</li>
</ul>
<p>Note: Whatever file format will be used the entries can be present in one or several files. There is no restriction on the number of entries per file.</p>
<p>To get data index by the EB-eye search engine two things are needed:</p>
<ul>
<li>Data source</li>
<li>Data syntax and semantics</li>
</ul>
<h6><a name="DataSource" id="DataSource"></a> Data Source</h6>
<p>In order to ease the maintenance of the EB-eye and to guaranty the most up-to-date data, an automatic data update mechanism has been implemented. If updates are available the new data is downloaded and uncompressed if necessary and then re-indexed and redeployed to be visible to users. Additionally, metadata (release, release date, number of entries, ...) are generated from the data or a release note for verification and information purposes.</p>
<p>The following information is needed for this step:</p>
<ul>
<li>Root source URI<br>
This is the root of the source files. The URI can define a path on the file system, an ftp URL or an http URL. How to choose the URI:
<ul>
 <li>File system: best solution as it's faster and can avoid unnecessarily copying data over. Please contact <a href="mailto:eb-eye@ebi.ac.uk">eb-eye@ebi.ac.uk</a> to be sure the file system is mounted on our servers.</li>
 <li>ftp: if the data is already available via FTP or the file system is not visible from the EB-eye servers.</li>
 <li>http: if the data is only available via http. This method should only be used as a last resource as it poses several drawbacks when accessing several files.</li>
</ul>
</li>
</ul>
<ul>
<li>File pattern<br>
This is the regular expression of the files to download. The files can be compressed (The following formats are supported : zip, jar, tar, tgz, tbz2, gz, bz2).</li>
</ul>
<ul>
<li>Excluded sub directories<br>
By default the files are retrieved from all the sub directories of the root source. You can exclude sub directories by defining a regular expression matching these directories' names.</li>
</ul>
<ul>
<li>Metadata file<br>
The metadata file must at least contain the release number, the release date and the number of entries. This information can be retrieved from an existing release note (or from the data file itself if it appears at the beginning of the file). If such a file does not exist, a file with the following simple format has to be created:
<pre># Comment
release=[release number or release date if no release defined]
release_date=[DD-MMM-YYYY]
entries=[number of entries]
</pre>
<p>You don't need to create a metadata file if you use the XML4dbDumps format as it already contains the information.</p>
</li>
</ul>
<p>e.g. for UniProt:<br>
Root source URI: "/ebi/ftp/private/uniprot/4EBIES/knowledgebase/"<br>
File pattern: "uniprot_.*\.dat\.gz"<br>
Excluded sub dirs: ".*"<br>
Metadata file: "/ebi/ftp/private/uniprot/4EBIES/knowledgebase/relnotes.txt"<br>
e.g. for MSD:<br>
Root source URI: "<a href="ftp://ftp.ebi.ac.uk/ebeye_msd">ftp://ftp.ebi.ac.uk/ebeye_msd</a>"<br>
File pattern: "MSDCHEM\.xml"<br>
Excluded sub dirs: ".*"<br>
Metadata file: -no need as it's a XML4dbDumps format-<br>
e.g. for GO:<br>
Root source URI: "<a href="http://archive.geneontology.org/latest-termdb">http://archive.geneontology.org/latest-termdb</a>"<br>
File pattern: "go_daily-termdb\.rdf-xml\.gz"<br>
Excluded sub dirs: ".*"</p>
<h6><a name="Datasyntaxandsemantic" id="Datasyntaxandsemantic"></a> Data syntax and semantics</h6>
<p>In order to index data the EB-eye search engine needs to know the format of the data (syntax) and what how to index (semantics) it. The format is needed to develop a parser and the semantics defines which fields should be stored under which names.</p>
<p>If a data provider decides not use EB-eye's data format XML4dbDumps, they need to provide sufficient information for their data format to write a parser for it. It is important to well define these fields and how to index them as it has a huge impact on the quality and relevance of the results.</p>
<p>A data provider needs to provide 3 pieces of information for each field to be indexed:</p>
<ol>
<li>STORED/NOT_STORED: STORED means that that the value of the field will be displayable, UNSTORED means that the value won't be displayable but will still be searchable if the field is INDEXED. The obvious downside of STORED is that the value is saved in the index. The index can grow dramatically depending on the number of entries and the size of the fields to store.</li>
<li>INDEXED/NOT_INDEXED: INDEXED means that the value of the field will be searchable. NOT_INDEXED means it won't be searchable (but it can be STORED to display it in a summary for example).</li>
<li>The type of the field's value. Depending on this type we may analyze and index the content differently. For example a field 'description' that contains english text will be indexed so that stop words ('I', 'a', 'the', 'of', ...) are not indexed as they are not relevant in this context. Other types could be a list of authors, keywords, chemical reaction, ... It's also useful to specify if the values belong to a finite set of values (e.g. species)</li>
</ol>
<p>If you use the XML4dbDumps format some fields are already defined (id, authors,keywords, date, ...). Additional fields can be defined in:<br>
&lt;additional_fields&gt;<br>
&lt;field name="namefield1"&gt;value1&lt;/field&gt;<br>
&lt;field name="namefield2"&gt;value2&lt;/field&gt;<br>
...<br>
&lt;/additional_fields&gt;</p>
<p><br>
Another type of indexed fields are cross-references to other databases.<br>
If the XML4dbDumps format is used they are defined as:<br>
&lt;cross_references&gt;<br>
&lt;ref dbname="db2" dbkey="abc123"/&gt;<br>
&lt;ref dbname="db3" dbkey="abcdef"/&gt;<br>
...<br>
&lt;/cross_references&gt;<br>
These cross-references can point to either internal databases that are indexed by the EB-eye (domains) or to external resources.</p>
<p>Note:The external xrefs are not displayed at the moment but will be in the future.</p>
<p>The internal xrefs defined in the data can use different database names from the ones EB-eye uses and can also use a specific field for the identifier. E.g. Databases contain xrefs to dbname="swiss-prot",dbkey="Q62594". This xref needs actually to point to the domain 'UniProtKB' and use the accession number 'Q62594'.</p>
<p>Note:you can add a suffix to the database name to add some 'semantics' to the cross-reference. For example if you have xrefs to Ensembl which actually are xrefs to either transcripts or genes you can name the fields as either ENSEMBL_TRANSCRIPT or ENSEMBL_GENE so that users will be able to make the difference between the two. They will both internally point to the domain Ensembl. Data providers need to go through their xrefs and establish to which database and field they point to.</p>
<p>Here is an example for the information the EB-eye team needs for the different fields:</p>
<table>
<thead>
 <tr>
  <th>Field name in data</th>
  <th>Brief field description</th>
  <th>(NOT_)INDEXED / (NOT_) STORED</th>
  <th>Type of value <br>
  (regular expression, format, semantics, ...)</th>
 </tr>
</thead>
<tbody>
 <tr>
  <td>[field name]</td>
  <td>[description]</td>
  <td>[(NOT_)INDEXED/(NOT_)STORED]</td>
  <td>[type of the value, specific format, list of values...]</td>
 </tr>
 <tr>
  <td>id</td>
  <td>id of the entry</td>
  <td>INDEXED, STORED</td>
  <td>[A-Z][0-9]{4}</td>
 </tr>
 <tr>
  <td>name</td>
  <td>name of the entry</td>
  <td>INDEXED, STORED</td>
  <td>english text</td>
 </tr>
 <tr>
  <td>last_update</td>
  <td>last update</td>
  <td>INDEXED, STORED</td>
  <td>date</td>
 </tr>
</tbody>
</table>
<p>Information needed for cross references to other resources:</p>
<table>
<tbody>
 <tr>
  <th>Cross-reference</th>
  <th>Brief xref description</th>
  <th>Domain name / external <br>
  resource referenced</th>
  <th>Field referenced (for domains) / <br>
  URL (for external db)</th>
  <th>Comment</th>
 </tr>
 <tr>
  <td>swiss-prot</td>
  <td>xref to UniProtKB</td>
  <td>UniProtKB (domain)
  <!--&lt;td -->
  </td>
  <td>AC</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>AFCS</td>
  <td>xref to AFCS</td>
  <td>AFCS (external db)</td>
  <td>id</td>
  <td>{nolink:[<a href="http://www.signaling-gateway.org/data/Y2H/cgi-bin/y2h_int.cgi?id=%">http://www.signaling-gateway.org/data/Y2H/cgi-bin/y2h_int.cgi?id=%</a>{id}]</td>
 </tr>
</tbody>
</table>
<p>Please check for every xref whether the referenced resource is an EB-eye domain: [<a href="//www.ebi.ac.uk/ebisearch/statistics.ebi" rel="nofollow">http://www.ebi.ac.uk/ebisearch/statistics.ebi</a>|]</p>
<h4><a name="Howtoimprovethequalityoftheindexing" id="Howtoimprovethequalityoftheindexing"></a> How to improve the quality of the indexing</h4>
<p>The previous sections described how the EB-eye search engine works, explained the relationship between the configuration files and the indexing process or the web interface. The following paragraphs describe what can be done to improve the quality of the results and the user experience.</p>
<h5><a name="Availabilityofthedata" id="Availabilityofthedata"></a> Availability of the data</h5>
<p>The EB-eye tries to offer the most up to date data for its users. For this reason an automatic update mechanism has been developed and is running every day to make sure the indexes are updated. However, the system relies on the data providers to get these data and needs to know where the latest versions can be found. It is therefore important to define a static location where the EB-eye data for a domain is stored.</p>
<p>Another important stage of the update is the verification of the data. A clearly defined format for the source files is a good start. Most of the time a parser will be used to go through the data and index them. Unfortunately, the format of these data is sometimes not available or not up to date and as a result, writing the parsers becomes difficult and takes time. Providing a detailed description of the data structure, be it a description document, a DTD or an XML schema, will greatly help not only to write the parsers, but also to verify the source files.</p>
<p>Some data providers include release notes which can be used by the automatic update to verify the data which have been indexed (The number of entries is one of the details which are really useful to verify whether the data have been indexed correctly). Unfortunately, most of the data indexed cant be verified because this information is missing or incorrect. Making sure that such information is available and accurate helps to guaranty the quality of the indexed data.</p>
<h5><a name="Relevanceofthedata" id="Relevanceofthedata"></a> Relevance of the data</h5>
<p>The parsers will determine what fields and what information will be stored in the index. So, to ensure the quality of the data, the data providers should establish a list of the fields that have to be indexed, with their names and descriptions, and how they are represented in the source files. This as well as a detailed description of the data format will help writing a parser and define proper names for the fields. These names will be available in the Advanced Search, so they have to be meaningful for the user.</p>
<p>When using the EB-eye XML format, the names of the fields and their content must be clearly defined with the search application in mind. The additional fields section can prove to be really important to improve the quality of the search. A dump with only ids and names will never return any results when searching for common biological terms. If a description or full text additional fields are included the search engine will provide much better results.</p>
<p>Another aspect to consider when selecting data to export for EB-eye are cross-references. Providing a maximum number of cross-references to a wide range of databases will benefit users. By following cross references she will be able to navigate easily between and explore the different domains within the EB-eye.</p>
<p>However, cross-references have to be clearly identified otherwise they might not be properly recognized by the system. Ideally, the cross-references should be using a correct database name and the corresponding ID (and not an accession number), but obviously this is not always possible. If cross reverences can not be provided in the canonical way, please provide necessary information which allow the EB-eye team to update the EB-eye configuration files with the new aliases and further cross-references information.</p>
<h5><a name="Contentoftheresults" id="Contentoftheresults"></a> Content of the results</h5>
<p>EB-eye has only has 2 different result pages which can be slightly modified to improve the user experience.</p>
<p>The default layout displays for each entry the id, name and descriptions followed by the entry links and cross-references links. Correctly defining this information ensures coherence of the result display. Therefore name and description should be stored in the index. If no obvious name or ID can be provided data providers should define a meaningful name and ID. Data without ID and name will be only indexed, if a data provider can conclusively argue why she cannot provide them.</p>
<p>Links pointing to data have to be carefully defined. An important link is the ID field link which will redirect to the corresponding data provider web site. The entry links should be checked as well and reviewed by the data providers to make sure they are correct. Obviously, all links should resolve to a valid web page. EB-eye does not check whether the link to behind an ID is valid. However, EB-eye check for every cross reference whether the site behind the cross reference exists. Obviously, EB-eye cannot check whether the content is valid.</p>
<p>Sometimes the default layout is not appropriate to display the results. In such cases, data providers should contact the EB-eye team to discuss a possibly custom layout. For every layout default or custom, the simplicity of the layout should be one of the main objectives. Thus, only the information which is really needed to allow the user to decide whether he should visit the original site should be included.</p>
