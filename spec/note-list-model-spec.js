(function(exports){
  function testNoteModelHoldsAListOfNotes(){
    let noteListModel = new NoteListModel();
    let note1 = new NoteModel('This is a test note.');
    let note2 = new NoteModel('This is a test note 2');

    noteListModel.add(note1);
    noteListModel.add(note2);
    if (!noteListModel.all().includes(note1) && !noteListModel.all().includes(note2)){
      throw new Error('Note does not appear in the list')
    }
  }
  testNoteModelHoldsAListOfNotes();
})(this);
