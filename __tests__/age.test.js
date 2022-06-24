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
    expect(reusableAge.name).toEqual("Ben");
    expect(reusableAge.age).toEqual(30);
    expect(reusableAge.gender).toEqual("male");
    expect(reusableAge.race).toEqual("Asian");
    expect(reusableAge.country).toEqual("USA");
  });

  test('should retune age in Mercury years', () => {
    reusableAge.galacticAge(); 
    expect(reusableAge.mercuryY).toEqual(7.2)
  }); 


});