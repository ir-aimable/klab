function price(){

const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];
let arr = [];
let arr2 = [];
// returning the cheap and expensive products
for(const prop in item){
  if(item[prop].price < 100){
    arr = item[prop];
    return arr;
  }else if(item[prop].price > 500){
    arr2 = item[prop];
    return arr2;
  }
}

// returning the sum of prices, sum of all prices
const Values = Object.values(item);
const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum);

console.log(arr);
  
}
price();
