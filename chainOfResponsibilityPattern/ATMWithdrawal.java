package chainOfResponsibilityPattern;

public class ATMWithdrawal {

	protected static CurrencyDispenserHandler hundredDispender = new HundredDispender();
	protected static CurrencyDispenserHandler fiveHundredDispender = new FiveHundredDispender();
	protected static CurrencyDispenserHandler thousandDispender = new ThousandDispender();
	protected static CurrencyDispenserHandler fiveThousandDispender = new FiveThousandDispender();
	protected static CurrencyDispenserHandler dispanserChain;

	static {
		fiveThousandDispender.setNextDispender(thousandDispender);
		thousandDispender.setNextDispender(hundredDispender);
		fiveHundredDispender.setNextDispender(hundredDispender);
		dispanserChain = fiveThousandDispender;	
	}
	
    public static void withdraw(WithdrawalAmount amount) {
        if (amount != null) {
            dispanserChain.dispense(amount);

        }
    }

}
