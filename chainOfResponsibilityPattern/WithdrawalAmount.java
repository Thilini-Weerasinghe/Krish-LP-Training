package chainOfResponsibilityPattern;

public class WithdrawalAmount {
	 protected double amount;
	 
	 public WithdrawalAmount(double amount) {
		super();
		this.amount = amount;
	 }
	 
	 public void setAmount(double amount) {
		 this.amount=amount;
	 }
	 
	 public double getAmount() {
		 return amount;
	 }

}
