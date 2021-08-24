package com.thilini.sorting;

public class SelectionSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SelectionSort st = new SelectionSort();
		int arr[]= {64, 34, 25, 12, 22, 11, 90};
		System.out.println("Input Array is :{64, 34, 25, 12, 22, 11, 90} ");
		System.out.println("Sorted Array is: ");
		st.selection(arr);

	}

	void selection(int arr[]) {
		
		int n = arr.length;
		
		for(int i=0; i<n-1; i++) {
			
			int min_index= i;
			
			for(int j=i+1; j<n; j++) {
				
				//find the minimum
				
				if(arr[j]< arr[min_index]) {
					min_index=j;
				}
				
			}
			
			//swap the value
			int temp = arr[min_index];
			arr[min_index]= arr[i];
			arr[i]= temp;
		}
		
		for (int x=0; x<n; x++) {
			System.out.print(arr[x] + " ");
		}
	}
}
