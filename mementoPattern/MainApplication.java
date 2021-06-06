package mementoPattern;

public class MainApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		CareTaker careTaker = new CareTaker();
		TextEditorApp textEditorApp = new TextEditorApp();
		
		textEditorApp.addText(new Text("1st messsage"));
		
		textEditorApp.addText(new Text("2nd messsage"));
		
		careTaker.save(textEditorApp);
		System.out.println(textEditorApp);
		
		textEditorApp.addText(new Text("3rd messsage"));
		
		textEditorApp.addText(new Text("4th messsage"));
		
		careTaker.save(textEditorApp);
		System.out.println(textEditorApp);
		
		textEditorApp.addText(new Text("5th messsage"));
		
		careTaker.save(textEditorApp);
		System.out.println(textEditorApp);
		
		textEditorApp.addText(new Text("6th messsage"));
		
		careTaker.save(textEditorApp);
		System.out.println(textEditorApp);
		
		textEditorApp.addText(new Text("7th messsage"));
		
		careTaker.save(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);
		
		careTaker.undo(textEditorApp);
		System.out.println(textEditorApp);

	}

}
