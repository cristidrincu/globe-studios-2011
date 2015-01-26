// JavaScript Document

// perform JavaScript after the document is scriptable. 
$(function() { 
    // setup ul.tabs to work as tabs for each div directly under div.panes 
    $("ul.homePageTabs").tabs("div.homePagePanes > div"); 
});