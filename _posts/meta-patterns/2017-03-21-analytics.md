---
layout: meta-pattern
title: Analytics
categories: meta-patterns
tags:
- usability
description: When and how best to use Google Analytics, Piwik, or server side tracking
---

Analytics present a great opportunity for insight into service utilisation and user behaviour.

But what tools are best to use to answer which questions? And how to use them with the EBI Visual Framework?

We can't hope to answer all those questions, but we can help you to gain insight into initial strategy and next steps.

<div class="callout medium-7 float-right margin-left-xlarge">
  <h3>A note on server side analytics</h3>

  <p>This document focusses where where the EBI Visual Framework functions: the browser.</p>

  <p>Not addressed much are server-side logs that record all transactions on EMBL-EBI services and make for a rich, granular and comprehensive resource on <em>all</em> utilisation. They are ideal for incident tracking, usage accounting, and other grant-level reporting. <a class="readmore" href="http://tsc.ebi.ac.uk/article/web-production/web-administration/where-find-web-traffic-reports">The web production team has more information on making the most of server resource</a></p>

  <p>Client-side tracking (Google Analytics, et al.) is a different species, offering further insights into user behaviour on pages: where did the user scroll to, what did they hover on, which of two links to the same HTML page did the user click?</p>

  <p>It is possible to development methods to do these tasks with server-side analytics, but much as client-side analytics are poor to gain server insight, server-side analytics are often detached from client-side behaviours.</p>
</div>


### What website analytics tool is right for you?

