package factoryMethod;

public abstract class Cake {
	
	String name;
	double weight;
	
	public abstract void prepare();
	
	public void bake() {
		System.out.println("baking the cake");
	}
	
	public abstract void cut();
	public abstract void icing();
	public void box() {
		System.out.println(" put the cake into the box");
	}
}
