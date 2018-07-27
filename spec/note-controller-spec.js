(function(exports){
  function testNoteController(){
    var note1 = new NoteModel(1, "Favourite drink: seltzer1");
    var note2 = new NoteModel(2, "Favourite drink: seltzer2");
    var note3 = new NoteModel(3, "Favourite drink: seltzer3");
    var noteList = new NoteListModel();
    noteList.add(note1);
    noteList.add(note2);
    noteList.add(note3);
    var noteController = new NoteController(noteList, note1, note2, note3);
    var expectedHtml = '<div><li><a href="#notes/1">Note 1: Favourite drink: sel</a></li></div><div><li><a href="#notes/2">Note 2: Favourite drink: sel</a></li></div><div><li><a href="#notes/3">Note 3: Favourite drink: sel</a></li></div>'

    if(noteController.html() !== expectedHtml){
      throw new Error('HTML not what was expected.');
    }  else {
      console.log('OK: testNoteController() unit test')
    }

    // un-comment test when testing this use case
    // var expectedHtml2 = '<div><li>Favourite drink: seltzer1</li></div>'
    // if(noteController.htmlUpdate(1) !== expectedHtml2){
    //   throw new Error('HTML not what was expected.');
    // }  else {
    //   console.log('OK: testNoteController() unit test')
    // }

  }
  testNoteController();
})(this);
