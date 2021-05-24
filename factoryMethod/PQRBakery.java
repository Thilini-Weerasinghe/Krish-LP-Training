package factoryMethod;

public class PQRBakery extends CakeStore {

	@Override
	protected void makeCake() {
		cake.add(new BirthDayCake());
		cake.add(new WeddingCake());
		cake.add(new CupCake());
		
	}

}
