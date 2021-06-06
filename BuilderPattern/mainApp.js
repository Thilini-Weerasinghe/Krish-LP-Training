const Builder = require('./Builder');

const house1 = new Builder('fancy house').withFancyStatues('2').withGarden('flower').build();
const house2 = new Builder('luxury house').withSwimmingpool('large').build();
const house3 = new Builder('general house').withGarage('small garage').build();
house1.toString();
house2.toString();
house3.toString();