
$(".desktop-ts .ts-menu .menu-item").click(function () {
  $(".desktop-ts .ts-menu .menu-item").removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');

  $('.desktop-ts .ts-content-item').removeClass('active');
  $('[data-zb-target="' + id + '"]').addClass('active'); // Corrected line
  console.log(id);
}); 

  // Initialize modal video plugin for product video buttons
  $(".product_video_btn").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
    },
  });


function toggleMenu() {
  var menu = document.getElementById("sub_menu");
  menu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  var mainMenuArea = document.querySelector(".main_menu_area");
  var clickedElement = event.target;

  // Check if the clicked element is not within the main_menu_area
  if (
    !mainMenuArea.contains(clickedElement) &&
    mainMenuArea.classList.contains("active")
  ) {
    // Hide the main_menu_area
    mainMenuArea.classList.remove("active");
  }
});

function toggleMainMenu(event) {
  event = event || window.event; // For compatibility with older versions of IE
  var mainMenuArea = document.querySelector(".main_menu_area");
  mainMenuArea.classList.toggle("active");
  // Stop event propagation to prevent the click from reaching the document click listener
  if (event.stopPropagation) {
    event.stopPropagation(); // For modern browsers
  } else {
    event.cancelBubble = true; // For older versions of IE
  }
}

$(document).ready(function(){
  // Using jQuery to select the element with the class 'menu-item' and get its id
  var menuItemId = $('.desktop-ts .ts-menu .menu-item').attr('id');
  
  // Printing the id to the console
  console.log(menuItemId);
});

function onTSMenu() {
  // Using jQuery to select the element with the class 'menu-item' and get its id
  var menuItemId = $('.desktop-ts .ts-menu .menu-item').attr('id');
  
  // Printing the id to the console
  console.log(menuItemId);
}

