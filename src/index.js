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
    $("#earthY").html(age.age);
    $("#mercurianYr").html(age.mercurianYr);
    $("#venusianYr").html(age.venusianYr);
    $("#martianYr").html(age.venusianYr);
    $("#jovianYr").html(age.jovianYr);
    time;
  });
});