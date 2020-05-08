$(document).ready(function() {
  var labVideo=document.getElementById("bgvid");
  var lastPageUsed="home";
      labVideo.pause();
    var pages = $(".page").length,
        scrolling = false,
        curPage = 1;
    
    function pagination(page, movingUp) {
      scrolling = true;
      var diff = curPage - page,
          oldPage = curPage;
      curPage = page;
     
      
      if(curPage==2){
        labVideo.pause();
        $("#page2Text").css("display","block");
      }
      else{
      
        $("#page2Text").css("display","none");
      }

      if(curPage==3){
        labVideo.currentTime = "0";
        labVideo.play();
        $("#page3Text").css("display","block");
      }
      else{
      
        $("#page3Text").css("display","none");
      }

      if(curPage==4){
        labVideo.pause();
        $("#page4").css("display","block");
        $("#page4Text").css("display","block");
      }
      else{
      
        $("#page4Text").css("display","none");
      }

     
     
      $(".page").removeClass("active small previous");
      $(".page-" + page).addClass("active");
      $(".nav-btn").removeClass("active");
      $(".nav-page" + page).addClass("active");
      if (page > 1) {
        $(".page-" + (page - 1)).addClass("previous");
        if (movingUp) {
          $(".page-" + (page - 1)).hide();
          var hackPage = page;
          setTimeout(function() {
            $(".page-" + (hackPage - 1)).show();
          }, 600);
        }
        while (--page) {
          $(".page-" + page).addClass("small");
        }
      }
      console.log(diff)
      if (diff > 1) {
        for (var j = page + 1; j < oldPage; j++) {
          $(".page-" + j + " .half").css("transition", "transform .7s ease-out");
        }
        
      }
      setTimeout(function() {
        scrolling = false;
        $(".page .half").attr("style", "");
        $(".page")
      }, 700);

      if(curPage==5){
        labVideo.pause();
        
        $("#page5Text").css("display","block");
      }
      else{
        
      
        $("#page5Text").css("display","none");
      }
     
    }
    
    function navigateUp() {
      if (curPage > 1) {
        curPage--;
        pagination(curPage, true);
      }
    }
  
    function navigateDown() {
      if (curPage < pages) {
        curPage++;
        pagination(curPage);
      }
    }
    
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (!scrolling) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else { 
          navigateDown();
        }
      }
    });
    
    $(document).on("click", ".scroll-btn", function() {
      if (scrolling) return;
      if ($(this).hasClass("up")) {
        navigateUp();
      } else {
        navigateDown();
      }
    });
    
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
    
    $(document).on("click", ".nav-btn:not(.active)", function() {
      if (scrolling) return;
      pagination(+$(this).attr("data-target"));
    });

    $(document).on("click", ".submenus1", function() {
      
      
      location.reload(true);
      lastPageUsed="home";
    });
  
    $(document).on("click", ".submenus2", function() {
      
      document.getElementById("menus").classList.toggle("change");
 
      var menupage = document.getElementById("menupage");
      var container = document.getElementById("home");
     
      var pagenav = document.getElementById("pagenav");
      if(lastPageUsed=="aboutuspage"){
        var aboutuspage = document.getElementById("aboutuspage");
       
       
          //aboutuspage.style.display = "block";
          $("#aboutuspage").addClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#contactuspage").removeClass("otherpageposition");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#section03").css("display","block");
          $("#section04").css("display","block");
          menupage.style.display = "none";
          
          container.style.position="relative";
         
          aboutuspage.style.opacity="1";
          
        
      }  
else{
      if (menupage.style.display === "none") {
        menupage.style.display = "block";
        container.style.display="block";
        container.style.opacity=".2";
        container.style.position="relative";
        pagenav.style.opacity=".2";
     
      } else {
       
        menupage.style.display = "none";
        container.style.opacity="1";
        container.style.display="none";
        container.style.position="relative";
        pagenav.style.opacity="1";
      
      }
      $("#aboutuspage").remove();
      $( "body" ).append( "<div id='aboutuspage' ></div>" )
   
      $("#aboutuspage").addClass("otherpageposition");
    
      $("#aboutuspage").load("aboutus.html");
      
      
}  
lastPageUsed="aboutuspage";
  });

  $(document).on("click", ".submenus3", function() {
    document.getElementById("menus").classList.toggle("change");
    
    var menupage = document.getElementById("menupage");
    var container = document.getElementById("home");
   
    var pagenav = document.getElementById("pagenav");
   
    if(lastPageUsed=="casestudiespage"){
      var casestudiespage = document.getElementById("casestudiespage");
      $("#aboutuspage").removeClass("otherpageposition");
      $("#labspage").removeClass("otherpageposition"); 
      $("#casestudiespage").addClass("otherpageposition");
      $("#section03").css("display","none");
      $("#section04").css("display","none");
      $("#ps-container").css("display","block"); 
      
     // contactuspage.style.display = "block";
      menupage.style.display = "none";
      container.style.position="relative";
      casestudiespage.style.opacity="1";
    }
    else{
    if (menupage.style.display === "none") {
      menupage.style.display = "block";
      container.style.display="block";
      container.style.opacity=".2";
      container.style.position="relative";
      pagenav.style.opacity=".2";
   
    } else {
     
      menupage.style.display = "none";
      container.style.opacity="1";
      container.style.display="none";
      container.style.position="relative";
      pagenav.style.opacity="1";
    
    }
    $("#casestudiespage").remove();
    $( "body" ).append( "<div id='casestudiespage' ></div>" )
 
    $("#casestudiespage").addClass("otherpageposition");
    
    $("#casestudiespage").load("casestudies.html");
  }
    lastPageUsed="casestudiespage";
  
});
 
