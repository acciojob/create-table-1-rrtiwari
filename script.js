function insert_Row() { 
  let newrow=document.createElement("tr");
   newrow.innerHTML=`<td>New Cell1</td><td>New Cell2</td>`;
   let table=document.getElementById("sampleTable");
  table.insertBefore(newrow, table.firstChild);
}
