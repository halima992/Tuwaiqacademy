function myFunction() {
  document.getElementsByTagName("h1")[0].remove();
  document.getElementsByTagName("p")[0].remove();
  document.getElementsByTagName("a")[0].remove();
  var image = document.getElementById('myImg');
  image.style.width = '60%';
  image.style.height = '70%';

}