export class Age {
  constructor (name, age, gender, race, country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.country = country;
  }

  galacticAge () {
    this.mercuryY = parseFloat((this.age / 0.24).toFixed(2));
    this.venusY = parseFloat((this.age / 0.62).toFixed(2));
    this.marsY = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterY = parseFloat((this.age / 11.86).toFixed(2));
    return this.mercuryY, this.venusY, this.marsY, this.jupiterY;
  }

  yrsleftOnEarth () {
    let yrsleft;
    if (this.gender === "male" && this.race === "Asian" && this.country === "USA") {
      yrsleft = parseFloat((85.3 - this.age).toFixed(2));
    } else if (this.gender === "female" && this.race === "Asian" && this.country === "USA") {
      yrsleft = parseFloat((89.7 - this.age).toFixed(2));
    } else if (this.gender === "male" && this.race === "Hispanic" && this.country === "USA") {
      yrsleft = parseFloat((81.1 - this.age).toFixed(2));
    } else if (this.gender === "female" && this.race === "Hispanic" && this.country === "USA") {
      yrsleft = parseFloat((86.3 - this.age).toFixed(2));
    } else if (this.gender === "male" && this.race === "Non-Hispanic White" && this.country === "USA") {
      yrsleft = parseFloat((76.5 - this.age).toFixed(2));
    } else if (this.gender === "female" && this.race === "Non-Hispanic White" && this.country === "USA") {
      yrsleft = parseFloat((81.2 - this.age).toFixed(2));
    } else if (this.gender === "male" && this.race === "Non-Hispanic African American" && this.country === "USA") {
      yrsleft = parseFloat((72.3 - this.age).toFixed(2));
    } else if (this.gender === "female" && this.race === "Non-Hispanic African American" && this.country === "USA") {
      yrsleft = parseFloat((78.8 - this.age).toFixed(2));
    }
    return yrsleft;
  }
}