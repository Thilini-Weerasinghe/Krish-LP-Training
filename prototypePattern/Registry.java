package prototypePattern;

import java.util.HashMap;
import java.util.Map;

public class Registry {
	private Map<LaptopType, Laptop>  laptops = new HashMap<>();
	
	public Registry() {
		 this.initialize();
	}
	
	public Laptop getLaptop( LaptopType laptopType) {
		Laptop laptop = null;
		 try {
			 laptop = (Laptop)laptops.get(laptopType).clone();
		 }catch (CloneNotSupportedException e){
			 e.printStackTrace();
			 
		 }
		return laptop;}

	private void initialize() {
		GamingLaptop gmlp = new GamingLaptop();
		gmlp.setGeneration("9th generation");
		gmlp.setBluetooth(true);
		gmlp.setBrandName("Asus");
		gmlp.setColor("black and red");
		gmlp.setGraphic("NAVIDIA GeForce GTX1650 Ti");
		gmlp.setProcessor("Intel Core i7");
		gmlp.setRam("8GB");
		gmlp.setRefreshRate("144Hz");
		gmlp.setStorage("512GB");
		
		OfficeLaptop oflp = new OfficeLaptop();
		oflp.setBluetooth(true);
		oflp.setBrandName("Azure");
		oflp.setColor("black");
		oflp.setSecurityFeature("enable security features");
		oflp.setFingerprint(true);
		oflp.setProcessor(" Intel core i5");
		oflp.setStorage("1TB");
		oflp.setRam("8GB");
		
		laptops.put(LaptopType.GAMING, gmlp);
		laptops.put(LaptopType.OFFICE, oflp);
	}

}
