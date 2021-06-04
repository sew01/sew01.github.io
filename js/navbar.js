// /* Please ❤ this if you like it! */


// (function($) { "use strict";

// 	$(function() {
// 		var header = $(".start-style");
// 		$(window).scroll(function() {    
// 			var scroll = $(window).scrollTop();
		
// 			if (scroll >= 10) {
// 				header.removeClass('start-style').addClass("scroll-on");
// 			} else {
// 				header.removeClass("scroll-on").addClass('start-style');
// 			}
// 		});
// 	});		
		
// 	//Animation
	
// 	$(document).ready(function() {
// 		$('nav.hero-anime').removeClass('hero-anime');
// 	});

// 	//Menu On Hover
		
// 	$('nav').on('mouseenter mouseleave','.nav-item',function(e){
// 			if ($(window).width() > 750) {
// 				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
// 				setTimeout(function(){
// 				_d[_d.is(':hover')?'addClass':'removeClass']('show');
// 				},1);
// 			}
// 	});	
	
// 	//Switch light/dark
	
// 	// $("#switch").on('click', function () {
// 	// 	if ($("nav").hasClass("dark")) {
// 	// 		$("nav").removeClass("dark");
// 	// 		$("#switch").removeClass("switched");
// 	// 	}
// 	// 	else {
// 	// 		$("nav").addClass("dark");
// 	// 		$("#switch").addClass("switched");
// 	// 	}
// 	// });  
	

//   })(jQuery);

// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector('#' + event.target.dataset.dropdown)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector('#' + dropdownButton.dataset.dropdown)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu')

    if (navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none'
      return
    }

    navbarMenu.style.display = 'flex'
  })
}

handleSmallScreens()