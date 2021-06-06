package mementoPattern;

import java.util.ArrayList;

public class TextEditorApp {
 ArrayList <Text> texts = new ArrayList<>();
 
 public void addText(Text text) {
	 texts.add(text);
 }
 
 public ArrayList<Text> getTexts() {
	return (ArrayList)texts.clone();
		 
 }
 
 public TextEditorMemento save() {
	 return new TextEditorMemento(getTexts());
 }
 
 public void undo(TextEditorMemento textEditorMemento) {
	 texts = textEditorMemento.getTexts();
 }
 
 @Override
 public String toString() {
	return " TextEditor[" + "texts=" + texts + "]";
	 
 }
 
 static class TextEditorMemento{
	 ArrayList<Text> text;
	 
	 public TextEditorMemento(ArrayList<Text> text) {
		 this.text=text;
	 }
	 
	 private ArrayList<Text> getTexts() {
			return text;
				 
		 } 
 }
}
