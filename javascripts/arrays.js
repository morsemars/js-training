;(function(global){
    var arr = [
        1,
        false,
        {
            name: 'Mars',
            address: 'Makati'
        },
        function(){
            console.log("Hello");
        },
        "Hi"
    ];

    function printArgs(){
        for(argument of arguments){
            console.log(argument);
        }
    }

    global.arrays = {
        arr: arr,
        printArgs: printArgs
    }

})(window);