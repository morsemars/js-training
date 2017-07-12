;(function(global){

    function Person(firstname, lastname) {
        console.log(this);
        this.firstname = firstname;
        this.lastname = lastname;
        console.log('This function is invoked.');
    }

    function createNewPerson (firstname, lastname){
        var newPerson = new Person(firstname, lastname);
        console.log(newPerson);
    }

    global.buildObjects = {
        Person: Person,
        createNewPerson: createNewPerson,
        //createGetFullName: createGetFullName
    }

    /**
     * Person.prototype.getFullName = function() {
            return this.firstname + ' ' + this.lastname;   
        }
     * 
     */

})(window);