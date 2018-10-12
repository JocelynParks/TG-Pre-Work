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
// Hospital Employee is the parent class and nurse and doctor are the child classes.  They each have three similarities which I created getters for the properities.
