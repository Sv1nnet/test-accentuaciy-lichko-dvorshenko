/* eslint-disable */
import results from './processResult';
import DoubleLinkedList from './doubleLinkedList';
import progressBar from './progressBar';
import arrowsContainer from './arrowsContainer';
import answerBar from './answerBar';
import AccentuationContainer from './accentuationContainer';
import createRollupElement from './createRollupElement';

import answers from './completedTest';

const processExtraInfo = {
  setConformity(state) {
    const conformity = $('#conformity');
    const { extraInfo } = state.result;

    switch (extraInfo.conformity) {
      case 'low':
        conformity.text('Низкая');
        break;
      case 'moderate':
        conformity.text('Умеренная');
        break;
      case 'medium':
        conformity.text('Средняя');
        break;
      case 'high':
        conformity.text('Высокая');
        break;
      default:
        break;
    }
  },
  setAttitude(state) {
    const attitude = $('#attitude');
    const { extraInfo } = state.result;

    extraInfo.negativeAttitude.availability ? attitude.text('Присутствует. Надежность результатов теста может быть ниже') : attitude.text('Не выявлено');
  },
  setDissimulation(state) {
    const dissimulation = $('#dissimulation');
    const { extraInfo } = state.result;

    extraInfo.dissimulation.availability ? dissimulation.text('Присутствует. Надежность результатов теста может быть ниже') : dissimulation.text('Не выявлена');
  },
  setFranskness(state) {
    const frankness = $('#frankness');
    const { extraInfo } = state.result;

    extraInfo.heightenedFrankness.availability ? frankness.text('Присутствует. Возможно, иногда вы слишком откровенны с людьми. Психастеники обычно излишне откровенны из-за "гражданской ответствнности". Гипертимы могут быть откровенными сказать, что-то лишнее не спецаильно, а потому, что "пришлось к слову"') : frankness.text('Отсутствует');
  },
  setEmancipation(state) {
    const emancipation = $('#emancipation');
    const { extraInfo } = state.result;

    switch (extraInfo.emancipation.availability) {
      case 'low':
        emancipation.text('Слабая');
        break;
      case 'medium':
        emancipation.text('Умеренная');
        break;
      case 'high':
        emancipation.text('Выраженная');
        break;
      case 'very high':
        emancipation.text('Очень сильная');
        break;

      default:
        break;
    }
  },
  setDelinquency(state) {
    const delinquency = $('#delinquency');
    const { extraInfo } = state.result;

    if (extraInfo.delinquency.availability !== 'undiagnosed') {
      extraInfo.delinquency.availability ? delinquency.text('Присутствует') : delinquency.text('Отсутствует');
    } else {
      delinquency.text('Не диагностирована');
    }
  },
  setAlcoholism(state) {
    const alcoholism = $('#alcoholism');
    const { extraInfo } = state.result;

    switch (extraInfo.addictionToAlcoholism.availability) {
      case 'absent':
        alcoholism.text('Отсутствует')
        break;
      case 'not determined':
        alcoholism.text('Не определена')
        break;
      case 'exists':
        alcoholism.text('Присутствует')
        break;
      case 'demostrative':
        alcoholism.text('Демонстративная. Скорее всего, попытки "залить проблему алкоголем" осуществляются для того, чтобы окружащие обратили на вас и вашу проблему внимание, а не для того, чтобы её действительно "решить"')
        break;

      default:
        break;
    }
  },
  setDepression(state) {
    const depression = $('#depression');
    const { extraInfo } = state.result;

    switch (extraInfo.tendencyOfDepression.availability) {
      case 'absent':
        depression.text('Нет')
        break;
      case 'risk':
        depression.text('Есть');
        break;
      case 'not determined':
        depression.text('Не определена')
        break;
      default:
        break;
    }
  },
  setDiscordance(state) {
    const discordance = $('#discordance');
    const { extraInfo } = state.result;

    extraInfo.discordance.availability ? discordance.text('Присутствуют') : discordance.text('Отсутствуют')
  },
  setFullResult(state) {
    const { result } = state;
    const { extraInfo, accentuationsData } = result;
    const fullResult = $('#full-result');
    const resultElements = [];
    const resultChartDataElements = [];
    const createHtmlContent = (infoName, content) => {
      resultElements.push(
        $('<p>', {
          text: `${infoName}: `,
          css: { fontWeight: 'bold' },
        }).append([
          $('<br>'),
          $('<span>', {
            text: `${content}.`,
            css: { fontWeight: 'normal' },
          })
        ])
      );
    };
    const createChartDataContent = (scale, points) => {
      resultChartDataElements.push(
        $('<span>', {
          css: { display: 'inline-block', marginRight: '12px' },
          append: [
            $('<span>', {
              text: `${scale}: `,
              css: { fontWeight: 'bold' },
            }),
            $('<span>', {
              text: `${points}. `,
            }),
          ],
        })
      );
    };

    let genderRole = 'Пробладание какой-либо роли отсутствует';
    switch (extraInfo.genderRole.result) {
      case 'male':
        genderRole = 'Преобладает мужественность';
        break;
      case 'female':
        genderRole = 'Преобладает женственность';
        break;
      default:
        break;
    }

    let accentuations = [];
    for (const accent in accentuationsData) {
      accentuations.push(accentuationsData[accent].name);
    }


    let socialDisadaptationRisk = 'Отсутствует';
    switch (extraInfo.socialDisadaptationRisk.risk) {
      case 'exists':
        socialDisadaptationRisk = 'Есть';
        break;
      case 'high':
        socialDisadaptationRisk = 'Высокий';
        break;
      default:
        break;
    }

    let drugRisk = 'Отсутствует';
    switch (extraInfo.drugsRisk.risk) {
      case 'middle':
        drugRisk = 'Умеренный';
        break;
      case 'expressed':
        drugRisk = 'Выраженный';
        break;
      case 'very high':
        drugRisk = 'Очень высокий';
        break;
      default:
        break;
    }

    let suicideAttempts = 'Не определено';
    switch (extraInfo.suicideAttempts.type) {
      case true:
        suicideAttempts = 'Истинные'
        break;
      case false:
        suicideAttempts = 'Демонстративные'
        break;
      default:
        break;
    }

    const resultContent = [
      {
        name: 'Конформность',
        content: $('#conformity').text(),
      },
      {
        name: 'Негативное отношение к обследованию',
        content: $('#attitude').text(),
      },
      {
        name: 'Диссимуляция',
        content: $('#dissimulation').text(),
      },
      {
        name: 'Повышенная откровенность',
        content: extraInfo.heightenedFrankness.availability ? 'Присутствует' : 'Не выявлена',
      },
      {
        name: 'Возможность органического происхождения акцентуации',
        content: extraInfo.organicNature.availability ? 'Вероятность 50%' : 'Вероятность меньше 50%',
      },
      {
        name: 'Реакция эмасипации',
        content: $('#emancipation').text(),
      },
      {
        name: 'Склонность к делинквентности',
        content: $('#delinquency').text(),
      },
      {
        name: 'Соотношение черт мужественности и женственности',
        content: genderRole,
      },
      {
        name: 'Психологическая склонность к алкоголизации',
        content: $('#alcoholism').text().indexOf('Демонстративная') !== -1 ? 'Демонстративная' : $('#alcoholism').text(),
      },
      {
        name: 'Типы акцентуации',
        content: accentuations.join(', '),
      },
      {
        name: 'Риск социальной дезадаптации',
        content: socialDisadaptationRisk,
      },
      {
        name: 'Возможность формирования личностных расстройств',
        content: extraInfo.probabilityOfPsychopathy.availability ? 'Присутствует' : 'Не выявлена',
      },
      {
        name: 'Склонность к депрессии',
        content: $('#depression').text(),
      },
      {
        name: 'Риск начала наркотизации',
        content: drugRisk,
      },
      {
        name: 'Признаки дискордантнтности характера',
        content: $('#discordance').text(),
      },
      {
        name: 'Суицидные попытки',
        content: suicideAttempts,
      },
    ];

    resultContent.forEach((content) => {
      createHtmlContent(content.name, content.content);
    });

    const specResultContent = [
      {
        name: 'Д',
        content: extraInfo.dissimulation.value,
      },
      {
        name: 'Т',
        content: extraInfo.heightenedFrankness.value,
      },
      {
        name: 'Г',
        content: result.accentuations.hyperthymic,
      },
      {
        name: 'Ц',
        content: result.accentuations.cycloid,
      },
      {
        name: 'Л',
        content: result.accentuations.labile,
      },
      {
        name: 'А',
        content: result.accentuations.asthenic,
      },
      {
        name: 'С',
        content: result.accentuations.sensitive,
      },
      {
        name: 'П',
        content: result.accentuations.psychasthenic,
      },
      {
        name: 'Ш',
        content: result.accentuations.schizoid,
      },
      {
        name: 'Э',
        content: result.accentuations.epileptoid,
      },
      {
        name: 'И',
        content: result.accentuations.hysterical,
      },
      {
        name: 'Н',
        content: result.accentuations.unstable,
      },
      {
        name: 'O',
        content: extraInfo.negativeAttitude.value,
      },
      {
        name: 'd',
        content: extraInfo.delinquency.value,
      },
      {
        name: 'B',
        content: extraInfo.organicNature.value,
      },
      {
        name: 'K',
        content: result.accentuations.conformal,
      },
      {
        name: 'E',
        content: extraInfo.emancipation.value,
      },
      {
        name: 'M',
        content: extraInfo.genderRole.m,
      },
      {
        name: 'Ф',
        content: extraInfo.genderRole.f,
      },
      {
        name: 'V',
        content: extraInfo.addictionToAlcoholism.value,
      },
      {
        name: 'D',
        content: extraInfo.tendencyOfDepression.value,
      },
      {
        name: 'Дх',
        content: extraInfo.discordance.value,
      },
      {
        name: 'Nc',
        content: extraInfo.drugsRisk.value,
      },
      {
        name: 'S',
        content: extraInfo.suicideAttempts.value,
      },
      {
        name: 'Сд',
        content: extraInfo.socialDisadaptationRisk.value,
      },
      {
        name: 'Врл',
        content: extraInfo.probabilityOfPsychopathy.value,
      },
    ];

    specResultContent.forEach((content) => {
      createChartDataContent(content.name, content.content);
    });

    const chartDataElement = createRollupElement('Показатели по графику', resultChartDataElements).attr('id', 'chart-data');

    fullResult.append([...resultElements, chartDataElement]);
  },
}

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
    'В половом отношении я быстро возбуждаюсь, но быстроу спокаиваюсь и охладеваю.',
    'Я ценю такого друга, который умеет меня выслушать, приободрить, вселить уверенность, успокоить.',
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
    'У меня нет никакого желания иметь друга.',
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
    'Не люблю заранее рассчитывать все расходы, легко беру в долг, даже если знаю, что к сроку отдать мне будет трудно.',
    'Я отношусь настороженно к незнакомым людям и невольно опасаюсь зла.',
    'Свои неудачи я переживаю сам и ни у кого не ищу сочувствия и помощи.',
    'Возражения и критика меня очень огорчают, если они резкие и грубые по форме, даже если они касаются мелочей.',
    'Я был как все дети и ничем не отличался от своих сверстников.',
    'Я люблю сытно поесть.',
  ],
  questionsList: new DoubleLinkedList(),
  zeroAnswersList: undefined,
  extremeAnswersList: undefined,
  zeroAnswersHandled: false,
  accentuationsInfo: undefined,
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
      gender: undefined,
      accentuations: [],
      conformity: undefined,
      negativeAttitude: {
        value: 0,
        availability: false,
      },
      dissimulation: {
        value: 0,
        resultValue: 0,
        availability: false,
      },
      heightenedFrankness: {
        value: 0,
        availability: false,
      },
      organicNature: {
        value: 0,
        availability: false,
      },
      emancipation: {
        value: 0,
        availability: false,
      },
      delinquency: {
        value: 0,
        availability: false,
      },
      genderRole: {
        m: 0,
        f: 0,
        result: undefined,
      },
      addictionToAlcoholism: {
        value: 0,
        availability: false,
      },
      socialDisadaptationRisk: {
        value: 0,
        risk: false,
      },
      probabilityOfPsychopathy: {
        value: 0,
        availability: false,
      },
      tendencyOfDepression: {
        pos: 0,
        neg: 0,
        availability: false,
      },
      drugsRisk: {
        value: 0,
        risk: false,
      },
      discordance: {
        value: 0,
        availability: false,
      },
      suicideAttempts: {
        value: 0,
        type: false,
      },
      _chartCreated: false,
      _assessmentToCountAnswers: 0,
    },
    accentuationsData: undefined,
  },
  loader: $('#loader'),
  setExtraInfo(processExtraInfo) {
    for (const processInfo in processExtraInfo) {
      if (processExtraInfo[processInfo] != processExtraInfo.setFullResult) {
        processExtraInfo[processInfo](this);
      }
    }
  },
  getAccentuationsInfo() { // Get info about accentuations form server and inject result in dom
    const { accentuations } = state.result.extraInfo;
    const url = 'http://192.168.0.12:80/test-accentuations/info.php';
    const typesResultUl = $('#types-result');
    const { loader } = this;

    $('#loader p').text('Обработка результатов');
    loader.removeClass('hidden');

    if (accentuations.length === 0) {
      loader.addClass('hidden');
      typesResultUl.append($('<li>', { text: 'Не выявлено ни одной акцентуации' }));

      return;
    }

    // Data to send to get accentuations info
    const data = {
      accentuations: accentuations.map(el => Object.keys(el)[0]), // Get accentuations names
    };

    // Send ajax post request to get accentuations info
    $.ajax({
      type: 'POST',
      url,
      data,
      success(data) {
        state.result.accentuationsData = data;
        processExtraInfo.setFullResult(state); // Show results for specialist

        // Create accentuations list
        for (const accent in data) {
          typesResultUl.append($('<li>', { text: data[accent].name }));
          new AccentuationContainer(data[accent]);
        }

        loader.addClass('hidden');
      },
      error(data) {
        console.log('error', data)
      }
    });
  },
  _questionRestoreInterval: undefined,
};

