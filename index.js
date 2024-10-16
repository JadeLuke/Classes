var Person = /** @class */ (function () {
    function Person(name, age, stipdend, gender) {
        this.name = name;
        this.age = age;
        this.stipend = stipdend;
        this.gender = gender;
    }
    Person.prototype.introduction = function () {
        return "Hello I am ".concat(this.name, " and I am a ").concat(this.gender, ".");
    };
    Person.prototype.personAge = function () {
        return "I am ".concat(this.age, " years old");
    };
    Person.prototype.income = function () {
        return "I earn R".concat(this.stipend, " a month");
    };
    return Person;
}());
var personOne = new Person('Jazi', 24, 6000, 'male');
console.log(personOne.introduction());
console.log(personOne.personAge());
console.log(personOne.income());
