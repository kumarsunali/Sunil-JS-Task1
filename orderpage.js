var getUsername = localStorage.getItem('userName');
if (!getUsername) {
    alert('Please login');
    window.location.href = "./index.html";
}

var products = [];

var getLocalStorageProducts = localStorage.getItem('products');

if (getLocalStorageProducts) {

    console.log('hi');

    localStorage.setItem('products', getLocalStorageProducts);

    console.log(getLocalStorageProducts);

    var displayProducts = JSON.parse(getLocalStorageProducts);
    if (displayProducts != null) {
        products = displayProducts;
        for (var i = 0; i < displayProducts.length; i++) {
            loadProductToTable(displayProducts[i]);
        }
    }

}

window.onunload = function() {
    debugger
    console.log('refreshed');
    var getLocalStorageProducts = localStorage.getItem('products');
    console.log(getLocalStorageProducts);
    localStorage.setItem("products", getLocalStorageProducts);
    products = getLocalStorageProducts;
};

function enterproduct() {
    // debugger
    console.log(products);
    var pname = document.getElementById("product_name").value;
    var pcost = document.getElementById("product_cost").value;
  //   var getProducts = localStorage.getItem('products');
  //    var getitems=JSON.parse(getProducts);
  // // console.log(getitems[0]);
  //   for (var i=0;i<=getitems.length;i++) {
  //        if (getitems[i].productName=="apple") {
  //           console.log("apple is alreaday in database")
  //        }
  //        else{
  //           console.log("product is new");
  //        }
  //   }
    if (pname != "" && pcost !="") {

        var getproduct = {
            productName: pname,
            productPrice: pcost,
            productCount: 1,
            id: Math.floor(100000 + Math.random() * 900000)
        };

        products.push(getproduct);
        console.log(products);

        localStorage.setItem("products", JSON.stringify(products));

        console.log(localStorage.getItem('products'));

        loadProductToTable(getproduct);

    } else {
        alert("Enter the data");
    }
}

function loadProductToTable(getproduct) {
    debugger
    var table = document.getElementById("productsTable");
    console.log(table);
    var row = table.insertRow(-1);
    console.log(row);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var productId = getproduct.id;
    cell0.innerHTML = productId;
    cell1.innerHTML = getproduct.productName;
    cell2.innerHTML = getproduct.productCount;
    cell3.innerHTML = getproduct.productPrice;
    cell4.innerHTML = '<button onclick="SomeDeleteRowFunction(' + productId + ')">Delete</button><button onclick="editProduct(' + productId + ')">Edit</button>';
    document.getElementById("product_name").value = '';
    document.getElementById("product_cost").value = '';
}

function SomeDeleteRowFunction(id) {
     // debugger
    var td = event.target.parentNode;
    console.log(td);
    var tr = td.parentNode;
    console.log(tr);
    var getAllProducts = localStorage.getItem('products');
    console.log(getAllProducts);
    productObjects = JSON.parse(getAllProducts);
    for (var i = 0; i < productObjects.length; i++) {
        if (productObjects[i].id == id) {
            productObjects.splice(i, 1);
        }
    }
    console.log(productObjects);
    localStorage.setItem("products", JSON.stringify(productObjects));
    tr.parentNode.removeChild(tr);

}

function editProduct(id) {
    // debugger
    var updateButton = document.getElementById("update_button");

    var createButton = document.getElementById("Submit_button");

    var getAllProducts = localStorage.getItem('products');

    jsonProducts = JSON.parse(getAllProducts);

    var selectedProduct = search(id, jsonProducts);

    document.getElementById("product_name").value = selectedProduct.productName;
    document.getElementById("product_cost").value = selectedProduct.productPrice;
    document.getElementById("productId").value = id;

    updateButton.style.display = "block";
    createButton.style.display = "none";
}

function updateProduct() {
    // debugger;
    var pname = document.getElementById("product_name").value;
    var pcost = document.getElementById("product_cost").value;
    var productId = document.getElementById("productId").value;

    var getAllProducts = localStorage.getItem('products');

    jsonProducts = JSON.parse(getAllProducts);

    if (pname != "" && pcost != "") {
        for (var i = 0; i < jsonProducts.length; i++) {
            if (jsonProducts[i].id == productId) {
                selectedProduct = jsonProducts[i];
            }
        }

        selectedProduct.productName = pname;
        selectedProduct.productPrice = pcost;

        var getAllProducts = localStorage.getItem('products');
        console.log(getAllProducts);
        toDoObjects = JSON.parse(getAllProducts);
        for (var i = 0; i < toDoObjects.length; i++) {
            // console.log(toDoObjects[i]);
            if (toDoObjects[i].id == productId) {
                toDoObjects.splice(i, 1);
            }
        }
        toDoObjects.push(selectedProduct);
        localStorage.setItem("products", JSON.stringify(toDoObjects));

        var updateButton = document.getElementById("update_button");

        var createButton = document.getElementById("Submit_button");

        updateButton.style.display = "none";
        createButton.style.display = "block";

        updateRecords();
    }
}


function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id == nameKey) {
            return myArray[i];
        }
    }
}

function updateRecords() {
    // debugger
    var table = document.getElementById("productsTable");
    for (var i = table.rows.length - 1; i > 0; i--) {
         table.deleteRow(i);
     }

    var getLocalStorageProducts = localStorage.getItem('products');

    var displayProducts = JSON.parse(getLocalStorageProducts);
    if (displayProducts != null) {
        products = displayProducts;
        for (var i = 0; i < displayProducts.length; i++) {
            loadProductToTable(displayProducts[i]);
        }
    }
}


function deletelocal() {
    // debugger
   window.localStorage.removeItem("userName");
    window.location.href = "./index.html";
}