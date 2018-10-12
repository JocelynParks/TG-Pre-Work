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

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

//new
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);



//Now, all the parent class methods should be accessible by the child classes (this was done by the 'extends' keyword). This example investigates what happens when an input of 5 is called. Then, of course, printed.
