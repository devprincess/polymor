//introducing the parent class
class Car{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
        this.distanceCovered = 0;
}

//method to stimulate car moving
move() {
    this.distanceCovered += this.speed;
}

//method to display the car status
getStatus(){
    return `${this.name} has covered ${this.distanceCovered} units.`;
}
}

//NEW SUBCLASSES ARE INTRODUCE


//new subcar(SportsCar) inherited from car
class SportsCar extends Car{
    constructor(name, speed, turboBoost){
        super(name, speed)
        this.turboBoost=turboBoost;
    }

    move(){
        this.distanceCovered += this.speed + this.turboBoost;
    }
}

//new subcar(Truck) inherited from car
class Truck extends Car {
    constructor(name, speed, LoadCapacity){
        super(name, speed)
        this.LoadCapacity=LoadCapacity;
    }

//watching load weight
move(){
//place slow movement if carrying loads
    const loadPenalty = this.loadCapacity > 1000 ? 5 : 0;
    this.distanceCovered += this.speed - loadPenalty;
}
}

// Race Class: Manages the race
class Race {
    constructor(distance) {
      this.distance = distance; 
      this.cars = []; 
    }
  
    // Add a car to the race
    addCar(car) {
      this.cars.push(car);
    }
// Start the race to determine the winner!!!!!

startRace() {
    let raceOver = false;

    console.log("The race begins!");
    while (!raceOver) {
        this.cars.forEach((car) => {
        car.move(); 
        console.log(car.getStatus()); 
        });

    // Check if any car has completed the race
    raceOver = this.cars.some((car) => car.distanceCovered >= this.distance);
    }

    // Determine the winner
    const winner = this.cars.reduce((leadCar, car) =>
        car.distanceCovered > leadCar.distanceCovered ? car : leadCar
    );

    console.log(`The winner is ${winner.name}!`);
  }
  }

// Create cars
    const ferrari = new SportsCar("Chevrolet", 0, 5);
    const truck = new Truck("Big Truck", 14, 1200);
    const toyota = new Car("Toyota", 17);

// Create a race
const race = new Race(100);

    // Add cars to the race
    race.addCar(ferrari);
    race.addCar(truck);
    race.addCar(toyota);

    // Start the race
    race.startRace();