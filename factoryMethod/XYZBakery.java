package factoryMethod;

public class XYZBakery extends CakeStore {
 
	@Override	
protected void makeCake() {
	cake.add(new ButterCake());
	cake.add(new ChocolateCake());
	cake.add(new CupCake());
	}
}
