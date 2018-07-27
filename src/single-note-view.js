(function(exports){
  function SingleNoteView(noteModel){
    this.singleNote = noteModel;
  }

  SingleNoteView.prototype.html = function(){
    let output = `<div><li>${this.singleNote.noteText()}</li></div>`;
    return output
  };


  exports.SingleNoteView = SingleNoteView;
})(this);
