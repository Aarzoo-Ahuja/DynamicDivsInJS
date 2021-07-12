function makeMatrix(){
  
    var r=document.getElementById('row').value;
    var c=document.getElementById('col').value;

    for(let i=0;i<r;i++)
    {
        let rowDiv=document.createElement('div');
        rowDiv.className="rw";
        for(let j=0;j<c;j++)
        {
            let colDiv=document.createElement('div');
            colDiv.className="cl";
            rowDiv.appendChild(colDiv);
        }
        document.body.appendChild(rowDiv);
    }
    return false;
}

function changeColor(){
    var r=document.getElementById('row').value;
    var c=document.getElementById('col').value;
    var color=document.getElementById('color').value;
    var access=document.getElementsByClassName("rw")[r-1].children.item(c-1);
    document.write(access);
    access.style.backgroundColor=color;
}

function insertDivision(){
    document.write("abdc");
    /*div2=document.createElement('div');
    div2.className="insertDivChild";
    div2.innerHTML="THIS IS DIV 2";*/

    var fisrtDiv=document.getElementById("div1");
    firstDiv.insertAdjacentHTML('afterend','<div className="insertDivChild">"THIS IS DIV 2"</div>');
    
    /*let button = document.getElementById("insertButton");
    button.parentNode.removeChild(button);*/
}

   
    