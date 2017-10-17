# Distribution Center

A distribution center has to coordinate the efforts between a warehouse and a truck fleet.  The warehouse represents a giant collection of product-objects.  The truck fleet has a potential unlimited number of trucks: with three different sizes.

There are 4 functions to implement that reply on the inner workings of other modules.  They are...
  -  configureWareHouse()
  -  configureTruckFleet()
  -  distribute()
  -  ship()

## Warehouse

This is a queue which holds many products.

## Product
The product object has many variables which automatically determine themselves.
  -  Name (String)
  -  Price (Number to two decimals)
  -  Space (Number to two decimals)
  -  Prime (Boolean)

## Truck Fleet

The Truck Fleet is an array of Truck objects of different capacity sizes: 100 units, 200 units, 500 units.

  -  SmallTruck
  -  MediumTruck
  -  LargeTruck
## Truck
Each truck that you make has four variables
-  SmallTruck
    -  type (String: small, medium, large)
    -  inventory (linkedlist of products)
    -  capacity (Number)
    -  spaceEfficiency(Number between 0 and 1)
