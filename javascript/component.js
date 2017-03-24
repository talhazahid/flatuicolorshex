// JavaScript Document

<!--$('.slot-content').height($('.slot').width()+'px');-->

  $(document).ready(function(){
    initColorSelector("slot-content", "class-");
    initColorSelector("metro-box", "class-");
  });



  function initColorSelector(onclickClass, startsWith){    
    $("." + onclickClass).click(function(e){
      var targetObj = $(e.target);

      if(!targetObj.hasClass(onclickClass)){
        targetObj = targetObj.parents(".slot-content");
      }
      var allClasses = targetObj.attr('class').split(/\s+/);

      for(var i = 0; i < allClasses.length;i++){
        if(allClasses[i].lastIndexOf(startsWith, 0) === 0){
          var rgbColor = $("." + allClasses[i]).css("background-color");
          var hexColor = rgb2hex(rgbColor); 
          
          //alert("COPIED: " + hexColor);
          console.log(hexColor);

          
          $("#selectedColor").html(hexColor);
          $("#selectedColorContainer").fadeIn().delay(1500).fadeOut();
          copyToClipboard(hexColor);
        }
      }
    });
  }





  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78570353-1', 'auto');
  ga('send', 'pageview');






    //utility function to convert rgb to hex
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }



    //utility function to copy text to clipboard
    function copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
          // IE specific code path to prevent textarea being shown while dialog is visible.
          return clipboardData.setData("Text", text); 

      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
          var textarea = document.createElement("textarea");
          textarea.textContent = text;
          textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
          document.body.appendChild(textarea);
          textarea.select();
          try {
              return document.execCommand("copy");  // Security exception may be thrown by some browsers.
          } catch (ex) {
              console.warn("Copy to clipboard failed.", ex);
              return false;
          } finally {
              document.body.removeChild(textarea);
          }
      }
    }
	
	

/********************** Sliding Menu ****************************/


$(window).load(function() {

  $(".ninja-btn, .panel-overlay, .panel li a").click(function() {
    $(".ninja-btn, .panel-overlay, .panel").toggleClass("active");
    /* Check panel overlay */
    if ($(".panel-overlay").hasClass("active")) {
      $(".panel-overlay").fadeIn();
    } else {
      $(".panel-overlay").fadeOut();
    }
  });

});

$(window).on("load resize", function() {
  var menuHeightOffset = $(".panel").find("ul").height() / 2;

  $(".panel").find("ul").css({
    "margin-top": -menuHeightOffset
  });
});

/********************** Sliding Menu ****************************/















