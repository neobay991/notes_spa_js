(function(exports){
  function testHtmlSingleNote(){
    let note1 = new NoteModel(1, 'This is a test note.');
    let view = new SingleNoteView(note1);
    let expectedHtml = '<div><li>This is a test note.</li></div>';

    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (single).');
    } else {
      console.log('OK: testHtmlSingleNote() unit test')
    }
  }

  testHtmlSingleNote();
})(this);
