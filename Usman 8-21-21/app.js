var txt = 'something';
var db=firebase.database().ref('/').child('notes');
function add() {
    var id=db.push().key
    console.log(id)


    // overwrite
    firebase.database().ref('/').child('notes/'+id).set(txt);
    
    // Make New
    // firebase.database().ref('/').child('notes').push(txt);
}
function get() {
    // 1st method

    // firebase.database().ref('/').child('notes').once('value',function(data){
    //     console.log(data.val());
    // });

    // 2nd method

    db.on('child_added', function (data) {
        console.log(data.val());
    });
}