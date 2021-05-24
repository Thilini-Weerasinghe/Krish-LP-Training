package factoryMethod;

public class ButterCake extends Cake {

	@Override
	public void prepare() {
		// TODO Auto-generated method stub
		System.out.println("Add ingredients to the butter cake");
		
	}

	@Override
	public void cut() {
		// TODO Auto-generated method stub
		System.out.println("cutting cake into square");
		
	}

	@Override
	public void icing() {
		// TODO Auto-generated method stub
		System.out.println("No icing adding to the butter cake");
		
	}
	@Override
	public String toString() {
		
		return " Butter Cake";
	}

}
