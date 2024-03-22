

function factotial(n){
    if(n ==1){
        return 1
    }
    else{
        return n *factotial(n-1)
    }
}
console.log(factotial(10))