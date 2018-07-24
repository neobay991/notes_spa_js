(function(exports){
  function SingleNoteView(noteModel){
    this._noteModel = noteModel;
  }

  SingleNoteView.prototype.html = function(){
    let output = `<li><div>${this._noteModel.noteText()}</div></li>`;

    return output
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
