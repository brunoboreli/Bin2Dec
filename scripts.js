

//Havia criado uma lógica usando botão, mas decidi deixar com enter mesmo
/*const button = document.getElementById('convertButton');
button.onclick = answerChange; */

var monitorInput = document.getElementById('entry');
monitorInput.addEventListener("keydown",function(e){
    if(e.code == "Enter"){
        answerChange();
    }
})

function answerChange(){

    var getInput = document.getElementById('entry').value;
    const res = document.getElementById('result');

    //Binary conversion algorithm
    let isBin = true;
    var arr = [...getInput].map(Number);

    var ans = 0;
    for(let i=0;i<arr.length;i++){
        var n = arr[i];

        if(n != 1 && n != 0){
            isBin = false;
        }
        else{
            ans += n*Math.pow(2,arr.length-(i+1))//n*(arr.length-(i+1));
        }
    }

    if(isBin == false){
        res.innerHTML = "<h3 id='resultn2'>This is <span class='redlight'>not</span> a binary number! <br> (<span class='redlight'>Only 0's and 1's</span>)</h3>";
        document.getElementById('frase').textContent = "";
    
    }
    else{
        document.getElementById('frase').textContent = "Here is your conversion!!";
        res.innerHTML = `<h3 id='resultn'> ${ans} </h3>`
    }
    
}