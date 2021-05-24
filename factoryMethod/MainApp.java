package factoryMethod;

public class MainApp {
	public static void main(String[] args) {
		
		CakeStore cs1 = CakeStoreFactory.createCakeStore(CakeStoreCode.PQR);
		System.out.println(cs1);
		
		CakeStore cs2 = CakeStoreFactory.createCakeStore(CakeStoreCode.XYZ);
		System.out.println(cs2);
		
		CakeStore cs3 = CakeStoreFactory.createCakeStore(CakeStoreCode.ABC);
		System.out.println(cs3);
		
	}

}
