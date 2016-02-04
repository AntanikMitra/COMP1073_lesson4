"use strict";
// setup your IIFE(Immediately Invoked Function Expression)
(function () {

    console.log("App starting");
    
    //decleared a named function way
    /*
     function replaceFirstParagraph() {
 
         console.log("inside replaceFirstParagraph Function");
 
         var firstParagraph;
 
         firstParagraph = document.getElementById("firstParagraph");
 
         firstParagraph.innerHTML = "This is a paragraph";
 
     }*/
    
    // declear an anonymous function with named alias
    var replaceFirstParagraph = function () {

        console.log("inside replaceFirstParagraph anonymous Function");

        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "This is a paragraph";


    };

    // call replaceFirstParagraph
    replaceFirstParagraph();

})();