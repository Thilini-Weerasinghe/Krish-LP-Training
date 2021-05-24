package factoryMethod;

public class WeddingCake extends Cake {

	@Override
	public void prepare() {
		// TODO Auto-generated method stub
		System.out.println("add ingredients to the wedding cakes");
		
	}

	@Override
	public void icing() {
		// TODO Auto-generated method stub
		System.out.println("adding icing layer to the cake");
		
	}
	
	@Override
	public void cut() {
		// TODO Auto-generated method stub
		System.out.println("cut the cake into small square shapes");
		
	}

	@Override
	public String toString() {
		
		return " Wedding Cake";
	}
}
