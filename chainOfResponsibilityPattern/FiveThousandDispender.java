package chainOfResponsibilityPattern;

public class FiveThousandDispender extends CurrencyDispenserHandler {

	public FiveThousandDispender() {
		super();
	}
	
	@Override
	public void dispense(WithdrawalAmount currency) {
		// TODO Auto-generated method stub
		if(currency != null) {
			double amount = currency.getAmount();
			double remainder = amount;
			
			if(amount >=5000) {
				int count = (int) (amount/5000);
				remainder = amount % 5000;
				System.out.printf("Dispensing '%d' Rs.5000 currency notes.\n", count) ;
			}
			
			 if (remainder > 0 && this.nextDispensor != null) {
				
		                this.nextDispensor.dispense(new WithdrawalAmount(remainder));
				
				             }
		}
		
	}
}
