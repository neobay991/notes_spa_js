(function(exports){
  function testHtmlSingleNote(){
    let note1 = new NoteModel('This is a test note.');
    let noteList = new NoteListModel();
    noteList.add(note1);
    let view = new SingleNoteView(note1);
    let expectedHtml = '<li><div>This is a test note.</div></li>';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (single).');
    }
  }
  
  testHtmlSingleNote();
})(this);
