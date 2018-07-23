(function(exports){
  function NoteListView(noteList){
    this._noteList = noteList || [];
  }

  NoteListView.prototype.html = function(){
    let output = '';

    this._noteList.all().forEach(function(note, index){
      output += `<li><div>Note ${index + 1}: ${note.noteText()}</div></li>`
    });

    return output
  };

  exports.NoteListView = NoteListView;
})(this);