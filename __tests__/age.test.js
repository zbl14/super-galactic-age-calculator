import { Age } from '../src/js/age.js';

describe('Age', () => {
  let reusableAge;
  beforeEach(() => {
    reusableAge = new Age("Ben", 30, "male", "Asian", "USA")
  }) 
  
  test('should show how beforeEach() works', () => {
    console.log(reusableAge);
  });

  test('should return Age object with five properties for name, age, gender, race and country',() => {
    const age = new Age("Ben", 30, "male", "Asian", "USA")
    expect(age.name).toEqual("Ben");
    expect(age.age).toEqual(30);
    expect(age.gender).toEqual("male");
    expect(age.race).toEqual("Asian");
    expect(age.country).toEqual("USA");
  });

  test('should retune age in Mercury years', () => {
    const age = new Age("Ben", 30, "male", "Asian", "USA")
    age.galacticAge(); 
    expect(age.mercuryY).toEqual(7.2)
  }); 


});