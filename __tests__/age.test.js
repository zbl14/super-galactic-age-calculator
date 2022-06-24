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

  test('should return age in Mercury years', () => {
    reusableAge.galacticAge(); 
    expect(reusableAge.mercuryY).toEqual(125.00)
  }); 

  test('should return age in Mercury years, Venus years, Mars years and Jupiter years', () => {
    reusableAge.galacticAge(); 
    expect(reusableAge.mercuryY).toEqual(125.00)
    expect(reusableAge.venusY).toEqual(48.39)
    expect(reusableAge.marsY).toEqual(15.96)
    expect(reusableAge.jupiterY).toEqual(2.53)
  }); 

  test('should return years left on Earth based on current age, gender, race and country of residence', () => {
    expect(reusableAge.yrsleftOnEarth()).toEqual(55.3)
  }); 

  test('should return 59.7 for a 30-years-old asian female who lives in the US', () => {
    const asianFemale = new Age("A", 30, "female", "Asian", "USA");
    expect(asianFemale.yrsleftOnEarth()).toEqual(59.7);
  }); 

  test('should return 51.1 for a 30-years-old Hispanic male who lives in the US', () => {
    const asianFemale = new Age("A", 30, "male", "Hispanic", "USA");
    expect(asianFemale.yrsleftOnEarth()).toEqual(51.1);
  }); 

  test('should return 56.3 for a 30-years-old Hispanic female who lives in the US', () => {
    const asianFemale = new Age("A", 30, "female", "Hispanic", "USA");
    expect(asianFemale.yrsleftOnEarth()).toEqual(56.3);
  }); 
});