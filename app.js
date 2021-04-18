
// alert 

//  alert("Hello");

//  prompt document.write

//  var yourAge= prompt('please enter your yourAge');
// console.log(yourAge);

// if(yourAge >= 18){
// document.write('<h1>you are old have a nice watching </h1>');

//  document.write("<img src='https://upload.wikimedia.org/wikipedia/en/2/2e/Nice_Time_%281957_film%29.jpg '>")

// }else{document.write('<h1>you are too age</h1>');
//  }

/*
TO Do List:
- Ask the user about fav blacklistName char at the back list movie
- add an image of that char based on the use input
- validator ==> keep asking the user if he choose blacklistName char [liz, red]
- Ask the user how many image he/she want to see on the webpage
*/
 // // function declaration 
var blacklistName;

function getUserName() {
  var name = prompt('Hello you could you please tell me your name??');
 console.log(name);


 blacklistName = prompt('Hello, please enter your fav char name from black list movie!');


while(blacklistName !== 'red' && blacklistName !== 'liz'){
  blacklistName = prompt('Please enter the name liz or red ');
}
}

getUserName()

function showImages(){

var userChoose;

if(blacklistName === 'red'){
  userChoose='<img src="https://img.cinemablend.com/filter:scale/quill/3/f/0/0/c/5/3f00c5e8ab40f241a2ca94905849798f515492d8.png?mw=600">';
}else if (blacklistName === 'liz'){
  userChoose='<img src="https://tv-fanatic-res.cloudinary.com/iu/s--siWXsi6Z--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1611960133/the-hunt-for-liz-tall-the-blacklist-s8e4.jpg">';
}

var imagesNumber= prompt('How many image do you want ?');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}


}
showImages()