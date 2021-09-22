const obj1 = {
  name: 'Cesar',
  location: 'Ecuador',
  address: {
      zip:626364
  }
}

/*const obj2=Object.assign({}, obj1);
const obj2 = obj1;*/

const obj2=JSON.parse(JSON.stringify(obj1));

obj2.location="USA";
obj2.address.zip=828920;
console.log(obj1);
console.log(obj2);
