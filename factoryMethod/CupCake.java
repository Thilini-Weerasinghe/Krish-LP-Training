package factoryMethod;

public class CupCake extends Cake {

	@Override
	public void prepare() {
		// TODO Auto-generated method stub
		System.out.println("add ingredients to the cupcake and add them to the cups");
		
	}

	@Override
	public void cut() {
		// TODO Auto-generated method stub
		System.out.println(" no cutting opeartions here");
		
	}

	@Override
	public void icing() {
		// TODO Auto-generated method stub
		System.out.println("adding icing decorations to the cake");
		
	}

	@Override
	public String toString() {
		
		return " Cup Cake";
	}
}
