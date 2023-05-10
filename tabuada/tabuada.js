function clicar(){
    var num_js = document.getElementById("num")
    if (num_js.value.trim() === '') {
        window.alert('Digite um número!');
    }
    else if (num_js.value>=0){
        var caixa_js = document.getElementById("caixa")
        caixa_js.style.height = "350px"
        var resultado_js = document.querySelector("div#resultado")
        resultado_js.innerHTML = `Tabuada do número ${num_js.value}: <br> <br>`
        for(c=1;c<11;c++){
            resultado_js.innerHTML += `${num_js.value} x ${c} = ${num_js.value*c} <br>`
        }
    }
    else{
        window.alert("ERRO! Selecione um número maior ou igual a 0")

    }
}

