/*
  This script will:
  1) Swap out the old compliance CSS/JS
  2) Swap out the omega grid for the Foundation grid
  3) Some nesting changes for the global/local header
  4) A handful of minor CSS edits may be needed for any Service-specific oddities
    Originally authored on 2016-05-16
    For assistance contact Ken Hawkins in Webdev
        or post to Github //github.com/ebiwd/EBI-Framework/issues

  To run, copy-paste the below line into your browser's console:
  jQuery('head').append('<script defer="defer" src="//ebiwd.github.io/EBI-Pattern-library/sample-site/migrations/testMigration.js"></script>\n');

  If your page does not have jQuery, you can load with eight lines of vaniala JS:

  var filerefJquery=document.createElement('script')
      filerefJquery.setAttribute("type","text/javascript")
      filerefJquery.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js")
      document.getElementsByTagName("head")[0].appendChild(filerefJquery)

  var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src", "//ebiwd.github.io/EBI-Pattern-library/sample-site/migrations/testMigration.js")
      document.getElementsByTagName("head")[0].appendChild(fileref)

 */

console.log('%c ' + String.fromCharCode(0xD83D,0xDC4B) + ' \n Hi. \n I\'ll autopilot a transition of this page to the new EMBL-EBI visual framework.', 'background: rgb(0,124,130); color: #FFF; font-size: 20px;');
console.log('%c This is meant as a rough guide and I\'ll talk through what I\'m doing. Use it as tool, but read the documentation too! ', 'background: #FFF; color: #999; font-style: italic;');
console.log('%c It\'s pretty straightforward, I don\'t think it will have many problems. I hope! ', 'background: #FFF; color: #999; font-style: italic;');
console.log('%c When you\'re ready, type: testMigration()', 'background: rgb(0,124,130); color: #FFF; font-size: 20px;');

