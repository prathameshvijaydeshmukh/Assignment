(function() {

    var names = ["Yogesh", "Jay", "Janvi", "Jeery", "Paul", "Pari", "Lina", "Pranay", "Laura", "Jija"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        console.log(firstLetter);
        if (firstLetter === 'j') {
            byeSpeaker(names[i]);
        } else {
            helloSpeaker(names[i]);
        }
    }

})();