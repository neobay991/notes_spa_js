(function(exports){
  function NoteController(noteList){
    var noteList = new NoteListModel()
    let note1 = new NoteModel("Favourite drink: seltzer");
    // let noteList = new NoteListModel();
    noteList.add(note1);
    let view = new NoteListView(noteList);
    return view.html();
    // html();

  }

  // public method
  NoteController.prototype.html = function(){
    let appDiv = document.getElementById('app');

    // update index.html with what is returned from NoteController() function
    appDiv.innerHTML = NoteController();
    return appDiv.innerHTML;
  }

  // invoke the method to return the html
  NoteController.prototype.html();

  // make the constructor public for tests
  exports.NoteController = NoteController;

})(this);

// (function(){
//   var appDiv = document.getElementById('app');
//   appDiv.innerHTML = 'howdy';
// })();
