 let valores = [5,4,6,3,4,7,8]
 valores.sort()
/*console.log(`${valores}`)
console.log(`${valores[1]}`)
valores.sort()
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
    
}
console.log(` o vector tem ${valores.length} elementos`)
*/

for(let pos in valores){
    console.log(`a posicao ${pos} tem ${valores[pos]}`)
}