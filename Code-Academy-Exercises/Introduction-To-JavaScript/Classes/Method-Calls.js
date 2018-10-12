class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//New code:
console.log(surgeonCurry.name);

surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays);

//This exercise demonsrates how to use methods to access and manipulate data from certain instances. In this case, I printed surgeon and saved 'name' to it. Then, called takeVacdays and added an input of 3, and lastly, called takeVacdays and saved remainingVacDays.
