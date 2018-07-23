(function(exports){
  function testNoteModelHoldsAListOfNotes(){
    let noteListModel = new NoteListModel();
    let note1 = new NoteModel('This is a test note.');
    let note2 = new NoteModel('This is a test note 2');

    noteListModel.add(note1);
    noteListModel.add(note2);
    // console.log(noteListModel.all()[0] === note1);
    if (noteListModel.all()[0] !== note1 && noteListModel.all()[1] !== note2){
      throw new Error('Note does not appear in the list')
    }
  }
  testNoteModelHoldsAListOfNotes();
})(this);
