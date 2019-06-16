class AccentuationContainer {
  constructor(type, accentuationsInfo) {
    const accentuation = accentuationsInfo[type];
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

    const domineTraitsElement = $('<ul>', {
      class: 'domine-traits',
      text: 'Доминирующие черты',
    });
    domineTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(domineTraitsElement);
    });

    const attractiveTraitsElement = $('<ul>', {
      class: 'attractive-traits',
      text: 'Доминирующие черты',
    });
    attractiveTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(attractiveTraitsElement);
    });

    const repulsiveTraitsElement = $('<ul>', {
      class: 'repulsive-traits',
      text: 'Доминирующие черты',
    });
    repulsiveTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(repulsiveTraitsElement);
    });

    const socialTraitsElement = $('<ul>', {
      class: 'social-traits',
      text: 'Доминирующие черты',
    });
    socialTraits.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(socialTraitsElement);
    });

    const attitudeToWorkElement = $('<ul>', {
      class: 'attitude-traits',
      text: 'Доминирующие черты',
    });
    attitudeToWork.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(attitudeToWorkElement);
    });

    const conflictSituationsElement = $('<ul>', {
      class: 'conflict-traits',
      text: 'Доминирующие черты',
    });
    conflictSituations.forEach((trait) => {
      $('<li>', { text: trait }).appendTo(conflictSituationsElement);
    });

    this.container = $('<div>', {
      class: 'accentuation-type',
      on: {
        click(e) {
          e.preventDeafult();
          $(this).toggleClass('active');
        },
      },
      append: [
        $('<a>', { href: '#', text: name }),
        $('<div>', {
          class: 'accentuation-type-content',
          append: [
            $('<p>', { text: description }),
            domineTraitsElement,
            attractiveTraitsElement,
            repulsiveTraitsElement,
            socialTraitsElement,
            attitudeToWorkElement,
            conflictSituationsElement,
          ],
        }),
      ],
    }).appendTo('#accentuations-container');
  }
}

export default AccentuationContainer;
