package factoryMethod;

public class BirthDayCake extends Cake {

	@Override
	public void prepare() {
	System.out.println("Adding ingredients for birthday cakes");
		
	}

	@Override
	public void cut() {
		// TODO Auto-generated method stub
		System.out.println(" cutting the cake into shape");
	}

	@Override
	public void icing() {
		// TODO Auto-generated method stub
		System.out.println("decorating the cake");
		
	}

	@Override
	public String toString() {
		
		return " Birth Day Cake";
	}

}
