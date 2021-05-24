package factoryMethod;

public class ChocolateCake extends Cake {

	@Override
	public void prepare() {
		// TODO Auto-generated method stub
		System.out.println("Add ingredients to the chocolate cake");
		
	}

	@Override
	public void cut() {
		System.out.println("cut the chocolate cake into squares");
		// TODO Auto-generated method stub
		
	}

	@Override
	public void icing() {
		// TODO Auto-generated method stub
		System.out.println("add chocolate icing to the cake");
		
	}
	
	@Override
	public String toString() {
		
		return " Chocolate Cake";
	}

}
