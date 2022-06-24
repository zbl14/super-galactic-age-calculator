export class Age {
  constructor(name, age, gender, race, country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.country = country;
  }

  galacticAge() {
    this.mercuryY = parseFloat((this.age / 0.24).toFixed(2));
    this.venusY = parseFloat((this.age / 0.62).toFixed(2));
    this.marsY = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterY = parseFloat((this.age / 11.86).toFixed(2));
    return this.mercuryY, this.venusY, this.marsY, this.jupiterY;
  }

  yrsLeftOnEarth() {
    if (this.country !== "USA") {
      this.yrsLeft = parseFloat((72.74 - this.age).toFixed(2));
    } else {
      if (this.gender === "male" && this.race === "Asian") {
        this.yrsLeft = parseFloat((85.3 - this.age).toFixed(2));
      } else if (this.gender === "female" && this.race === "Asian") {
        this.yrsLeft = parseFloat((89.7 - this.age).toFixed(2));
      } else if (this.gender === "male" && this.race === "Hispanic") {
        this.yrsLeft = parseFloat((81.1 - this.age).toFixed(2));
      } else if (this.gender === "female" && this.race === "Hispanic") {
        this.yrsLeft = parseFloat((86.3 - this.age).toFixed(2));
      } else if (this.gender === "male" && this.race === "Non-Hispanic White") {
        this.yrsLeft = parseFloat((76.5 - this.age).toFixed(2));
      } else if (this.gender === "female" && this.race === "Non-Hispanic White") {
        this.yrsLeft = parseFloat((81.2 - this.age).toFixed(2));
      } else if (this.gender === "male" && this.race === "Non-Hispanic African American") {
        this.yrsLeft = parseFloat((72.3 - this.age).toFixed(2));
      } else if (this.gender === "female" && this.race === "Non-Hispanic African American") {
        this.yrsLeft = parseFloat((78.8 - this.age).toFixed(2));
      }
    }
    // if (this.yrsLeft < 0) {
    //   this.yrsOutlive = Math.abs(this.yrsLeft)
    // }
    return this.yrsLeft;
  }

  exercise(time) {
    if (time === "30 - 60 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 1.8).toFixed(2));
    } else if (time === "60 - 90 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 2.5).toFixed(2));
    } else if (time === "90 - 150 mins") {
      this.yrsLeft = parseFloat((this.yrsLeft + 4.5).toFixed(2));
    }
    return this.yrsLeft
  }

  yrsLeftOnOtherPlanets() {
    this.mercuryYLeft = parseFloat((this.yrsLeft / 0.24).toFixed(2));
    this.venusYLeft = parseFloat((this.yrsLeft / 0.62).toFixed(2));
    this.marsYLeft = parseFloat((this.yrsLeft / 1.88).toFixed(2));
    this.jupiterYLeft = parseFloat((this.yrsLeft / 11.86).toFixed(2));
    return this.mercuryYLeft, this.venusYLeft, this.marsYLeft, this.jupiterYLeft
  }
}