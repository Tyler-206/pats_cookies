'use strict';

var store1 = {
  name: 'firstAndPike',
  cookieAverage: 6.3,
  hoursOpen: ['8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],
  getCustomers: function(){
    return randomCustomers(23,65);
  },
  cookiesSold: function(){
    return Math.round(this.getCustomers() * this.cookieAverage);
  },
};

console.log(store1.getCustomers());
console.log(store1.cookiesSold());

function randomCustomers (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var parentElement = document.getElementById('sales');

var article = document.createElement('article');
parentElement.append(article);

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
  li.textContent = store1.hoursOpen [i] + ': ' + store1.cookiesSold();
  (totalCookies += store1.cookiesSold());
  ul.appendChild(li);
}

li.textContent = 'Total: ' + totalCookies;

var img = document.createElement('img');
img.setAttribute('src', 'images/salmon.png');
img.setAttribute('alt', 'cute picture of a salmon');
article.appendChild(img);
