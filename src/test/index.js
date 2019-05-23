/* eslint-disable */
const state = {
  questions: [
    'У меня почти всегда плохое самочувствие.',
    'В одни дни я встаю веселым и жизнерадостным, в другие — безо всякой причины с утра угнетен и уныл.',
    'Я не пью спиртного, так как это противоречит моим принципам.',
    'Очень люблю мать и боюсь, что с ней что-нибудь случится.',
    'В одиночестве я чувствую себя спокойнее.',
    'Неудачи меня пугают, и я прежде всего виню самого себя.',
    'Не выношу, когда меня опекают и за меня все решают.',
    'В детстве я больше любил беседовать со взрослыми, чем играть со сверстниками.',
    'Мое самочувствие вполне удовлетворительное.',
    'Нередко бывало, что, проснувшись, я не мог сразу сообразить, где я и что со мной.',
    'В половом отношении я быстро возбуждаюсь, но быстроуспокаиваюсь и охладеваю.',
    'Я ценю такого друга, который умеет меня выслушать,приободрить, вселить уверенность, успокоить.',
    'Одиночество я переношу легко, если только оно не связано с неприятностями.',
    'Временами я люблю приключения и часто рискую, но временами приключения и риск становятся мне не по душе.',
    'Я не решаюсь прервать даже вовсе никчемные для меня наставления или избавиться от ненужного для меня покровительства.',
    'Школьные занятия меня очень сильно утомляли/утомляют.',
    'Малейшие неприятности сильно огорчают меня.',
    'Нередко я стесняюсь есть при посторонних.',
    'Считаю, что половым проблемам не следует придавать большого значения.',
    'Люблю иметь много друзей и тепло отношусь к ним.',
    'Я уверен, что в будущем докажу всем свою правоту.',
    'Я люблю быть первым там, где меня любят; бороться запервенство я не люблю.',
    'Ужасно не люблю всякие правила, которые меня стесняют.',
    'Я слишком мнителен, без конца тревожусь и беспокоюсь обо всем.',
    'Я сплю мало, но встаю бодрым; сны вижу редко.',
    'Периодами я выпиваю очень охотно, периодами меняк спиртному не тянет.',
    'Деньги меня совершенно не интересуют.',
    'Мне приходилось терпеть от окружающих много обид и обманов, и это всегда настораживает меня.',
    'Меня привлекает лишь то новое, что соответствует моим принципам и интересам.',
    'В одни периоды критику и возражения переношу легко, в другие — очень болезненно.',
    'Очень любил/люблю сочинять всякие сказки и фантастические истории.',
    'Я чрезмерно чувствителен и обидчив.',
    'Я просыпаюсь с неприятной мыслью, что надо идти на работу или на учебу.',
    'Я избегаю пить спиртное из-за плохого самочувствия и сильной головной боли впоследствии.',
    'Я люблю родителей, но не переношу, когда мною распоряжаются и командуют.',
    'Я считаю, что никто не должен отрываться от коллектива.',
    'При неудачах мне хочется убежать куда-нибудь подальше и не возвращаться.',
    'Я охотно слушаю те наставления, которые касаются моего здоровья.',
    'В детстве я любил играть один или смотреть издали, как играют другие дети.',
    'Я легко переношу боль и физические страдания.',
    'Утром я встаю бодрым и энергичным.',
    'Малейшая неприятность подавляет у меня половое влечение.',
    'Для меня важен не один друг, а дружный хороший коллектив.',
    'Я не боюсь одиночества.',
    'Я люблю мечтать о приключениях, но не ищу их в жизни.',
    'Я люблю, когда обо мне заботятся, но не люблю, чтобы мною командовали.',
    'Периодами любил/люблю школу, периодами она мне начинала/начинает надоедать.',
    'Мое настроение улучшается, когда меня оставляют одного.',
    'Я люблю лакомства и деликатесы.',
    'Я нахожу ненормальности в своем половом влечении и стараюсь бороться с ними.',
    'Жизнь научила меня не быть слишком откровенным даже с друзьями.',
    'Мои планы на будущее я люблю разрабатывать в деталях и во всех деталях стараюсь их осуществить.',
    'Я всегда стремлюсь учить людей правилам и порядку.',
    'Я часто боюсь, что меня по ошибке примут за нарушителя законов.',
    'Временами я доволен собой, временами ругаю себя за нерешительность и вялость.',
    'Я плохо сплю ночью и чувствую сонливость днем.',
    'Мое желание выпить зависит от настроения.',
    'Нехватка денег меня раздражает.',
    'От окружающих я стараюсь держаться подальше.',
    'Новое приятно, если только обещает для меня что-то хорошее.',
    'От критиков мне хочется убежать подальше.',
    'Я стараюсь соблюдать правила и законы, но это не всегда мне удается.',
    'Я страдаю от того, что меня не понимают.',
    'Мне трудно проснуться в назначенный час.',
    'Спиртным я стараюсь заглушить приступ плохого настроения,  тоски и/или тревоги.',
    'Мои родители не дали мне того, что необходимо в жизни.',
    'Я стесняюсь незнакомых людей и боюсь заговорить первым.',
    'Если в моих неудачах кто-то виноват, я не оставляю его безнаказанным.',
    'Я слушаю наставления только тех, кто имеет на это право.',
    'С детства я стремился/стремлюсь к аккуратности и порядку.',
    'У меня почти всегда что-нибудь болит.',
    'Периодами я утром чувствую себя бодрым, периодами — разбитым.',
    'Половое влечение меня мало беспокоит.',
    'Я считаю себя виноватым перед родителями.',
    'В одиночестве я скучаю по людям, а среди людей быстро устаю и ищу одиночества.',
    'Мне не до приключений, а рискую я только, если к этому принуждают обстоятельства.',
    'Я внимательно слушаю наставления и не противлюсь, когда меня опекают.',
    'В младших классах любил школу, потом она стала меня тяготить.',
    'Мое плохое настроение зависит от плохого самочувствия.',
    'Я ем очень мало, иногда долго ничего не ем.',
    'Наибольшее удовольствие мне доставляет флирт и ухаживание.',
    'меня нет никакого желания иметь друга.',
    'Я утешаю себя тем, что в будущем исполнятся все моижелания.',
    'Я могу идти впереди других в рассуждениях, но не в действиях.',
    'Всегда считаю, что для интересного и заманчивого дела всякие правила и законы можно обойти.',
    'Мне не хватает холодной рассудительности.',
    'Перед тем, как уснуть, я люблю помечтать.',
    'Я плохо переношу голод — быстро слабею.',
    'Люблю одеваться так, чтобы было к лицу.',
    'Я легко ссорюсь, но быстро мирюсь.',
    'Я боюсь перемен в жизни: новая обстановка меня пугает.',
    'Не люблю, когда меня критикуют и когда мне возражают, — сержусь и не всегда могу сдержать свой гнев.',
    'Часто упрекаю себя за то, что нарушаю правила и нестрого соблюдаю законы.',
    'Другие находят у меня крупные недостатки, я считаю, что они преувеличивают.',
    'Я могу свободно регулировать свой сон.',
    'К спиртному я испытываю отвращение.',
    'Люблю и привязан к родителям, но бывает, сильно обижаюсь и даже сержусь на них.',
    'Я охотно и легко завожу новые знакомства.',
    'Если случается неудача, то я всегда ищу, что же я сделал неправильно.',
    'Я убедился, что критикуют обычно только для того, чтобы тебе напакостить или самим выдвинуться.',
    'В детстве я был таким же как сейчас: меня легко было огорчить, но легко успокоить и развеселить.',
    'Мое самочувствие часто меняется — иногда по нескольку раз в день.',
    'Проснувшись, я нередко еще долго переживаю то, что видел во сне.',
    'Я выпиваю со всеми, чтобы не нарушать компанию.',
    'Мои родные меня не понимают и кажутся мне чужими.',
    'В одиночестве я размышляю или беседую с воображаемым собеседником.',
    'Я много раз взвешиваю все «за» и «против» и все никакне решаюсь рискнуть.',
    'Совершенно не переношу наставлений, если они даются начальственным тоном.',
    'Сильно переживал/переживаю замечания и отметки, которые меня не удовлетворяли.',
    'Мое настроение легко меняется от незначительных причин.',
    'Периодами у меня бывает волчий аппетит, периодами есть ничего не хочется.',
    'Я считаю, что половое влечение нельзя сдерживать, иначе оно  мешает плодотворной работе.',
    'Моя застенчивость мешает мне подружиться с тем, с кемне хотелось бы.',
    'Мое отношение к будущему часто и быстро меняется - то радужные планы, то будущее кажется мне мрачным.',
    'Бывает, что риск и азарт меня совершенно опьяняют.',
    'Когда правила и законы мне мешают, это вызывает у меня раздражение.',
    'Старался/стараюсь аккуратно выполнять все задания.',
    'Сон у меня богат яркими сновидениями.',
    'Я стараюсь придерживаться диеты, которую сам разработал.',
    'Никогда не следую общей моде, а ношу то, что мне самому понравилось.',
    'Легко схожусь с людьми в любой обстановке.',
    'Не люблю всяких новшеств, предпочитаю раз установленный порядок.',
    'Я не слушаю критики и возражений и всегда думаю и делаю по-своему.',
    'Всегда слежу за тем, чтобы все соблюдали правила.',
    'Я слишком раздражителен.',
    'Если меня что-то расстроит, я долго не могу уснуть.',
    'Спиртное не вызывает у меня веселого настроения.',
    'Очень боюсь остаться без родителей.',
    'Незнакомые люди меня раздражают, к знакомым я уже как-то привык.',
    'Неудачи приводят меня в отчаяние.',
    'Я стараюсь правильно реагировать на критику.',
    'В детстве я был обидчивым и чувствительным.',
    'Недели хорошего самочувствия чередуются у меня с неделями, когда я чувствую себя плохо.',
    'Часто мне не хочется просыпаться.',
    'Выпив немного, я особенно ярко воспринимаю окружающий мир.',
    'Родители меня слишком сильно притесняли/притесняют и во всем навязывали/навязывают свою волю.',
    'Периодами мне лучше среди людей, периодами предпо-читаю одиночество.',
    'Люблю всякие приключения, даже опасные, охотно иду на риск.',
    'Я стараюсь слушать полезные наставления, но это не всегда у меня получается.',
    'Любил/люблю вместо школьных занятий отправиться с товарищами погулять или сходить в кино.',
    'Как правило, настроение у меня очень хорошее.',
    'Неподходящая обстановка, грязь и разговоры о неаппетитных вещах никогда не мешали мне есть.',
    'Моя застенчивость мне очень сильно мешает в половом отношении.',
    'Я чувствую себя таким больным, что мне не до друзей.',
    'Я убежден, что в будущем исполнятся мои желания и планы.',
    'Приключения и риск меня привлекают, если в них мне достается первая роль.',
    'Я допускаю опеку над собой в повседневной жизни,но не над моим душевным миром.',
    'Посещал школу регулярно и всегда активно участвовалв общественной работе.',
    'Я хорошо сплю, а сновидениям значения не придаю.',
    'Еда меня интересует прежде всего как средство поддержать здоровье.',
    'Люблю одежду модную и необычную, которая невольно привлекает взоры.',
    'Стараюсь жить так, чтобы окружающие не могли сказать обо мне ничего плохого.',
    'Новое меня привлекает, но часто быстро утомляет и надоедает.',
    'Я не люблю командовать другими — ответственность меня пугает.',
    'Правила и законы я всегда соблюдаю.',
    'Я не вижу у себя больших недостатков.',
    'У меня плохой и беспокойный сон и часто бывают мучительно-тоскливые сновидения.',
    'Я боюсь пить спиртное, потому что, опьянев, могу вызвать насмешки и презрение.',
    'Если у меня взяли в долг, я стесняюсь об этом напомнить.',
    'Бывает, что незнакомый человек мне сразу внушает доверие и симпатию.',
    'Периоды, когда я активно борюсь с неудачами, чередуются у меня с периодами, когда у меня от малейших неудач опускаются руки.',
    'Я не слышал еще справедливой критики в свой адрес или справедливых возражений моим доводам.',
    'В детстве я был веселым и отчаянным.',
    'Я всегда себя чувствую бодрым и полным сил.',
    'Я легко просыпаюсь, когда мне нужно.',
    'Спиртные напитки меня пугают.',
    'Упрекаю себя за то, что недостаточно сильно люблю (любил) родителей.',
    'Я не переношу одиночества и всегда стремлюсь быть среди людей.',
    'Я считаю, что при неудачах нельзя отчаиваться.',
    'Я не нуждаюсь в наставлениях.',
    'В детстве я был капризным и раздражительным.',
    'У меня встречаются приступы плохого самочувствияс раздражительностью и чувством тоски.',
    'Я просыпаюсь с мыслью, что сегодня надо будет сделать.',
    'У меня сильное половое влечение, которое мне труднос держивать.',
    'Мне не раз приходилось убеждаться, что дружат из выгоды.',
    'Я стараюсь жить так, чтобы будущее было хорошим.',
    'Приключения я люблю только веселые и те, что хорошо кончаются.',
    'Наставления вызывают у меня желание делать все наоборот.',
    'Стеснялся/стесняюсь ходить в школу: боялся/боюсь насмешек и грубости.',
    'Периоды очень хорошего настроения сменяются у меня периодами плохого настроения.',
    'У меня хороший аппетит, но я не обжора.',
    'Люблю костюмы яркие и броские.',
    'Окружающие мне завидуют и потому ненавидят меня.',
    'Я сам люблю придумывать новое, все переиначивать и делать посвоему, не так, как все.',
    'Я не умею командовать другими.',
    'Всякие правила и распорядок вызывают у меня желание нарочно их нарушать.',
    'Считаю, что я ничем не отличаюсь от большинства людей.',
    'Сон у меня очень крепкий, но иногда бывают жуткие, кошмарные сновидения.',
    'Люблю выпить в веселой и хорошей компании.',
    'Не люблю заранее рассчитывать все расходы, легко берув долг, даже если знаю, что к сроку отдать мне будет трудно.',
    'Я отношусь настороженно к незнакомым людям и невольно опасаюсь зла.',
    'Свои неудачи я переживаю сам и ни у кого не ищу сочувствия и помощи.',
    'Возражения и критика меня очень огорчают, если они резкие и грубые по форме, даже если они касаются мелочей.',
    'Я был как все дети и ничем не отличался от своих сверстников.',
    'Я люблю сытно поесть.',
  ],
  answers: [],
  currentQuestion: 0,
  result: {
    accentuations: {
      hyperthymic: 0,
      cycloid: 0,
      labile: 0,
      asthenic: 0,
      sensitive: 0,
      psychasthenic: 0,
      schizoid: 0,
      epileptoid: 0,
      hysterical: 0,
      unstable: 0,
      conformal: 0,
    },
    extraInfo: {
      accentuation: undefined,
      conformity: undefined,
      negativeAttitude: undefined,
      dissimulation: undefined,
      heightenedFrankness: undefined,
      emancipation: undefined,
      delinquency: undefined,
      genderRole: undefined,
      addictionToAlcoholism: undefined,
      socialDisadaptationRisk: undefined,
      probabilityOfPsychopathy: undefined,
      tendencyOfDepression: undefined,
      drugsRisk: undefined,
      discordance: undefined,
      suicideAttempts: undefined,
    },
  },
  _questionRestoreInterval: undefined,
  _leftBtnActive: false, // prevent from pressing an arrowBtn before it's ready to be pressed
  _rightBtnActive: false, // prevent from pressing an arrowBtn before it's ready to be pressed
};

