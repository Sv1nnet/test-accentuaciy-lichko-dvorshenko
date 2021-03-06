/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable quote-props */
/* eslint-disable no-use-before-define */
import DoubleLinkedList from './doubleLinkedList';
import portableCode from './portableCode';

/*
 * Процесс обработки результатов:
 * 1. Подсчитать кол-во нулевых ответов. Если их >= 7, то предложить уменьшить их кол-во;
 * 2. Выделить все ответы ответы раыные '3' и '-3';
 * 3. Построить график при помощи портативного кода (за каждый ответ начислить определенное кол-во балов соответстующим шкалам акцентуаций);
 * 4. Начислить дополнительные баллы за показатели по графику;
 * 5. Если после всех процедур ни одна шкала акцентуаций не привысила границу (5 баллов), то повторить пункты 2 и 3 для всех ответов со значением '2' и '-2';
 *
 * Правила работы с графиком:
 * 1. Тип считается не определенным, если по графику не набрано минимальное диагностическое число (МДЧ) баллов ни для одного из типов. Акцентуации считается выраженной, если ее значение превышает 5 баллов, т. е. составляет 6 баллов и выше.
 * 2. Если установлена возможность диссимуляции (Д – Т >=2 4), то типы Ц и П не считаются выраженными и не диагностируются независимо от числа набранных в их пользу баллов.
 * 3. Если реакция эмансипации выражена в самооценке (Е >= 4), то типы С и П не считаются выраженными и не диагностируются независимо от числа баллов, набранных в их пользу.
 * 4. Если МДЧ достигнуто или превышено в отношении типа К и еще другого (других) типов, то тип К не диагностируется независимо от числа набранных в его пользу баллов.
 * 5. Если после исключений, сделанных по правилам 2 - 4, осталось несколько типов акцентуации, значения которых превышает порог в 5 баллов, то выраженными считаются те, которые превышают оставшиеся на 4 и более баллов.
 * 6. Тип акцентуации считается специфическим (чистым) в том случае, если она осталась единственной после выполнения предыдущих правил.
 * 7. Если осталось несколько выраженных типов акцентуации, то можно исключить некоторые из них по правилу доминирования типа для определенной пары (так, при выраженности акцентуаций типов Г иЛ доминирующим считается ГЮ а тип Л исключается):
 * Г+Л=Г; Г+А=А; Г+С=Г; Г+П=П; Г+Ш=Ш; Г+Э=Э;
 * Ц+А=А; Ц+С=С; Ц+П=П; Ц+Ш=Ш; Ц+Э=Э; Ц+И=И; Ц+Н=Н;
 * Л+П=П; Л+Ш=Ш; Л+Э=Э;
 * А+Ш=Ш; А+Э=Э; А+Н=Н;
 * С+Э=Э; С+И=И; С+Н=Н;
 * П+Э=Э; П+И=И; П+Н=Н;
 * 8. Если после проведенных процедур осталось несколько выраженных акцентуаций, то диагностируется смешанный тип, который включает в себя не более трех сочетающихся типов, оставшихся после выполнения правила 6:
 * A) если значения по этим типам акцентуаций неодинаковы, то в смешанный тип включаются не более трех акцентуаций с наибольшими значениями;
 * B) если значения одинаковы, то выбираются типы акцентуаций, которые совмещаются с наибольшим количеством оставшихся типов. Необходимо учитывать возможность следующих совместимых сочетаний:
 * ГЦ, ГН, ГИ;
 * ЛЦ, ЛА, ЛС, ЛИ, ЛН;
 * АС, АП, АИ;
 * СП, СШ;
 * ПШ;
 * ШЭ, ШИ, ШН;
 * ЭИ, ЭН;
 * ИН;
 *
 * Результаты других особенностей характера:
 * ------- 1. Риск социальной дизадаптации. -------
 *
 * Для Г:
 * - Г >= 11
 * - Э >= 7
 * - Н >= 8
 * - Д >= 5
 * - Е >= 5
 * - Г + Н >= 19
 *
 * Для Л:
 * - Л >= 12
 * - Ш >= 7
 * - Н >= 7
 * - Е >= 4
 * - d >= 4
 *
 * Для С:
 * - С >= 11
 * - Э >= 6
 * - d >= 3
 * - D - амбивалентность
 *
 * Для Ш:
 * - Л >= 6
 * - Ш >= 12
 * - d >= 5
 *
 * Для Э:
 * - Ш >= 7
 * - И >= 8
 * - Н >= 8
 * - Е >= 5
 * - d >= 5
 *
 * Для И:
 * - А >= 5
 * - П >= 8
 * - И >= 13
 * - Н >= 7
 * - d >= 6
 *
 * Для Н:
 * - Ц >= 6
 * - И >= 10
 * - В >= 5
 * - А + С + П >= 7
 *
 * ------- 2. Вероятность формирования расстройства личности. -------
 * Для Г:
 * - Н >= 10
 * - К = 0
 * - Е >= 6
 *
 * Для Л:
 * - А >= 6
 * - Ш >= 7
 * - К = 0
 * - Д >= 6
 *
 * Для С:
 * - С >= 12
 *
 * Для Ш:
 * - Г <= 1
 * - Л <= 1
 * - Ш >= 13
 * - d >= 7
 * - V >= +4
 *
 * Для Э:
 * - Г = 0
 * - Ц >= 8
 * - К <= 1
 * - Э >= 10
 * - К <= 1
 * - d >= 6
 *
 * Для И:
 * - А >= 5
 * - О >= 6
 * - Е >= 6
 *
 * Для Н:
 * - Н >= 12
 * - К <= 1
 * - В >= 5
 * - V <= -6
 *
 * ------- 3. Склонность к депрессии. -------
 * +1 балл за:
 * - Г <= 2
 * - C >= 7
 * - Н <= 2
 * - Т > Д
 * - М < Ф (юноши)
 *
 * -1 балл за:
 * - Г >= 7
 * - И >= 7
 * - Н >= 7
 * - (Д - Т) >= 4
 *
 * ------- 4. Риск начала наркотизации. -------
 * С <= 2 - 2 балла
 * Н >= 7 - 2 балла
 * Э >= 7 - 1 балл
 * V >= +4 - 1 балл
 *
 * ------- 5. Суицидные попытки. -------
 * Истинные (+1 балл):
 * - С >= 6
 * - Н <= 2
 * - Т > Д
 * - D >= +2
 * - Дискорданность
 *
 * Демонстративные (-1 балл):
 * - Г >= 7
 * - С <= 3
 * - И >= 7
 * - Н >= 6
 * - D <= -2
 *
 * ------- 6. Дискорданность характера. -------
 * Для Г:
 * - С >= 6
 * - П >= 6
 * - Ш >= 6
 *
 * Для Ц:
 * - Ш >= 6
 *
 * Для С:
 * - Э >= 6
 * - И >= 6
 *
 * Для П:
 * - Н >= 6
 *
 * Для Ш:
 * - Г >= 6
 * - Ц >= 6
 *
 * Для Э:
 * - С >= 6
 *
 * Для И:
 * - С >= 6
 *
 * Для Н:
 * - С >= 6
 * - П >= 6
 * - Е >= 5
 */

