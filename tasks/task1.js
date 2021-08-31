//  Dairenin Alanı = π x r2 şeklinde hesaplanır.


const args = process.argv.slice(2);

const PI = 3.14;


function circleAreaCalculator(radius){

    console.log("Yarı Çapı "+radius +" olan dairenin alanı:"+PI*radius**2);
  


}

circleAreaCalculator(args[0]*1);