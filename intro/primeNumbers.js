// 1 e ve kendisine bölünebilen ve 1 den büyük pozitif sayılar

const args = process.argv.slice(2);
function showPrimeNumber(lowNumber,highNumber){
    for(let i = lowNumber; i<= highNumber; i++){

        let isPrime = true;

        for(let j = 2;j<=i;j++){
            if(i % j == 0 && j !== i){
                isPrime = false;

            }

        }
        if(isPrime){
            console.log(i);
        }

    
    }
    

}

showPrimeNumber(args[0] *1 ,args[1] *1 );

