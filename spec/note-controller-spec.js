(function(exports){
  function testNoteController(){
    var noteController = new NoteController(noteList = new NoteListModel());
    expectedHtml = "<div><li>Note 1: Favourite drink: seltzer</li></div>"
    if(noteController.html() !== expectedHtml){

      throw new Error('HTML not what was expected.');
    }
  }
  testNoteController();
})(this);
