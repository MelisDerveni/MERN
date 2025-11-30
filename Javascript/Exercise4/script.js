for(let i= 0; i<16; i++){
    
    if(i%2==0){
        document.getElementById("result").innerText += (i + " is even" + "\n");
    }
    else{
       document.getElementById("result").innerText += (i + " is odd" + "\n");
    }
    
}