package prototypePattern;

public abstract class Laptop implements Cloneable {

	private String brandName;
	private String processor;
	private String ram;
	private String storage;
	private String color;
	boolean bluetooth;
	
	public String getBrandName() {
		return brandName;	
	}

	public void setBrandName(String brandName) {
		this.brandName=brandName;
	}
	public String getProcessor() {
		return processor;	
	}

	public void setProcessor(String processor) {
		this.processor=processor;
	}
	public String getRam() {
		return ram;
			
	}

	public void setRam(String ram) {
		this.ram=ram;
	}
	public String getColor() {
		return color;
			
	}

	public void setColor(String color) {
		this.color=color;
	}
	public String getStorage() {
		return storage;
			
	}

	public void setStorage(String storage) {
		this.storage=storage;
	}
	public boolean getBluetooth() {
		return bluetooth;
			
	}

	public void setBluetooth(boolean bluetooth) {
		this.bluetooth=bluetooth;
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException{
		return super.clone();
	}
}
