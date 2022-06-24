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
    expect(reusableAge.yrsLeftOnEarth()).toEqual(55.3)
  }); 

  test('should return 59.7 for a 30-years-old asian female who lives in the US', () => {
    const asianFemale = new Age("A", 30, "female", "Asian", "USA");
    expect(asianFemale.yrsLeftOnEarth()).toEqual(59.7);
  }); 

  test('should return 51.1 for a 30-years-old Hispanic male who lives in the US', () => {
    const hispanicMale = new Age("A", 30, "male", "Hispanic", "USA");
    expect(hispanicMale.yrsLeftOnEarth()).toEqual(51.1);
  }); 

  test('should return 56.3 for a 30-years-old Hispanic female who lives in the US', () => {
    const hispanicFemale = new Age("A", 30, "female", "Hispanic", "USA");
    expect(hispanicFemale.yrsLeftOnEarth()).toEqual(56.3);
  }); 

  test('should return 46.5 for a 30-years-old Non-Hispanic White male who lives in the US', () => {
    const nonhisWhiteMale = new Age("A", 30, "male", "Non-Hispanic White", "USA");
    expect(nonhisWhiteMale.yrsLeftOnEarth()).toEqual(46.5);
  }); 

  test('should return 51.2 for a 30-years-old Non-Hispanic White female who lives in the US', () => {
    const nonhisWhiteFemale = new Age("A", 30, "female", "Non-Hispanic White", "USA");
    expect(nonhisWhiteFemale.yrsLeftOnEarth()).toEqual(51.2);
  }); 

  test('should return 42.3 for a 30-years-old Non-Hispanic African American male who lives in the US', () => {
    const nonhisAAMale = new Age("A", 30, "male", "Non-Hispanic African American", "USA");
    expect(nonhisAAMale.yrsLeftOnEarth()).toEqual(42.3);
  }); 

  test('should return 48.8 for a 30-years-old Non-Hispanic African American female who lives in the US', () => {
    const nonhisAAFemale = new Age("A", 30, "female", "Non-Hispanic African American", "USA");
    expect(nonhisAAFemale.yrsLeftOnEarth()).toEqual(48.8);
  }); 

  test('should return 42.74 for a 30-years-old person who lives out of the US', () => {
    const someoneNotInUSA = new Age("A", 30, "female", "Non-Hispanic White", "ROW");
    expect(someoneNotInUSA.yrsLeftOnEarth()).toEqual(42.74);
  }); 

  test('should add 1.8 years if excerise at least 30 mins each week', () => {
    reusableAge.yrsLeftOnEarth();
    let time = "30 - 60 mins";
    expect(reusableAge.exercise(time)).toEqual(57.1);
  });

  test('should add 2.5 years if excerise 60 -90 mins each week', () => {
    reusableAge.yrsLeftOnEarth();
    let time = "60 - 90 mins";
    expect(reusableAge.exercise(time)).toEqual(57.8);
  });

  test('should add 2.5 years if excerise 60 -90 mins each week', () => {
    reusableAge.yrsLeftOnEarth();
    let time = "90 - 150 mins";
    expect(reusableAge.exercise(time)).toEqual(59.8);
  });

  test('should not adujst years if excerise time less than 30 mins each week', () => {
    reusableAge.yrsLeftOnEarth();
    let time = "less than 30 mins";
    expect(reusableAge.exercise(time)).toEqual(55.3);
  });

  test('should return years left to live on Mercury, Venus, Mars and Jupiter', () => {
    reusableAge.yrsLeftOnEarth();
    reusableAge.exercise("30 - 60 mins");
    reusableAge.yrsLeftOnOtherPlanets();
    expect(reusableAge.mercuryYLeft).toEqual(237.92);
    expect(reusableAge.venusYLeft).toEqual(92.10);
    expect(reusableAge.marsYLeft).toEqual(30.37);
    expect(reusableAge.jupiterYLeft).toEqual(4.81);
  })

  test('should return years lived past the life expectancy', ()=> {
    const longevity = new Age ("Ben", 90, "male", "Asian", "USA")
    expect(longevity.yrsLeftOnEarth).toEqual(4.7)
  })
});