(function(exports){
  function testNoteController(){
    var noteList = new NoteListModel();
    var noteController = new NoteController(noteList);
    expectedHtml = "<div><li>Note 1: Favourite drink: seltzer</li></div>"
    if(noteController.html() !== expectedHtml){

      throw new Error('HTML not what was expected.');
    }  else {
      console.log('OK: testNoteController() unit test')
    }
  }
  testNoteController();
})(this);
