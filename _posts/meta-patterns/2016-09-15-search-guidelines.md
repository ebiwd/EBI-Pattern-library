---
layout: meta-pattern
title: Search guidelines
categories: meta-patterns
type:
- guidance
tags:
- search
description: The search guidelines specify the essentials of making sure data and web content are properly indexed internally by the EB-eye Search Engine as well as externally by general search engines like Google, Bing, Yahoo and more.
---

<h2><a name="WhyshouldIusethesearchguidelines" id="WhyshouldIusethesearchguidelines"></a> Why should I use the search guidelines?</h2>
<p>The guiding principle behind those guideline and recommendations is that we want our users to be able to use all the search services at the EBI without the feeling that they switch to a complete new world every time they use a new search service. We also aim at improving the general user search experience.</p>
<p>These guidelines have been written for the data providers as well as the people in charge of maintaining the content for the various web pages publicly available at the EBI.</p>
<p>The guidelines also list some general advice and suggestions that can be used to improve the user experience when searching with any search engine at the EBI and help our users to quickly reach the information they are looking for.</p>
<p><a name="searchglossary" id="searchglossary"></a></p>
<h3><a name="Glossaryoftermsusedinthesearchguidelines" id="Glossaryoftermsusedinthesearchguidelines"></a> Glossary of terms used in the search guidelines</h3>
<ul>
<li><strong>Document</strong>: Lucene term<br>
A document is a virtual document consisting of a set of fields. A document can have several fields with the same name.</li>
<li><strong>Field</strong>: Lucene term<br>
Part of a Document (see above). A field is a &lt;<em>name, content</em>&gt; pair. The name provides metadata, e.g. row name in a database or the different parts of a web page or email (header, body, ...). The content contains the actual data. Both parts of a field are indexed but the <em>name</em> is only available as structural information, i.e. one can search for something with a specific <em>field-name</em> but a <em>field-name</em> usually will not appear in the search result.</li>
<li><strong>Domain</strong>: EB-eye term<br>
A data source, most of the times a database. For example: UniProtKB, PDBe, ...</li>
<li><strong>Domain tree, hierarchy</strong>: EB-eye term<br>
All domains in the EB-eye are organised in a tree. Nodes of the tree are for example <em>Protein Sequences</em> or <em>Small Molecules</em>. Leaves of the tree are for example <em>UniProtKB</em> (parent <em>Protein Sequences</em>) or <em>ChEBI </em>(parent <em>Small Molecules</em>)</li>
<li><strong>Data provider</strong>: EB-eye term<br>
A group/person who provides the data for a domain.</li>
</ul>
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
  <!--&lt;th -->
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
<p><a name="globalvslocal" id="globalvslocal"></a></p>
<h4>Global search vs Local search</h4>
<p>Global search is a search that searches all EBI resources indexed by the EB-eye. Local search uses whatever search technology the local service has developed or uses.</p>
<p>On the main corporate EBI pages, the search box appears in the global header and all searches are directed to EB-eye.</p>
<p><img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/about_us_header.png" alt="Global search box" title="Global search box" width="970" height="172" style="border: 0px;"></p>
<p>For an EBI service that has its own search requirement, a large search box should be included in the main header and the search box in the global header disappears. All searches in the search box search the <strong>local</strong> resource and return a list of results from this resource.</p>
<p><img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/interpro_header.png" alt="Local search" title="Local search" width="975" height="159" style="border: 0px;"></p>
<p>Any filters or facets that this search provides should appear on the left hand menu.</p>
<p><img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/ebeye_search_result.png" alt="Global search results" title="Global search results" width="985" height="694" style="border: 0px;"></p>
<p>The local search should also perform a query using the EB-eye on all EBI resources and present those Global results on the right hand side of the results page. Each global result category will have a designated icon to facilitate quick visual recognition.</p>
<p><img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/interpro_search_results.png" alt="Local search results" title="Local search results" width="977" height="696" style="border: 0px;"></p>
<p><a name="how" id="how"></a></p>
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
<p><a name="patterns" id="patterns"></a></p>
<h2><a name="ImprovingthesearchexperienceforyourusersGeneralSearchPatterns" id="ImprovingthesearchexperienceforyourusersGeneralSearchPatterns"></a> Improving the search experience for your users - General Search Patterns</h2>
<p>Search is usually the primary or secondary means of navigating a website. This is particularly true for the EBI with the huge amount of biological data available. Search is the only way users can access some of this information and they need to feel like they are always heading in the right direction.</p>
<p>&nbsp;</p>
<p>Several studies and books have been written on the subject of search and this list of guideline and recommendations simply represents a summary of what any search developer/designer at the EBI should know or at least be aware of. The different topics detailled here are only general patterns and don't specify any specific design implementions for these pattern. The search design patterns belong to the more general design styleguides document. To know more on the subject of search best practice and search patterns we recommend e following readings:</p>
<p>Books:</p>
<ul>
<li>Search Patterns - Peter Morville, Jeffery Callender (<a href="http://searchpatterns.org/" rel="nofollow">http://searchpatterns.org/</a>)</li>
<li>Search User Interfaces - Marti A. Hearst (<a href="http://searchuserinterfaces.com/" rel="nofollow">http://searchuserinterfaces.com/</a>)</li>
</ul>
<p>Blogs:</p>
<ul>
<li>Information Interaction (<a href="http://isquared.wordpress.com/" rel="nofollow">http://isquared.wordpress.com/</a>)</li>
<li>The TwigKit Blog (<a href="http://twigkit.com/blog/" rel="nofollow">http://twigkit.com/blog/</a>)</li>
</ul>
<p>To categorise this summary of recommentations, one can identify 4 principles that will guide the users search experience.</p>
<h3><a name="Helpusersformulatetheirquery" id="Helpusersformulatetheirquery"></a> Help users formulate their query</h3>
<p>Every search requires input, but its always easier for the users to pick something from a list than it is to pull it out of thin air.</p>
<p>So, in general it is a good idea to give users some suggestions to help them get on the right foot. One way to achieve this is by using auto-completion. Autocomplete involves the search predicting a word or phrase that the user wants to type in without the user actually typing it in completely. Depending on the context, this can be based on most common search queries or simply on spelling suggestions. Every suggestion must result in one or more result hits and it is good practice to match the typed letters to the suggestions.</p>
<p>Another approach to searching data that is commonly used by a lot of people, and biologists in particular, is reusing saved searches. Indeed, scientists working on specific topics use the bookmark functionality of their web browser to save their search to be able to quickly come back to it later. That's why having bookmarkable result pages is an important aspect of the search experience that should not be overlooked.</p>
<p>Sometimes, but not very often, a simple search is not enough and users need a more advanced search interface to input their query. These intermediate to expert users need full control over the search engine. Such users typically have more than superficial knowledge about the items they are searching for. They may know the type of items and are set to search for a specific item they know or may not know exists.<br>
Advanced search usually co-exists with a normal search box and offers additional functionality</p>
<ul>
<li>to control how the combined list of search terms is interpreted by the search engine (e.g. boolean operator AND, OR, NOT...)</li>
<li>to define the scope of the search (e.g. limit the search to particular item types or item properties)</li>
<li>and sometimes to allow users to control the way the results are presented (e.g. paging size, fields...)</li>
</ul>
<p>However, depending on the type of data and the target audience, it's important to decide whether the advanced search is supposed to be a user-friendly query builder for novices or a power tool for experts because this will strongly influence the design of the search.</p>
<h3><a name="Helpusersanalyseandreviewtheresults" id="Helpusersanalyseandreviewtheresults"></a> Help users analyse and review the results</h3>
<p>Once the users have submitted their initial query, they should be presented with a list of results to review.</p>
<p>People start analyzing the results by quickly scanning the page. Studies have shown that the top 3 results will draw 80% of the attention. So, it's important to make sure the best results appear first and most effort should be put toward optimizing the search algorithms. Depending on the context (i.e. data), these should take into account the relevancy (e.g. identifiers) as well as the timeliness (e.g. publication dates) of the results.</p>
<p>Another important aspect to take into consideration is the visual appearance of the results. The most important part of the result the user will look at first is the title. It is usually the link to the resource and for that reason must be descriptive, but not too long (7-12 words). Highlighting the matching terms in the results is also a good practice as it can help the eye quickly parse the results for important words.</p>
<p>It doesn't always make sense to offer thumbnails (or any visual elements), but if such an addition to search enhances the results, its worth considering. The same apply to custom interfaces based on the query type (e.g. a general search returning database specific results along side web results could use different rendering for both types).</p>
<p>In general, users don't like to dig into large quantities of information when conducting a search. It's better to display as little as possible per search result while still communicating the full idea of what each full entry will contain on it.</p>
<p>It's sometimes useful to structure the results by grouping them by similarity (e.g. images, videos, databases...).</p>
<p>Users can also benefit from federated searches, with multiple databases or collections being searched simultaneously and a single page summarising the results. But, note that this type of search adds some complexity that can be daunting for the users if not presented properly.</p>
<p>In particular contexts, and very often with bioinformatics data, the user's goal is not to retrieve the data but to perform an analysis with these data. In these situations, using actionable results (e.g. launch analysis tools buttons) has been proven to improve the user experience. However, one must be careful with the visual representation and the number actions included in the results. It's very important for the users to understand straight away what these actions are and what will happen if they use them. They can also easily be overwhelmed by an inferface clutered with unnecessary actions.</p>
<h3><a name="Helpusersrefineorreformulatetheirquery" id="Helpusersrefineorreformulatetheirquery"></a> Help users refine or reformulate their query</h3>
<p>After reviewing the results, users may find the answer they are looking for, click on one of the results for more information, give up unsuccessfully, or — what often happens — try a slightly different search. It's important to give them the opportunity to refine or even reformulate their initial query. In general, the result pages should always contain a search box, possibly including the initial search terms for manual query refinement.</p>
<p>When dealing with structured data, as it is often the case in bioinformatics, faceted navigation can be very beneficial. Faceted search has become a popular technique in commercial search applications, particularly for online retailers and libraries, because it allows users to explore by filtering available information. This can be a powerful technique for filtering results based on specific criteria (e.g. organisms, publication dates...), but it requires significant investments (Implementation, compute power...) so it should be used only if it adds a clear value for improving findability.</p>
<p>When it's relevant for the data, sorting results can be used as another form of filter to help users refine their query (e.g. sorting by dates).</p>
<p>Another technique (gaining in popularity) consists of showing the users new topics or examples of searches that are related to their initial query. These suggestions are usually derived from the content of the result pages but more complex algorithms can take into account the users's previous searches or even their general profile if such information is available. Just like faceted search, this requires significant investments and can potentially have undesirable effects (i.e. This rely heavily on the quality of the suggestions).</p>
<h3><a name="Helpusersrecovergracefully" id="Helpusersrecovergracefully"></a> Help users recover gracefully</h3>
<p>People use the search to find answers to questions or to retrieve data. So, the worse that can happen is for the interface not to return any result. Avoiding this is really important to keep the user's trust.</p>
<p>One solution to solve or at least limit this problem, is to expand the initial query to match additional documents. Query expansion involves techniques such as:</p>
<ul>
<li>Finding synonyms of words, and searching for the synonyms as well</li>
<li>Finding all the various morphological forms of words by stemming each word in the search query</li>
<li>Fixing spelling errors and automatically searching for the corrected form or suggesting it in the results</li>
<li>Re-weighting the terms in the original query</li>
</ul>
<p>However, it's important to notify the user if their initial query has been changed without asking them first, as this could lead to incorrect interpretation of the results.</p>
<p>Sometimes users also misuse the search interface and try to search with inappropriate query input (e.g. binary data, full dna sequences). In these situations, a good practice is to give them some hints about why the search can't work and possibly reference additional resources which could be more appropriate for the requested type of search.</p>
<h3><a name="Presentingresult" id="Presentingresult"></a> Presenting result</h3>
<p>For guidance on how to present results to the users, please consult the <a href="//www.ebi.ac.uk/seqdb/confluence/display/Delta/The%2BEBI%2BWeb%2BStyle%2BGuide" title="The EBI Web Style Guide">EBI style guide</a>.</p>
<p><a name="seo" id="seo"></a></p>
<h2>How do I make my data more search engine friendly?: Search Engine Optimization (SEO)</h2>
<p>Search Engine Optimization (SEO) is a term that has grown increasingly popular over the last couple of years. Basically, it's the process of increasing exposure of the online content of a web site in Search Engine Result Pages (SERPs).</p>
<p>SEO is a vast topic and a lot of books have already been written about that subject. The goal of these guidelines, however, is provide recommendations and solutions to improve the visibility of web sites. There is no method better than another, but following these recommendations should help increase online content exposure in most SERPs.</p>
<h3><a name="SEOrecommendations" id="SEOrecommendations"></a> SEO recommendations</h3>
<p>The relevance between a search term and the search engines indexed content is decided by the content itself. If it is rich and of good quality then it will rank better. References from other sites are another very important factor used by most search engines to validate the credibility and authority of a web site.</p>
<p>Most search engines have well defined guidelines and recommendations regarding SEO:</p>
<table>
<tbody>
 <tr>
  <td>Google</td>
  <td><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=35769&amp;&amp;hl=en" rel="nofollow">http://www.google.com/support/webmasters/bin/answer.py?answer=35769&amp;&amp;hl=en</a> <br>
  <a href="http://www.google.com/webmasters/docs/search-engine-optimization-starter-guide.pdf" rel="nofollow">http://www.google.com/webmasters/docs/search-engine-optimization-starter-guide.pdf</a></td>
 </tr>
 <tr>
  <td>Bing</td>
  <td><a href="http://onlinehelp.microsoft.com/en-us/bing/hh204434.aspx" rel="nofollow">http://onlinehelp.microsoft.com/en-us/bing/hh204434.aspx</a></td>
 </tr>
 <tr>
  <td>Yahoo</td>
  <td><a href="http://styleguide.yahoo.com/resources/optimize-search-engines/seo-basics" rel="nofollow">http://styleguide.yahoo.com/resources/optimize-search-engines/seo-basics</a></td>
 </tr>
</tbody>
</table>
<p>They all describe the same basic principles.</p>
<p><a name="content" id="content"></a></p>
<h4><a name="ContentguidelinesforSEO" id="ContentguidelinesforSEO"></a> Content guidelines for SEO</h4>
<ul>
<li>Make a site with a clear, fairly flat, hierarchy (i.e. each page should only be one to three clicks away from the default page) and text links, preferably using simple and static URLs. Complicated URLs (e.g. long URLs with multiple variables) and URLs that change frequently are difficult to index as link destinations.</li>
<li>Make sure that each page is accessible by at least one static text link. If you decide to use dynamic pages (i.e., the URL contains a "?" character), be aware that not every search engine spider crawls dynamic pages as well as static pages. It helps to keep the parameters short and the number of them few.</li>
<li>Keep the links on a given page to a reasonable number and make sure they aren't broken.</li>
<li>Limit all pages to a reasonable size (e.g. Bing recommends covering one topic per page. An HTML page with no images should be under 150 KB)</li>
<li>Use only well-formed HTML code in your pages (Use validating tools like the W3C Markup Validation Service).</li>
<li>Add a semantic information to the structure of your code by using appropriate HTML tags like headers or paragraphs (e.g. &lt;h1&gt;, &lt;h2&gt;, &lt;p&gt; instead of &lt;br/&gt;...)</li>
<li>Create unique, <br>
ief but descriptive (keyword-rich) text for the &lt;title&gt; (Page title contents are displayed in search results) for each page.</li>
<li>Use the &lt;meta&gt; description attribute tags to provide a summary of the page (Search engine might use it a snippets for the page).</li>
<li>Use ALT attributes and make sure they are descriptive and accurate.</li>
<li>In the visible page text, include keywords users might choose as search query terms to find the information on your site.</li>
<li>Don't load pages with irrelevant keywords</li>
<li>Avoid hidden text and hidden links</li>
<li>Try to use text instead of images to display important names, content, or links. Don't put text you want indexed within images.</li>
<li>Add a Sitemap.xml file with links that point to the important parts of the web site.</li>
<li>Use Rich Snippets whenever possible (e.g. Images of protein structures as Thing, Training courses, conferences and workshops as Event and Group leader and senior staff pages as Person). Rich Snippets lets you mark up a much wider range of item types on your pages, using a vocabulary that Google, Microsoft, and Yahoo! can all understand (For more information, refer to the Google <a href="http://www.google.com/support/webmasters/bin/answer.py?answer=99170&amp;&amp;hl=en" rel="nofollow">Rich Snippets</a>documentation)</li>
</ul>
<p><a name="technical" id="technical"></a></p>
<h4><a name="TechnicalrecommendationsforSEO" id="TechnicalrecommendationsforSEO"></a> Technical recommendations for SEO</h4>
<ul>
<li>Make use of the robots.txt file. You can use this file to prevent web crawlers from crawling specific files, directories or irrelevant pages (e.g. search results pages).</li>
<li>Monitor your site's performance and optimize load times</li>
<li>Test your web site to make sure it appears correctly in different browsers</li>
<li>Use a text browser (e.g. Lynx) to examine your site, because most search engine spiders see your site as text browsers would (Most search engines don't like Javascript, cookies, session IDs, frames, DHTML or Flash)</li>
<li>If you site uses AJAX, make sure it supports either <a href="http://code.google.com/web/ajaxcrawling/" rel="nofollow">Google's AJAX crawling scheme</a> with HTML snapshots or use <a href="http://en.wikipedia.org/wiki/Hijax" rel="nofollow">Hijax</a> and progessive enhancement</li>
</ul>
<p><a name="discovery" id="discovery"></a></p>
<h4><a name="Howtoinfluencediscovery" id="Howtoinfluencediscovery"></a> How to influence discovery</h4>
<ul>
<li>Use the free Webmaster Tools available for most of the main search engines to get a better control of the indexing.</li>
<li>Promote new content (e.g. using social media), but avoid artificial backlinks (e.g. spams, cloaking, redirects, automated queries)</li>
</ul>
