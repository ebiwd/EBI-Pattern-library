---
layout: meta-pattern
title: Search guidelines
categories: meta-patterns
type:
- guidance
tags:
- search
description: These guideline and recommendations help users to use all the search services at EMBl-EBI with consistency and fewer interface-driven complexities. This speeds development and increase the overall user experience (UX).
---
### <a name="globalvslocal" id="globalvslocal"></a> Global search vs Local search

<div class="row">
<div class="columns medium-6">
<div class="callout" markdown="1">

##### Global search: provided by EBI Search and covers all EBI indexed resources

<img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/about_us_header.png" alt="Global search box" title="Global search box">
By default, the EBI search box appears in the `#global-masthead` and all searches are directed to EBI Search.
</div>
</div>

<div class="columns medium-6">
<div class="callout" markdown="1">

##### Local search: a search technology developed or picked by a service

<img src="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/interpro_header.png" alt="Local search" title="Local search">
For local searach, a search box should be included in the `#local-masthead` and the search box in the global header disappears. All searches in the search box search the *local* resource.

Including a local search box will disable the global EBI Search in the `#global-masthead`.

<a href="/EBI-Pattern-library/patterns/search/" class="readmore">Further guidance on local search boxes</a>
</div>
</div>
</div>


#### Expanded guidance on a local service search
- **Filters:** Any filters or facets should appear on the left hand menu. (<a href="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/ebeye_search_result.png" target="\_blank">sample</a>)
- **Search EBI as well:** The local search should also perform a query using the EB-eye on all EBI resources and present those Global results on the right hand side of the results page. Each global result category will have a designated icon to facilitate quick visual recognition. (<a href="//www.ebi.ac.uk/sites/ebi.ac.uk/files/styleguide/images/interpro_search_results.png" target="\_blank">sample</a>)
- **Empty search behaviour:** If a user submits a search without inputing a query, the result page should indicate that no query was received and give some examples of typical searches.
- **Service homepage search:** On a service homepage the local service search may be placed in the main content area. (<a href="http://www.ebi.ac.uk/QuickGO-Beta/" target="\_blank">sample</a>)


### <a name="improving" id="improving"></a>Improving the search experience for your users

Search is usually the primary or secondary means of navigating a website. This is particularly true for the EBI with the huge amount of biological data available. Search is the only way users can access some of this information and they need to feel like they are always heading in the right direction.

Several studies and books have been written on the subject of search and this list of guideline and recommendations simply represents a summary of what any search developer/designer at the EBI should know or at least be aware of.

<div class="callout columns medium-6 float-right" markdown="1">
For more on the search best practices and search patterns

