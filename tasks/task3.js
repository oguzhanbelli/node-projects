const PI = 3.14;


function circleArea(radius){

    console.log("Yarı Çapı "+radius +" olan dairenin alanı:"+PI*radius**2);
  


}
function circleCircumference(radius){

    console.log("Yarı Çapı "+radius +" Dairenin çevresi:"+2*PI*radius);
  


}
module.exports ={
    circleCircumference,
    circleArea
}