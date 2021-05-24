package factoryMethod;

import java.util.ArrayList;
import java.util.List;

public abstract class CakeStore {

	protected List<Cake> cake = new ArrayList<>();
	
	public CakeStore() {
		makeCake();
	}
	
	protected abstract void makeCake();
	
	@Override
	public String toString() {
		return " Bakery has {" + "cake=" + cake + '}';
	}
}
