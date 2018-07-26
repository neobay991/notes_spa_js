(function(exports){
  function NoteModel(id, note){
    this.id = id;
    this.text = note;
  }


  NoteModel.prototype.noteId = function(){
      return this.id;
  }

  NoteModel.prototype.noteText = function(){
      return this.text;
  }

  exports.NoteModel = NoteModel;
})(this);
