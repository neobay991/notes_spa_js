(function(exports){
  function testNoteController(){
    let note1 = new NoteModel(1, "Favourite drink: seltzer1");
    let note2 = new NoteModel(2, "Favourite drink: seltzer2");
    let note3 = new NoteModel(3, "Favourite drink: seltzer3");
    var noteList = new NoteListModel();
    noteList.add(note1);
    noteList.add(note1);
    noteList.add(note1);
    var noteController = new NoteController(noteList);
    expectedHtml = '<div><li><a href="#notes/1">Note 1: Favourite drink: sel</a></li></div><div><li><a href="#notes/2">Note 2: Favourite drink: sel</a></li></div><div><li><a href="#notes/3">Note 3: Favourite drink: sel</a></li></div>'

    if(noteController.html() !== expectedHtml){
      throw new Error('HTML not what was expected.');
    }  else {
      console.log('OK: testNoteController() unit test')
    }
  }
  testNoteController();
})(this);
