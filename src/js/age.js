export class Age {
  constructor(name, age, gender, race, country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.country = country;
  }

  galacticAge() {
    this.mercurianYr = parseFloat((this.age / 0.24).toFixed(2));
    this.venusianYr = parseFloat((this.age / 0.62).toFixed(2));
    this.martianYr = parseFloat((this.age / 1.88).toFixed(2));
    this.jovianYr = parseFloat((this.age / 11.86).toFixed(2));
    return this.mercurianYr, this.venusianYr, this.martianYr, this.jovianYr;
  }

  yrsLeftOnEarth() {
    if (this.country !== "USA") {
      this.yrsLeft = parseFloat((72.74 - this.age).toFixed(2));
    } else {
      if (this.gender === "Male" && this.race === "Asian") {
        this.yrsLeft = parseFloat((85.3 - this.age).toFixed(2));
      } else if (this.gender === "Female" && this.race === "Asian") {
        this.yrsLeft = parseFloat((89.7 - this.age).toFixed(2));
      } else if (this.gender === "Male" && this.race === "Hispanic") {
        this.yrsLeft = parseFloat((81.1 - this.age).toFixed(2));
      } else if (this.gender === "Female" && this.race === "Hispanic") {
        this.yrsLeft = parseFloat((86.3 - this.age).toFixed(2));
      } else if (this.gender === "Male" && this.race === "Non-Hispanic White") {
        this.yrsLeft = parseFloat((76.5 - this.age).toFixed(2));
      } else if (this.gender === "Female" && this.race === "Non-Hispanic White") {
        this.yrsLeft = parseFloat((81.2 - this.age).toFixed(2));
      } else if (this.gender === "Male" && this.race === "Non-Hispanic African American") {
        this.yrsLeft = parseFloat((72.3 - this.age).toFixed(2));
      } else {
        this.yrsLeft = parseFloat((78.8 - this.age).toFixed(2));
      }
    }
    if (this.yrsLeft < 0) {
      this.yrsLeft = Math.abs(this.yrsLeft);
      return this.yrsLeft;
    } else {
      return this.yrsLeft;
    }
  }

  exercise(time) {
    if (time === "30 - 60 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 1.8).toFixed(2));
    } else if (time === "60 - 90 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 2.5).toFixed(2));
    } else if (time === "90 - 150 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 4.5).toFixed(2));
    }
    return this.yrsLeft;
  }

  yrsLeftOnOtherPlanets(time) {
    this.yrsLeftOnEarth();
    this.exercise(time);
    this.mercurianYrLeft = parseFloat((this.yrsLeft / 0.24).toFixed(2));
    this.venusianYrLeft = parseFloat((this.yrsLeft / 0.62).toFixed(2));
    this.martianYrLeft = parseFloat((this.yrsLeft / 1.88).toFixed(2));
    this.jovianYrLeft = parseFloat((this.yrsLeft / 11.86).toFixed(2));
    return this.mercurianYrLeft, this.venusianYrLeft, this.martianYrLeft, this.jovianYrLeft;
  }
}