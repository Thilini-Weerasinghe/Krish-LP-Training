package chainOfResponsibilityPattern;

public class FiveHundredDispender extends CurrencyDispenserHandler {

	public FiveHundredDispender() {
		super();
	}
	
	@Override
	public void dispense(WithdrawalAmount currency) {
		// TODO Auto-generated method stub
		if(currency != null) {
			double amount = currency.getAmount();
			double remainder = amount;
			
			if(amount >=500) {
				int count = (int) (amount/500);
				remainder = amount % 500;
				System.out.printf("Dispensing '%d' Rs.500 currency notes. \n", count) ;
			}
			
			 if (remainder > 0 && this.nextDispensor != null) {
				
		                this.nextDispensor.dispense(new WithdrawalAmount(remainder));
				
				             }
		}
		
	}

}
