/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const portableCode = {
  calcAnswers(result, answer) { // Each while loop we invoke this method and pass state.result and state.extremeAnswersList.getCurrent() into this one
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
  },
  addExtraPoints(result) {
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

    if (extraInfo.dissimulation >= 6) {
      accentuations.unstable += 1;
    }

    if (extraInfo.heightenedFrankness > extraInfo.dissimulation) {
      accentuations.psychasthenic += 1;
      accentuations.psychasthenic += 1;
      accentuations.cycloid += 1;
    }

    if (extraInfo.organicNature === 5) {
      accentuations.epileptoid += 1;
    }

    if (extraInfo.organicNature >= 6) {
      accentuations.epileptoid += 1;
      accentuations.epileptoid += 1;
    }

    if (extraInfo.emancipation >= 6) {
      accentuations.schizoid += 1;
      accentuations.hysterical += 1;
    }

    if (extraInfo.delinquency >= 5) {
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

    if (extraInfo.addictionToAlcoholism <= -6) {
      accentuations.sensitive += 1;
    }

    if (extraInfo.addictionToAlcoholism >= 6) {
      accentuations.hysterical += 1;
    }
  },
  findProbableAccentuations(result) {
    const { accentuations } = result;
    const probableAccentuations = [];
    for (const acc in accentuations) {
      if (accentuations[acc] >= 6) {
        const accent = {
          [acc]: accentuations[acc],
        };
        probableAccentuations.push(accent);
      }
    }

    return probableAccentuations;
  },
  findActualAccentuations(probableAccentuations) {
    if (probableAccentuations.length === 0) {
      return null;
    }
    if (probableAccentuations.length === 1) {
      return probableAccentuations[0];
    }


  },
  getConformity(state) {
    if (state.accentuations.conformal <= 1) {
      return 'low';
    }
    if (state.accentuations.conformal === 2 || state.accentuations.conformal === 3) {
      return 'moderate';
    }
    if (state.accentuations.conformal === 4 || state.accentuations.conformal === 5) {
      return 'medium';
    }
    if (state.accentuations.conformal >= 6) {
      return 'high';
    }
  },
  getNegativeAttitude(state) {
    state.result.extraInfo.accentuations.some((accentuation) => {
      if (accentuation === 'sensitive' && state.result.extraInfo.negativeAttitude.value >= 6) {
        return true;
      }
    });

    if (state.result.extraInfo.negativeAttitude.value >= 7) {
      return true;
    }
    return false;
  },
  getDissimulation(state) {
    return (state.result.extraInfo.dissimulation.value - state.result.extraInfo.heightenedFrankness.value) >= 4;
  },
  getHeightenedFrankness(state) {
    return state.result.extraInfo.heightenedFrankness.value > state.result.extraInfo.dissimulation.value;
  },
  getOrganicNatureChance(state) {
    return state.result.extraInfo.organicNature.value >= 5;
  },
  getEmancipationReaction(state) {
    if (state.accentuations.emancipation.value <= 1) {
      return 'low';
    }
    if (state.accentuations.emancipation.value === 2 || state.accentuations.emancipation.value === 3) {
      return 'medium';
    }
    if (state.accentuations.emancipation.value === 4 || state.accentuations.emancipation.value === 5) {
      return 'high';
    }
    if (state.accentuations.emancipation.value >= 6) {
      return 'very high';
    }
  },
  getDelinquency(state) {
    return state.result.extraInfo.delinquency.value >= 4;
  },
  getGenderRole(state) {
    const { genderRole } = state.result.extraInfo;
    if ((genderRole.m - genderRole.f) > 0) return 'male';
    if ((genderRole.m - genderRole.f) < 0) return 'female';
    return 'equal';
  },
  getAddictionToAlcoholism(state) {
    const { addictionToAlcoholism } = state.result.extraInfo;
    if (addictionToAlcoholism.value === 0 || addictionToAlcoholism.value === 1) return 'not determined';
    if (addictionToAlcoholism.value >= 2 && addictionToAlcoholism.value < 6) return 'exists';
    if (addictionToAlcoholism.value >= 6) return 'demostrative';
    return 'none';
  },
  getSocialDisadaptationRisk(state) {
    const { result } = state;
    const { accentuations, extraInfo } = result;
    let score = 0;

    extraInfo.accentuations.forEach((accentuation) => {
      if (accentuation === 'hyperthymic') {
        if (accentuations.hyperthymic >= 11) {
          score += 1;
        }
        if (accentuations.epileptoid >= 7) {
          score += 1;
        }
        if (accentuations.unstable >= 8) {
          score += 1;
        }
        if (result.extraInfo.dissimulation.value >= 5) {
          score += 1;
        }
        if (result.extraInfo.emancipation.value >= 5) {
          score += 1;
        }
        if (accentuations.hyperthymic + accentuations.unstable >= 19) {
          score += 1;
        }
      }

      if (accentuation === 'labile') {
        if (accentuations.labile >= 12) {
          score += 1;
        }
        if (accentuations.schizoid >= 7) {
          score += 1;
        }
        if (accentuations.unstable >= 7) {
          score += 1;
        }
        if (result.extraInfo.emancipation.value >= 4) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 4) {
          score += 1;
        }
      }

      if (accentuation === 'sensitive') {
        if (accentuations.sensitive >= 11) {
          score += 1;
        }
        if (accentuations.epileptoid >= 6) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 3) {
          score += 1;
        }
        if (result.extraInfo.tendencyOfDepression.pos !== 0 && result.extraInfo.tendencyOfDepression.neg !== 0) {
          score += 1;
        }
      }

      if (accentuation === 'schizoid') {
        if (accentuations.labile >= 6) {
          score += 1;
        }
        if (accentuations.schizoid >= 12) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 5) {
          score += 1;
        }
      }

      if (accentuation === 'epileptoid') {
        if (accentuations.schizoid >= 7) {
          score += 1;
        }
        if (accentuations.hysterical >= 8) {
          score += 1;
        }
        if (accentuations.unstable >= 8) {
          score += 1;
        }
        if (result.extraInfo.emancipation.value >= 5) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 5) {
          score += 1;
        }
      }

      if (accentuation === 'hysterical') {
        if (accentuations.asthenic >= 5) {
          score += 1;
        }
        if (accentuations.psychasthenic >= 8) {
          score += 1;
        }
        if (accentuations.hysterical >= 13) {
          score += 1;
        }
        if (accentuations.unstable >= 7) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 6) {
          score += 1;
        }
      }

      if (accentuation === 'unstable') {
        if (accentuations.cycloid >= 6) {
          score += 1;
        }
        if (accentuations.hysterical >= 10) {
          score += 1;
        }
        if (result.extraInfo.organicNature.value >= 5) {
          score += 1;
        }
        if (accentuations.asthenic + accentuations.sensitive + accentuations.psychasthenic >= 7) {
          score += 1;
        }
      }
    });
    return score;
  },
  getProbabilityOfPsychopathy(state) {
    const { result } = state;
    const { accentuations, extraInfo } = result;
    let score = 0;

    extraInfo.accentuations.forEach((accentuation) => {
      if (accentuation === 'hyperthymic') {
        if (accentuations.unstable >= 10) {
          score += 1;
        }
        if (accentuations.conformal === 0) {
          score += 1;
        }
        if (result.extraInfo.emancipation.value >= 6) {
          score += 1;
        }
      }

      if (accentuation === 'labile') {
        if (accentuations.asthenic >= 6) {
          score += 1;
        }
        if (accentuations.schizoid >= 7) {
          score += 1;
        }
        if (accentuations.conformal === 0) {
          score += 1;
        }
        if (result.extraInfo.dissimulation.value >= 6) {
          score += 1;
        }
      }

      if (accentuation === 'sensitive') {
        if (accentuations.sensitive >= 12) {
          score += 1;
        }
      }

      if (accentuation === 'schizoid') {
        if (accentuations.hyperthymic <= 1) {
          score += 1;
        }
        if (accentuations.labile <= 1) {
          score += 1;
        }
        if (accentuations.schizoid >= 13) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 7) {
          score += 1;
        }
        if (result.extraInfo.addictionToAlcoholism.value >= 4) {
          score += 1;
        }
      }

      if (accentuation === 'epileptoid') {
        if (accentuations.hyperthymic === 0) {
          score += 1;
        }
        if (accentuations.cycloid >= 8) {
          score += 1;
        }
        if (accentuations.conformal <= 1) {
          score += 1;
        }
        if (accentuations.epileptoid >= 10) {
          score += 1;
        }
        if (result.extraInfo.delinquency.value >= 6) {
          score += 1;
        }
      }

      if (accentuation === 'hysterical') {
        if (accentuations.asthenic >= 5) {
          score += 1;
        }
        if (result.extraInfo.negativeAttitude.value >= 6) {
          score += 1;
        }
        if (result.extraInfo.emancipation.value >= 6) {
          score += 1;
        }
      }

      if (accentuation === 'unstable') {
        if (accentuations.unstable >= 12) {
          score += 1;
        }
        if (accentuations.conformal <= 1) {
          score += 1;
        }
        if (result.extraInfo.organicNature.value >= 5) {
          score += 1;
        }
        if (result.extraInfo.addictionToAlcoholism.value <= 6) {
          score += 1;
        }
      }
    });
    return {
      value: score,
      availability: score > 0,
    };
  },
  getTendencyOfDepression(state) {
    const { result, accentuations } = state;
    const { extraInfo } = result;

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

    return {
      ...extraInfo.tendencyOfDepression,
      availability: (extraInfo.tendencyOfDepression.pos + extraInfo.tendencyOfDepression.neg) > 0,
    };
  },
  code: {
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
  },
  accentuationsCompatibilityAndDominations: {
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
  },
};

export default portableCode;
