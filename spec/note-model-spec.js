(function(exports){
  function testNoteModelIsInstantiatedWithGivenNote(){
    let noteModel = new NoteModel(1, 'This is a test note.');
    if (noteModel.noteText() !== 'This is a test note.'){
      throw new Error('Note not successfully instantiated with text.')
    } else {
      console.log('OK: testNoteModelIsInstantiatedWithGivenNote() unit test')
    }
  }

  testNoteModelIsInstantiatedWithGivenNote();
})(this);
