package factoryMethod;

public class ABCBakery extends CakeStore{

	@Override
	protected void makeCake() {
	 cake.add(new ButterCake());
	 cake.add(new BirthDayCake());
	 cake.add(new CupCake());
		
	}

}
