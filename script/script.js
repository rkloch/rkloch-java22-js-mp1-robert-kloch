
for(let i = 0;i<5;i++){
    let p = document.createElement('p');
    document.body.append(p);
    p.innerText = `Rad ${i+1}`;
    p.style.fontSize = `${10+(i*6)}px`;
    p.style.color = `hsla(249, 100%, 68%, 1)`;
    p.style.textAlign = "center";
    p.style.fontWeight = "bold";
    p.style.width = "1000px";
    p.style.background = `hsl(${136+(30*(i/2))}, 100%, 80%)`;

}

let div = document.createElement('div');
document.body.append(div);
div.style.border = '1px solid black';
div.style.display = 'flex';
div.style.justifyContent = 'space-around';
div.style.paddingTop = "3rem";
div.style.paddingBottom = "3rem";
//kunde inte bestämma mig med width så valde en statisk vilket kanske clashar med flexidén, men ser mer ut som bilden även ifall fönstret är större eller mindre.
div.style.width = "1000px";
let col1 = createColumn();
let col2 = createColumn();
let col3 = createColumn();

for(let i = 0;i<10;i++){
    let p = document.createElement('p');
    col1.appendChild(p);
    p.innerText = `${i}`;
    if(i%2==0){
        p.style.color = "white";
        if(i == 4){
            p.style.background = `hsla(230, 100%, 84%, 1)`;
        }else{
            p.style.background = "black";
        }
    }else{
        p.style.background = "white";
    }
    p.style.textAlign = "left";
    p.style.width = "3rem";
    p.style.margin = "0";
}

for(let i = 9;i>=0;i--){
    let p = document.createElement('p');
    col2.appendChild(p);
    p.innerText = `${i}`;
    if(i%2==0){
        p.style.color = "white";
        if(i == 8){
            p.style.background = `hsla(230, 100%, 84%, 1)`;
        }else{
            p.style.background = "black";
            p.style.color = "white";
        }
    }else{
        p.style.background = "white";
    }
    p.style.textAlign = "center";
    p.style.width = "3rem";
    p.style.margin = "0";
}

const sweNumArr = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

for(let i = 0;i<10;i++){
    let p = document.createElement('p');
    col3.appendChild(p);
    p.innerText = sweNumArr[i];
    if(i%2==1){
        if(i == 5){
            p.style.background = `hsla(230, 100%, 84%, 1)`;
        }else{
            p.style.background = "white";
        }
    }else{
        p.style.background = "black";
            p.style.color = "white";
    }
    p.style.textAlign = "right";
    p.style.width = "3rem";
    p.style.margin = "0";
}

function createColumn(){
    let col = document.createElement('div');
    div.appendChild(col);
    col.style.padding = "0.5rem";
    col.style.background = `hsla(230, 100%, 84%, 1)`;
    return col;
}