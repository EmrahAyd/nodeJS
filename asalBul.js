


function low(x,y) {
     for(let i = x; i<y ;i++){
         for(let j=2;j<=i;j++){
             if(i%j == 0){
            break;
                }
                else{
                    
                    console.log(i)
                }
                break;
            }
        }
    }
const degeri = process.argv.slice(2)

low(degeri[0] *1, degeri[1]* 1);