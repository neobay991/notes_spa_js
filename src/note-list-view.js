(function(exports){
  function NoteListView(noteList){
    this._noteList = noteList || [];
  }

  NoteListView.prototype.html = function(){
    let output = '';


    this._noteList.all().forEach(function(note, index){
      output += `<div><li>Note ${index + 1}: ${note.noteText()}</li></div>`
    });

    return output
  };

  exports.NoteListView = NoteListView;
})(this);
