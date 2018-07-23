(function(exports){
  function NoteListModel(){
    this.noteList = [];
  }

  NoteListModel.prototype.add = function(note){
    this.noteList.push(note);
  }

  NoteListModel.prototype.all = function(){
    return this.noteList;
  }

  exports.NoteListModel = NoteListModel;
})(this);
