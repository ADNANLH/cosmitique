var validation = true
var g=0;

document.getElementById('btn').addEventListener('click',function(){
   
    document.getElementById('edit3').style.display="none" 
    //NOM
    var Nom = document.getElementById('Nom').value;
    var regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if(Nom === '' || Nom.length>30 || regex.test(Nom)  ) {
       document.getElementById('name').innerHTML = 'Nom is required.';
        document.getElementById('Nom').style.borderColor="red";
        validation = false
    }else{
       document.getElementById('name').innerHTML = '';
       document.getElementById('Nom').style.borderColor="#09c372";  
       validation = true
    }

    //prix
    var prix = document.getElementById('prix').value;
    var regex = /^\d+(,\d{1,2})?$/ig;
    if(prix === '') {
        document.getElementById('price').innerHTML = 'write something';
        document.getElementById('prix').style.borderColor="red";
        validation = false
    }else if (regex.test(prix)) {
        document.getElementById('price').innerHTML = '';
        document.getElementById('prix').style.borderColor="#09c372";
        validation = true
    } else {
        document.getElementById('price').innerHTML = 'the price none valid';
        document.getElementById('prix').style.borderColor="red";
        validation = false
    }

   g++;

   //PROMO
    if ( document.getElementById('oui').checked || document.getElementById('non').checked) {
        document.getElementById("promo").innerHTML = "";
        validation = true
    }else{
        document.getElementById("promo").innerHTML = "select something pls";
        validation = false
        
    }

   // marque


   var marque = document.getElementById("marque");
    if (marque.value === "") {
       document.getElementById("marque").style.border = "2px solid red";
       document.getElementById("marquepara").innerHTML = "select something.";
       validation = false
    } else {
       document.getElementById("marque").style.border = "2px solid #09C372";
       document.getElementById("marquepara").innerHTML = "";
       validation = true
    }

    // TYPE
    var type = document.getElementById("type");
    if (type.value === "") {
        document.getElementById("type").style.border = "2px solid red";
        document.getElementById("paratype").innerHTML = "You must select a Marque.";
        validation = false
    } else {
        document.getElementById("type").style.border = "2px solid #09C372";
        document.getElementById("paratype").innerHTML = "";
        validation = true
    }

  
  //add
  if(validation){

        var table = document.getElementById("table").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(table.length);
        newRow.setAttribute("id", `${g}`)
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = document.getElementById("Nom").value;
        
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = document.getElementById("marque").value;
        
        
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = document.getElementById("prix").value;
        
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = document.getElementById("date").value;
        
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = document.getElementById("type").value;
        
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = document.querySelector('input[name="radio"]:checked').value;
        
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button class="btn-danger" onclick="delet(${g})">supp..</button>
        <button class="btn-warning" onclick="edit(${g})">modif..</button>
        `;
        clear();      
        
    }
    })

function delet(g){
   document.getElementById(`${g}`).remove();
}
function edit(g){
    document.getElementById('btn').style.display="none"
    document.getElementById('edit3').style.display="block";
    
    var Nm=document.getElementById(`${g}`).cells[0].innerHTML;
    var mr=document.getElementById(`${g}`).cells[1].innerHTML;
    var pr= document.getElementById(`${g}`).cells[2].innerHTML;
    var dt=document.getElementById(`${g}`).cells[3].innerHTML;
    var typ=document.getElementById(`${g}`).cells[4].innerHTML;
    var prm=document.getElementById(`${g}`).cells[5].innerHTML;
    
    document.getElementById("Nom").value= Nm;
    document.getElementById("marque").value= mr;
    document.getElementById("prix").value=pr;
    document.getElementById("date").value= dt;
    document.getElementById("type").value= typ;
    document.getElementById("promo").value= prm;
    

    document.getElementById('edit3').onclick=function(){
        document.getElementById(`${g}`).cells[0].innerHTML=document.getElementById("Nom").value;
        document.getElementById(`${g}`).cells[1].innerHTML=document.getElementById("marque").value;
        document.getElementById(`${g}`).cells[2].innerHTML=document.getElementById("prix").value;
        document.getElementById(`${g}`).cells[3].innerHTML=document.getElementById("date").value;
        document.getElementById(`${g}`).cells[4].innerHTML=document.getElementById("type").value;
        document.getElementById(`${g}`).cells[5].innerHTML=document.getElementById("promo").checked;
        
        clear();
        document.getElementById('edit3').style.display="none"  
        document.getElementById('btn').style.display="block"
   }
   
}

function clear(){
   Nom.value='';
   marque.value='';
   prix.value='';
   date.value='';
   type.value='';
   
  }     
