package prototypePattern;

public class OfficeLaptop extends Laptop {
	
	private String securityFeature;
	private boolean fingerprint;
	
	public String getSecurityFeature() {
		return securityFeature;
	
	}
	public void setSecurityFeature(String securityFeature) {
		this.securityFeature = securityFeature;
	}
	public boolean getFingerprint() {
		return fingerprint;
	}
	public void setFingerprint(boolean fingerprint) {
		this.fingerprint=fingerprint;
	}

	@Override
	public String toString() {
	 return "OfficeLaptop {" + "Security Feature="+ securityFeature +","+ "Finger Print="+ fingerprint+"}";
	}
}
