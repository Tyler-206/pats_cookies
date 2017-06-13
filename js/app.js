'use strict';

var store1 = {
  name: 'First And Pike',
  cookieAverage: 6.3,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(23,65);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

var store2 = {
  name: 'SeaTac Airport',
  cookieAverage: 1.2,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(3,24);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

var store3 = {
  name: 'Seattle Center',
  cookieAverage: 3.7,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(11,38);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

var store4 = {
  name: 'Capital Hill',
  cookieAverage: 2.3,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(20,38);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

var store5 = {
  name: 'Alki',
  cookieAverage: 4.6,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(2,16);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

var stores = [store1,store2,store3,store4,store5];
console.log(stores);

function randomCustomers (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var parentElement = document.getElementById('sales');

var article = document.createElement('article');
parentElement.append(article);

//Store 1
var h2 = document.createElement('h2');
h2.textContent = store1.name;
article.appendChild(h2);

var p = document.createElement('p');
p.textContent = 'Sales by hour for the ' + store1.name + ' store.';
article.appendChild(p);

var ul = document.createElement('ul');
article.appendChild(ul);

var totalCookies = 0;

for (var i = 0; i < store1.hoursOpen.length; i++) {
  var li = document.createElement ('li');
  li.textContent = store1.hoursOpen [i] + ': ' + store1.cookiesSold() + ' cookies';
  (totalCookies += store1.cookiesSold());
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalCookies + ' cookies';

//Store 2
h2 = document.createElement('h2');
h2.textContent = store2.name;
article.appendChild(h2);

p = document.createElement('p');
p.textContent = 'Sales by hour for the ' + store2.name + ' store.';
article.appendChild(p);

ul = document.createElement('ul');
article.appendChild(ul);

totalCookies = 0;

for (var x = 0; x < store1.hoursOpen.length; x++) {
  li = document.createElement ('li');
  li.textContent = store2.hoursOpen [x] + ': ' + store2.cookiesSold() + ' cookies';
  (totalCookies += store2.cookiesSold());
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalCookies + ' cookies';

//Store 3
h2 = document.createElement('h2');
h2.textContent = store3.name;
article.appendChild(h2);

p = document.createElement('p');
p.textContent = 'Sales by hour for the ' + store3.name + ' store.';
article.appendChild(p);

ul = document.createElement('ul');
article.appendChild(ul);

totalCookies = 0;

for (var j = 0; j < store3.hoursOpen.length; j++) {
  li = document.createElement ('li');
  li.textContent = store3.hoursOpen [j] + ': ' + store3.cookiesSold() + ' cookies';
  (totalCookies += store3.cookiesSold());
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalCookies + ' cookies';

//Store 4
h2 = document.createElement('h2');
h2.textContent = store4.name;
article.appendChild(h2);

p = document.createElement('p');
p.textContent = 'Sales by hour for the ' + store4.name + ' store.';
article.appendChild(p);

ul = document.createElement('ul');
article.appendChild(ul);

totalCookies = 0;

for (var u = 0; u < store4.hoursOpen.length; u++) {
  li = document.createElement ('li');
  li.textContent = store4.hoursOpen [u] + ': ' + store4.cookiesSold() + ' cookies';
  (totalCookies += store4.cookiesSold());
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalCookies + ' cookies';

//Store 5
h2 = document.createElement('h2');
h2.textContent = store5.name;
article.appendChild(h2);

p = document.createElement('p');
p.textContent = 'Sales by hour for the ' + store5.name + ' store.';
article.appendChild(p);

ul = document.createElement('ul');
article.appendChild(ul);

totalCookies = 0;

for (var q = 0; q < store5.hoursOpen.length; q++) {
  li = document.createElement ('li');
  li.textContent = store5.hoursOpen [q] + ': ' + store5.cookiesSold() + ' cookies';
  (totalCookies += store5.cookiesSold());
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalCookies + ' cookies';

//salmon image
var img = document.createElement('img');
img.setAttribute('src', 'images/salmon.png');
img.setAttribute('alt', 'cute picture of a salmon');
article.appendChild(img);
