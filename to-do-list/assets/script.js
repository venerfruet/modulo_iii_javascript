let areaCentral=document.createElement('center');

let areaLista=document.createElement('div');
areaLista.className='lista';

let titulo=document.createElement('h1');
titulo.innerText='TO-DO-LIST';

let rtlEntrada=document.createElement('label');
rtlEntrada.innerText='Entrada:';

let entrada=document.createElement('input');
entrada.type='text';
entrada.maxLength=15;

let btnEntrada=document.createElement('button');
btnEntrada.innerText='+';
btnEntrada.addEventListener('click',()=>{
    let registro=new Registro(entrada.value);
    areaLista.append(registro.obj);
    entrada.value='';
    entrada.focus();
});

areaCentral.append(titulo);
areaCentral.append(rtlEntrada);
areaCentral.append(entrada);
areaCentral.append(btnEntrada);
areaCentral.append(areaLista);

document.body.append(areaCentral);


//CLASSES E FUNÇÕES

class Registro{
    constructor(valor){
        let obj=document.createElement('div');
        obj.className='registro';

        let tique=document.createElement('input');
        tique.type='checkbox';
        tique.style.float='left';
        tique.addEventListener('change',()=>{
            reg.className=tique.checked ? 'registro tachado' : 'registro';
        })

        let reg=document.createElement('span');
        reg.innerText=valor;
        reg.className='registro';

        let btn=document.createElement('button');
        btn.innerText='-';
        btn.style.float='right';

        btn.addEventListener('click',()=>{
            obj.remove();
        });

        obj.append(tique);
        obj.append(reg);
        obj.append(btn);

        this.obj=obj;
    }
}
