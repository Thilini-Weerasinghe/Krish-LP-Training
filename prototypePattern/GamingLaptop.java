package prototypePattern;

public class GamingLaptop extends Laptop {
	
	private String generation;
	private String graphic;
	private String refreshRate;
	
	public String getGeneration() {
		return generation;	
	}

	public void setGeneration(String generation) {
		this.generation=generation;
	}
	public String getgraphic() {
		return graphic;
			
	}

	public void setGraphic(String graphic) {
		this.graphic=graphic;
	}
	public String getRefreshRate() {
		return refreshRate;	
	}

	public void setRefreshRate(String refreshRate) {
		this.refreshRate=refreshRate;
	}

	@Override
	public String toString() {
		return "Gaming Laptop {" + "Generation=" + generation +","+ "Graphic="+graphic +","+ "Refresh Rate="+refreshRate +"}";
		
	}
}