function processResults(state, processExtraInfo) {
  mergeQuestions(state);
  countExtremeAnswers(state, 3);
  createChart(state);

  $('.all-test-container').addClass('hidden');
  $('.results').removeClass('hidden');

  processChart(state);
  state.setExtraInfo(processExtraInfo);
  state.getAccentuationsInfo(state.result.extraInfo);
}

// Step 1
function getZeroAnswers(state) {
  const { questionsList } = state;
  const zeroAnswersList = new DoubleLinkedList();

  // let count = 1;
  let currentQuestion = questionsList.getFirst();

  while (currentQuestion !== null) {
    if (currentQuestion.data.answer === '0') {
      zeroAnswersList.add(currentQuestion.data);
    }

    currentQuestion = currentQuestion.next !== null ? questionsList.getNext() : null;
    // count += 1;
  }
  state.result.extraInfo.negativeAttitude.value = zeroAnswersList.getLength();

  return zeroAnswersList;
}

// Merge answer from zeroAnswersList to questionList
function mergeQuestions(state) {
  const length = state.questionsList.getLength();

  let currentQuestion = state.questionsList.getFirst();
  let currentZeroQuestion = state.zeroAnswersList.getLength() > 0 ? state.zeroAnswersList.getFirst() : null;

  while (currentZeroQuestion !== null && currentQuestion !== null) {
    if (currentQuestion.data.index === currentZeroQuestion.data.index) {
      currentQuestion.data.answer = currentZeroQuestion.data.answer;
      currentZeroQuestion = currentZeroQuestion.next !== null ? state.zeroAnswersList.getNext() : currentZeroQuestion;
    }

    currentQuestion = currentQuestion.next !== null ? state.questionsList.getNext() : null;
  }
}

