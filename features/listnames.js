var persons=[
    {name:"islam" , age:"26"},
    {name:"mohammed" , age:"23"},
    {name:"hassan" , age:"56"} 
]


ShowNames();

function ShowNames(){

    var  row='<tr><td>LIST OF NAMES </td></tr>';
       row='<tr><td> NAMES </td><td> AGES </td></tr>';


    
    console.log(persons  );
    for(let i =0 ; i < persons.length; i++){
        console.log(persons[i] );
          row+= `  <tr>
        <td>${persons[i].name}</td>
        <td>${persons[i].age}</td>
    </tr>` ; 


    }

    document.getElementById('list-names').innerHTML = row;
 
}