/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// import doubleLinkedList from './doubleLinkedList';
import results from './processResult';
import DoubleLinkedList from './doubleLinkedList';

const answers = {
  1: -1,
  2: 1,
  3: 1,
  4: 3,
  5: 2,
  6: -1,
  7: 3,
  8: -3,
  9: 2,
  10: -3,
  11: 0,
  12: 2,
  13: 3,
  14: -3,
  15: -1,
  16: -2,
  17: -2,
  18: 3,
  19: 1,
  20: 1,
  21: -3,
  22: 1,
  23: 1,
  24: -1,
  25: -3,
  26: -3,
  27: 2,
  28: 3,
  29: 3,
  30: 2,
  31: -3,
  32: 1,
  33: -2,
  34: -3,
  35: 3,
  36: -1,
  37: 2,
  38: 1,
  39: -3,
  40: 1,
  41: -2,
  42: 1,
  43: -2,
  44: -2,
  45: 2,
  46: 3,
  47: 3,
  48: 1,
  49: 3,
  50: -3,
  51: 1,
  52: 1,
  53: -3,
  54: -3,
  55: 1,
  56: 1,
  57: -1,
  58: -1,
  59: -3,
  60: 1,
  61: -3,
  62: -3,
  63: 2,
  64: 1,
  65: -3,
  66: -3,
  67: -3,
  68: -3,
  69: -1,
  70: -2,
  71: -2,
  72: 1,
  73: 3,
  74: -3,
  75: -2,
  76: 2,
  77: -3,
  78: 2,
  79: 3,
  80: -3,
  81: -2,
  82: -3,
  83: 3,
  84: -3,
  85: 1,
  86: -3,
  87: 3,
  88: 1,
  89: 1,
  90: -3,
  91: -3,
  92: 2,
  93: -3,
  94: -3,
  95: -3,
  96: 2,
  97: 2,
  98: 3,
  99: 2,
  100: -3,
  101: -1,
  102: -1,
  103: 1,
  104: -3,
  105: -3,
  106: 3,
  107: 2,
  108: 0,
  109: 1,
  110: 1,
  111: 1,
  112: -3,
  113: 1,
  114: 1,
  115: -3,
  116: 2,
  117: 1,
  118: -2,
  119: -1,
  120: 2,
  121: 1,
  122: -1,
  123: 2,
  124: -3,
  125: 1,
  126: 2,
  127: -3,
  128: 3,
  129: 0,
  130: -1,
  131: -3,
  132: 1,
  133: -1,
  134: 1,
  135: -3,
  136: -3,
  137: 3,
  138: -3,
  139: 3,
  140: 1,
  141: 1,
  142: -1,
  143: 0,
  144: -3,
  145: 1,
  146: -3,
  147: -3,
  148: 2,
  149: 1,
  150: 2,
  151: -3,
  152: -3,
  153: -1,
  154: -1,
  155: 1,
  156: -1,
  157: -3,
  158: -3,
  159: 3,
  160: 3,
  161: 2,
  162: -3,
  163: -1,
  164: -1,
  165: -1,
  166: -1,
  167: -3,
  168: -3,
  169: 3,
  170: -3,
  171: 1,
  172: 1,
  173: 2,
  174: -3,
  175: -1,
  176: 1,
  177: 1,
  178: -3,
  179: -3,
  180: 1,
  181: 1,
  182: -3,
  183: -3,
  184: -3,
  185: -1,
  186: -1,
  187: 1,
  188: 2,
  189: -3,
  190: -3,
  191: 1,
  192: -1,
  193: 3,
  194: 2,
  195: 3,
};

function setAnswers(state, answers) {
  let currentQuestion = state.questionsList.getFirst();
  for (const ans in answers) {
    currentQuestion.data.answer = `${answers[ans]}`;
    currentQuestion = currentQuestion.next ? state.questionsList.getNext() : null;
  }
  state.zeroAnswersList = new DoubleLinkedList();
}

function processResults(state) {
  // debugger;
  state.zeroAnswersList = results.getZeroAnswers(state);
  state.zeroAnswersListHandled = true;

  results.processResults(state);
}

export default {
  answers,
  setAnswers,
  processResults,
};
