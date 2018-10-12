class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
//New:
class Nurse extends HospitalEmployee {

  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}


const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

//After sharing the properties and methods in the parent, now they are extended to the second class. Use the 'extend' keyword.
