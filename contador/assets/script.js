let h1=document.createElement('h1');
h1.innerText='CONTADOR';
h1.class='titulo';

let areaCentral=document.createElement('center');

let btnMenos=document.createElement('button');
btnMenos.innerText='-';
btnMenos.className='botao';
btnMenos.addEventListener('click',()=>{
    let valor=parseInt(mostrador.innerText);

    valor--;
    valor=limPositivo.checked && valor<0?0:valor;
    valor=maxDez.checked && valor<-10?-10:valor;

    mostrador.className=valor<0?'negativo':valor>0?'positivo':'neutro';
    mostrador.innerText=valor;
});

let btnMais=document.createElement('button');
btnMais.innerText='+';
btnMais.className='botao';
btnMais.addEventListener('mousedown',()=>{
    let valor=parseInt(mostrador.innerText);
    valor++;
    valor=maxDez.checked && valor>10?10:valor;

    mostrador.className=valor<0?'negativo':valor>0?'positivo':'neutro';
    mostrador.innerText=valor;
});


let mostrador=document.createElement('span');
mostrador.id='mostrador';
mostrador.className='neutro';
mostrador.innerText='0';

let maxDez=document.createElement('input');
maxDez.type='checkbox';
maxDez.addEventListener('change',()=>{
    let valor=parseInt(mostrador.innerText);

    if(maxDez.checked && valor>10){
        valor=10;
        mostrador.className='positivo';
    }else if(maxDez.checked && valor<-10){
        valor=-10;
        mostrador.className='negativo';
    }

    mostrador.innerText=valor;
});

let rtlMaxDez=document.createElement('label');
rtlMaxDez.innerText='máximo 10 (+-)';

let limPositivo=document.createElement('input');
limPositivo.type='checkbox';
limPositivo.addEventListener('change',()=>{
    let valor=parseInt(mostrador.innerText);

    valor=limPositivo.checked && valor<0?0:valor;
    mostrador.innerText=valor;
    mostrador.className='neutro';
});

let rtlLimPositivo=document.createElement('label');
rtlLimPositivo.innerText='somente positivos';

let divControles=document.createElement('div');
divControles.className='controles';

divControles.append(maxDez);
divControles.append(rtlMaxDez);
divControles.append(document.createElement('br'));
divControles.append(limPositivo);
divControles.append(rtlLimPositivo);


areaCentral.append(h1);
areaCentral.append(divControles);
areaCentral.append(btnMenos);
areaCentral.append(mostrador);
areaCentral.append(btnMais);

document.body.append(areaCentral);