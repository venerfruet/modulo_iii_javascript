function compararNumeros(num1=0, num2=0){

    let soma=num1+num2;
    let saida;

    //são iguais?
    saida=`Os números ${num1} e ${num2}${num1!==num2 ? ' são diferentes':' são iguais'}.`;

    // soma é menor, maior ou igual a 10?
    saida=`${saida} Sua soma é ${soma}, que é ${soma===10 ? 'igual a' : soma<10 ? 'menor que' : 'maior que'} 10`;

    //é menor, maior ou igual a 20?
    saida=`${saida} e ${soma===20 ? 'igual a' : soma<20 ? 'menor que' : 'maior que'} 20.`
    
    console.log(saida);
    
}

compararNumeros(5,5);