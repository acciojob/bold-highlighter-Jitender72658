function highlight() {
     let boldTags = document.getElementsByTagName('strong');
     for (let i = 0; i < boldTags.length; i++) {
     boldTags[i].style.color = 'green'; // Change the color to green
}
 }

 
 
 function return_normal() {
     let boldTags = document.getElementsByTagName('strong');
     for (let i = 0; i < boldTags.length; i++) {
   boldTags[i].style.color = 'black';
     
 }
}