// TODO: Remove this on prod
window.state = state;

// window.answers = answers.answers;
// window.setAnswers = answers.setAnswers;
// window.processResults = answers.processResults;

window.onload = function() {
  // Close loader
  $('#loader').addClass('hidden');

  // Init question container and question text holder elements
  const questionContainer = $('.questions'),
    questionElements = $('.question > p');

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

  // Gender form in modal window for setting user gender
  const genderForm = {
    modal: $('.modal'),
    container: $('.gender-question-container'),
    inputs: $('.gender-question-container input[name=gender]'),
    nextBtn: $('.gender-question-container button'),
    init: function() {
      // Set gender in state extraInfo
      this.inputs.on('click', function(e) {
        state.result.extraInfo.gender = e.target.value;
      });

      // Close modal if gender is set in state
      this.nextBtn.on('click', (e) => {
        if (state.result.extraInfo.gender) {
          this.modal.addClass('hidden');
        }
      });
    },
  }

  genderForm.init();

  // Init question list. We will use it into slider
  state.questions.forEach((el, i) => {
    state.questionsList.add({
      // question: i + 1 + '. ' + el,
      question: el,
      index: i + 1,
      answer: null,
    });
  })

  // Questions to display
  const questionsList = state.questionsList;
  // We have to start asking from the first question so we need set first element as a current one. getFirst does it.
  questionsList.getFirst();

  // Init progressbar fields set initial progressbar position
  progressBar.init(state);

  // Init arrow contaner fields
  arrowsContainer.init({ state, questionContainer, cssStyles, questionElements, results, processExtraInfo });

  // Answer object
  answerBar.init(arrowsContainer)

  answerBar.setAnswerInputEventHandler(questionsList);
  // Init answer inputs event
  answerBar.answerInputs.on('click', function(e) {
    answerBar.answerInputEventHandler(e);
  });

  // Show and hide instructions
  $('.instructions-container').on('click', 'h1', function() {
    $('.instructions-container').toggleClass('active');
  });

  // Set left arrow event handler with questions list
  arrowsContainer.setLeftArrowEventHanler(questionsList, progressBar, answerBar);
  // Display previous question        
  arrowsContainer.leftArrow.element.on('click', function() {
    arrowsContainer.leftArrowEventHanler();
  });

  // Set right arrow event handler with questions list
  arrowsContainer.setRightArrowEventHanler(questionsList, progressBar, answerBar);
  // Display next question
  // arrowsContainer.rightArrow.element.on('click', function() {
  //   arrowsContainer.rightArrowEventHanler();
  // });

  // Set activating action on rollup click
  $('.rollup-container a').on('click', function(e) {
    e.preventDefault();
    $(e.target.parentElement).toggleClass('active');
  });

  $('.send-result > .btn').on('click', function(e) {
    e.preventDefault();

    const { accentuations } = state.result.extraInfo;
    const email = $('#email')[0].value;
    const data = {
      accentuations,
      email,
    }

    // Send ajax post request to send result
    $.ajax({
      type: 'POST',
      url: 'http://192.168.0.12:80/test-accentuations/send-email/index.php',
      data,
      success(data) {
        console.log('success', data);
      },
      error(data) {
        console.log('error', data)
      }
    });
  })

  // TODO: Remove this on prod
  // Testing results
  state.result.extraInfo.gender = 'male';
  genderForm.modal.addClass('hidden');

  // arrowsContainer.rightArrow.element.on('click', function() {
  //   answers.setAnswers(state, answers.answers);
  //   answers.processResults(state, processExtraInfo);

  // });

  answers.setAnswers(state, answers.answers);
  answers.processResults(state, processExtraInfo);

  // console.table(state.result.extraInfo.accentuations);
  // console.log(state.result.extraInfo);
};
