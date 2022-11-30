const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000} ];

// product that will be bought when you don't have much money
function getSmallProduct() {
 let price=1000000;
 let name="";
  for (let i = 0; i < item.length; i++) {
    if (item[i].price <= price) {
        price=item[i].price;
        name=item[i].name;
    }
  }
  console.log("Name: "+name);
  console.log("Price: "+price);
  
  }

/*
the full price of all product combined
*/

function getTotalPrice() {
 let total_price=0;
  for (let i = 0; i < item.length; i++) {
        total_price=Number(total_price)+Number(item[i].price);
  }
  console.log("Total product price: "+total_price);
  
  }
// the product that will be expensive in the array
  function getExpensiveProduct() {
 let price=0;
  for (let i = 0; i < item.length; i++) {
    if (item[i].price >= price) {
        price=item[i].price;
    }
  }
  console.log("Product name: "+name);
  console.log("Product Price: "+price);
  }

// the full price of all product combined and remove product that are under the 10 dollar
function getCompletePrice() {
 let total_price=0;
  for (let i = 0; i < item.length; i++) {
    if (item[i].price >= 10 ) {
        total_price=Number(total_price)+Number(item[i].price);
    }
  }
  console.log("Total price: "+total_price);
  
  }

  getSmallProduct();
  getExpensiveProduct();
  getTotalPrice();
  getCompletePrice();
