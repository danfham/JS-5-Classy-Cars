//base class
class Vehicle {
    constructor(model){
      this.model = model
    }
    drive(){
      return this.model + " " + "drives"
    }
  }

 //derived classes           
  class Truck extends Vehicle{
    constructor(model,towingCapacity){
        super(model);
        this.towingCapacity=towingCapacity
    }
  }

  class Suv extends Vehicle{
    constructor(model,offroadPackage){
        super(model);
        this.offroadPackage=offroadPackage
    }
  }

  class Sedan extends Vehicle {
    constructor(model,backupCamera){
        super(model);
        this.backupCamera=backupCamera
    }

  }

  // second order derived child
  class EVSedan extends Sedan{
    constructor(model,backupCamera){
        super(model,backupCamera);
    }
    recharge(){
        return this.model+" recharges"
    }
  }