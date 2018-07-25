(function(exports){
  function testNoteController(){
    var noteController = new NoteController(noteList = new NoteListModel());

    var note1 = new NoteModel('This is a test note.');
    noteList.add(note1);
    var view = new NoteListView(noteList);


    expectedHtml = "Note 1: This is a test note."
    if(noteController.html() !== expectedHtml){
      throw new Error('HTML not what was expected (multiple).');
    }
  }
  testNoteController();
})(this);
