/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const code = {
  1: {
    pos: ['asthenic'],
  },
  2: {
    pos: ['heightenedFrankness'],
  },
  3: {
    pos: ['sensitive', 'psychasthenic', 'schizoid', -3],
    neg: [1],
  },
  4: {
    pos: ['psychasthenic', 'psychasthenic'],
  },
  5: {
    pos: ['sensitive', 'schizoid', 'schizoid'],
  },
  6: {
    pos: ['psychasthenic'],
    neg: ['cycloid'],
  },
  7: {
    pos: ['dissimulation', 'emancipation'],
  },
  8: {
    pos: ['hysterical'],
  },
  9: {
    pos: ['dissimulation', 'unstable', 'unstable'],
  },
  10: {
    pos: ['delinquency'],
  },
  11: {
    neg: ['unstable', 'unstable'],
  },
  12: {
    pos: ['conformal'],
  },
  13: {
    pos: ['labile'],
  },
  14: {
    pos: ['organicNature'],
  },
  15: {
    neg: ['hysterical'],
  },
  16: {
    pos: ['delinquency'],
  },
  17: {
    pos: ['labile', 'sensitive'],
    neg: ['delinquency'],
  },
  18: {
    pos: ['heightenedFrankness', 'sensitive'],
  },
  19: {
    pos: ['labile', 'hysterical'],
  },
  20: {
    pos: ['asthenic'],
  },
  21: {
    pos: ['delinquency'],
  },
  22: {
    pos: ['psychasthenic', 'psychasthenic'],
  },
  23: {
    pos: ['emancipation'],
    neg: ['labile'],
  },
  24: {
    pos: ['asthenic'],
  },
  25: {
    neg: ['cycloid'],
  },
  26: {
    pos: ['genderRoleM', 1],
  },
  27: {
    pos: ['cycloid'],
    neg: ['dissimulation', 'epileptoid', 'hysterical'],
  },
  28: {
    pos: ['delinquency'],
  },
  29: {
    pos: ['psychasthenic', 'schizoid', 'schizoid', 'epileptoid'],
  },
  30: {
    pos: ['heightenedFrankness'],
  },
  31: {
    pos: ['hyperthymic'],
  },
  32: {
    pos: ['sensitive'],
    neg: ['genderRoleM'],
  },
  33: {

    neg: ['conformal'],
  },
  34: {
    pos: ['psychasthenic'],
  },
  35: {
    pos: ['emancipation', 'genderRoleF', 'genderRoleF'],
  },
  36: {
    pos: ['unstable'],
    neg: ['schizoid', 'schizoid'],
  },
  37: {
    pos: ['epileptoid', 'epileptoid'],
    neg: ['labile'],
  },
  38: {
    pos: ['epileptoid', 'epileptoid'],
  },
  39: {
    neg: ['labile'],
  },
  40: {
    pos: ['cycloid'],
  },
  41: {
    pos: ['unstable', 'unstable'],
  },
  42: {
    neg: ['cycloid'],
  },
  43: {
    pos: ['hyperthymic', 'cycloid'],
    neg: ['delinquency'],
  },
  44: {
    pos: ['schizoid'],
  },
  45: {
    neg: ['epileptoid', 'epileptoid'],
  },
  46: {
    pos: ['hysterical', 'hysterical', 'emancipation', 'genderRoleF', 'genderRoleF'],
  },
  47: {
    pos: ['genderRoleF'],
  },
  48: {
    pos: ['schizoid'],
  },
  49: {
    pos: ['labile', 'labile', 'psychasthenic'],
  },
  50: {
    pos: ['heightenedFrankness', 'heightenedFrankness', 'heightenedFrankness'],
    neg: ['hyperthymic', 'labile'],
  },
  51: {
    pos: ['labile'],
  },
  52: {
    pos: ['psychasthenic'],
  },
  53: {
    neg: ['hysterical'],
  },
  54: {
    pos: ['delinquency'],
    neg: ['hyperthymic'],
  },
  55: {
    pos: ['heightenedFrankness', 'heightenedFrankness'],
  },
  56: {
    pos: ['asthenic', 'delinquency'],
    neg: ['organicNature'],
  },
  57: {
    pos: [2],
    neg: ['cycloid'],
  },
  58: {
    neg: ['genderRoleM'],
  },
  59: {
    neg: ['psychasthenic'],
  },
  60: {
    pos: ['labile', 'epileptoid'],
  },
  61: {
    pos: ['unstable', 'delinquency', 'emancipation'],
  },
  62: {
    pos: ['labile', 'genderRoleF'],
  },
  63: {
    pos: ['schizoid', 'hysterical'],
  },
  64: {
    pos: ['epileptoid'],
    neg: ['labile'],
  },
  65: {
    pos: [1],
    neg: ['genderRoleF'],
  },
  66: {
    pos: ['emancipation'],
    neg: ['conformal'],
  },
  67: {
    pos: ['sensitive', 'sensitive'],
  },
  68: {
    pos: ['epileptoid', 'epileptoid', 'delinquency'],
  },
  69: {
    pos: ['cycloid', 'psychasthenic', 'genderRoleM'],
  },
  70: {
    neg: ['hysterical', 'hysterical'],
  },
  71: {
    pos: ['asthenic', 'asthenic'],
  },
  72: {
    pos: ['asthenic'],
  },
  73: {
    pos: ['dissimulation', 'unstable', 'unstable'],
    neg: ['genderRoleM'],
  },
  74: {
    pos: ['epileptoid', 'delinquency'],
  },
  75: {
    pos: ['delinquency'],
  },
  76: {
    pos: ['sensitive', 'genderRoleM'],
  },
  77: {
    neg: ['hysterical'],
  },
  78: {
    pos: ['cycloid'],
  },
  79: {
    pos: ['cycloid', 'asthenic'],
  },
  80: {
    pos: ['asthenic'],
    neg: ['cycloid', 'epileptoid', 'genderRoleM'],
  },
  81: {
    neg: ['labile', 'sensitive'],
  },
  82: {
    neg: ['dissimulation'],
  },
  83: {
    pos: ['epileptoid'],
  },
  84: {
    pos: ['cycloid'],
  },
  85: {
    pos: ['hyperthymic', 'hyperthymic', 'emancipation'],
    neg: ['sensitive'],
  },
  86: {
    pos: ['genderRoleM'],
    neg: ['hyperthymic'],
  },
  87: {
    pos: ['conformal'],
  },
  88: {
    pos: ['cycloid'],
  },
  89: {
    pos: ['cycloid', 'asthenic', 'genderRoleF'],
  },
  90: {
    pos: ['organicNature', 'delinquency'],
    neg: ['sensitive'],
  },
  91: {
    pos: ['asthenic', 'psychasthenic'],
    neg: ['hyperthymic'],
  },
  92: {
    pos: ['emancipation'],
    neg: ['labile'],
  },
  93: {
    pos: ['delinquency'],
  },
  94: {
    pos: ['delinquency'],
  },
  95: {
    neg: ['asthenic'],
  },
  96: {
    pos: ['sensitive', -3],
    neg: ['cycloid', 'labile', 2],
  },
  97: {
    pos: ['organicNature', 'genderRoleM'],
  },
  98: {
    pos: ['hyperthymic', 'cycloid'],
    neg: ['sensitive'],
  },
  99: {
    neg: ['hysterical'],
  },
  100: {
    pos: ['emancipation'],
    neg: ['hysterical'],
  },
  101: {
    pos: ['labile'],
  },
  102: {
    pos: ['psychasthenic'],
  },
  103: {
    neg: ['labile', 'genderRoleM'],
  },
  104: {
    pos: ['asthenic'],
    neg: ['labile'],
  },
  105: {
    pos: ['schizoid', 'emancipation'],
  },
  106: {
    neg: ['epileptoid', 'hysterical', 'organicNature'],
  },
  107: {
    pos: ['sensitive'],
  },
  108: {
    pos: ['emancipation'],
  },
  109: {
    pos: ['epileptoid'],
    neg: ['epileptoid', 'epileptoid', 'unstable'],
  },
  110: {
    pos: ['psychasthenic'],
    neg: ['hyperthymic'],
  },
  111: {
    pos: ['heightenedFrankness'],
  },
  112: {
    pos: ['genderRoleM'],
  },
  113: {
    pos: ['sensitive', 'sensitive'],
  },
  114: {
    pos: ['psychasthenic'],
  },
  115: {
    neg: ['labile', 'unstable'],
  },
  116: {
    pos: ['emancipation'],
    neg: ['conformal'],
  },
  117: {
    pos: ['cycloid'],
    neg: ['delinquency'],
  },
  118: {
    neg: ['epileptoid'],
  },
  119: {
    neg: ['hysterical'],
  },
  120: {
    pos: ['asthenic', 'sensitive'],
  },
  121: {
    pos: ['hyperthymic'],
    neg: ['sensitive'],
  },
  122: {
    neg: ['dissimulation', 'hysterical'],
  },
  123: {
    pos: ['schizoid', 'schizoid', 'emancipation'],
    neg: ['conformal'],
  },
  124: {
    neg: ['hysterical'],
  },
  125: {
    neg: ['genderRoleM'],
  },
  126: {
    pos: ['labile', 'asthenic'],
  },
  127: {
    pos: [-1],
    neg: [1],
  },
  128: {
    pos: ['psychasthenic'],
  },
  129: {
    pos: ['cycloid'],
    neg: ['hyperthymic'],
  },
  130: {
    pos: ['epileptoid'],
    neg: ['organicNature'],
  },
  131: {
    pos: ['cycloid'],
    neg: ['delinquency'],
  },
  132: {
    pos: ['sensitive', 'sensitive'],
  },
  133: {
    pos: ['cycloid'],
  },
  134: {
    pos: ['genderRoleF'],
  },
  135: {
    pos: ['cycloid', 'delinquency'],
  },
  136: {
    pos: ['emancipation'],
    neg: ['hyperthymic', 'labile', 'psychasthenic', 'epileptoid'],
  },
  137: {
    pos: ['labile', 'asthenic'],
  },
  138: {
    pos: ['hyperthymic'],
    neg: ['sensitive', 'sensitive'],
  },
  139: {
    pos: ['cycloid', 'labile'],
  },
  140: {
    pos: ['hyperthymic', 'epileptoid', 'hysterical', 'unstable', 'unstable'],
  },
  141: {
    pos: ['hyperthymic', 'unstable'],
  },
  142: {
    pos: ['schizoid'],
  },
  143: {
    neg: ['hysterical', 'hysterical'],
  },
  144: {
    neg: ['hysterical'],
  },
  145: {
    pos: ['hyperthymic'],
  },
  146: {
    pos: ['hyperthymic'],
  },
  147: {
    pos: ['emancipation', 'genderRoleF', 'genderRoleF'],
  },
  148: {
    neg: ['schizoid', 'schizoid', 'delinquency', 'delinquency'],
  },
  149: {
    pos: ['hyperthymic', 'unstable', 'genderRoleM', 'genderRoleM'],
  },
  150: {
    pos: ['genderRoleM'],
  },
  151: {
    pos: ['hysterical', 'hysterical'],
    neg: ['conformal'],
  },
  152: {
    pos: ['genderRoleM'],
  },
  153: {
    neg: ['epileptoid'],
  },
  154: {
    neg: ['hysterical'],
  },
  155: {
    neg: ['delinquency', 'delinquency', 'delinquency'],
  },
  156: {
    pos: ['epileptoid', 'hysterical'],
    neg: ['asthenic'],
  },
  157: {
    pos: ['asthenic'],
  },
  158: {
    pos: [-1],
    neg: [2],
  },
  159: {
    pos: ['labile', 'asthenic'],
    neg: ['hysterical'],
  },
  160: {
    neg: ['epileptoid', 'epileptoid'],
  },
  161: {
    neg: ['epileptoid', 'epileptoid'],
  },
  162: {
    pos: ['emancipation'],
    neg: ['psychasthenic', 'psychasthenic'],
  },
  163: {
    pos: ['hyperthymic'],
    neg: ['sensitive'],
  },
  164: {
    pos: ['hyperthymic', 'genderRoleM'],
    neg: ['delinquency'],
  },
  165: {
    pos: ['sensitive'],
  },
  166: {
    neg: ['hysterical'],
  },
  167: {
    pos: ['genderRoleM'],
  },
  168: {
    pos: ['hyperthymic', 'epileptoid', 'unstable'],
    neg: ['sensitive', 'psychasthenic', 'schizoid', 'schizoid', 'schizoid'],
  },
  169: {
    pos: ['conformal'],
  },
  170: {
    pos: ['emancipation'],
  },
  171: {
    neg: ['labile'],
  },
  172: {
    neg: ['sensitive'],
  },
  173: {
    pos: ['cycloid'],
  },
  174: {
    neg: ['conformal', 'organicNature'],
  },
  175: {
    pos: ['dissimulation'],
  },
  176: {
    pos: ['genderRoleM'],
  },
  177: {
    pos: ['genderRoleF'],
  },
  178: {
    pos: ['emancipation', 'genderRoleF', 'genderRoleF', 'genderRoleF'],
  },
  179: {
    neg: ['hysterical'],
  },
  180: {
    pos: ['heightenedFrankness'],
  },
  181: {
    pos: ['genderRoleM'],
  },
  182: {
    neg: ['asthenic', 'organicNature'],
  },
  183: {
    neg: ['epileptoid', 'genderRoleF'],
  },
  184: {
    pos: ['schizoid'],
  },
  185: {
    pos: ['labile', 'sensitive'],
  },
  186: {
    pos: ['emancipation'],
    neg: ['cycloid'],
  },
  187: {
    neg: ['psychasthenic', 'psychasthenic'],
  },
  188: {
    pos: ['cycloid'],
  },
  189: {
    pos: ['hyperthymic', 'hyperthymic', 2],
    neg: ['sensitive', -1],
  },
  190: {
    pos: ['hysterical', 'genderRoleM'],
  },
  191: {
    pos: ['epileptoid'],
    neg: ['hyperthymic'],
  },
  192: {
    pos: ['schizoid', 'organicNature'],
    neg: ['psychasthenic', 'psychasthenic', 'epileptoid'],
  },
  193: {
    pos: ['asthenic'],
  },
  194: {
    pos: ['dissimulation'],
    neg: ['cycloid'],
  },
  195: {
    pos: ['unstable'],
  },
};
const accentuationsCompatibilityAndDominations = {
  hyperthymic: {
    combinations: ['cycloid', 'unstable', 'hysterical'],
    domination: ['labile', 'sensitive'],
    totalCombinations: 3,
  },
  cycloid: {
    combinations: ['hyperthymic', 'labile'],
    domination: [],
    totalCombinations: 2,
  },
  asthenic: {
    combinations: ['sensitive', 'psychasthenic', 'hysterical', 'labile'],
    domination: ['hyperthymic', 'cycloid'],
    tatalCombinations: 4,
  },
  psychasthenic: {
    combinations: ['schizoid', 'sensitive', 'asthenic'],
    domination: ['hyperthymic', 'cycloid', 'labile'],
    totalCombinations: 3,
  },
  epileptoid: {
    combinations: ['hysterical', 'unstable', 'schizoid'],
    domination: ['hyperthymic', 'asthenic', 'sensitive', 'cycloid', 'labile', 'psychasthenic'],
    totalCombinations: 3,
  },
  labile: {
    combinations: ['cycloid', 'asthenic', 'sensitive', 'hysterical', 'unstable'],
    domination: [],
    totalCombinations: 5,
  },
  sensitive: {
    combinations: ['asthenic', 'schizoid', 'labile'],
    domination: ['cycloid'],
    totalCombinations: 3,
  },
  schizoid: {
    combinations: ['psychasthenic', 'epileptoid', 'hysterical', 'sensitive', 'unstable'],
    domination: ['hyperthymic', 'asthenic', 'cycloid', 'labile'],
    totalCombinations: 5,
  },
  hysterical: {
    combinations: ['hyperthymic', 'asthenic', 'epileptoid', 'labile', 'schizoid', 'unstable'],
    domination: ['sensitive', 'psychasthenic', 'cycloid'],
    totalCombinations: 6,
  },
  unstable: {
    combinations: ['hyperthymic', 'epileptoid', 'labile', 'schizoid', 'hysterical'],
    domination: ['asthenic', 'sensitive', 'cycloid', 'psychasthenic'],
    totalCombinations: 5,
  },
};
function calcAnswers(result, answer) { // Each while loop we invoke this method and pass state.result and state.extremeAnswersList.getCurrent() into this one
  const { code } = this;
  const { accentuations, extraInfo } = result;
  const answerValue = parseInt(answer.answer, 0); // Get assessment in Int
  const answerResult = code[answer.index]; // Get answer object with results
  const codes = answerValue > 0 ? answerResult.pos : answerResult.neg;
  if (codes) {
    codes.forEach((el) => {
      switch (el) {
        case 'hyperthymic':
          accentuations.hyperthymic += 1;
          break;
        case 'cycloid':
          accentuations.cycloid += 1;
          break;
        case 'labile':
          accentuations.labile += 1;
          break;
        case 'asthenic':
          accentuations.asthenic += 1;
          break;
        case 'sensitive':
          accentuations.sensitive += 1;
          break;
        case 'psychasthenic':
          accentuations.psychasthenic += 1;
          break;
        case 'schizoid':
          accentuations.schizoid += 1;
          break;
        case 'epileptoid':
          accentuations.epileptoid += 1;
          break;
        case 'hysterical':
          accentuations.hysterical += 1;
          break;
        case 'unstable':
          accentuations.unstable += 1;
          break;
        case 'conformal':
          accentuations.conformal += 1;
          break;
        case 'dissimulation':
          extraInfo.dissimulation.value += 1;
          break;
        case 'heightenedFrankness':
          extraInfo.heightenedFrankness.value += 1;
          break;
        case 'organicNature':
          extraInfo.organicNature.value += 1;
          break;
        case 'emancipation':
          extraInfo.emancipation.value += 1;
          break;
        case 'delinquency':
          extraInfo.delinquency.value += 1;
          break;
        case 'genderRoleM':
          extraInfo.genderRole.m += 1;
          break;
        case 'genderRoleF':
          extraInfo.genderRole.f += 1;
          break;

        default:
          if (typeof el === 'number') extraInfo.addictionToAlcoholism.value += el;
          break;
      }
    });
  }
}
function addExtraPoints(result) {
  const { accentuations, extraInfo } = result;
  // Here is strict order to follow that can't be optimized via forin, forof, while etc.
  if (accentuations.hyperthymic <= 1) {
    accentuations.psychasthenic += 1;
    accentuations.sensitive += 1;
  }

  if (accentuations.hyperthymic >= 6) {
    accentuations.hyperthymic += 1;
  }

  if (accentuations.cycloid >= 6) {
    accentuations.labile += 1;
  }

  if (accentuations.asthenic >= 4) {
    accentuations.asthenic += 1;
    accentuations.labile += 1;
  }

  if (accentuations.psychasthenic <= 1) {
    accentuations.unstable += 1;
  }

  if (accentuations.unstable <= 1) {
    accentuations.psychasthenic += 1;
  }

  if (accentuations.conformal === 0) {
    accentuations.schizoid += 1;
    accentuations.schizoid += 1;
    accentuations.hysterical += 1;
  }

  if (accentuations.conformal === 1) {
    accentuations.schizoid += 1;
  }

  if (extraInfo.dissimulation.value >= 6) {
    accentuations.unstable += 1;
  }

  if (extraInfo.heightenedFrankness.value > extraInfo.dissimulation.value) {
    accentuations.psychasthenic += 1;
    accentuations.psychasthenic += 1;
    accentuations.cycloid += 1;
  }

  if (extraInfo.organicNature.value === 5) {
    accentuations.epileptoid += 1;
  }

  if (extraInfo.organicNature.value >= 6) {
    accentuations.epileptoid += 1;
    accentuations.epileptoid += 1;
  }

  if (extraInfo.emancipation.value >= 6) {
    accentuations.schizoid += 1;
    accentuations.hysterical += 1;
  }

  if (extraInfo.delinquency.value >= 5) {
    accentuations.schizoid += 1;
  }

  if (extraInfo.negativeAttitude.value >= 6) {
    accentuations.sensitive += 1;
  }

  if (extraInfo.gender === 'male' && extraInfo.genderRole.m < extraInfo.genderRole.f) {
    accentuations.sensitive += 1;
    accentuations.schizoid += 1;
    accentuations.hysterical += 1;
  }

  if (extraInfo.addictionToAlcoholism.value <= -6) {
    accentuations.sensitive += 1;
  }

  if (extraInfo.addictionToAlcoholism.value >= 6) {
    accentuations.hysterical += 1;
  }
}
function findProbableAccentuations(state) {
  const { accentuations } = state.result;
  const probableAccentuations = [];
  const tempAccentuations = [];

  for (const acc in accentuations) {
    if (accentuations[acc] >= 6) {
      const accent = {
        [acc]: accentuations[acc],
      };
      tempAccentuations.push(accent);
    }
  }

  if (tempAccentuations.length > 1) {
    tempAccentuations.forEach((accentuation) => {
      // Rule 4
      if (Object.keys(accentuation)[0] !== 'conformal') {
        probableAccentuations.push(accentuation);
      }
    });
  }

  return probableAccentuations;
}
function findActualAccentuations(state) {
  const { extraInfo } = state.result;
  const probableAccentuations = state.result.extraInfo.accentuations;
  const temp = [];

  // Rule 1
  if (probableAccentuations.length === 0) {
    return [];
  }

  if (probableAccentuations.length === 1) {
    return [probableAccentuations[0]];
  }

  // Rule 2 and 3
  probableAccentuations.forEach((accentuation) => {
    const accentName = Object.keys(accentuation)[0];

    if (accentName !== 'cycloid' && accentName !== 'conformal') {
      if (accentName !== 'sensitive' && accentName !== 'psychasthenic') {
        temp.push(accentuation);
      } else if (extraInfo.emancipation.value < 4) {
        temp.push(accentuation);
      }
    } else if (!extraInfo.dissimulation.availability) {
      temp.push(accentuation);
    }
  });

  // // Rule 5
  // let highestAccent = temp[0];
  // let highestAccentName = Object.keys(highestAccent)[0];

  // temp.forEach((accentuation) => {
  //   const accentName = Object.keys(accentuation)[0];

  //   if (accentuation[accentName] > highestAccent[highestAccentName]) {
  //     highestAccent = accentuation;
  //     highestAccentName = accentName;
  //   }
  // });

  // Sort accentuation to the find hieghest accentuations those have 4 >= points gap or add all accentuations in highestAccententuations array
  temp.sort((firstAcc, secondAcc) => {
    const firstAccentName = Object.keys(firstAcc)[0];
    const secondAccentName = Object.keys(secondAcc)[0];

    if (firstAcc[firstAccentName] < secondAcc[secondAccentName]) return 1;
    if (firstAcc[firstAccentName] > secondAcc[secondAccentName]) return -1;
    return 0;
  });

  // Rule 7 and 8B
  function findCombination(accentuations) {
    if (accentuations.length === 0 || accentuations.length === 1) {
      return accentuations;
    }
    if (accentuations.length === 2) {
      const firstAccentName = Object.keys(accentuations[0])[0];
      const secondAccentName = Object.keys(accentuations[1])[0];

      const firstAccentCompatibilityAndDominations = accentuationsCompatibilityAndDominations[firstAccentName];

      // Rule 8B
      if (firstAccentCompatibilityAndDominations.combinations.find(accent => accent === secondAccentName)) {
        return accentuations;
      }

      // Rule 7
      return firstAccentCompatibilityAndDominations.domination.find(accent => accent === secondAccentName) ? [accentuations[0]] : [accentuations[1]];
    }

    const combination = [];

    accentuations.forEach((accent, i) => {
      const accentName = Object.keys(accent)[0];
      const { combinations, domination } = accentuationsCompatibilityAndDominations[accentName];
      let restAccentuations;
      if (i === 0) {
        restAccentuations = accentuations.slice(1, accentuations.length);
      } else if (i === accentuations.length - 1) {
        restAccentuations = accentuations.slice(0, accentuations.length - 1);
      } else {
        restAccentuations = [...accentuations.slice(0, i), ...accentuations.slice(i + 1, accentuations.length)];
      }

      const isStaying = restAccentuations.every((nextAccent) => {
        const comparingAccentName = Object.keys(nextAccent)[0];

        // Here I don't use these options:
        // const d = !!domination.find(acc => comparingAccentName === acc);
        // const c = !!combinations.find(acc => comparingAccentName === acc);
        // because EI11 doesn't have .find on arrays and webpack doesn't replace this method with method that works
        let d = false;
        domination.forEach((acc) => {
          if (comparingAccentName === acc) d = true;
        });

        let c = false;
        combinations.forEach((acc) => {
          if (comparingAccentName === acc) c = true;
        });
        const result = d || c;

        return result;
      });

      if (isStaying) {
        combination.push(accent);
      }
    });

    // Rule 8B
    if (combination.length > 3) {
      combination.sort((firstAcc, secondAcc) => {
        const firstAccentName = Object.keys(firstAcc)[0];
        const secondAccentName = Object.keys(secondAcc)[0];

        const firstAccentCombinations = accentuationsCompatibilityAndDominations[firstAccentName].totalCombinations;
        const secondAccentCombinations = accentuationsCompatibilityAndDominations[secondAccentName].totalCombinations;

        if (firstAccentCombinations < secondAccentCombinations) return 1;
        if (firstAccentCombinations > secondAccentCombinations) return -1;
        return 0;
      });

      // Delete an accentuation with the least number of combinations
      combination.splice(combination.length - 1, 1);
    }

    return combination;
  }

  // Rule 5
  const highestAccententuations = [];

  temp.some((firstAcc, i, arr) => {
    const firstAccentName = Object.keys(firstAcc)[0];

    if (arr[i + 1]) {
      const secondAcc = arr[i + 1];
      const secondAccentName = Object.keys(secondAcc)[0];

      if (firstAcc[firstAccentName] - secondAcc[secondAccentName] < 4) {
        highestAccententuations.push(firstAcc);
      } else {
        highestAccententuations.push(firstAcc);
        return true;
      }
    } else {
      highestAccententuations.push(firstAcc);
    }

    return false;
  });

  console.log('highestAccententuations', highestAccententuations);
  // Rule 6
  if (highestAccententuations.length === 1) {
    return highestAccententuations;
  }

  // Rule 7 and 8B
  if (highestAccententuations.length === 2) {
    return findCombination(highestAccententuations);
  }

  // Rule 5


  if (temp.length === 2) {
    return findCombination(temp);
  }


  return findCombination(highestAccententuations);
}
function getConformity(state) {
  let conformity = 'low';

  if (state.result.accentuations.conformal <= 1) {
    conformity = 'low';
  }
  if (state.result.accentuations.conformal === 2 || state.result.accentuations.conformal === 3) {
    conformity = 'moderate';
  }
  if (state.result.accentuations.conformal === 4 || state.result.accentuations.conformal === 5) {
    conformity = 'medium';
  }
  if (state.result.accentuations.conformal >= 6) {
    conformity = 'high';
  }

  return conformity;
}
function getNegativeAttitude(state) {
  const { negativeAttitude } = state.result.extraInfo;

  state.result.extraInfo.accentuations.some((accentuation) => {
    if (Object.keys(accentuation)[0] === 'sensitive' && state.result.extraInfo.negativeAttitude.value >= 6) {
      negativeAttitude.availability = true;
    }
  });

  if (state.result.extraInfo.negativeAttitude.value >= 7) {
    negativeAttitude.availability = true;
  }

  return negativeAttitude;
}
function getDissimulation(state) {
  const { dissimulation, heightenedFrankness } = state.result.extraInfo;
  dissimulation.resultValue = dissimulation.value - heightenedFrankness.value;
  dissimulation.availability = dissimulation.resultValue >= 4;

  return dissimulation;
}
function getHeightenedFrankness(state) {
  const { heightenedFrankness, dissimulation } = state.result.extraInfo;
  heightenedFrankness.availability = heightenedFrankness.value > dissimulation.value;

  return heightenedFrankness;
}
function getOrganicNatureChance(state) {
  const { organicNature } = state.result.extraInfo;
  organicNature.availability = organicNature.value >= 5;

  return organicNature;
}
function getEmancipationReaction(state) {
  const { emancipation } = state.result.extraInfo;

  if (emancipation.value <= 1) {
    emancipation.availability = 'low';
  }
  if (emancipation.value === 2 || emancipation.value === 3) {
    emancipation.availability = 'medium';
  }
  if (emancipation.value === 4 || emancipation.value === 5) {
    emancipation.availability = 'high';
  }
  if (emancipation.value >= 6) {
    emancipation.availability = 'very high';
  }

  return emancipation;
}
function getDelinquency(state) {
  const { delinquency, accentuations } = state.result.extraInfo;

  if (accentuations.length === 0) {
    delinquency.availability = delinquency.value >= 4;
  } else {
    accentuations.forEach((accentuation) => {
      const accentName = Object.keys(accentuation)[0];
      if (accentName === 'schizoid') {
        delinquency.availability = 'undiagnosed';
      }
    });
  }

  return delinquency;
}
function getGenderRole(state) {
  const { genderRole } = state.result.extraInfo;
  genderRole.result = 'equal';

  if ((genderRole.m - genderRole.f) > 0) genderRole.result = 'male';
  if ((genderRole.m - genderRole.f) < 0) genderRole.result = 'female';

  return genderRole;
}
function getAddictionToAlcoholism(state) {
  const { addictionToAlcoholism } = state.result.extraInfo;
  if (addictionToAlcoholism.value <= 0) addictionToAlcoholism.availability = 'absent';
  if (addictionToAlcoholism.value === 0 || addictionToAlcoholism.value === 1) addictionToAlcoholism.availability = 'not determined';
  if (addictionToAlcoholism.value >= 2 && addictionToAlcoholism.value < 6) addictionToAlcoholism.availability = 'exists';
  if (addictionToAlcoholism.value >= 6) addictionToAlcoholism.availability = 'demostrative';
  return addictionToAlcoholism;
}
function getSocialDisadaptationRisk(state) {
  const { result } = state;
  const { accentuations, extraInfo } = result;
  const resultAccentuations = extraInfo.accentuations;

  let value = 0;
  let risk = 'none';

  resultAccentuations.forEach((accentuation) => {
    const accent = Object.keys(accentuation)[0];

    if (accent === 'hyperthymic') {
      if (accentuations.hyperthymic >= 11) {
        value += 1;
      }
      if (accentuations.epileptoid >= 7) {
        value += 1;
      }
      if (accentuations.unstable >= 8) {
        value += 1;
      }
      if (result.extraInfo.dissimulation.value >= 5) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 5) {
        value += 1;
      }
      if (accentuations.hyperthymic + accentuations.unstable >= 19) {
        value += 1;
      }
    }

    if (accent === 'labile') {
      if (accentuations.labile >= 12) {
        value += 1;
      }
      if (accentuations.schizoid >= 7) {
        value += 1;
      }
      if (accentuations.unstable >= 7) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 4) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 4) {
        value += 1;
      }
    }

    if (accent === 'sensitive') {
      if (accentuations.sensitive >= 11) {
        value += 1;
      }
      if (accentuations.epileptoid >= 6) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 3) {
        value += 1;
      }
      if (result.extraInfo.tendencyOfDepression.pos !== 0 && result.extraInfo.tendencyOfDepression.neg !== 0) {
        value += 1;
      }
    }

    if (accent === 'schizoid') {
      if (accentuations.labile >= 6) {
        value += 1;
      }
      if (accentuations.schizoid >= 12) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 5) {
        value += 1;
      }
    }

    if (accent === 'epileptoid') {
      if (accentuations.schizoid >= 7) {
        value += 1;
      }
      if (accentuations.hysterical >= 8) {
        value += 1;
      }
      if (accentuations.unstable >= 8) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 5) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 5) {
        value += 1;
      }
    }

    if (accent === 'hysterical') {
      if (accentuations.asthenic >= 5) {
        value += 1;
      }
      if (accentuations.psychasthenic >= 8) {
        value += 1;
      }
      if (accentuations.hysterical >= 13) {
        value += 1;
      }
      if (accentuations.unstable >= 7) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 6) {
        value += 1;
      }
    }

    if (accent === 'unstable') {
      if (accentuations.cycloid >= 6) {
        value += 1;
      }
      if (accentuations.hysterical >= 10) {
        value += 1;
      }
      if (result.extraInfo.organicNature.value >= 5) {
        value += 1;
      }
      if (accentuations.asthenic + accentuations.sensitive + accentuations.psychasthenic >= 7) {
        value += 1;
      }
    }
  });

  if (value === 1) {
    risk = 'exists';
  } else if (value >= 2) {
    risk = 'high';
  }

  return {
    value,
    risk,
  };
}
function getProbabilityOfPsychopathy(state) {
  const { result } = state;
  const { accentuations, extraInfo } = result;
  const resultAccentuations = extraInfo.accentuations;

  let value = 0;

  resultAccentuations.forEach((accentuation) => {
    const accent = Object.keys(accentuation)[0];

    if (accent === 'hyperthymic') {
      if (accentuations.unstable >= 10) {
        value += 1;
      }
      if (accentuations.conformal === 0) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 6) {
        value += 1;
      }
    }

    if (accent === 'labile') {
      if (accentuations.asthenic >= 6) {
        value += 1;
      }
      if (accentuations.schizoid >= 7) {
        value += 1;
      }
      if (accentuations.conformal === 0) {
        value += 1;
      }
      if (result.extraInfo.dissimulation.value >= 6) {
        value += 1;
      }
    }

    if (accent === 'sensitive') {
      if (accentuations.sensitive >= 12) {
        value += 1;
      }
    }

    if (accent === 'schizoid') {
      if (accentuations.hyperthymic <= 1) {
        value += 1;
      }
      if (accentuations.labile <= 1) {
        value += 1;
      }
      if (accentuations.schizoid >= 13) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 7) {
        value += 1;
      }
      if (result.extraInfo.addictionToAlcoholism.value >= 4) {
        value += 1;
      }
    }

    if (accent === 'epileptoid') {
      if (accentuations.hyperthymic === 0) {
        value += 1;
      }
      if (accentuations.cycloid >= 8) {
        value += 1;
      }
      if (accentuations.conformal <= 1) {
        value += 1;
      }
      if (accentuations.epileptoid >= 10) {
        value += 1;
      }
      if (result.extraInfo.delinquency.value >= 6) {
        value += 1;
      }
    }

    if (accent === 'hysterical') {
      if (accentuations.asthenic >= 5) {
        value += 1;
      }
      if (result.extraInfo.negativeAttitude.value >= 6) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 6) {
        value += 1;
      }
    }

    if (accent === 'unstable') {
      if (accentuations.unstable >= 12) {
        value += 1;
      }
      if (accentuations.conformal <= 1) {
        value += 1;
      }
      if (result.extraInfo.organicNature.value >= 5) {
        value += 1;
      }
      if (result.extraInfo.addictionToAlcoholism.value <= 6) {
        value += 1;
      }
    }
  });
  return {
    value,
    availability: value > 0,
  };
}
function getTendencyOfDepression(state) {
  const { result } = state;
  const { extraInfo, accentuations } = result;
  let value = 0;

  if (accentuations.hyperthymic <= 2) {
    extraInfo.tendencyOfDepression.pos += 1;
  } else if (accentuations.hyperthymic >= 7) {
    extraInfo.tendencyOfDepression.neg -= 1;
  }

  if (accentuations.sensitive >= 7) {
    extraInfo.tendencyOfDepression.pos += 1;
  }

  if (accentuations.unstable <= 2) {
    extraInfo.tendencyOfDepression.pos += 1;
  } else if (accentuations.hyperthymic >= 7) {
    extraInfo.tendencyOfDepression.neg -= 1;
  }

  if (extraInfo.heightenedFrankness.value > extraInfo.dissimulation.value) {
    extraInfo.tendencyOfDepression.pos += 1;
  }
  if (extraInfo.dissimulation.value - extraInfo.heightenedFrankness.value >= 4) {
    extraInfo.tendencyOfDepression.neg -= 1;
  }

  if (extraInfo.gender === 'male') {
    if (extraInfo.genderRole.m < extraInfo.genderRole.f) {
      extraInfo.tendencyOfDepression.pos += 1;
    }
  }

  let availability = 'not determined';

  if ((extraInfo.tendencyOfDepression.pos + extraInfo.tendencyOfDepression.neg) < 0) {
    availability = 'absent';
  } else if ((extraInfo.tendencyOfDepression.pos + extraInfo.tendencyOfDepression.neg) >= 2) {
    availability = 'risk';
  } else {
    availability = 'not determined';
  }

  value = extraInfo.tendencyOfDepression.pos + extraInfo.tendencyOfDepression.neg;

  return {
    ...extraInfo.tendencyOfDepression,
    value,
    availability,
  };
}
function getDrugsRisk(state) {
  const { result } = state;
  const { extraInfo, accentuations } = result;
  let value = 0;
  let risk = 'none';

  if (accentuations.sensitive <= 2) {
    value += 2;
  }
  if (accentuations.unstable >= 7) {
    value += 2;
  }
  if (accentuations.epileptoid >= 7) {
    value += 1;
  }
  if (extraInfo.addictionToAlcoholism.value >= 4) {
    value += 1;
  }

  if (value <= 1) {
    risk = 'none';
  }
  if (value === 2) {
    risk = 'middle';
  }
  if (value === 3) {
    risk = 'expressed';
  }
  if (value >= 4) {
    risk = 'very high';
  }

  return {
    value,
    risk,
  };
}
function getSuicideAttempts(state) {
  const { result } = state;
  const { extraInfo, accentuations } = result;
  let value = 0;
  let type;

  if (accentuations.sensitive >= 6) {
    value += 1;
  } else if (accentuations.sensitive <= 3) {
    value -= 1;
  }

  if (accentuations.unstable <= 2) {
    value += 1;
  } else if (accentuations.hyperthymic >= 6) {
    value -= 1;
  }

  if (accentuations.hyperthymic >= 7) {
    value -= 1;
  }

  if (extraInfo.heightenedFrankness.value > extraInfo.dissimulation.value) {
    value += 1;
  }

  if (extraInfo.suicideAttempts.value >= 2) {
    value += 1;
  } else if (extraInfo.suicideAttempts.value <= -2) {
    value -= 1;
  }

  if (extraInfo.discordance.value > 0) {
    value += 1;
  }

  if (value > 0) {
    type = true;
  } else if (value < 0) {
    type = false;
  }

  return {
    value,
    type,
  };
}
function getDiscordance(state) {
  const { result } = state;
  const { extraInfo, accentuations } = result;
  const resultAccentuations = extraInfo.accentuations;

  let value = 0;

  resultAccentuations.forEach((accentuation) => {
    const accent = Object.keys(accentuation)[0];

    if (accent === 'hyperthymic') {
      if (accentuations.sensitive >= 6) {
        value += 1;
      }
      if (accentuations.psychasthenic >= 6) {
        value += 1;
      }
      if (accentuations.schizoid >= 6) {
        value += 1;
      }
    }

    if (accent === 'cycloid') {
      if (accentuations.schizoid >= 7) {
        value += 1;
      }
    }

    if (accent === 'sensitive') {
      if (accentuations.epileptoid >= 6) {
        value += 1;
      }
      if (accentuations.hysterical >= 6) {
        value += 1;
      }
    }

    if (accent === 'psychasthenic') {
      if (accentuations.unstable >= 6) {
        value += 1;
      }
    }

    if (accent === 'schizoid') {
      if (accentuations.hyperthymic >= 6) {
        value += 1;
      }
      if (accentuations.cycloid >= 6) {
        value += 1;
      }
    }

    if (accent === 'epileptoid') {
      if (accentuations.sensitive >= 6) {
        value += 1;
      }
    }

    if (accent === 'hysterical') {
      if (accentuations.sensitive >= 6) {
        value += 1;
      }
    }

    if (accent === 'unstable') {
      if (accentuations.sensitive >= 6) {
        value += 1;
      }
      if (accentuations.psychasthenic >= 6) {
        value += 1;
      }
      if (result.extraInfo.emancipation.value >= 5) {
        value += 1;
      }
    }
  });

  return {
    value,
    availability: value > 0,
  };
}

const portableCode = {
  calcAnswers,
  addExtraPoints,
  findProbableAccentuations,
  findActualAccentuations,
  getConformity,
  getNegativeAttitude,
  getDissimulation,
  getHeightenedFrankness,
  getOrganicNatureChance,
  getEmancipationReaction,
  getDelinquency,
  getGenderRole,
  getAddictionToAlcoholism,
  getSocialDisadaptationRisk,
  getProbabilityOfPsychopathy,
  getTendencyOfDepression,
  getDrugsRisk,
  getSuicideAttempts,
  getDiscordance,
  code,
  accentuationsCompatibilityAndDominations,
};

export default portableCode;
