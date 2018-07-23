(function(exports){
  function NoteModel(note){
    this.text = note;
  }

  NoteModel.prototype.noteText = function(){
      return this.text;
  }

  exports.NoteModel = NoteModel;
})(this);
