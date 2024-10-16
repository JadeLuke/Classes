class Vehicle {
wheels: number

constructor(wheels:number){
    this.wheels = wheels
}

move(){
    return `This vehicle is moving`
}


}

class Car extends Vehicle {
doors: number

constructor(doors: number, wheels: number){
     super(wheels)
     this.doors = doors
}

start(){
    return `engine is on`
}


}

class Bicycle extends Vehicle {
    isPedal: boolean

    constructor(isPedal: boolean, wheels: number){
        super(wheels)
        this.isPedal = isPedal
    }

    pedal(){
        if(this.isPedal){
            console.log( `Has pedals`)
        }
    }

}

let bicycle = new Bicycle(true, 2)
console.log(bicycle.pedal());


class Employees {
name: string
id: number
constructor(name: string, id: number){
this.name = name
this.id = id
}

work(){
    return `Employee name is ${this.name}`
}

}

class Manager extends Employees{

    
}