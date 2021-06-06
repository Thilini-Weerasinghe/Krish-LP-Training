package mementoPattern;

public class Text {
	
	String message;
	
	public Text(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return "Text[" + "text="+ message+ "]";
		
	}

}
