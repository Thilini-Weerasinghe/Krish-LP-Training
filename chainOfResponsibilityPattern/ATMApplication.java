package chainOfResponsibilityPattern;

import java.util.Scanner;

public class ATMApplication {

	public static void main(String[] args) {
	
		try (Scanner scanner = new Scanner(System.in)) {
			
			            do {
						    System.out.println("Please enter amount to withdraw (multiple of 100, max 100000 ): ");
			
						    int amount = scanner.nextInt();
			
			              if (isValid(amount)) {
			
			                    ATMWithdrawal.withdraw(new 	WithdrawalAmount(amount));
			
			                }
			
			            } while (true);
			
			        }

	}
	
	private static boolean isValid(int amount) {
		
		        if (amount <= 0) {
		
		            System.out.println("Invalid amount. Try again!");
		
		            return false;
		
		        } else if (amount > 100000) {
		
		            System.out.println("Daily withdrawal limit is 100000 rupees. Try again!");
		
		            return false;
		
		        } else if (amount % 100 != 0) {
		
		            System.out.println("Amount must be mutiple of 100s, Try again!");
		
		            return false;
		
		        }
		
		        return true;
		
		    }

}
