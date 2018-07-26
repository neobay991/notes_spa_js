(function(exports){
  function testNoteController(){
    let note1 = new NoteModel("Favourite drink: seltzer1");
    let note2 = new NoteModel("Favourite drink: seltzer2");
    let note3 = new NoteModel("Favourite drink: seltzer3");
    var noteList = new NoteListModel();
    noteList.add(note1);
    noteList.add(note1);
    noteList.add(note1);
    var noteController = new NoteController(noteList);
    expectedHtml = "<div><li>Note 1: Favourite drink: sel</li></div><div><li>Note 2: Favourite drink: sel</li></div><div><li>Note 3: Favourite drink: sel</li></div>"

    if(noteController.html() !== expectedHtml){

      throw new Error('HTML not what was expected.');
    }  else {
      console.log('OK: testNoteController() unit test')
    }
  }
  testNoteController();
})(this);
