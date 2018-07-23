(function(exports){
  function testHtmlListsNotes(){
    let note1 = new NoteModel('This is a test note.');
    let note2 = new NoteModel('This is a test note 2');
    let noteList = new NoteListModel();
    noteList.add(note1);
    noteList.add(note2);
    let view = new NoteListView(noteList);
    let expectedHtml = '<li><div>Note 1: This is a test note.</div></li><li><div>Note 2: This is a test note 2</div></li>'
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected.');
    }
  }
  testHtmlListsNotes();
})(this);