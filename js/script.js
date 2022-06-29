window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize - 150) {

          /**setTimeout( () => {

          }, 500);*/

          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});
