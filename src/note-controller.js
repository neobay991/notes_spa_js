(function(exports){
  var appDiv = document.getElementById('app');
  appDiv.innerHTML = 'howdy';

  function NoteController(noteList, note1 = new NoteModel(1, "Favourite drink: seltzer1"), note2 = new NoteModel(2, "Favourite drink: seltzer2"), note3 = new NoteModel(3, "Favourite drink: seltzer3")){

    this.view = new NoteListView(noteList);

    this.singleNoteview1 = new SingleNoteView(note1);
    this.singleNoteview2 = new SingleNoteView(note2);
    this.singleNoteview3 = new SingleNoteView(note3);
  }

  NoteController.prototype.html = function(){
    appDiv.innerHTML = this.view.html();
    return appDiv.innerHTML;
  }

  NoteController.prototype.htmlUpdate = function(Id){
    var singleNoteview;

    // var urlId = parseInt(location.hash.split("/")[1]);
    var urlId = parseInt(location.hash.split("/")[1]) || Id;
    if (urlId === 1) {
      singleNoteview = this.singleNoteview1;
    } else if (urlId === 2) {
      singleNoteview = this.singleNoteview2;
    } else if (urlId === 3) {
      singleNoteview = this.singleNoteview3;
    }

    appDiv.innerHTML = singleNoteview.html();
    return appDiv.innerHTML;
  }

  NoteController.prototype.makeNoteChange = function() {
    window.addEventListener("hashchange", NoteController.prototype.htmlUpdate);
  };

  NoteController();
  NoteController.prototype.makeNoteChange();

  // make the constructor public for tests
  exports.NoteController = NoteController;

})(this);

// (function(){
//
// })();