$(document).on("click", ".submenus5", function() {
  document.getElementById("menus").classList.toggle("change");
  var menupage = document.getElementById("menupage");
    var container = document.getElementById("home");
   
    var pagenav = document.getElementById("pagenav");
    
  if (menupage.style.display === "none") {
      menupage.style.display = "block";
      container.style.display="block";
      container.style.opacity=".2";
      container.style.position="relative";
      pagenav.style.opacity=".2";
   
    } else {
      $("#aboutuspage").removeClass("otherpageposition");
      $("#labspage").removeClass("otherpageposition"); 
      $("#contactuspage").removeClass("otherpageposition");
      $("#casestudiespage").removeClass("otherpageposition");
      $("#contactuspage").remove();
      $("#labspage").remove();
      $("#aboutuspage").remove();
      $("#casestudiespage").remove();

      menupage.style.display = "none";
      container.style.opacity="1";
      container.style.position="relative";
      pagenav.style.opacity="1";
      container.style.display="block";
    }
    
  pagination(3);
  lastPageUsed="home";
});

  $(document).on("click", ".submenus10", function() {
    document.getElementById("menus").classList.toggle("change");
    
    var menupage = document.getElementById("menupage");
    var container = document.getElementById("home");
   
    var pagenav = document.getElementById("pagenav");
    if(lastPageUsed=="contactuspage"){
      var contactuspage = document.getElementById("contactuspage");
      $("#aboutuspage").removeClass("otherpageposition");
      $("#labspage").removeClass("otherpageposition"); 
      $("#contactuspage").addClass("otherpageposition");
      $("#contactusheader").css("display","block");
      $("#contactustitle").css("display","block");
      $("#contactusform").css("display","block"); 
      $("#googlemapcontent").css("display","block"); 
      $("#section03").css("display","none");
      $("#section04").css("display","none");
      $("#ps-container").css("display","none"); 
      
     // contactuspage.style.display = "block";
      menupage.style.display = "none";
      container.style.position="relative";
      contactuspage.style.opacity="1";
    }
    else{
    if (menupage.style.display === "none") {
      menupage.style.display = "block";
      container.style.display="block";
      container.style.opacity=".2";
      container.style.position="relative";
      pagenav.style.opacity=".2";
   
    } else {
     
      menupage.style.display = "none";
      container.style.opacity="1";
      container.style.display="none";
      container.style.position="relative";
      pagenav.style.opacity="1";
    
    }
    $("#contactuspage").remove();
    $( "body" ).append( "<div id='contactuspage' ></div>" )
    $("#contactuspage").addClass("otherpageposition");
   
    $("#contactuspage").load("contactus.html");
  }
    lastPageUsed="contactuspage";
  
});
  

    $(document).on("click", ".menus", function() {

      document.getElementById("menus").classList.toggle("change");
      angle1 = getRotationDegrees($('.bar1'));
      
      document.getElementById("submenus1").style.cursor="pointer";
     
  
      var container = document.getElementById("home");
      var menupage = document.getElementById("menupage");
      if(lastPageUsed=="contactuspage"){
        var contactuspage = document.getElementById("contactuspage");
   
        if(angle1=="315"){
         
          $("#aboutuspage").removeClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#contactuspage").addClass("otherpageposition");
          $("#contactusheader").css("display","block");
          $("#contactustitle").css("display","block");
          $("#contactusform").css("display","block"); 
          $("#googlemapcontent").css("display","block"); 
          $("#section03").css("display","none");
          $("#section04").css("display","none");
          $("#ps-container").css("display","none"); 
         // contactuspage.style.display = "block";
          menupage.style.display = "none";
          container.style.position="relative";
          contactuspage.style.opacity="1";
        }
        else{
          //contactuspage.style.display = "none";
          $("#contactuspage").removeClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#aboutuspage").removeClass("otherpageposition");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#contactusform").css("display","none"); 
          $("#section03").css("display","none");
          $("#section04").css("display","none");
          $("#googlemapcontent").css("display","none"); 
          menupage.style.display = "block";
            container.style.position="relative";
           contactuspage.style.opacity="0.2";
            
        } 
      }  
      if(lastPageUsed=="casestudiespage"){
        var casestudiespage = document.getElementById("casestudiespage");
   
        if(angle1=="315"){
          
          $("#aboutuspage").removeClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#casestudiespage").addClass("otherpageposition");
          $("#section03").css("display","none");
          $("#section04").css("display","none");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#contactusform").css("display","none"); 
          $("#googlemapcontent").css("display","none"); 
          $("#ps-container").css("display","block"); 
         // contactuspage.style.display = "block";
          menupage.style.display = "none";
          container.style.position="relative";
          casestudiespage.style.opacity="1";
        }
        else{
        
          //contactuspage.style.display = "none";
          $("#contactuspage").removeClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#casestudiespage").removeClass("otherpageposition");
          $("#section03").css("display","none");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#contactusform").css("display","none"); 
          $("#googlemapcontent").css("display","none"); 
          $("#section04").css("display","none");
          $("#ps-container").css("display","none"); 
          menupage.style.display = "block";
            container.style.position="relative";
            casestudiespage.style.opacity="0.2";
            
        } 
      }
      if(lastPageUsed=="aboutuspage"){
        var aboutuspage = document.getElementById("aboutuspage");
       
        if(angle1=="315"){
          //aboutuspage.style.display = "block";
          $("#aboutuspage").addClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#contactuspage").removeClass("otherpageposition");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#ps-container").css("display","none"); 
          $("#section03").css("display","block");
          $("#section04").css("display","block");
          menupage.style.display = "none";
          
          container.style.position="relative";
         
          aboutuspage.style.opacity="1";
          
        }
        else{
          //aboutuspage.style.display = "none";
          $("#contactuspage").removeClass("otherpageposition");
          $("#labspage").removeClass("otherpageposition"); 
          $("#aboutuspage").removeClass("otherpageposition");
          $("#contactusheader").css("display","none");
          $("#contactustitle").css("display","none");
          $("#section03").css("display","none");
          $("#section04").css("display","none");
          menupage.style.display = "block";
            container.style.position="relative";
            aboutuspage.style.opacity="0.2";
        } 
      }  

       
   
      if(lastPageUsed=="home"){
       
        if (angle1=="0") {
          $("#contactuspage").removeClass("otherpageposition");
          $("#aboutuspage").removeClass("otherpageposition");
          menupage.style.display = "block";
         // container.style.display="block";
          container.style.opacity="0.2";
          container.style.position="relative";
          pagenav.style.opacity="0.2";
         
       
        } else {
          menupage.style.display = "none";
          container.style.opacity="1";
          container.style.position="relative";
          pagenav.style.opacity="1";
        
        }
      }   
    
      
  });


  function getRotationDegrees(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  } else { var angle = 0; }
  return (angle < 0) ? angle + 360 : angle;
}
  

  });
  