// Step 2
function countExtremeAnswers(state, assessment) {
  state.result._assessmentToCountAnswers = assessment;

  const extremeAnswersList = new DoubleLinkedList();

  let currentQuestion = state.questionsList.getFirst();
  // let count = 0;
  let pos = '';
  let neg = '';
  if (assessment === 3) {
    pos = '3';
    neg = '-3';
  }
  if (assessment === 2) {
    pos = '2';
    neg = '-2';
  }

  while (currentQuestion !== null) {
    if (currentQuestion.data.answer === pos || currentQuestion.data.answer === neg) {
      extremeAnswersList.add({ index: currentQuestion.data.index, answer: currentQuestion.data.answer });
    }

    currentQuestion = currentQuestion.next !== null ? state.questionsList.getNext() : null;
    // count += 1;
  }
  state.extremeAnswersList = extremeAnswersList;
}

// Step 3
function createChart(state) {
  const { extremeAnswersList, result } = state;
  const { extraInfo } = result;

  const length = extremeAnswersList.getLength();

  let count = 0;
  let currentQuestion = extremeAnswersList.getFirst();

  while (count < length) {
    portableCode.calcAnswers(state.result, currentQuestion.data);
    currentQuestion = currentQuestion.next !== null ? state.extremeAnswersList.getNext() : currentQuestion;
    count += 1;
  }

  if (!state.result.extraInfo._chartCreated) {
    // Step 4
    extraInfo.dissimulation = portableCode.getDissimulation(state);
    extraInfo.heightenedFrankness = portableCode.getHeightenedFrankness(state);
    extraInfo.organicNature = portableCode.getOrganicNatureChance(state);
    extraInfo.emancipation = portableCode.getEmancipationReaction(state);
    extraInfo.delinquency = portableCode.getDelinquency(state);
    extraInfo.genderRole = portableCode.getGenderRole(state);
    extraInfo.addictionToAlcoholism = portableCode.getAddictionToAlcoholism(state);

    portableCode.addExtraPoints(state.result);
    extraInfo._chartCreated = true;
  }

  let accentuationDefined = false;

  for (const acc in state.result.accentuations) {
    if (state.result.accentuations[acc] >= 6) {
      accentuationDefined = true;
      break;
    }
  }

  if (!accentuationDefined && state.result._assessmentToCountAnswers === 3) {
    // Step 5
    countExtremeAnswers(state, 2);
    createChart(state);
  }
}

// Step 6
function processChart(state) {
  const { extraInfo } = state.result;
  extraInfo.conformity = portableCode.getConformity(state);
  extraInfo.accentuations = portableCode.findProbableAccentuations(state);
  extraInfo.accentuations = portableCode.findActualAccentuations(state);
  extraInfo.negativeAttitude = portableCode.getNegativeAttitude(state);
  extraInfo.delinquency = portableCode.getDelinquency(state);
  extraInfo.socialDisadaptationRisk = portableCode.getSocialDisadaptationRisk(state);
  extraInfo.probabilityOfPsychopathy = portableCode.getProbabilityOfPsychopathy(state);
  extraInfo.tendencyOfDepression = portableCode.getTendencyOfDepression(state);
  extraInfo.drugsRisk = portableCode.getDrugsRisk(state);
  extraInfo.suicideAttempts = portableCode.getSuicideAttempts(state);
  extraInfo.discordance = portableCode.getDiscordance(state);
}

const results = {
  getZeroAnswers,
  processResults,
};

export default results;
