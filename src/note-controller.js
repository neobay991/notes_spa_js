(function(exports){
  function NoteController(noteList){
    // var noteList = new NoteListModel()
    // let note1 = new NoteModel(1, "Favourite drink: seltzer");
    // // let noteList = new NoteListModel();
    // noteList.add(note1);
    this.view = new NoteListView(noteList);
    // return view.html();
  }

  // public method
  NoteController.prototype.html = function(){
    let appDiv = document.getElementById('app');

    // update index.html with what is returned from NoteController() function
    appDiv.innerHTML = this.view.html();
    return appDiv.innerHTML;
  }

  // invoke the method to return the html
  // NoteController.prototype.html

  // make the constructor public for tests
  exports.NoteController = NoteController;

})(this);

// (function(){
//   var appDiv = document.getElementById('app');
//   appDiv.innerHTML = 'howdy';
// })();
