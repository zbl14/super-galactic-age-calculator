import { Age } from '../src/js/date.js';

describe('Age', () => {
  
  test('should return Age object with five properties for name, age, gender, race and country',() => {
    const age = new Age("Ben", 30, "male", "Asian", "USA")
    expect(age.name).toEqual("Ben");
    expect(age.age).toEqual(30);
    expect(age.gender).toEqual("male");
    expect(age.race).toEqual("Asian");
    expect(age.country).toEqual("USA");
  })
});