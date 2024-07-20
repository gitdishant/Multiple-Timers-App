function addId() {
  const bset = document.getElementById("list");
  bset.id = "active";
}


function myFunction() {
  // Create an "li" node:
  const node = document.createElement("li");
  node.id = "li_id";

  // Create a text node:
  //const textnode = document.createTextNode("Water");
  let newDiv = document.createElement("div");
  newDiv.className = "set_timer";

  let newH4 = document.createElement("h4");
  newH4.innerHTML = "Time Left :";
  let newH2 = document.createElement("h2");
  newH2.id = "newh2"
  newH2.innerHTML = "hh : mm : ss";
  let newbtn = document.createElement("button");
  newbtn.id = "delete_btn";
  newbtn.innerHTML = "Delete";

  newDiv.appendChild(newH4);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newbtn);

  newbtn.onclick = () => {
    let div_btn = document.getElementById("li_id");
    div_btn.remove("li_id");
  };


  let inputValue = document.getElementsByClassName('time_hh').value;
    let inputValue1 = document.getElementsByClassName('time_mm').value;
    let inputValue2 = document.getElementsByClassName('time_ss').value;
    
    document.getElementById("hewh2").innerHTML = (inputValue  +":"+ inputValue1+":"+inputValue2)

  // Append the text node to the "li" node:
  node.appendChild(newDiv);

  // Append the "li" node to the list:
  document.getElementById("dynamic_list").appendChild(node);
}



