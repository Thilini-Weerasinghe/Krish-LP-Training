package prototypePattern;

public class MainApp {

	public static void main(String[] args) {
		
		Registry registry = new Registry();
		
		GamingLaptop gmlp = (GamingLaptop)registry.getLaptop(LaptopType.GAMING);
		System.out.println(gmlp);
		
		gmlp.setGeneration("11th generation");
		gmlp.setRefreshRate("122Hz");
		System.out.println(gmlp);

		OfficeLaptop oflp = (OfficeLaptop)registry.getLaptop(LaptopType.OFFICE);
		System.out.println(oflp);
		
		oflp.setFingerprint(false);
		System.out.println(oflp);
		
		
	}

}
