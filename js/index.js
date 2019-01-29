// Your code goes here
let bodyTag = document.querySelector('body')
let logoHeading = document.querySelector('.logo-heading')
let getAnchors = document.querySelectorAll('nav a')
let getH2 = document.querySelectorAll('h2')
let randomColor = Math.floor(Math.random()*16777215).toString(16);

//console.log when page contents are loaded. Very useful on bigger sites
window.addEventListener("load", function(e) {
    console.log("Page Loaded!");
  });

  //dbl click fun bus in nav
  logoHeading.addEventListener('dblclick', () =>{
      bodyTag.style.color = 'teal';
    //   console.log('Color Changed')
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




console.log(randomColor)


