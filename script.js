function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('res').value = ''
        }
    
        else if(valor === '+' || valor === '-' || valor === '*'  || valor === '/' || valor === '.' ){
        if(document.getElementById('res').value != ''){
            document.getElementById('res').value += valor
            }
        }
        else if(valor === '='){
            let resultado = eval(document.getElementById('res').value)
            document.getElementById('res').value = resultado
        }
    }

    else if(tipo === 'numero'){
        document.getElementById('res').value += valor
    }
}