
function Phone (model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

function getPhones(amount) {
  const newPhones = [];

  for(let i = 0; i < amount; i++) {
    newPhones.push(new Phone (
      `Model ${i}`, 
      'Panasonic', 
      getRandomInt(5000, 50000),
      'black',
      Math.random() >= 0.5
    ))
  }

  return newPhones;
}

const phones = getPhones(73);

console.table(phones);


//1-------------------------------------

let j=0;
const inStockValue = phones.forEach(function (phone){
  if(phone.inStock === true){
    j++
  } else {};
});
console.log(j);

//2-------------------------------------

const inStockPhones = phones.filter(function (phone){
  return phone.inStock;
});

//3-------------------------------------

const inStockMapWork = inStockPhones.map(function (phone){
  if(phone.price >= 30000){
     phone.price = Math.round(phone.price*0.7)
     return phone;
  };
})

const saleInStock = inStockMapWork.filter(function (phone){
  return phone !== undefined;
})


// advanced ----------------------------

const inStockLang = phones.map(function (obj){
  if(obj.inStock === true){
    obj.inStock = 'в наличии';
  } else { obj.inStock = 'нет наличии';
  }
  return obj;
})

inStockLang.forEach(function (phone){
  console.log(`${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} грн сейчас ${phone.inStock}`)
})

//-------------------------------------

const sortFromHighPrice = phones.sort(function (a,b){
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
});

//-----------------------------------

const brands = ['Apple', 'Panasonic', 'Huawei', 'Salami', 'Google', 'Samsung', 'Djigit', 'Hong Wei Lang Dang Sun'];
const color = ['Black', 'White', 'Red', 'Silver', 'DogerBlue', 'Purple', 'Gold', 'Orange']
const model = ['one', 'A', 'X', 'Venum', 'GamePhone', 'CameraMan', 'Symbian', 'Model']


const randomBrand = function (){
  let i = getRandomInt(0, 8);
  return brands[i];
}

const randomColor = function (){
  let i = getRandomInt(0, 8);
  return color[i];
}

const randomModel = function (){
  let i = getRandomInt(0, 8);
  return model[i];
}

function getPhonesRandom(amount) {
  const newPhones1 = [];

  for(let i = 0; i < amount; i++) {
    newPhones1.push(new Phone (
      `${randomModel()} ${getRandomInt(1, 11)}`, 
      randomBrand(), 
      getRandomInt(5000, 50000),
      randomColor(),
      Math.random() >= 0.5
    ))
  }

  return newPhones1;
}

const phonesRandom = getPhonesRandom(15);

console.table(phonesRandom);