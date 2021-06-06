class House{
    constructor(type, garage, swimmingpool, fancyStatues, garden){
        this.type = type;
        this.swimmingpool = swimmingpool;
        this.fancyStatues = fancyStatues;
        this.garden = garden;
        this.garage = garage;
    }
    toString() { 
        return console.log(JSON.stringify(this)); 
      }
}

module.exports = House;