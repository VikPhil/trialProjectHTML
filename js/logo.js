function active() {

   
    var par = document.getElementById("sublime");
    par.style.color = 'black';
     
     
    function sec() {
       
           par.style.transition = 'all 0.9s';
           par.style.color='#fff';
           par.style.textShadow = '0 0 10px';
           var colorText = Math.round(Math.random() * 2);

           if(colorText == 1) {
                par.style.transition = 'all 0.1s';
                par.style.color = '#ad9f9f';

           } else if(colorText == 2) {
                par.style.transition = 'all 0.1s';
                par.style.color = 'black';

           }
    }
    setInterval(sec, 600);


}
window.onload = active;