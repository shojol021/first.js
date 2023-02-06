function prime(x){

    if(x==1){
        return false;
    }

    for (let i=2; i<x/2+1; i++){
        
        if(x%i==0){
            return false;
        }
    }

    return true;
      
}
const y = prime(101);

if(y==true){
    console.log("the number is prime");
}
else{
    console.log("the number is not prime");
}