function testMigration(steppingTimeSpeed) {

  // A stepping tool to pace out the execution
  steppingTimeSpeed = steppingTimeSpeed || 3000; //ms between each step
  steppingTimeInvoked = 0; // increments number of times invoked
  console.log('There will be '+steppingTimeSpeed+'ms between each step. If you\'d like to run faster or slower, pass a speed to this script a la: testMigration(5000)');
  function steppingTime() {
    steppingTimeInvoked++;
    return steppingTimeSpeed * steppingTimeInvoked;
  }

  // setTimeout(function(){
  //   console.log('Firstoff I\'m going to zoom out a bit so we can see more of the changes.');
  //   document.body.style.zoom = "30%"
  // }, steppingTime());

  setTimeout(function(){
    console.log('%c We\'re off!', 'background: green; color: #FFF; font-style: italic;');
  }, steppingTime());

  setTimeout(function(){
    jQuery('head').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>\n');
    console.log('jQuery: Updating to jQuery 1.10. This is version (or newer) is only necessary if you plan to use Foundation\'s JS components.');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    // Reset and remove old EBI compliance
    jQuery('link[href$="/ebi-global.css"]').remove();
    jQuery('link[href$="/ebi-visual.css"]').remove();
    jQuery('link[href$="/984-24-col-fluid.css"]').remove();
    jQuery('link[href$="/ebicompliance/css/style.css"]').remove();

    jQuery('link[href$="/ebi-fluid-embl.css"]').remove();
    jQuery('link[href$="/boilerplate-style.css"]').remove();
    jQuery('link[href$="/ebi-fluid-embl-noboilerplate.css"]').remove();
    console.log('CSS: Removed old EBI boilerplate-style sheets.');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('#ebi-footer-meta').html('');
    jQuery('#global-nav-expanded').html('');
    console.log('Footer: Removed old injected footer.');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('head').append('<link rel="stylesheet" href="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/foundation-6/css/foundation.css" type="text/css" />\n');
    jQuery('head').append('<link rel="stylesheet" href="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/ebi-global.css" type="text/css" />\n');
    jQuery('head').append('<link rel="stylesheet" href="//www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css" type="text/css" />\n');
    console.log('CSS: Injected new ebi-global.css fonts.css and foundation.css');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    // Service colour updating
    console.log('Service colours:');
    console.log(' - We now have much more customisable section and service specific "themes", instead of the previous colour palettes.');

    // do not use a colour palette on certain services
    if (window.location.pathname.split('/')[1] === 'arrayexpress') {
      console.log(' - I have your site as one that has it\'s own special colours, I won\'t do anything.');
      console.log(' - Consider using the standard colour implementation format: //github.com/ebiwd/EBI-Framework/blob/gh-pages/css/colour-template.css');
      console.log('------------------\n');
      return;
    }

    // Define array of object pairs
    // [what we check for] [what we replace with]
    var colourPalettes = [
                          { "original" : "link[href$=\"/embl-petrol-colours.css\"]",        "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-embl-petrol.css" },
                          { "original" : "link[href$=\"/ebi-industry-colours.css\"]",       "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-ebi-industry.css" },
                          { "original" : "link[href$=\"/ebi-research.colour.css\"]",        "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-ebi-research.css" },
                          { "original" : "link[href$=\"/ebi-services-about-colours.css\"]", "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-ebi-services-about.css" },
                          { "original" : "link[href$=\"/ebi-training-colours.css\"]",       "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-ebi-training.css" },
                          { "original" : ".no-match", "new" : "//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/css/theme-embl-petrol.css" }
                        ];
    var i = 0;
    // which colour palette is used?
    for (; i < colourPalettes.length; i++) {
      if ((jQuery(colourPalettes[i].original).length) == 1) { break; }
    }
    // did we find a palette?
    if (i < colourPalettes.length) {
      jQuery(colourPalettes[i].original).remove();
      jQuery('head').append('<link rel="stylesheet" href="' + colourPalettes[i].new + '" type="text/css" />\n');
      console.log(' - Found ' + colourPalettes[i].original + ', and replaced with ' + colourPalettes[i].new);
    } else {
      // if no match, we use default EBI
      jQuery('head').append('<link rel="stylesheet" href="' + colourPalettes[colourPalettes.length-1].new + '" type="text/css" />\n');
      console.log(' - Not sure what service colours are meant to be used, adding default EBI Petrol palette: ' + colourPalettes[colourPalettes.length-1].new);
    }
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('div#content').addClass('row');
    console.log('Added .row to div#content');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    // Add new JS
    jQuery('head').append('<script defer="defer" src="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/cookiebanner.js"></script>\n');
    jQuery('head').append('<script defer="defer" src="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/foot.js"></script>\n');
    jQuery('head').append('<script defer="defer" src="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/script.js"></script>\n');

    console.log('Javascript: I\'ve added three scripts:\n' +
                '            //www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/cookiebanner.js\n' +
                '            //www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/foot.js\n' +
                '            //www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/script.js\n'
    );
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('#ebi-footer-meta').addClass('row');
    jQuery('#global-nav-expanded').addClass('row');
    jQuery('#local-footer').wrapInner('<div class="row"></div>');
    console.log('Footer: Adding .row class to footer, #ebi-footer-meta and #global-nav-expanded');
    console.log('------------------\n');
  }, steppingTime());


  setTimeout(function(){
    // CSS translations
    // grid-XX to medium-XX
    jQuery('div,section,aside').attr('class', function(i, str) {

      function whatColumnSize(toParse) {
        // deal with Qs like: 5 omgea cols to 2.5 foundation cols :(
        // this won't deal with all variations of this, such as 4 columns at 3.5, but should work for most scenarios
        switch (toParse) {
          case 0.5:
          case 1.5:
          case 2.5:
          case 3.5:
          case 4.5:
          case 5.5:
            toParse = Math.ceil(toParse);
            break;
          case 6.5:
          case 7.5:
          case 8.5:
          case 9.5:
          case 10.5:
          case 11.5:
          case 12.5:
            toParse = Math.floor(toParse);
            break;
          default:
            break;
        }
        return toParse;
      }
      // omega is 24 columns, foundation is 12 columns
      if (typeof str != 'undefined') {
        // swap grid_XX for medium-X
        function convert_columns(str, p1, p2, offset, s) { return ' columns medium-' + whatColumnSize(p2/2) + ' temporary-maker-that-this-is-a-column '; }
        var re_columns = /(grid_)([0-9]+)/;
        str = str.replace(re_columns, convert_columns);

        // swap pull_xx for medium-pull-X
        function convert_pull(str, p1, p2, offset, s) { return ' medium-pull-' + whatColumnSize(p2/2) + ' '; }
        var re_pull = /(pull_)([0-9]+)/;
        str = str.replace(re_pull, convert_pull);

        // swap push_xx for medium-push-X
        function convert_push(str, p1, p2, offset, s) { return ' medium-push-' + whatColumnSize(p2/2) + ' '; }
        var re_push = /(push_)([0-9]+)/;
        str = str.replace(re_push, convert_push);

        return str;
      }
    });
    console.log('CSS: I\'ve substitued the Omeaga grid_XX classes for Foundation\'s "column medium-XX" classes.\n' +
                '     Note that I\'ve also stepped the 24 column grid to 12 column grid.'
    );
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    // Wrap groups of columns with div.row
    jQuery('div#content .temporary-maker-that-this-is-a-column').has('.temporary-maker-that-this-is-a-column').wrapInner('<div class="row"/>');
    // jQuery('div#content .medium-12').wrap('<div class="row"/>');
    jQuery('.temporary-maker-that-this-is-a-column').removeClass('temporary-maker-that-this-is-a-column');
    console.log('CSS: Groups of .columns should be wrapped in div.row s.\n');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('div').attr('class',
      function(i, c) {
        if (typeof c != 'undefined') {
          return c.replace(/(^|\s)omega/g, ' last');
        }
      });

    jQuery('div').removeClass('alpha');
    console.log('CSS: .alpha is no longer needed.');
    console.log('     .omega is now .last and is only neeeded when you have not specified 12 columns of width.');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    console.log('CSS: Assorted cleanup');
    jQuery('div,input').attr('class',
      function(i, c) {
        if (jQuery(this).hasClass('medium-24') === true) {
          // return c.replace(/(^|\s)medium-24/g, ' medium-12');
        }
        if (jQuery(this).hasClass('submit') === true) {
          jQuery(this).addClass('button');
          console.log(' - submit elements we want to look like buttons need the .button class');
        }
      });

    if (jQuery('.hidden, .visuallyhidden').length > 0) {
      jQuery('.hidden').addClass('hide').removeClass('hidden');
      jQuery('.visuallyhidden').addClass('hide').removeClass('visuallyhidden');
      console.log(' - .visuallyhidden and .hidden are now .hide');
    }

    if (jQuery('.submenu ul').length > 0) {
      jQuery('.submenu ul.menu').addClass('vertical');
      console.log(' - .submenu ul.menu should use .vertical');
    }

    if (jQuery('#intro').length > 0) {
      jQuery('#intro').addClass('callout');
      console.log(' - #intro should use the new .callout');
    }

    if (jQuery('div.rounded-corner').length > 0) {
      jQuery('div.rounded-corner').removeClass('rounded-corner').addClass('callout');
      console.log(' - div.rounded-corner should use the new .callout');
    }

    if (jQuery('.shortcuts.transparent ul.split').length > 0) {
      jQuery('.shortcuts.transparent ul.split').removeClass().addClass('columns small-6 no-bullet');
      console.log(' - the popular list should drop .split in favour of .columns.small-6.no-bullet /n' +
                  '   alternativley: .columns.small-6.menu.vertical.no-pad-left and add .icon-bullet to each li');
    }
    console.log('------------------\n');
  }, steppingTime());


  setTimeout(function(){
    // if the search box is missing #local-search
    if (jQuery('div#content fieldset').length > 0) {
      jQuery('div#content fieldset').addClass('callout');
      console.log('Fieldsets: It looks like you have some fieldsets in div#content, I\'m assuming you want these highlighted and have added .callout classes.');
      console.log('------------------\n');
    }
    if (jQuery('div#content fieldset legend').length > 0) {
      jQuery('div#content fieldset legend').addClass('label');
      console.log('Fieldsets legends: Also assume you want these to be .label s.');
      console.log('------------------\n');
    }
  }, steppingTime());

  setTimeout(function(){
    // Update global-mastehad
    var newGloablMasthead = '<div id="masthead-black-bar" class="clearfix masthead-black-bar">\n\
      <nav>\n\
        <div class="row">\n\
          <ul id="global-nav" class="menu">\n\
            <!-- set active class as appropriate -->\n\
            <li class="home-mobile"><a href="//www.ebi.ac.uk"></a></li>\n\
            <li class="home active"><a href="//www.ebi.ac.uk">EMBL-EBI</a></li>\n\
            <li class="services"><a href="//www.ebi.ac.uk/services">Services</a></li>\n\
            <li class="research"><a href="//www.ebi.ac.uk/research">Research</a></li>\n\
            <li class="training"><a href="//www.ebi.ac.uk/training">Training</a></li>\n\
            <li class="about"><a href="//www.ebi.ac.uk/about">About us</a></li>\n\
            <li class="search">\n\
              <a href="#" data-toggle="search-global-dropdown"><span class="show-for-small-only">Search</span></a>\n\
              <div id="search-global-dropdown" class="dropdown-pane" data-dropdown data-options="closeOnClick:true;">\n\
                <form id="global-search" name="global-search" action="/ebisearch/search.ebi" method="GET">\n\
                  <fieldset>\n\
                    <div class="input-group">\n\
                      <input type="text" name="query" id="global-searchbox" class="input-group-field" placeholder="Search all of EMBL-EBI">\n\
                      <div class="input-group-button">\n\
                        <input type="submit" name="submit" value="Search" class="button">\n\
                        <input type="hidden" name="db" value="allebi" checked="checked">\n\
                        <input type="hidden" name="requestFrom" value="masthead-black-bar" checked="checked">\n\
                      </div>\n\
                    </div>\n\
                  </fieldset>\n\
                </form>\n\
              </div>\n\
            </li>\n\
            <li class="float-right show-for-medium embl-selector">\n\
              <button class="button" type="button" data-toggle="embl-dropdown">Hinxton</button>\n\
              <div id="embl-dropdown" class="dropdown-pane" data-dropdown data-options="closeOnClick:true;">\n\
                to come.\n\
              </div>\n\
            </li>\n\
          </ul>\n\
        </div>\n\
      </nav>\n\
    </div>\n';

    jQuery('#masthead-black-bar').remove();
    jQuery('#masthead').prepend(newGloablMasthead);
    console.log('Removing old global nav and inserting new. It now goes inside the #masthead wrapper.');
    console.log('Note: I\'ve made the EMBL-EBI tab .active, you can set whichever you\'d like to be active.');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    jQuery('#masthead').removeClass().addClass('meta-background-image');
    jQuery('#masthead').attr({'data-sticky': true, 'data-sticky-on': 'large', 'data-top-anchor': 180, 'data-btm-anchor': 300000});
    jQuery('#masthead').wrap('<div data-sticky-container />');
    console.log('Updating local-navigation to be sticky (You\'ll need to invoke Foundation JS later)');
    console.log('------------------\n');
  }, steppingTime());

  // setTimeout(function(){
  //   // if the search box is missing #local-search
  //   if (jQuery('#local-search').length == 0) {
  //     if (jQuery('#masthead .medium-6.last').length == 1) {
  //       jQuery('#masthead .medium-6.last').attr('id', 'local-search');
  //       console.log('%c Local search: It looks like it\'s missing #local-search. I\'ll add it.', 'background: green; color: yellow; background: 000;');
  //       console.log('------------------\n');
  //     }
  //   }
  // }, steppingTime());

  setTimeout(function(){
    jQuery('#masthead #local-title, #masthead #local-search.medium-6, #masthead .medium-6.last').wrapAll('<div class="masthead-inner row"/>');
    console.log('Local title and search: wrapping in a new div with classes .masthead-inner.row');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    console.log('Local-nav: ');
    if (jQuery('nav ul#gxaLocalNav').length > 0) {
      jQuery('nav ul#gxaLocalNav').attr('id','local-nav');
      console.log(' - the nav ul doesn\'t have the spec local-nav id, changing this ...');
    }
    jQuery('ul#local-nav').addClass('dropdown menu float-left columns medium-12');
    jQuery('ul#local-nav').attr({'data-dropdown-menu':true});
    console.log(' - adding classes .dropdown.menu.float-left.columns.medium-12 ');
    console.log(' - adding attribute data-dropdown-menu for mobile');
  }, steppingTime());

  setTimeout(function(){
    var localNavTabs = jQuery('#masthead > nav').detach();
    jQuery('div.masthead-inner.row').append(localNavTabs);
    console.log(' - moved the local nav tabs inside the new .masthead-inner.row div');
  }, steppingTime());

  setTimeout(function(){
    if (jQuery('ul#local-nav li.functional').length > 0) {
      jQuery('ul#local-nav li.functional').addClass('float-right');
      console.log(' - add class .float-right to .functional tabs');
    }
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){

    if (jQuery('#local-search').length == 0) {
      console.log('Local-search: it looks like this page doesn\'t have a local search box. Skipping...');
      console.log('------------------\n');
      return;
    }

    $.fn.changeElementType = function(newType) {
      var attrs = {};

      $.each(this[0].attributes, function(idx, attr) {
        attrs[attr.nodeName] = attr.nodeValue;
      });

      var newelement = $("<" + newType + "/>", attrs).append($(this).contents());
      this.replaceWith(newelement);
      return newelement;
    };

    console.log('Local-search: The local-search in the masthead has an updated structure. I\'ve rearanged as follows:');

    $('#local-search div.left').removeClass().addClass('input-group');
    console.log(' - div.left is now div.input-group');

    $('#local-search div.input-group').append('<div class="input-group-button" />');
    console.log(' - div.input-group now contains a div.input-group-button');

    $('#local-search input.submit.button').detach().appendTo('#local-search div.input-group-button');
    console.log(' - input.submit.button is now inside div.input-group-button');

    $('#local-search input.submit.button').addClass('secondary');
    console.log(' - input.submit.button colouring updated with .secondary. This is fully optional depending on your themeing.');

    if ($('#local-search span.examples').length > 0) {
      $('#local-search span.examples').changeElementType('p');
      console.log(' - The span.examples is now a p element');
    }

    $('#local-search p.examples').detach().insertAfter('#local-search input#local-searchbox');
    console.log(' - p.examples is now grouped with the searchbox');

    // $('#local-search p.examples').addClass('small');
    // console.log(' - added .small to p.examples ');

    $('#local-search div.right').detach().appendTo('#local-search div.input-group-button');
    console.log(' - div.right is now inside div.input-group-button');

    $('#local-search div.right').removeClass().addClass('small');
    console.log(' - div.right is now div.small');

    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    // The Foundation theme JavaScript
    jQuery('head').append('<script src="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/libraries/foundation-6/js/foundation.js"></script>\n');
    jQuery('head').append('<script src="//www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/js/foundationExtendEBI.js"></script>\n');

    console.log('Javascript: I\'ve added (but not executed) the Foundation JS. Invoke with runJS()');
    console.log('------------------\n');
  }, steppingTime());

  setTimeout(function(){
    console.log('%c All done!', 'background: green; color: #FFF; font-style: italic;');
    // console.log('Zooming back to 100%.');
    // document.body.style.zoom = "100%"
    console.log('%c Want JS features? By default we\'ve not invoked the JS features, if you\'d like to do so type runJS() ', 'background: #FFF; color: #999; font-style: italic;');
    console.log('%c Want a diff? Type diffUsingJS() ', 'background: #FFF; color: #999; font-style: italic;');
  }, steppingTime());

  // setTimeout(function(){
  // }, steppingTime());

} // END testMigration

