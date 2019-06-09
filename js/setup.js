'use strict';

var setupWindow = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215, 210,55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_CHARACTERS_COUNT = 4;

var showSetupWindow = function () {
  if (setupWindow.classList.contains('hidden')) {
    setupWindow.classList.remove('hidden');
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  }
};

var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * (elements.length - 1))];
};

var createCharacter = function (characterName, characterSurname, characterCoatColor, characterEyesColor) {
  var character = {
    name: characterName + ' ' + characterSurname,
    coatColor: characterCoatColor,
    eyesColor: characterEyesColor
  };
  return character;
};

var createCharacters = function () {
  var characters = [];
  for (var i = 0; i < SIMILAR_CHARACTERS_COUNT; i++) {
    characters[i] = createCharacter(getRandomElement(NAMES), getRandomElement(SURNAMES), getRandomElement(COAT_COLORS), getRandomElement(EYES_COLORS));
  }
  return characters;
};

var showSimilarWizards = function () {
  var characters = createCharacters();
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < SIMILAR_CHARACTERS_COUNT; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }
  similarListElement.appendChild(fragment);
};

showSimilarWizards();
showSetupWindow();