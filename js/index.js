// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const p = Number(price.innerHTML);
  const q = Number(quantity.value);
  const subTotal = p*q;
  const sT = product.querySelector('.subtotal span');
  sT.innerHTML = String(subTotal);
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const rows = document.getElementsByClassName("product");
  let total = 0;
  for(let row of rows) {
    total += updateSubtotal(row);
  }

  let totalText = document.querySelector("#total-value span");
  totalText.innerHTML = String(total);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  let parent = target.parentNode;
  parent.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.getElementById("input-name").value;
  const price = document.getElementById("input-price").value;
  let row = document.createElement("tr");
  row.setAttribute("class", "product");
  const rows = document.getElementsByClassName("product");
  const firstRow = rows[0];
  const tableBody = firstRow.parentNode;
  row.innerHTML = `<tr class="product"><td class="name"><span>${name}</span></td><td class="price">\$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button id="new-button" class="btn btn-remove">Remove</button></td></tr>`;
  tableBody.appendChild(row);
  let removeButtons = document.getElementsByClassName("btn-remove");
  console.log(removeButtons);
  let removeButton = removeButtons[removeButtons.length - 1];
  removeButton.addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove");
  for(let button of removeButtons) {
    button.addEventListener("click", removeProduct);
  }
  
  const createButton = document.getElementById("create");
  createButton.addEventListener("click", function() {
    createProduct();
    document.getElementById("input-name").value = "";
    document.getElementById("input-price").value = 0;
  });
});
