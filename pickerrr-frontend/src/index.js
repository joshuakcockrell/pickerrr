import React from 'react';
import ReactDOM from 'react-dom';
import Palette from './Palette';
import $ from 'jquery';
import './index.css';

function getPalettes(callback) {
  console.log('GET random colors called');

  var request = $.ajax({
    url: 'https://5ccd5xqage.execute-api.us-west-2.amazonaws.com/prod/colors/random',
    method: 'get',
    contentType: 'application/json'
  });
  
  request.done(function (data, textStatus, jqXHR) {
    callback(null, data);
  });
  
  request.fail(function (jqXHR, textStatus, errorThrown) {
    console.log('GET frame failed: ' + errorThrown);
    callback(errorThrown);
  });
};

var palettes = [];

function loadPalettes() {
  console.log('loading palettes!');

  getPalettes(function (err, palettesData){
    if (err) {
      console.log(err);
      return;
    }
    palettes = palettesData.Items;
  });
};

loadPalettes();

function displayColor() {
  if (palettes.length > 0) {
    ReactDOM.render(<Palette palette={palettes.pop()} />, document.getElementById('container'));
  }
  if (palettes.length < 2) {
    console.log('loading more palettes!');
    loadPalettes();
  }
}

// Spacebar press
document.body.onkeyup = function(e){

  if(e.keyCode === 32) {
    displayColor();
  }
}

document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    displayColor();
}, false);