There are two widely chosen options for web analytics: [Google Analytics](https://www.google.com/analytics/) (GA) or [Piwik](https://piwik.org/). While there are other, less ubiquitous options such as [Clicky](https://clicky.com/), [Open Web Analytics](https://www.openwebanalytics.com/), or [eAnalytics](https://www.eanalytics.de/), this article will focus solely on GA and Piwik.

To investigate the difference between these two options, Web Development ran a side by side test of GA and Piwik on intranet.ebi.ac.uk. The numbers presented in here are from a one week period, 18/11/15-26/11/15\.

<table><tbody>
<tr>
  <th colspan="1" rowspan="1">Service</th>
  <th colspan="1" rowspan="1">Data</th>
  <th colspan="1" rowspan="1">Interface</th>
  <th colspan="1" rowspan="1">Unique Benefit</th>
  <th colspan="1" rowspan="1">Cost</th>
</tr>
<tr>
  <td colspan="1" rowspan="1">Google Analytics</td>
  <td colspan="1" rowspan="1">Less visitor data captured, but cleaner data for analysis.</td>
  <td colspan="1" rowspan="1">Friendlier, easier to learn interface, but less modifiable.</td>
  <td colspan="1" rowspan="1">Addition of data from Google's empire -- demographics, interests, and improved geolocation.</td>
  <td colspan="1" rowspan="1"><span markdown="1">
  Free ([until 10mil visitor hits](https://developers.google.com/analytics/devguides/collection/ios/v3/limits-quotas))</span>
  </td>
</tr>
<tr>
  <td colspan="1" rowspan="1">Piwik</td>
  <td colspan="1" rowspan="1">More visitor data captured, but more work analysing.</td>
  <td colspan="1" rowspan="1">More technical interface. It's slower to learn and use. Knowing SQL is useful.</td>
  <td colspan="1" rowspan="1"><span markdown="1">You [own the data](http://piwik.org/privacy/) and can address privacy concerns; flexibility in collecting and analysing it</span>
  </td>
  <td colspan="1" rowspan="1"><span markdown="1">Cost of running a LAMP server (or using [Piwik Cloud](https://piwik.pro/cloud/pricing))</span></td>
</tr>
</tbody></table>

### Collected data

<div class="callout">
  <h4>The short take-away</h4>
  <p>Google analytics numbers are lower than Piwik. It's unclear why. If you have a high number of users in China, consider using Piwik.</p>
</div>

Google Analytics recorded fewer, shorter sessions with a lower bounce rate than Piwik.

<table><tbody>
<tr>
  <th colspan="1" rowspan="1">Service</th>
  <th colspan="1" rowspan="1">Sessions</th>
  <th colspan="1" rowspan="1">Avg duration</th>
  <th colspan="1" rowspan="1">Bounce Rate</th>
</tr>
<tr>
  <td colspan="1" rowspan="1">GA</td>
  <td colspan="1" rowspan="1">738</td>
  <td colspan="1" rowspan="1">2min58sec</td>
  <td colspan="1" rowspan="1">13.82%</td>
</tr>

<tr>
  <td colspan="1" rowspan="1">Piwik</td>
  <td colspan="1" rowspan="1">844</td>
  <td colspan="1" rowspan="1">3min11sec</td>
  <td colspan="1" rowspan="1">21%</td>
</tr>
</tbody></table>

The GA data appeared to be "cleaner." For instance Piwik recorded a visitor with a screen resolution of 800.00002\. Resolutions take the format [pixel width]x[pixel heights]. While the period instead of an X is weird, it's even stranger for a 2 pixel height screen to actually exist. This data is nonsensical and probably isn't useful for analysis. I'd discard this datapoint before performing further analysis on the dataset.

It's unclear why the GA numbers are lower. However there are theories.

1.  It's easier to block and abuse GA tracking: GA is used more widely than Piwik, so it's more likely to be blocked (e.g. Ad block plugins). China sometimes blocks Google traffic (including your GA tracking links), which in turn can cause issues with your javascript loading. Also, GA tracking calls to Google can be captured and redirected as a "[Great Cannon](http://www.wired.co.uk/news/archive/2015-04/10/china-great-cannon-github-hack)" attack on other websites.
2.  The process of cleaning the data: As noted, Piwik records some data that appears non-sensical. GA might filter these visitors' data out and thus lower the numbers reported.

### Accessing and analysing data

<div class="callout">
  <h4>The short take-away</h4>
  <p>If the person analysing website data isn't comfortable with SQL and ad-hoc analysis (cleaning data and tabulating results), you should consider using Google Analytics.</p>
</div>

GA's interface felt easier to learn. There are useful help tips built into the data viewer, a mix of summarised data and visualisations, and finding information seemed easier. Piwik, in contrast has a lot of "hidden" functionality like the below options to view transitions, segmented data logs and more. They are only visible on mouseover.

 ![](/EBI-Pattern-library/static/images/analytics/image01.png)

GA has a lot of nice out of the box functionalities, the data presented on their interface felt actionable. Take for instance this "Behaviour Flow" (below). It visually shows where users entered the site and where they navigated to afterwards (for several pages).

![](/EBI-Pattern-library/static/images/analytics/image00.png)

Generating a similar chart in Piwik would be very manual and time intensive. It would likely require extracting data from the Piwik database and combining webpage visits by visitor ID (or perhaps IP...no attempt has yet been made to do this). Out of the box, Piwik shows entries and exits on a single page basis:

 ![](/EBI-Pattern-library/static/images/analytics/image03.png)Typically we found that Piwik's interface didn't show data in a form on which we could take action. Thus, data analysis in Piwik usually meant downloading information into excel and then doing additional number crunching.

### Each option's unique benefit

<div class="callout">
  <h4>The short take-away</h4>
  <p>If where data is stored and privacy matter, use Piwik. If you need peripheral data on visitors, use GA.</p>

  <p>Google Analytics adds in data from other sources, this allows GA to show visitor's demographic data (age and gender), interests, and improve geolocation data. It is also of particular necessity for users of Google Adwords. However, your website's data is stored by Google.</p>

  <p>With Piwik you own and store your website's data. This gives you greater flexibility with collecting and storing your data.</p>
</div>

GA adds extra data to help you better understand who your users and competitors are. Unique to Google is addition of information about the age, gender, and interests of your visitors. While the demographic data seems believable, there was no way to verify the interests information (see example of data below). GA also appears to have better geo-location techniques, being able to tell in which country a computer is, probably independent of IP (as the intranet receives only internal IPs and those don't provide geographic information). ![](/EBI-Pattern-library/static/images/analytics/image02.png)

GA also offers the ability to benchmark against other websites in your industry but you have to provide anonymous website usage data to Google to enable this functionality.

Piwik doesn't have additional data to add insights, but it does give you full and complete control of your data. You decide where it's stored and for how long, who has access to what parts of the data, and what's tracked and not tracked.

Piwik also offers much more flexibility. You can develop our own plugins; you have direct access to the MySQL database to do all kinds of statistics; you can even ignore "Do Not Track" setting to collect certain data ([Not recommended](http://piwik.org/docs/privacy/) though!).

### Cost of web analytics

<div class="callout">
  <h4>The short take-away</h4>
  <p>If you have a high number of visitors (>10mil) but not a lot of money to devote to web analytics, you should consider using Piwik.</p>
</div>

Google will host the service for you. Thus no infrastructure is needed on your part. Google Analytics is free if your site receives [fewer than 10 million hits](https://developers.google.com/analytics/devguides/collection/ios/v3/limits-quotas) per month, but it's important to note that one user session can result in [many hits](https://support.google.com/analytics/answer/1070983?hl%3Den). If you have 10milion visitors you're likely to exceed this limit. To resolve it, you either need to [sample your data](http://www.blastam.com/blog/index.php/2011/08/set-sample-rate-in-google-analytics) (so less visit data gets recorded in GA) or you need to talk with Google about the fee of premium version for a non-profit organisation. Exact pricing isn't posted but other sites quote a cost of [150,000USD](http://www.actualmetrics.com/google-analytics-price/) (likely this is the cost for a profit organisation and the fee for NPO's is lower). The premium version comes with a more offerings and support than the free version.

Piwik is open source and free, but you need to have your own LAMP server on which to deploy it. This means a start-up cost to configure the server, and an ongoing cost to maintain it. As number of visitors increase (or decrease) it will be up to you to scale the server and deal with speeding up queries to the database. For teams with limited knowledge of LAMP servers, Piwik Cloud is an option with reasonable pricing options ([690€](https://piwik.pro/cloud/pricing) for 10mil actions). Unlike GA premium, Piwik Cloud is a hosting option, not a fuller service option.

### Summary

The short answer is both have their strengths and weakness, so there's no clear winner.

Rather, to choose a web analytics solution you should think about what data you want to have access to, if where the data is stored matters, the technical skill set of your team, and the number of visitors your website receives.

For further help, drop Web Development an e-mail <a href="mailto:www-dev@ebi.ac.uk">www-dev@ebi.ac.uk</a>

### Note
Further items are planned in this series:
  1. User events: With [JS events](https://docs.google.com/document/d/1TuGMtbGcw3EOeFNGqc4ZP_faKJ7Fb65Weqa8b3WV0Go/edit#heading=h.l4372agxzzgh) we can greater insight into what users are clicking on under which conditions.
  2. Understanding success: if analytics is the answers, what are the questions? Closing the loop between what users are doing and how your content attempts to enable goals... Core content models.
  3. Digesting reports: How we can tie reporting API into our content models for [custom dashboards](https://docs.google.com/presentation/d/1k8m44Gc_sgOZvtQh5IuKRp5MR0oUqRpa1OBlFZ1hpdE/edit#slide=id.p) of success and failure metrics.
