// import $ from 'jquery';
import createRollupElement from './createRollupElement';

class AccentuationContainer {
  constructor(accentuation, accentName) {
    const {
      name,
      description,
      domineTraits,
      attractiveTraits,
      repulsiveTraits,
      socialTraits,
      attitudeToWork,
      conflictSituations,
      recommendations,
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

    const adultsRecommendationsDescriiption = $('<p>', { text: 'В основу данного раздела положены рекомендации, предложенные А.С. Прутченковым и А.А. Сияловым (Эй ты. параноик! — М., 1994). И родителям, и учителям прежде всего следует знать характеристики типа акцентуации подростка и его специфические особенности. Кроме того, следует научить акцентуанта выполнять соответствующие ролевые упражнения и мотивировать их регулярное выполнение.' });

    const adults = $('<ul>', { text: 'Рекомендации для родителей и учителей:' });
    recommendations.adults.forEach((rec) => {
      $('<li>', { text: rec }).appendTo(adults);
    });

    const subjectsRecommendationsDescriiption = $('<p>', { text: 'Желающим самим совершенствовать свою личность акцентуантам предлагаются приведенные в таблице упражнения в исполнении определенных для каждого типа акцентуации ролей.' });

    const subjects = $('<ul>', { text: 'Рекомендации для проходящих тест:' });
    recommendations.subjects.forEach((rec) => {
      $('<li>', { text: `"${rec.name}" - ${rec.descriptopn}` }).appendTo(subjects);
    });


    const recommendationsElement = createRollupElement('Рекомендации', [
      adultsRecommendationsDescriiption,
      adults,
      subjectsRecommendationsDescriiption,
      subjects,
    ]);

    this.infoElements = {
      domineTraitsElement,
      attractiveTraitsElement,
      repulsiveTraitsElement,
      socialTraitsElement,
      attitudeToWorkElement,
      conflictSituationsElement,
      recommendationsElement,
    };

    this.container = createRollupElement(name, [
      descriptionElement,
      domineTraitsElement,
      attractiveTraitsElement,
      repulsiveTraitsElement,
      socialTraitsElement,
      attitudeToWorkElement,
      conflictSituationsElement,
      recommendationsElement,
    ]).appendTo('#accentuations-container');
  }
}

export default AccentuationContainer;
