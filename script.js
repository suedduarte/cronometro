window.onload = function(){
    //Executa um JS imediatamente após o carregamento de uma página.

    var seconds = 00;
    var tens = 00;

    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval; // associada a contagem de tempo.

    buttonStart.onclick = function (){
        clearInterval(Interval); //O método clearInterval() limpa o temporizador definido com o método setInterval().

        Interval = setInterval(startTimer, 10); //O método setInterval() chama a função em intervalos especificados (milissegundos).
    };

    buttonStop.onclick = function (){
        clearInterval(Interval);
    };

    buttonReset.onclick = function(){
        clearInterval(Interval)

        tens = "00";
        seconds = "00";

        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    };

    function startTimer(){
        tens ++ //Incremento.
        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){ 
            appendTens.innerHTML = tens 
        }

        if (tens > 99){
            console.log('seconds'); //ir pra casa dos segundos.
            seconds++; //incrementar
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0; //zerar os decimais.
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds //apenas aparecer a var dos segundos.
        }
    }
}