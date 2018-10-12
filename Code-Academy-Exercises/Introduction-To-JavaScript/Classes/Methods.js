class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department =

      department;
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

//"Class method and getter syntax is the same as it is for objects except you can not include commas between methods." I added getter methods for name, departmenr, and remainingVacationDays (I added this in step 2). Also, in step one, I added _ to both name and department to indicate these properties should not be accessed directly.
