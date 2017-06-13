'use strict';

function Store (name, cookieAverage, hoursOpen, minCookie, maxCookie) {
  // this is a capital K kitten becuase its a construction function
  this.name = name;
  this.cookieAverage = cookieAverage;
  this.hoursOpen = hoursOpen;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
};

Store.prototype.getCustomers = function(){
  return randomCustomers(this.minCookie,this.maxCookie);
};

Store.prototype.cookiesSold = function(){
  return Math.round(this.getCustomers() * this.cookieAverage);
};

var store1 = new Store ('First And Pike', 6.3,['6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],23,65);
console.log(store1);
render (store1);

var store2 = new Store ('SeaTac Airport', 1.2,['6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],3,24);
console.log(store2);
render (store2);

var store3 = new Store ('Seattle Center', 3.7,['6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],11,38);
console.log(store3);
render (store3);

var store4 = new Store ('Capital Hill', 2.3,['6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],20,38);
console.log(store4);
render (store4);

var store5 = new Store ('Alki', 4.6,['6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],2,16);
console.log(store5);
render (store5);


function randomCustomers (minCookie,maxCookie) {
  return Math.floor(Math.random() * (maxCookie - minCookie + 1) + minCookie);
};

function render (Store) {
  var parentElement = document.getElementById('sales');

  var article = document.createElement('article');
  parentElement.append(article);

  var h2 = document.createElement('h2');
  h2.textContent = 'Pats Cookies Sales';
  article.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = 'Sales by hour for the each store:';
  article.appendChild(p);

  var ul = document.createElement('ul');
  article.appendChild(ul);

  var totalCookies = 0;

  for (var i = 0; i < Store.hoursOpen.length; i++) {
    var li = document.createElement ('li');
    li.textContent = Store.hoursOpen [i] + ': ' + Store.cookiesSold() + ' cookies';
    (totalCookies += Store.cookiesSold());
    ul.appendChild(li);
  }
  li.textContent = 'Total: ' + totalCookies + ' cookies';

};

// //salmon image
// var img = document.createElement('img');
// img.setAttribute('src', 'images/salmon.png');
// img.setAttribute('alt', 'cute picture of a salmon');
// article.appendChild(img);

// var parentTable = document.getElementById('table1');
//
// var table = document.createElement('table');
//
// var row1 = document.createElement('tr');
// var row2 = document.createElement('tr');
// var row3 = document.createElement('tr');
// var row4 = document.createElement('tr');
// var row5 = document.createElement('tr');
// var row6 = document.createElement('tr');
// var row7 = document.createElement('tr');
// var row8 = document.createElement('tr');
// var row9 = document.createElement('tr');
// var row10 = document.createElement('tr');
// var row11 = document.createElement('tr');
// var row12 = document.createElement('tr');
// var row13 = document.createElement('tr');
// var row14 = document.createElement('tr');
// var row15 = document.createElement('tr');
//
// var th1 = document.createElement('th');
// th1.textContent = 'Time of day';
// var th2 = document.createElement('th');
// th1.textContent = store1.name;
// var th3 = document.createElement('th');
// th2.textContent = store2.name;
// var th4 = document.createElement('th');
// th3.textContent = store3.name;
// var th5 = document.createElement('th');
// th4.textContent = store4.name;
// var th6 = document.createElement('th');
// th5.textContent = store5.name;
//
// for (var c = 0; c < store1.hoursOpen.length; c++) {
//   var td = document.createElement ('td');
//   td.textContent = store1.hoursOpen [c] ;
// };
// row1.appendChild(th1);
// row1.appendChild(th2);
// row1.appendChild(th3);
// row1.appendChild(th4);
// row1.appendChild(th5);
// row1.appendChild(th6);
//
// row2.appendChild(td);
//
// table.appendChild(row1);
// table.appendChild(row2);
//
// parentTable.appendChild(table);
