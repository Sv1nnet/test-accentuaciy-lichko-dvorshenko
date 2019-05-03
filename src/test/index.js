/* eslint-disable */
const state = {
  questions: [

  ],
  answers: [

  ],
  currentQuestion: 0,
  result: {
    accentuations: {
      hyperthymic: 0,
      cycloid: 0,
      labile: 0,
      asthenic: 0,
      sensitive: 0,
      psychasthenic : 0,
      schizoid: 0,
      epileptoid: 0,
      hysterical: 0,
      unstable: 0,
      conformal: 0,
    },
    extraInfo: {
      conformity: undefined,
      negativeAttitude: undefined,
      dissimulation: undefined,
      heightenedFrankness: undefined,
      emancipation: undefined,
      delinquency: undefined,
      genderTraits: undefined,
      addictionToAlcoholism: undefined,
      socialDisadaptationRisk: undefined,
      probabilityOfPsychopathy: undefined,
      tendencyOfDepression: undefined,
      drugsRisk: undefined,
      discordance: undefined,
      suicideAttempts: undefined,
    },
  },
};

$(document).ready(function(){

  // Show and hide instructions
  $('.instructions-container').on('click', 'h1', function() {
    $('.instructions-container').toggleClass('active');
  });

  // Questions to display
  const questions = [
    'Consectetur adipisicing elit. Tempore corrupti pariatur eaque adipisci vero error tempora accusantium laboriosam.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non id magnam dolorum error voluptate. Omnis dolore error eum fugit!',
    'Nostrum quam quasi rem minima reiciendis molestias velit pariatur, veritatis hic ducimus dignissimos quae sunt excepturi recusandae iure eius?',
  ];

  // Init contol and container elements
  const qEl = $('.questions'),
        leftArrow = $('.left-arrow'),
        rightArrow = $('.right-arrow'),
        questionElements = $('.question > p');

  // Display previous question        
  leftArrow.on('click', function() {
    qEl.css({
      transition: '.4s',
      transform: 'translate(0%)',
    });

    // Return container to initial state and do this immediately - transition: 0s
    setTimeout(function() {
      qEl.css({
        transition: '0s',
        transform: 'translate(-33.3333%)',
      });
      $(questionElements[1]).text('Consectetur adipisicing elit. Tempore corrupti pariatur eaque adipisci vero error tempora accusantium laboriosam.')
    }, 400);
  });

  // Display next question
  rightArrow.on('click', function() {
    qEl.css({
      transition: '.4s',
      transform: 'translate(-66.6666%)',
    });

    // Return container to initial state and do this immediately - transition: 0s
    setTimeout(function() {
      qEl.css({
        transition: '0s',
        transform: 'translate(-33.3333%)',
      });
      $(questionElements[1]).text('Nostrum quam quasi rem minima reiciendis molestias velit pariatur, veritatis hic ducimus dignissimos quae sunt excepturi recusandae iure eius?')
    }, 400);
  });
});