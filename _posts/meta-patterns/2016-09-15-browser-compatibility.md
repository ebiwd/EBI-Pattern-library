---
layout: meta-pattern
title: Browser compatibility
categories: meta-patterns
tags:
- usability
description: What do you need to support
---

<p>For browser support, aim for content and functionality to be unobstructed on browsers released within the last five years and have JavaScript enabled; this is represents virtually all users of the EMBL-EBI site (in excess of 99.9%).</p>
<p>As a guiding rule, test for compatibility on any browser or device that represents more than 2% of the usage of <a href="http://www.ebi.ac.uk">www.ebi.ac.uk</a>.</p>
<p>As <a href="http://people.opera.com/howcome/2006/phd/#h-30">intended</a> by the CSS specification, not all browsers, devices, or users render content to look exactly the same. Our aim is to create an accessible and visually consistent design across a broad range of clients, not pixel-prefect designs. Further, we build atop the basic functionality, adding <a href="https://en.wikipedia.org/wiki/Progressive_enhancement">progressive-enhancement</a> features to newer classes of browsers and devices.</p>

<div class="callout warning">

  <h3><span class="icon icon-generic " data-icon="U"></span> How to use this</h3>
  <p>The below describes how the EMBL-EBI Web Development team analyses and supports the EBI Framework and sites the team maintains, we suggest you use this as a starting point, adapting it for the browsers of your users, and devices you can procure to test on.</p>
  <p>For further guidance, reach out to the Web Development team for assistance on how to set up a testing environment.</p>

</div>


<p>As of this writing (21/10/2015), currently supported desktop browsers and their usage:</p>

<table>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Version(s)</th>
      <th>Traffic %</th>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>46, 45, 44</td>
      <td>40.0%</td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>40, 39, 38</td>
      <td>18.6</td>
    </tr>
    <tr>
      <td>Safari</td>
      <td>9, 8, 7.1</td>
      <td>8.0</td>
    </tr>
    <tr>
      <td>IE</td>
      <td>12, 11</td>
      <td>6.6</td>
    </tr>
  </tbody>
</table>

<h3>Mobile and tablet support</h3>

<div class="row">
  <div class="medium-7 columns">

    <p>The mobile and tablet space is highly fragmented with reliable guarantees of support often hard to offer as device maker, browser, and OS version are each a variable in HTML/CSS rendering. </p>
    <p>With this in mind, there are three classes of mobile and tablet support:</p>

    <dl>
      <dt>Primary support</dt>
      <dd>These devices represent a greater than 5% share of mobile traffic and the Web Dev team posses these devices to test against. Testing will be performed proactively for each major release (qualified as 0.1 increment in versioning, or greater).</dd>

      <dt>Best effort</dt>
      <dd>These devices represent a greater than 2.5% share of mobile traffic, and/or the Web Dev team does not have a device to test against. The Web Dev team will attempt to support these users but without physical devices to test against, cannot guarantee ongoing compatibility.</dd>
      <ul>
        <li>Where available, simulator/emulator tools will be used to test against during each major release</li>
        <li>Bug reports from users will be addressed, and documented in hopes of ensuring no degradation in future updates</li>
      </ul>

      <dt>Legacy</dt>
      <dd>Devices that represent less than 2.5% of mobile traffic and are on the decline month-over-month.</dd>
      <ul>
        <li>The Web Dev team does not thoroughly test against physical devices or emulated software</li>
        <li>The team will address user bug reports will be addressed, attempting a fix where it does not adversely affect performance or Best effort/Primary support devices</li>
      </ul>

    </dl>

  </div>

  <div class="medium-5 columns callout secondary">

    <h4>Current classifications</h4>
    <p>A synopsis of the ecosystem as of September 2015. This is targeted for a twice annual update, the classification of devices is subject to change if a high need browser or device is identified.</p>

    <table>
      <caption>Operating Systems</caption>
      <tbody>
        <tr>
          <th>OS</th>
          <th>Traffic</th>
          <th>Support level</th>
        </tr>
        <tr>
          <td>Android 4.x</td>
          <td>43.5%</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>Android 5.x</td>
          <td>20.4</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>iOS 9.x</td>
          <td>9.5</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>iOS 8.x</td>
          <td>8.1</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>Android 2.x</td>
          <td>3.1</td>
          <td>Best effort</td>
        </tr>
        <tr>
          <td>Windows Phone</td>
          <td>2.8</td>
          <td>Best effort</td>
        </tr>
      </tbody>
    </table>

    <table>
      <caption>Mobile Browsers</caption>
      <tbody>
        <tr>
          <th>Browser</th>
          <th>Traffic</th>
          <th>Support level</th>
        </tr>
        <tr>
          <td>Safari</td>
          <td>40.1%</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>Chrome</td>
          <td>30.7</td>
          <td>Primary support</td> 
        </tr>
        <tr>
          <td>Android</td>
          <td>9</td>
          <td>Primary support</td>
        </tr>
        <tr>
          <td>IE 11</td>
          <td>6.7</td>
          <td>Best effort</td>
        </tr>
        <tr>
          <td>UC Browser</td>
          <td>5.1</td>
          <td>Best effort</td>
        </tr>
        <tr>
          <td>Chrome iOS</td>
          <td>2.7</td>
          <td>Best effort</td>
        </tr>
      </tbody>
    </table>

    <p>Note on tablets: Currently all tablet devices are limited to best effort, as they represent less than 2.5% of traffic (currently at 1.8%).</p>

  </div>

</div> <!-- /row -->

<h5>Special targets</h5>
<p>These devices, browsers, or OS versions have been identified as critical needs.</p>
<p>None currently known.</p>
