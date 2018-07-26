(function(exports){
  function SingleNoteView(noteModel){
    this.singleNote = noteModel;
  }

  SingleNoteView.prototype.html = function(){
    let output = `<li><div>${this.singleNote.noteText()}</div></li>`;
    return output
  };


  exports.SingleNoteView = SingleNoteView;
})(this);