- [Search Patterns](http://searchpatterns.org) Peter Morville, Jeffery Callender <span class="label">Book</span>
- [Search User Interfaces](http://searchuserinterfaces.com) Marti A. Hearst <span class="label">Book</span>
- [Information Interaction](http://isquared.wordpress.com) <span class="label">Blog</span>
- [The TwigKit Blog](http://twigkit.com/blog/) <span class="label">Blog</span>
</div>

#### Four principles to guide the user search experience

1. **<a name="Helpusersformulatetheirquery" id="Helpusersformulatetheirquery"></a> Help users formulate their query**

    Every search requires input, but its always easier for the users to pick something from a list than it is to pull it out of thin air.

    So, in general it is a good idea to give users some suggestions to help them get on the right foot. One way to achieve this is by using auto-completion. Autocomplete involves the search predicting a word or phrase that the user wants to type in without the user actually typing it in completely. Depending on the context, this can be based on most common search queries or simply on spelling suggestions. Every suggestion must result in one or more result hits and it is good practice to match the typed letters to the suggestions.

    Another approach to searching data that is commonly used by a lot of people, and biologists in particular, is reusing saved searches. Indeed, scientists working on specific topics use the bookmark functionality of their web browser to save their search to be able to quickly come back to it later. That's why having bookmarkable result pages is an important aspect of the search experience that should not be overlooked.

    Sometimes, but not very often, a simple search is not enough and users need a more advanced search interface to input their query. These intermediate to expert users need full control over the search engine. Such users typically have more than superficial knowledge about the items they are searching for. They may know the type of items and are set to search for a specific item they know or may not know exists.

    Advanced search usually co-exists with a normal search box and offers additional functionality

      - to control how the combined list of search terms is interpreted by the search engine (e.g. boolean operator AND, OR, NOT...)
      - to define the scope of the search (e.g. limit the search to particular item types or item properties)
      - and sometimes to allow users to control the way the results are presented (e.g. paging size, fields...)

    However, depending on the type of data and the target audience, it's important to decide whether the advanced search is supposed to be a user-friendly query builder for novices or a power tool for experts because this will strongly influence the design of the search.

2. **<a name="Helpusersanalyseandreviewtheresults" id="Helpusersanalyseandreviewtheresults"></a> Help users analyse and review the results**

    Once the users have submitted their initial query, they should be presented with a list of results to review.

    People start analyzing the results by quickly scanning the page. Studies have shown that the top 3 results will draw 80% of the attention. So, it's important to make sure the best results appear first and most effort should be put toward optimizing the search algorithms. Depending on the context (i.e. data), these should take into account the relevancy (e.g. identifiers) as well as the timeliness (e.g. publication dates) of the results.

    Another important aspect to take into consideration is the visual appearance of the results. The most important part of the result the user will look at first is the title. It is usually the link to the resource and for that reason must be descriptive, but not too long (7-12 words). Highlighting the matching terms in the results is also a good practice as it can help the eye quickly parse the results for important words.

    It doesn't always make sense to offer thumbnails (or any visual elements), but if such an addition to search enhances the results, its worth considering. The same apply to custom interfaces based on the query type (e.g. a general search returning database specific results along side web results could use different rendering for both types).

    In general, users don't like to dig into large quantities of information when conducting a search. It's better to display as little as possible per search result while still communicating the full idea of what each full entry will contain on it.

    It's sometimes useful to structure the results by grouping them by similarity (e.g. images, videos, databases...).

    Users can also benefit from federated searches, with multiple databases or collections being searched simultaneously and a single page summarising the results. But, note that this type of search adds some complexity that can be daunting for the users if not presented properly.

    In particular contexts, and very often with bioinformatics data, the user's goal is not to retrieve the data but to perform an analysis with these data. In these situations, using actionable results (e.g. launch analysis tools buttons) has been proven to improve the user experience. However, one must be careful with the visual representation and the number actions included in the results. It's very important for the users to understand straight away what these actions are and what will happen if they use them. They can also easily be overwhelmed by an inferface clutered with unnecessary actions.

3. **<a name="Helpusersrefineorreformulatetheirquery" id="Helpusersrefineorreformulatetheirquery"></a> Help users refine or reformulate their query**

    After reviewing the results, users may find the answer they are looking for, click on one of the results for more information, give up unsuccessfully, or — what often happens — try a slightly different search. It's important to give them the opportunity to refine or even reformulate their initial query. In general, the result pages should always contain a search box, possibly including the initial search terms for manual query refinement.

    When dealing with structured data, as it is often the case in bioinformatics, faceted navigation can be very beneficial. Faceted search has become a popular technique in commercial search applications, particularly for online retailers and libraries, because it allows users to explore by filtering available information. This can be a powerful technique for filtering results based on specific criteria (e.g. organisms, publication dates...), but it requires significant investments (Implementation, compute power...) so it should be used only if it adds a clear value for improving findability.

    When it's relevant for the data, sorting results can be used as another form of filter to help users refine their query (e.g. sorting by dates).

    Another technique (gaining in popularity) consists of showing the users new topics or examples of searches that are related to their initial query. These suggestions are usually derived from the content of the result pages but more complex algorithms can take into account the users's previous searches or even their general profile if such information is available. Just like faceted search, this requires significant investments and can potentially have undesirable effects (i.e. This rely heavily on the quality of the suggestions).

4. **<a name="Helpusersrecovergracefully" id="Helpusersrecovergracefully"></a> Help users recover gracefully**

    People use the search to find answers to questions or to retrieve data. So, the worse that can happen is for the interface not to return any result. Avoiding this is really important to keep the user's trust.

    One solution to solve or at least limit this problem, is to expand the initial query to match additional documents. Query expansion involves techniques such as:

     - Finding synonyms of words, and searching for the synonyms as well
     - Finding all the various morphological forms of words by stemming each word in the search query
     - Fixing spelling errors and automatically searching for the corrected form or suggesting it in the results
     - Re-weighting the terms in the original query

   However, it's important to notify the user if their initial query has been changed without asking them first, as this could lead to incorrect interpretation of the results.

   Sometimes users also misuse the search interface and try to search with inappropriate query input (e.g. binary data, full dna sequences). In these situations, a good practice is to give them some hints about why the search can't work and possibly reference additional resources which could be more appropriate for the requested type of search.

### <a name="Presentingresult" id="Presentingresult"></a> Presenting result

For guidance on how to present results to the users, see the <a class="readmore" href="//ebiwd.github.io/EBI-Pattern-library/sample-site/boilerplate/search-results.html">search result boilerplate page</a>
