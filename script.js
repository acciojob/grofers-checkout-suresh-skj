const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");

  
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

 
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

 
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.id = "totalRow"; 

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2"); // Make it span across both columns
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";
  totalCell.textContent = `Total Price: Rs ${total}`;


  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

