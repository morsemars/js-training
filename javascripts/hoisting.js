;(function(global){

    function hoisting(){

        functionStatement();
        functionExpression();

        function functionStatement(){
            console.log("Running functionStatement");
        }

        var functionExpression = function(){
            console.log("Running functionExpression");
        }

        functionStatement();
        functionExpression();

    }

    global.hoisting = hoisting;

})(window);