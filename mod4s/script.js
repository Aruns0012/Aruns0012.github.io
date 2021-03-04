
(function () {
var names = ["arun", "steve", "muskbhai", "gracefulnarcos", "deepubhai", "mrpavlo", "jhoney", "jack", "mark", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }

  else {
    helloSpeaker(names[i]);
  }
}

})();
