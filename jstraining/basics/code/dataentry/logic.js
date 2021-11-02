var Logic = function(){
    var persons = [];

    this.addPerson = function(person){
        if(person.id <=0 || person.name.length === 0) 
            return 'Please enter data for the Person';
        persons.push(person);
        return persons;
    };

};