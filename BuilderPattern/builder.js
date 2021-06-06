const House = require('./House');

        class Builder{
            constructor(type,garage, swimmingpool, fancyStatues, garden){
                this.type = type;
                this.swimmingpool = swimmingpool;
                this.fancyStatues = fancyStatues;
                this.garden = garden;
                this.garage = garage;
            }
    
            withSwimmingpool(swimmingpool){
                this.swimmingpool = swimmingpool;
                return this;
            }
        
            withGarden(garden){
                this.garden = garden;
                return this;
            }
        
            withFancyStatues(fancyStatues){
                this.fancyStatues= fancyStatues;
                return this;
            }
        
            withGarage(garage){
                this.garage =garage;
                return this;
            }
    
            build(){
                return new House(this);
            }
        } 
        
module.exports = Builder;




