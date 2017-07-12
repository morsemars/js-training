;(function(global){

    var 
        primitiveA,
        primitiveB,
        objectA,
        objectB
    
    function copyByValue(a){
        primitiveA = a || 18;
        primitiveB = primitiveA;

        console.log("Original Values:");
        console.log("Primitive A:", primitiveA);
        console.log("Primitive B:", primitiveB);

        primitiveB = 21;

        console.log("New Values:");
        console.log("Primitive A:", primitiveA);
        console.log("Primitive B:", primitiveB);
    }

    function copyByReference(a){

        objectA = a || {
            name: "John Doe",
            greet: function(){
                console.log("Hello ", this.name);
            }
        };

        objectB = objectA;

        console.log("Original Values:");
        console.log("Object A:", objectA);
        console.log("Object B:", objectB);
        objectA.greet();
        objectB.greet();

        objectB.name = "Mars Mads";
        objectB.greet = function(){
            console.log("Happy Birthday!!");
        };

        console.log("New Values:");
        console.log("Object A:", objectA);
        console.log("Object B:", objectB);
        objectA.greet();
        objectB.greet();
    }

    function changeName(obj) {
        obj = obj || objectA;
        obj.name = 'Name Changed';

        console.log("New Values:");
        console.log("Object A:", objectA);
        console.log("Object B:", objectB);
    }

    function assignNewObj(obj){
        objectB = obj || {
            hello: "world"
        }

        console.log("New Values:");
        console.log("Object A:", objectA);
        console.log("Object B:", objectB);
    }

    global.bvbr = {
        copyByValue: copyByValue,
        copyByReference: copyByReference,
        changeName: changeName,
        assignNewObj: assignNewObj
    }

})(window);