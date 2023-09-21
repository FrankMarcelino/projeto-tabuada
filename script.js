function gerar() {
    let inum = document.getElementById('inum')
    let res = document.getElementById('ires')
    
    if (inum.value.length == 0){
        window.alert('Digite um número por favor!')
    } else {
        let numero = Number(inum.value)
        res.innerHTML = ''
        
        /*let contador =1
        while (contador <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            res.appendChild(item)
            contador++
        }*/
        for(let contador = 1; contador <= 10; contador++ ){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            res.appendChild(item) 
        }
    }


   
}