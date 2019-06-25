import $ from 'jquery';
import createRollupContaner from './createRollupElement';

class AccentuationContainer {
  constructor(accentuation) {
    const {
      name,
      description,
      domineTraits,
      attractiveTraits,
      repulsiveTraits,
      socialTraits,
      attitudeToWork,
      conflictSituations,
    } = accentuation;

    const descriptionElement = $('<p>', { text: description });

    const domineTraitsElement = $('<ul>', {
      class: 'domine-traits',
      text: 'Доминирующие черты:',
    });
    domineTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(domineTraitsElement);
    });

    const attractiveTraitsElement = $('<ul>', {
      class: 'attractive-traits',
      text: 'Привлекательные черты:',
    });
    attractiveTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(attractiveTraitsElement);
    });

    const repulsiveTraitsElement = $('<ul>', {
      class: 'repulsive-traits',
      text: 'Отталкивающие черты:',
    });
    repulsiveTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(repulsiveTraitsElement);
    });

    const socialTraitsElement = $('<ul>', {
      class: 'social-traits',
      text: 'Особенности общения и дружбы:',
    });
    socialTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(socialTraitsElement);
    });

    const attitudeToWorkElement = $('<ul>', {
      class: 'attitude-traits',
      text: 'Отношение к учебе и работе:',
    });
    attitudeToWork.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(attitudeToWorkElement);
    });

    const conflictSituationsElement = $('<ul>', {
      class: 'conflict-traits',
      text: 'Конфликтогенные ситуации:',
    });
    conflictSituations.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(conflictSituationsElement);
    });

    this.infoElements = {
      domineTraitsElement,
      attractiveTraitsElement,
      repulsiveTraitsElement,
      socialTraitsElement,
      attitudeToWorkElement,
      conflictSituationsElement,
    };

    this.container = createRollupContaner(name, [
      descriptionElement,
      domineTraitsElement,
      attractiveTraitsElement,
      repulsiveTraitsElement,
      socialTraitsElement,
      attitudeToWorkElement,
      conflictSituationsElement,
    ]).appendTo('#accentuations-container');
  }
}

export default AccentuationContainer;
