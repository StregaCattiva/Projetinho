    function sim() {
    	 if(contador == 0)
        alert("Parabens você acertou de primeira! :)");
       else 
        alert("Você precisou de "+(contador+1) +" tentativas, mas no final acertou!");

        // redireciona para um URL após clicar no SIM
        location.href = "https://api.whatsapp.com/send?phone=5511972281325&text=Aceito%20ser%20seu%20namorado/duo%20oficial%20e%20prometo%20cumprir%20todas%20as%20responsabilidades%20do%20cargo,%20como%20dividir%20a%20pipoca%20no%20cinema,%20ser%20seu%20parceiro%20de%20maratona%20de%20séries%20e%20até%20mesmo%20fingir%20interesse%20nos%20seus%20hobbies%20mais%20estranhos.%20Prometo%20te%20contar%20todas%20as%20fofocas%20que%20eu%20souber%20(mesmo%20você%20não%20conhecendo%20ninguém)%20e,%20é%20claro,%20te%20carregar%20em%20todos%20os%20jogos,%20mesmo%20que%20seja%20para%20a%20derrota%20no%20caso%20do%20lol.%20Continuarei%20te%20fazendo%20feliz.Ass:%20Jean.";
    }
    function	nao(btn){
    	if(btn.textContent!="NÃO")
    		sim();

    	desvia(btn);
    }
    function desvia(btn) {
    	if(contador	>= 5){
    		setTimeout(()=>{btn.textContent = "CLARO QUE SIM";},100);
    		return;
    	}
        // btn declarado na função
    	  contador	++;
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }

    let contador = 0;