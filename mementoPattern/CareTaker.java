package mementoPattern;

import java.util.Stack;

public class CareTaker {
	
Stack <TextEditorApp.TextEditorMemento> history = new Stack<>();

public void save(TextEditorApp textEditorApp) {
	history.push(textEditorApp.save());
	
}

public void undo (TextEditorApp textEditorApp) {
	if(!history.isEmpty()) 
		textEditorApp.undo(history.pop());
	else
		System.out.println("cannot undo");
}
}
