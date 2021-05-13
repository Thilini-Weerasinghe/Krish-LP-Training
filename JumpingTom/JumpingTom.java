import java.util.*;
public class JumpingTom{

public static void main(String[] args){

Scanner sc = new Scanner(System.in);
System.out.println("Enter the value that Tom wants to jump:");
float x= sc.nextFloat();

if(x<0){
System.out.println("Jumping value cannot be a negative value. Try again!!");
}

else {
System.out.println("Tom wants to jump:" +x+"m");


int[] arr={5,3,1};
int currentDistance=0;
int numberOfJumps=0;
int spentTime=0;

for(int a=0; a<x;a++){
if(currentDistance>=x){
break;
}
for(int b=0; b<arr.length; b++){
if(currentDistance>=x){
break;
}
else{
 currentDistance = currentDistance+arr[b];
	numberOfJumps++;}

if(a>0 && b==0){
spentTime=spentTime+5;
}
else if(b==1){
spentTime=spentTime+1;
}
else if(b==2){
spentTime=spentTime+2;
}
}
}
System.out.println("Number of jumps required:"+numberOfJumps);
System.out.println("Resting time:"+spentTime+"s");

}
}
}