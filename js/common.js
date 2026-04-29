$(document).ready(function(){

    // UIKit.scrollspyNav("#scroll-nav",{closet: 'ul li' , scroll: true , offset: 100, cls: 'uk-active'});

    (async function()     {
        await loadFull(tsParticles);
        $('#sub-particles-1').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-2').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-3').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-4').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-5').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-6').particles().ajax('js/particles.json', function (container)   {
            
        });
    }());

    // Light/Dark theme
    // const checkbox = document.getElementById("checkbox")
    // checkbox.addEventListener("change", () => {
    //   document.body.classList.toggle("dark")
    // })

    $(".anchor a").click(function (event) {
          if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top - 0 // - 100 if you wish
              },
              800
            );
          }
        });
     
const eduItems = document.querySelectorAll('.edu-item');

eduItems.forEach(item => {
  const trigger = item.querySelector('.edu-trigger');

  trigger.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    eduItems.forEach(i => i.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

document.querySelectorAll('section, .glass, .project-card, .edu-item').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});

})