// TODO: Remove this on prod
window.state = state;
window.$ = jQuery;

window.onload = function() {

  // Progress bar and methods to manage this one
  const progressBar = {
    progressLine: $('.progressbar-line'),
    progressCounter: $('.progressbar-counter #answered'),
    moveProgressBar: function moveProgressBar(side) {
      const step = 100 / 194;
      const currentQuestion = state.currentQuestion;
      const positionToSet = currentQuestion * step - 100;

      this.progressLine.css({ transform: 'translate(' + positionToSet + '%)' });
      this._setCounter(currentQuestion + 1);
    },
    _setCounter: function setCounter(currentQuestion) {
      this.progressCounter.text(currentQuestion);
    },
  };

  // Answer object
  const answerBar = {
    answerInputs: $('input[type=radio]'),
    currentAnswer: undefined,
    getCurrentAnswerAndSetInputChecked: function getCurrentAnswerAndSetInputChecked() {
      const answer = state.answers[state.currentQuestion];
      // If answer exists then set related input checked and currentAnswer is state.answers[currentAnswer]
      if (answer) {
        this.answerInputs.each((i, el) => {
          if (el.value === answer) {
            el.checked = true;
            this.currentAnswer = answer;
          }
        });
      } else {
        this.answerInputs.each((i, el) => { el.checked = false; });
        this.currentAnswer = answer;
      }

      return answer;
    },
    setAnswer: function setAnswer(value) {
      this.currentAnswer = value;
      state.answers[state.currentQuestion] = value;
    },
  };

  // Init contol and container elements
  const qEl = $('.questions'),
        questionElements = $('.question > p');
  
  // Object to manage arrows state
  const arrowsContainer = {
    leftArrow: $('.left-arrow'),
    rightArrow: $('.right-arrow'),
    leftArrowFigure: $('.left-arrow .arrow'),
    rightArrowFigure: $('.right-arrow .arrow'),
    setArrowsState: function setArrowsState(isAnswer, arrowToCheck) {
      if (state.currentQuestion >= questions.length - 1) {
        this.rightArrowFigure.addClass('not-active');
      } else {
        if (isAnswer) this.rightArrowFigure.removeClass('not-active');
      }

      if (state.currentQuestion === 0) {
        this.leftArrowFigure.addClass('not-active');
      } else {
        if (isAnswer) this.leftArrowFigure.removeClass('not-active');
      }

      if (arrowToCheck && this.rightArrowFigure.hasClass('not-active')) {
        arrowToCheck.removeClass('not-active');
      }
    },
    setArrowsNotActive: function setArrowsNotActive() {
      this.rightArrowFigure.addClass('not-active');
      this.leftArrowFigure.addClass('not-active');
    }
  };

  // CSS styles those we pass to $.css()
  const cssStyles = {
    displayLeftQuestion: {
      transition: '.4s',
      transform: 'translate(0%)',
    },
    displayRightQuestion: {
      transition: '.4s',
      transform: 'translate(-66.6666%)',
    },
    resetQuestionContainerPosition: {
      transition: '0s',
      transform: 'translate(-33.3333%)',
    },
  };

  // Questions to display
  const questions = state.questions.map((el, i) => ((i + 1) + '. ' + el));

  // TODO: Remove this on prod
  window.answerBar = answerBar;

  answerBar.answerInputs.on('click', function(e) {
    // If buttons is not active then don't allow user to choose answer because of setTimout in left and right arrow onClick function
    if (!state._leftBtnActive && !state._rightBtnActive && state.currentQuestion !== 0) {
      e.preventDefault();
      return;
    }
    // Set current answer in answerBar
    answerBar.setAnswer(e.target.value);

    // And set arrows active
    state._rightBtnActive = true;
    arrowsContainer.setArrowsState(state._rightBtnActive)
  });

  // TODO: Remove this on prod
  window.progressBar = progressBar;

  // Show and hide instructions
  $('.instructions-container').on('click', 'h1', function() {
    $('.instructions-container').toggleClass('active');
  });

  // TODO: Remove this on prod
  window.questionElements = questionElements;

  // Display previous question        
  arrowsContainer.leftArrow.on('click', function() {
    if (state.currentQuestion !== 0 && state._leftBtnActive) {
      state._rightBtnActive = false;
      state._leftBtnActive = false;
      arrowsContainer.setArrowsNotActive(); // Set this to show to user that he can't press the buttons yet

      // Set inline-css to move question container to display pervious question
      qEl.css(cssStyles.displayLeftQuestion);

      // Set current question's index to show
      state.currentQuestion -= 1;

      const answer = answerBar.getCurrentAnswerAndSetInputChecked();
      // Return container to initial state and do this immediately - transition: 0s
      state._questionRestoreInterval = setTimeout(function() {
        
        // Set inline-css to reset questions container position
        qEl.css(cssStyles.resetQuestionContainerPosition);

        // Move questions in question-html-elements
        switchQuestions(questionElements, state.currentQuestion);
        state._rightBtnActive = true;
        state._leftBtnActive = true;
        arrowsContainer.setArrowsState(state._leftBtnActive, arrowsContainer.rightArrowFigure);
      }, 400);

      progressBar.moveProgressBar('left');
    }
  });

  // Display next question
  arrowsContainer.rightArrow.on('click', function() {
    if (state.currentQuestion !== questions.length - 1 && state._rightBtnActive) {
      state._rightBtnActive = false;
      state._leftBtnActive = false;
      arrowsContainer.setArrowsNotActive(); // Set this to show to user that he can't press the buttons yet

      // Set inline-css to move question container to display next question
      qEl.css(cssStyles.displayRightQuestion);

      // Set current question's index to show
      state.currentQuestion += 1;

      const answer = answerBar.getCurrentAnswerAndSetInputChecked();
      // Return container to initial state and do this immediately - transition: 0s
      state._questionRestoreInterval = setTimeout(function() {
        
        // Set inline-css to reset questions container position
        qEl.css(cssStyles.resetQuestionContainerPosition);

        // Move questions in question-html-elements
        switchQuestions(questionElements, state.currentQuestion);
        state._rightBtnActive = answer ? true : false;
        state._leftBtnActive = true;
        arrowsContainer.setArrowsState(state._rightBtnActive, arrowsContainer.leftArrowFigure);
      }, 400);

      progressBar.moveProgressBar('right');
    }
  });

  function switchQuestions(questionElements, currentQuestion) {
    $(questionElements[1]).text(questions[currentQuestion]);
    $(questionElements[0]).text(questions[currentQuestion - 1]);
    $(questionElements[2]).text(questions[currentQuestion + 1]);
  }
};
