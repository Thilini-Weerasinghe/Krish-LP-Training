public class SpellChecker {
 
private static SpellChecker instance;

	private SpellChecker() {
		
	}
	
	public static SpellChecker getInstance() {
		
	if(instance==null) {
		synchronized (SpellChecker.class) {
			if(instance==null) {
				instance= new SpellChecker();
			}	
		}
	}	
		return instance;
	}

}