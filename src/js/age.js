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
    return this.mercuryY
  }
}