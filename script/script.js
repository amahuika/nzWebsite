
// Jquery Slide Show

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 4000);
// Jquery slide show end

// initialize Animate on scroll Library
AOS.init();

// Map Functions jquery
var myRegions = [{
    "region": "Auckland",
    "city": "<h3 class='py-2 mb-0'>Auckland</h3>",
    "city_img": "images/Auckland1.jpg",
    "img_link" : "auckland.html",
    "description": "<p>Auckland offers an urban environment where most people live within half an hour of beautiful beaches, hiking trails and a dozen enchanting holiday islands. Add a sunny climate, a background rhythm of Polynesian culture and a passion for outstanding food, wine and shopping, and you’re beginning to get the picture of Auckland, New Zealand, our largest and most diverse city. <a href='auckland.html'> Find out more</a></p>"
  },
  {
    "region": "Wellington",
    "city": "<h3 class='py-2 mb-0'>Wellington</h3>",
    "city_img": "images/attractions/wellington cart header.jpg",
    "img_link" : "wellington.html",
    "description": "<strong>Wellington</strong> Situated at the southern end of the North Island, Wellington, New Zealand, was recently named \"the coolest little capital in the world\" by Lonely Planet. Surrounded by nature and fuelled by creative energy, Wellington is a compact city with a powerful mix of culture, history, nature and cuisine. Fuel your visit with strong coffee and world-class craft beer – Wellingtonians are masters of casual dining, with plenty of great restaurants, night markets and food trucks. <a href=\"wellington.html\">Find out more</a>.</p>"
  },
  {

    "region": "Waikato",
    "city": "<h3 class='py-2 mb-0'>Waikato Region</h3>",
    "city_img": "images/Hobbiton.jpg",
    "img_link" : "waikato.html",
    "description": "<p> <strong>Welcome to the Waikato region</strong> A geographically and culturally diverse region, the Waikato has a range of activities and attractions to suit all ages and tastes – from our vibrant city hub of Hamilton to the rugged west coast, underground wonders and middle-earth movie magic. <a href='waikato.html'>Find out more</a></p>"

  },
  {

    "region": "Otago",
    "city": "<h3 class='py-2 mb-0'>Otago</h3>",
    "city_img": "images/City/queenstownmapimage.jpg",
    "img_link" : "otago.html",
    "description": "<p><strong>Otago</strong> Featuring stunning scenery, Otago offers mountains, vast plains, dramatic rivers, and remote beaches. Dunedin, the ‘Edinburgh of the South’ has an internationally recognised university that hosts New Zealand’s principal medical school. Dunedin’s Scottish history has resulted in the city having the largest concentration of Victorian and Edwardian architecture in New Zealand. <a href=\"otago.html\">Find out more</a></p>"
  },
  
  {

    "region": "Canterbury",
    "city": "<h3 class='py-2 mb-0'>Canterbury</h3>",
    "city_img": "images/Lake tekapo church.jpg",
    "img_link" : "canterbury.html",
    "description": "<p><strong>Canterbury</strong> From lush vineyards and wild coastlines to sky-piercing mountains and pristine glacial lakes, Canterbury is a region of remarkable contrasts and a haven for those seeking incredible scenery and adventure. Journey through the Southern Alps by train, investigate the night sky in the world’s largest International Dark Sky Reserve or get up close with whales in Kaikōura. Watch the steam rise amid murmurs of conversation as you sit back and relax in Hanmer Springs’ natural hot pools, explore boutique galleries and hidden bays in Akaroa and Banks Peninsula or enjoy the delights of the North Canterbury wine region. <a href=\"canterbury.html\">Find out more</a>.</p>"
  },
];


$(function() {

  for (i = 0; i < myRegions.length; i++) {

    $("#" + myRegions[i].region)
      .css({
        "fill": "#BCBEC0"
      })
      .data("myRegions", myRegions[i]);
  }

// on mouse over
  $("path").mouseenter(function(e) {
    var region_data = $(this).data("myRegions");
    
// check if the path has data
    if (typeof $(this).data("myRegions") !== "undefined") {
      $(".city").html(region_data.city);
      $(".description").html(region_data.description);
      $(".city_img").attr("src", region_data.city_img);
      $(".img_link").attr("href", region_data.img_link);
      $(this).css({
        "fill": "#DF222E",
        "cursor" : "pointer"
      });
    }

  });

// on mouse leave
  $("path").mouseleave(function() {
    var region_data = $(this).data("myRegions");
    if (typeof $(this).data("myRegions") !== "undefined") {
      $(this).css({
        "fill": "#BCBEC0"
      });
    }
  });
});
// end of map function


