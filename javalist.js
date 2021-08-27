// javascript object notation
//JSON
const user = {
    id: 11, name: 'palash'
    , job: 'saleman'
};
const stringified = JSON.stringify(user);


// console.log(user);
// console.log(stringified);
const shop = {
    name: 'alia store',
    address: 'rangati',
    product: ['laptop', 'mobile', 'tap', 'table'],
    isExpensive: false
}

const stringified = JSON.stringify(user);
console.log(shop);
console.log(stringified);
