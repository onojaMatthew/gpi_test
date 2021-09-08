
let loading = false;

function fetchInventory() {
  loading = true
  fetch("http://ec2-18-119-105-128.us-east-2.compute.amazonaws.com:4800/api/v1/inventory/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ACCEPT: "application/json"
    }
  })
    .then(response => response.json())
    .then(resp => {
      loading = false;
      console.log(resp);
      if (resp && resp.results) {
        displayData(resp.results);
      }
    })
    .catch(err => { console.log(err) });
}

fetchInventory();


function displayData(data) {
  const tbody = document.querySelector("tbody");

  const date = new Date();
  data.map((d, i) => {
    let tr = document.createElement("tr");

    // Creating the table cells
    const cell0 = document.createElement("td");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td")
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td")
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td")

    cell1.style.padding = "20px";
    cell2.style.padding = "20px";
    cell3.style.padding = "20px";
    cell4.style.padding = "20px";
    cell5.style.padding = "20px"

    // setting values for the table cells
    const text0 = document.createTextNode(`${i+1}`);
    const text1 = document.createTextNode(d.item);
    const text2 = document.createTextNode(d.price);
    const text3 = document.createTextNode(d.qty_sold);
    const text4 = document.createTextNode(d.qty_in_stock);
    const text5 = document.createTextNode(d.total_sales);
    const text6 = document.createTextNode(d.last_updated.slice(0,10));

    // 
    cell0.appendChild(text0);
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    cell4.appendChild(text4);
    cell5.appendChild(text5);
    cell6.appendChild(text6);

    tr.appendChild(cell1);
    tr.appendChild(cell2)
    tr.appendChild(cell3)
    tr.appendChild(cell4)
    tr.appendChild(cell5)
    tr.appendChild(cell6)

    

    tbody.appendChild(tr);
  });
  
  
}