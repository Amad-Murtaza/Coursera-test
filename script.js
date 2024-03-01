(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    var namesManipulator = {
        getFirstLetter: function (name) {
            return name.trim().charAt(0).toLowerCase();
        }
    };
  
    window.namesManipulator = namesManipulator;
})(window);

(function (window) {
    var consoleOutput = {
        printHello: function (name) {
            console.log("Hello " + name);
        },
        printGoodbye: function (name) {
            console.log("Goodbye " + name);
        }
    };
  
    window.consoleOutput = consoleOutput;
})(window);

(function () {
    var names = window.namesManipulator.names;
  
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = window.namesManipulator.getFirstLetter(name);
  
        if (firstLetter === 'j') {
            window.consoleOutput.printGoodbye(name);
        } else {
            window.consoleOutput.printHello(name);
        }
    }
})();