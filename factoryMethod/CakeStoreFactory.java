package factoryMethod;

public class CakeStoreFactory {
	 
	public static CakeStore createCakeStore(CakeStoreCode cakeStoreCode) {
		
		switch(cakeStoreCode) {
		
		case ABC:
			return new ABCBakery();
		case PQR:
			return new PQRBakery();
		case XYZ:
			return new XYZBakery();
		default:
			return null;
			
		}
	}

}
