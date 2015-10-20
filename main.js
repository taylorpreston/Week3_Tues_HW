

var allPrices = items.map(function(items){
  return items.price;
});


var total = allPrices.reduce(function(total, current){
  return total+current
});


console.log(total/allPrices.length);


var midPrice = items.filter(function(items){
  return ((items.price >= 14.00 && items.price <= 18.00)&& items.currency_code === 'USD')
});

console.log(midPrice);

var gbp = items.filter(function(money){
  return (money.currency_code=="GBP");
});

num3= gbp[0].title +" costs £"+ gbp[0].price;

console.log(num3)

var wood = items.filter(function(item){
  return item.materials.indexOf('wood') != -1;
});

wood.forEach(function(name){
  console.log (name.title) + " is made of wood.";
})


var materials = items.filter(function(item){
  if (item.materials.length >= 8) return item.title
})

materials.forEach(function(name){
console.log(name.title + " is made of " + name.materials.length + " materials." + name.materials);
});


var madeBy = items.filter(function(item){
  return item.who_made === "i_did"
})

console.log(madeBy.length + " were made by their sellers.")
