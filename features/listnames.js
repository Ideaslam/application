var names =[
'islam',
'mohamed',
'hassan'

]


ShowNames();

function ShowNames(){

    var  row='<tr><td>LIST OF NAMES </td></tr>';
    for(let i =0 ; i < names.length; i++){
          row+= `  <tr>
        <td>${names[i]}</td>
    </tr>` ; 


    }

    document.getElementById('list-names').innerHTML = row;
 
}