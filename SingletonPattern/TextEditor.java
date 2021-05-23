public class TextEditor{

public static void main (String[]args){

SpellChecker sp1 = SpellChecker.getInstance();
SpellChecker sp2 = SpellChecker.getInstance();

System.out.println(sp1.hashCode());
System.out.println(sp2.hashCode());


}
}