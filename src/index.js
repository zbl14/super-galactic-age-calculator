import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from '../src/js/age.js';

$(document).ready(() => {
  $("form#inputtedDate").submit((event) => {
    event.preventDefault();
    const name = $("#inputtedName").val();
    const ageOnEarth = $("#inputtedAge").val();
    const gender = $("#inputtedGender").val();
    const race = $("#inputtedRace").val();
    const country = $("#inputtedCountry").val();
    let age = new Age(name, ageOnEarth, gender, race, country);
    age
  });
});