// start Form Validation
function validateForm() {
  var firstName = document.forms["myForm"]["fname"].value;
  var lastName = document.forms["myForm"]["Lname"].value;
  var email = document.forms["myForm"]["email"].value;
  var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
  var message = document.forms["myForm"]["message"].value;

  if (lastName == "") {
    document.getElementById("lastName_error").innerHTML = "* Last name required";
  } else {
    document.getElementById("lastName_error").innerHTML = "";
  }

  if (firstName == "") {
    document.getElementById("firstName_error").innerHTML = "* First name required";
  } else {
    document.getElementById("firstName_error").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("email_error").innerHTML = "* Email required";
  } else {
    document.getElementById("email_error").innerHTML = "";
  }

  if (phoneNumber == "") {
    document.getElementById("phoneNumber_error").innerHTML = "* Phone number required";
  } else {
    document.getElementById("phoneNumber_error").innerHTML = "";
  }

  if (isNaN(phoneNumber)) {
    document.getElementById("phoneNumber_error").innerHTML = "* Integer required";
  }
  
  if (message == "") {
    document.getElementById("message_error").innerHTML = "* Message required";
  } else {
    document.getElementById("message_error").innerHTML = "";
  }

}

function formReset() {
  location.reload();
}
// end form validation


// Start Slide show javascript
var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
   
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
   

    if (slideIndex == 1) {
        document.getElementById("caption").innerHTML = "<h2>Hanmer Springs</h2> <br> <p>Hanmer Springs is a tourist destination, and the town's population swells during holidays. Hanmer Springs has around 520,000 visitors each year. With endless activities including Bungy jumping, jet boating, white water rafting, mountain biking, hiking and soaking in the hot pools are common tourist activities, and there is an airline service available for the viewing of the town's alpine surroundings. A Visitor Information Centre next to the hot springs provides information about the area and booking facilities for transport. Trampers can obtain weather information, maps and guidance from the Department of Conservation</p>";
    }
    if (slideIndex == 2) {
        document.getElementById("caption").innerHTML = "<h2>Christchurch City</h2> <br> <p>Christchurch is the city of exploration, where urban regeneration and heritage thrive. The city is constantly evolving, always giving locals and visitors something new to explore. Expect street art and innovative projects, a bustling hospitality scene and established green spaces. Christchurch is the newest city in the world, and it’s time the world rediscovered its secrets.</p> <p>The central city is filled with cutting-edge architecture alongside some of the oldest buildings in New Zealand. The Avon River intersects the city, bringing a natural landscape to the urban environment. Christchurch is the basecamp for South Island exploration, with the Banks Peninsula within reach, as well as the stunning Southern Alps and famed Canterbury Plains.</p>";
        }
    if (slideIndex == 3) {
        document.getElementById("caption").innerHTML = "<h2>Sky Tower Bungy</h2> <br> <p>New Zealand’s highest jump! Standing 192m (629ft) above Auckland, that step off the edge can be breath-taking for so many reasons. The amazing view, the insane height on New Zealand’s tallest building or just the thought of the rush to come! SKYJUMP can be described as Base Jumping by wire. It's just like being a movie stuntman, or a super hero. The sensation is different to a Bungy. You'll fall very fast at speeds of up to 85kph (52mph) for around 11 seconds before coming to a smooth landing at the base of the Sky Tower. This is tough on your mind but easy on your body. It is an absolute must do in Auckland. FREE Sky Tower pass included so you can explore the different observation levels afterwards.</p> ";
        }
    if (slideIndex == 4) {
        document.getElementById("caption").innerHTML = "<h2>Aoraki National Park</h2> <br> <p>Aoraki Mount Cook National Park is home of the highest mountains and the longest glaciers. It is alpine in the purest sense - with skyscraping peaks, glaciers and permanent snow fields, all set under a star-studded sky.</p> <p>According to Ngāi Tahu legend, Aoraki and his three brothers were the sons of Rakinui, the Sky Father. While on a sea voyage, their canoe overturned on a reef. When the brothers climbed on top of their canoe, the freezing south wind turned them to stone. The canoe became the South Island (Te Waka o Aoraki); Aoraki and his brothers became the peaks of the Southern Alps</p> ";
        }
                                    
}

// End slide show home page