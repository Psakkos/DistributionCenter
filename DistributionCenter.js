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
    for(let x=0;x<numberoftrucks;x++){
      let trucksize;
      let number=Math.random()*100;
      if(number>=66){
        trucksize= "large";
      }
      if(number<66 && number>=33){
        trucksize= "medium";
      }
      else{
        trucksize= "small";
      }
      theFleet.enqueue(new Truck());
    }
    return theFleet;
}
function distribute(wh,tf){
  let ready = new Queue;
  while(!wh.isEmpty() && !tf.isEmpty()){
    let currentTruck = tf.dequeue();
    while(currentTruck.spaceEfficiency()<1){
      currentTruck.inventory.push(Warehouse.dequeue);
      if(currentTruck.spaceEfficiency()>1);{
        Warehouse.enque(currentTruck.inventory.pop());
      }
    }
    ready.enqueue(currentTruck);
  }
  for(let x=0; inventory.length;x++){
    spaceTakenUp= Product.space;
  }
    //distribute the products in the warehouse to the truck fleet.

function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list
}
function main(){
    console.log("Started...\n");
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    let ready = distribute(flemhouse,flemfleet, 0.95);
    ready.print();

        while(!ready.isEmpty()){
        console.log("Truck with products...");
        console.log("----------------------");
          let t=ready.dequeue();
            console.log(t.spaceEfficiency());
            for(let x=0; x<ct.inventory.length; x++){
              console.log(t.inventory[x].name);
            }
        }
    }

main();
