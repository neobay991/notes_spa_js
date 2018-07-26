(function(exports){
  function testHtmlListsSingleNote(){
    let note1 = new NoteModel('This is a test note.');
    let noteList = new NoteListModel();
    noteList.add(note1);
    let view = new NoteListView(noteList);
    let expectedHtml = '<div><li>Note 1: This is a test note.</li></div>';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (single).');
    } else {
      console.log('OK: testHtmlListsSingleNote() unit test')
    }
  }

  function testHtmlListsMultipleNotes(){
    let note1 = new NoteModel('This is a test note.');
    let note2 = new NoteModel('This is a test note 2.');
    let noteList = new NoteListModel();
    noteList.add(note1);
    noteList.add(note2);
    let view = new NoteListView(noteList);

    let expectedHtml = '<div><li>Note 1: This is a test note.</li></div><div><li>Note 2: This is a test note </li></div>'
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (multiple).');
    } else {
      console.log('OK: testHtmlListsMultipleNotes() unit test')
    }
  }

  function testHtmlDoesntListEmptyNote(){
    let noteList = new NoteListModel();
    let view = new NoteListView(noteList);
    let expectedHtml = '';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (no notes).');
    } else {
      console.log('OK: testHtmlDoesntListEmptyNote() unit test')
    }
  }

  testHtmlDoesntListEmptyNote();
  testHtmlListsSingleNote();
  testHtmlListsMultipleNotes();
})(this);
