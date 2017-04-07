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
{% include notice-review.html %}

### <a name="WhyshouldIusethesearchguidelines" id="WhyshouldIusethesearchguidelines"></a> Why should I use the search guidelines?

The guiding principle behind those guideline and recommendations is that we want our users to be able to use all the search services at the EBI without the feeling that they switch to a complete new world every time they use a new search service. We also aim at improving the general user search experience.



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
