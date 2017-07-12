;(function(global){

    var person = {
        firstname: 'John',
        lastname: 'Doe',
        getFullName: function() {
            
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
            
        }
    }

    function logName(lang1, lang2) {

        console.log('Logged: ' + this.getFullName());
        console.log('Arguments: ' + lang1 + ' ' + lang2);
        console.log('-----------');
        
    }

    function bindLogName(){
        var logPersonName = logName.bind(person);
        logPersonName('en');
    }

    function callLogName(newPerson){
        newPerson = newPerson || person;
        logName.call(newPerson, 'en', 'es');
    }

    function applyLogName(newPerson, args){
        args = args || ['en', 'es'];
        newPerson = newPerson || person;
        logName.apply(newPerson, args);
    }

    
    function borrowFunction(newPerson){

        newPerson = newPerson || {
            firstname: 'Jane',
            lastname: 'Doe'
        }

        console.log(person.getFullName.apply(newPerson));
    }

    function curryFunction(){
        function multiply(a, b) {
            return a*b;   
        }

        var multipleByTwo = multiply.bind(this, 2);
        console.log(multipleByTwo(4));

        var multipleByThree = multiply.bind(this, 3);
        console.log(multipleByThree(4));
    }
    
    global.cab = {
        bindLogName: bindLogName,
        callLogName: callLogName,
        applyLogName: applyLogName,
        borrowFunction: borrowFunction,
        curryFunction: curryFunction
    }
})(window);