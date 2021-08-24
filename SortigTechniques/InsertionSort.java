package com.thilini.sorting;

public class InsertionSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		InsertionSort is = new InsertionSort();
		int arr[]= {64, 34, 25, 12, 22, 11, 90};
		System.out.println("Input Array is :{64, 34, 25, 12, 22, 11, 90} ");
		System.out.println("Sorted Array is: ");
		is.insertion(arr);

	}

	void insertion(int arr[]) {
		
		int n = arr.length;
		
		for (int i=1; i<n; i++) {
			int key = arr[i];
			int j = i-1;
			
			while(j>=0 && arr[j]> key) {
				arr[j+1] = arr[j];
				j=j-1;
			
			}
			arr[j+1]= key;
		}
		
		for (int x=0; x<n; x++) {
			System.out.print(arr[x] + " ");
		}
	}
	
}
