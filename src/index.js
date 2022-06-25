import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from '../src/js/age.js';

$(document).ready(() => {
  $("form#info").submit((event) => {
    event.preventDefault();
    const name = $("#inputtedName").val();
    const ageOnEarth = $("#inputtedAge").val();
    const gender = $("#inputtedGender").val();
    const race = $("#inputtedRace").val();
    const country = $("#inputtedCountry").val();
    const time = $("#inputtedExerciseTime").val();
    let age = new Age(name, ageOnEarth, gender, race, country);
    age.galacticAge(); 
    $("#earthY").val(age.age);
    $("#mercurianYr").val(age.mercurianYr);
    $("#venusianYr").val(age.venusianYr);
    $("#martianYr").val(age.martianYr);
    $("#jovianYr").val(age.jovianYr);
    age.yrsLeftOnEarth();
    if(age.yrsOutlive === undefined) {
      age.yrsLeftOnOtherPlanets(time);
      $(".yrsLeft input").val(age.yrsLeft);
      $(".mercurianYrLeft input").val(age.mercurianYrLeft);
      $(".venusianYrLeft input").val(age.venusianYrLeft);
      $(".martianYrLeft input").val(age.martianYrLeft);
      $(".jovianYrLeft input").val(age.jovianYrLeft);
    } else {
      age.yrsLeftOnOtherPlanets();
      $(".yrsLeft").hide();
      $(".mercurianYrLeft").hide();
      $(".venusianYrLeft").hide();
      $(".martianYrLeft").hide();
      $(".jovianYrLeft").hide();
      $(".yrsOutlive").show()
      $(".mercurianYrOutlive").show();
      $(".venusianYrOutlive").show();
      $(".martianYrOutlive").show();
      $(".jovianYrOutlive").show();
      $(".yrsOutlive input").val(age.yrsOutlive);
      $(".mercurianYrOutlive input").val(age.mercurianYrLeft)
      $(".venusianYrOutlive input").val(age.venusianYrLeft)
      $(".martianYrOutlive input").val(age.martianYrLeft)
      $(".jovianYrOutlive input").val(age.jovianYrLeft)
    }
  });
});