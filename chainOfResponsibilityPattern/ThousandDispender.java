package chainOfResponsibilityPattern;

public class ThousandDispender extends CurrencyDispenserHandler{
	
	public ThousandDispender() {
		super();
	}
	
	@Override
	public void dispense(WithdrawalAmount currency) {
		if(currency != null) {
			double amount = currency.getAmount();
			double remainder = amount;
			
			if(amount >=1000) {
				int count = (int) (amount/1000);
				remainder = amount % 1000;
				System.out.printf("Dispensing '%d' Rs.1000 currency notes.\n", count) ;
			}
			
			 if (remainder > 0 && this.nextDispensor != null) {
				
		                this.nextDispensor.dispense(new WithdrawalAmount(remainder));
				
				             }
		}
		
	}


}
