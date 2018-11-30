// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K, L) {
    
    function getSum(res, num){
        return res + num;
    }
    
    let finalResult = -1;
    
    for (let i = 0; i+K<A.length+1;i++){
            
        let arrayK = A.slice(i,i+K);
        let resultK =  arrayK.reduce(getSum);
        
        let leftArray = A.slice(0,i);
        let rightArray = A.slice(i+K+1,A.length);
        
        
        if(leftArray.length >=L) {
            for(let j=0; (j + L) < leftArray.length + 1; j++){
          
                let arrayL  = leftArray.slice(j,j+L);
                let resultL = arrayL.reduce(getSum);
                
                if(finalResult < (resultK + resultL)){
                    finalResult = (resultK + resultL);
                }
            }
        }
        
        if(rightArray.length >=L){
            for(let j=0;j+L<rightArray.length+1;j++){
                
                let arrayL  = rightArray.slice(j,j+L);
                let resultL = arrayL.reduce(getSum);
                
                if(finalResult < (resultK + resultL)){
                    finalResult = (resultK + resultL);
                }
            }
        }
    }
    
    return finalResult; 
    
    }