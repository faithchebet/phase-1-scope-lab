
var customerName;

function declareBestCustomer() {
    var bestCustomer = 'not bob';
    return bestCustomer;
}

customerName = declareBestCustomer();
console.log(customerName); 

function overwriteBestCustomer() {
    var bestCustomer = 'bob';
    return bestCustomer;
}

customerName = overwriteBestCustomer();
console.log(customerName); 

const leastFavoriteCustomer = 'charlie';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}