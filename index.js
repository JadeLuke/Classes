var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels) {
        this.wheels = wheels;
    }
    Vehicle.prototype.move = function () {
        return "This vehicle is moving";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(doors, wheels) {
        var _this = _super.call(this, wheels) || this;
        _this.doors = doors;
        return _this;
    }
    Car.prototype.start = function () {
        return "engine is on";
    };
    return Car;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(isPedal, wheels) {
        var _this = _super.call(this, wheels) || this;
        _this.isPedal = isPedal;
        return _this;
    }
    Bicycle.prototype.pedal = function () {
        if (this.isPedal) {
            console.log("Has pedals");
        }
    };
    return Bicycle;
}(Vehicle));
var bicycle = new Bicycle(true, 2);
console.log(bicycle.pedal());
var Employees = /** @class */ (function () {
    function Employees(name, id) {
        this.name = name;
        this.id = id;
    }
    Employees.prototype.work = function () {
        return "Employee name is ".concat(this.name);
    };
    return Employees;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary) {
        var _this = _super.call(this, name, id) || this;
        _this.salary = salary;
        return _this;
    }
    Manager.prototype.pay = function () {
        return "Salary is ".concat(this.salary);
    };
    return Manager;
}(Employees));
