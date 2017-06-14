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







var parentElement = document.getElementById('sales');

var article = document.createElement('article');
parentElement.append(article);

var table = document.createElement('table');

var row = document.createElement('tr');

table.appendChild(row);
var store1 = new Store ('First And Pike', 6.3,['','6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],23,65);
render(store1);

var store2 = new Store ('SeaTac Airport', 1.2,['','6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],3,24);
render(store2);

var store3 = new Store ('Seattle Center', 3.7,['','6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],11,38);
render(store3);

var store4 = new Store ('Capital Hill', 2.3,['','6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],20,38);
render(store4);

var store5 = new Store ('Alki', 4.6,['','6am','7am','8am', '9am', '10am','11am', '12pm', '1pm','2pm', '3pm', '4pm','5pm', '6pm', '7pm','8pm'],2,16);
render(store5);
//random customer generator function
function randomCustomers (minCookie,maxCookie) {
  return Math.floor(Math.random() * (maxCookie - minCookie + 1) + minCookie);
};
//Creates hours row of table using array from store1
for (var x = 0; x < store1.hoursOpen.length; x++) {
  var th = document.createElement ('th');
  th.textContent = store1.hoursOpen [x] ;
  row.appendChild(th);
};

article.append(table);

//adding form input elements in new rows to the existing table


//this is the render for the remaining rows of the table
function render (Store) {
  console.log(Store);

  var storeRow = document.createElement('tr');
  var td = document.createElement ('td');

  td.textContent = Store.name;
  storeRow.appendChild(td);

  var totalCookies = 0;
  for (var i = 0; i < Store.hoursOpen.length; i++) {
    td = document.createElement ('td');
    td.textContent = Store.cookiesSold();
    (totalCookies += Store.cookiesSold());
    storeRow.appendChild(td);
    table.appendChild(storeRow);
  }
  td.textContent = 'Total: ' + totalCookies;

};


//salmon image
var img = document.createElement('img');
img.setAttribute('src', 'images/salmon.png');
img.setAttribute('alt', 'cute picture of a salmon');
article.appendChild(img);
