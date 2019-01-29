// Your code goes here
let bodyTag = document.querySelector('body');
let logoHeading = document.querySelector('.logo-heading');
let getAnchors = document.querySelectorAll('nav a');
let getH2 = document.querySelectorAll('h2');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let imageOpacity = document.querySelectorAll('img');
let navHeader = document.querySelector('.main-navigation');
let buttons = document.querySelectorAll('.btn');
let bottomParagraphs = document.querySelectorAll('.destination p');
let contentPick = document.querySelector('.content-pick');
let mainNavigation = document.querySelector('.main-navigation');

//console.log when page contents are loaded. Very useful on bigger sites
window.addEventListener("load", e => {
    console.log("Page Loaded!");
  });

//console.logs while dragging anything around
  window.addEventListener('drag', e =>{
      console.log(`You're Dragging ${e.target}`);
  })

  //alerts when you let go of the dragged item
  window.addEventListener('dragend', e => {
      alert('BOOM! You dropped it');
  })

  //on resize opacity of images change
  window.addEventListener('resize', () =>{
      imageOpacity.forEach(image =>{
          image.style.opacity = '0.5';
        })
        navHeader.style.zIndex = '1';
  });

  //alerts whenever something is copied from page.
  document.addEventListener('copy', () =>{
    alert(`You've copied something`);
});
  
//dbl click fun bus in nav
  logoHeading.addEventListener('dblclick', (e) =>{
      bodyTag.style.color = 'teal';
      e.stopPropagation();
      console.log('propagation stops "Fun Bus" from disappearing on the double-click');
  })

  //double click in the white-space of the nav and everything will disappear
  mainNavigation.addEventListener('dblclick', (e) =>{
      e.target.style.display = 'none';
      console.log('Its Bubbling?!');
  })

//Mouse Over
getAnchors.forEach(aTag =>{
  aTag.addEventListener('mouseover', e =>{
    e.target.style.color = 'coral';
    // console.log(`You've hovered over ${e.target}`)
  })
})
// Mouse Out
getAnchors.forEach(aTag =>{
    aTag.addEventListener('mouseout', e =>{
      e.target.style.color = `#${randomColor}`;
      // console.log(`You've hovered over ${e.target}`)
    })
  })

//On scroll H2s change color
window.addEventListener('scroll', () =>{
    getH2.forEach(h2 => {
        h2.style.color = `#${randomColor}`;
    })
})


//Use of stopPropagation
buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.target.style.color = 'purple';
        e.stopPropagation();
        console.log('fire a click event');
        })
    })

contentPick.addEventListener('click', e =>{
    console.log('Is it bubbling?');
})





