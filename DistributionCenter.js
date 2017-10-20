const Product= require('./Product.js')
const Queue = require('queue.js')
const Truck= require('Truck.js')
//require all of the other files, with node.js,  linkedlist.js, and queue.js

function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return Warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberofitems;x++){
      theFleet.enqueue(new Truck());
    }
    return theFleet;
}
function distribute(wh,tf){
  tempTruck;
  for(let c=0; c++){
    
  }
    //distribute the products in the warehouse to the truck fleet.
}
function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list
}
function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    flemfleet = distribute(flemhouse,flemfleet);
    let shipping = ship(flemfleet,0.80);
    for(let s=0;s<shipping.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(s.getNext() != null){
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
