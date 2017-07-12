;(function(global){

    function greet(whattosay) {

        return function(name) {
            console.log(whattosay + ' ' + name);
        }

    }

    function buildFunctions() {
    
        var arr = [];
        console.log(this);
        for (var i = 0; i < 3; i++) {
            
            arr.push(
                function() {
                    console.log(i);
                }
            )
            
        }
        
        return arr;
    }

    function buildFunctions2() {
    
        var arr = [];
        
        for (var i = 0; i < 3; i++) {
            arr.push(
                (function(j) {
                    return function() {
                        console.log(j);   
                    }
                }(i))
            )
            
        }
        
        return arr;
    }

    global.closure = {
        greet: greet,
        buildFunctions: buildFunctions,
        buildFunctions2: buildFunctions2
    }
    
})(window);