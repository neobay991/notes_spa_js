(function(exports){
  function NoteListView(noteList){
    this._noteList = noteList || [];
  }

  NoteListView.prototype.html = function(){
    let output = '';


    this._noteList.all().forEach(function(note, index){
      output += `<div><li>Note ${index + 1}: ${note.noteText().substring(0,20)}</li></div>`
    });

    return output
  };

  exports.NoteListView = NoteListView;
})(this);