function runJS() {
  $(document).foundation();
  $(document).foundationExtendEBI();
  console.log('Javascript: Foundation JS invoked');
}

// Option to add a diff
var pageOriginalHTML = jQuery('html').html();
jQuery('head').append('<script data-note="just-for-the-diff" src="//cemerick.github.io/jsdifflib/diffview.js"></script>\n');
jQuery('head').append('<script data-note="just-for-the-diff" src="//cemerick.github.io/jsdifflib/difflib.js"></script>\n');

function diffUsingJS() {
  console.log('Bam! Diffed.');
  jQuery('head').append('<link rel="stylesheet" href="//cemerick.github.io/jsdifflib/diffview.css" type="text/css" />\n');
  jQuery('head').append('<style type="text/css" data-note="just-for-the-diff">tbody td {padding: 0 !important;word-wrap: break-word;font-size: .8rem;}</style>\n');
  // max-width: 35rem;

  // get the baseText and newText values from the two textboxes, and split them into lines
  var base = difflib.stringAsLines(pageOriginalHTML);
  var newtxt = difflib.stringAsLines($('html').html());

  // create a SequenceMatcher instance that diffs the two sets of lines
  var sm = new difflib.SequenceMatcher(base, newtxt);

  // get the opcodes from the SequenceMatcher instance
  // opcodes is a list of 3-tuples describing what changes should be made to the base text
  // in order to yield the new text
  var opcodes = sm.get_opcodes();
  // $('body').prepend('<div id="diffoutput">Diff</div>');
  //       var element = document.createElement("Input");

  var diffoutputdiv = document.createElement("diffoutput");
  while (diffoutputdiv.firstChild) diffoutputdiv.removeChild(diffoutputdiv.firstChild);
  var contextSize = null;
  contextSize = contextSize ? contextSize : null;

  // build the diff view and add it to the current DOM
  diffoutputdiv.appendChild(diffview.buildView({
      baseTextLines: base,
      newTextLines: newtxt,
      opcodes: opcodes,
      // set the display titles for each resource
      baseTextName: "Original",
      newTextName: "Modified",
      contextSize: contextSize,
      viewType: 1 // 1 for inline, 0 for side-by-side
  }));

  $('div#content').prepend(diffoutputdiv);

  // scroll down to the diff view window.
  // location = url + "#diff";
}


// Auto run
// testMigration(100);
