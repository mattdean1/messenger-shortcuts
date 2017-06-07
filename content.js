filter = function(event){return false;}
function isMac() {
  return navigator.platform.indexOf('Mac') > -1
}
function isWindows() {
  return navigator.platform.indexOf('Win') > -1
}

var modkey = "alt+";
var searchkey = "s";
if(isMac()){
  modkey = "ctrl+"
  searchkey = "f";
}

//select one of first 5 chats
  var chats = document.getElementsByClassName('_1ht6');
  for(var i=0; i<5; i++){
    (function(index) {
      key(modkey+(index+1), function(){
                                      console.log(chats[index]);
                                      chats[index].click();
                                    });
    })(i);
  }

//next chat
  key('tab', function(){
    document.querySelector('._1ht2+li ._1ht6').click();
  });

//previous chat
  key('shift+tab', function(){
    //need to loop through chats since css doesnt have a previous sibling selector
    var chats = document.getElementsByClassName('_1ht1');
    var selected = document.querySelector('._1ht2');
    for(var i=0; i<chats.length; i++){
      (function(index){
        if(chats[index] == selected){
          chats[index-1].querySelector('._1ht6').click();
        }
      })(i);
    }
  });

//focus search box
  key(modkey+'s, '+modkey+searchkey, function(){
    document.querySelector('._58al').focus();
  });

//focus message entry
  key(modkey+'l', function(){
    document.querySelector('._5rpu').click();
  });
