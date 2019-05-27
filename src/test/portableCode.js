const portableCode = {
  calc(result, answer) {
    const { code } = this;
    const { accentuations, extraInfo } = result;
    const answerValue = parseInt(answer.value, 0); // Get assessment in Int
    const answerResult = code[answer.index]; // Get answer object with results
    const codes = answerValue > 0 ? answerResult.pos : answerResult.neg;
    if (codes) {
      codes.forEach((el) => {
        switch (el) {
          case 'Г':
            accentuations.hyperthymic += 1;
            break;
          case 'Ц':
            accentuations.cycloid += 1;
            break;
          case 'Л':
            accentuations.labile += 1;
            break;
          case 'А':
            accentuations.asthenic += 1;
            break;
          case 'С':
            accentuations.sensitive += 1;
            break;
          case 'П':
            accentuations.psychasthenic += 1;
            break;
          case 'Ш':
            accentuations.schizoid += 1;
            break;
          case 'Э':
            accentuations.epileptoid += 1;
            break;
          case 'И':
            accentuations.hysterical += 1;
            break;
          case 'Н':
            accentuations.unstable += 1;
            break;
          case 'К':
            accentuations.conformal += 1;
            break;
          case 'Д':
            extraInfo.dissimulation.value += 1;
            break;
          case 'Т':
            extraInfo.heightenedFrankness.value += 1;
            break;
          case 'В':
            extraInfo.organicNature.value += 1;
            break;
          case 'Е':
            extraInfo.emancipation.value += 1;
            break;
          case 'd':
            extraInfo.delinquency.value += 1;
            break;
          case 'М':
            extraInfo.genderRole.m += 1;
            break;
          case 'Ф':
            extraInfo.genderRole.f += 1;
            break;
          case typeof el === 'number':
            extraInfo.addictionToAlcoholism.value += el;
            break;

          default:
            break;
        }
      });
    }
  },
  code: {
    1: {
      pos: ['A'],
    },
    2: {
      pos: ['T'],
    },
    3: {
      pos: ['С', 'П', 'Ш', -3],
      neg: [1],
    },
    4: {
      pos: ['П', 'П'],
    },
    5: {
      pos: ['С', 'Ш', 'Ш'],
    },
    6: {
      pos: ['П'],
      neg: ['Ц'],
    },
    7: {
      pos: ['Д', 'Е'],
    },
    8: {
      pos: ['И'],
    },
    9: {
      pos: ['Д', 'Н', 'Н'],
    },
    10: {
      pos: ['d'],
    },
    11: {
      neg: ['Н', 'Н'],
    },
    12: {
      pos: ['К'],
    },
    13: {
      pos: ['Л'],
    },
    14: {
      pos: ['В'],
    },
    15: {
      neg: ['И'],
    },
    16: {
      pos: ['d'],
    },
    17: {
      pos: ['Л', 'С'],
      neg: ['d'],
    },
    18: {
      pos: ['Т', 'С'],
    },
    19: {
      pos: ['Л', 'И'],
    },
    20: {
      pos: ['А'],
    },
    21: {
      pos: ['d'],
    },
    22: {
      pos: ['П', 'П'],
    },
    23: {
      pos: ['Е'],
      neg: ['Л'],
    },
    24: {
      pos: ['А'],
    },
    25: {
      neg: ['Ц'],
    },
    26: {
      pos: ['М', 1],
    },
    27: {
      pos: ['Ц'],
      neg: ['Д', 'Э', 'И'],
    },
    28: {
      pos: ['d'],
    },
    29: {
      pos: ['П', 'Ш', 'Ш', 'Э'],
    },
    30: {
      pos: ['Т'],
    },
    31: {
      pos: ['Г'],
    },
    32: {
      pos: ['С'],
      neg: ['М'],
    },
    33: {

      neg: ['К'],
    },
    34: {
      pos: ['П'],
    },
    35: {
      pos: ['Е', 'Ф', 'Ф'],
    },
    36: {
      pos: ['Н'],
      neg: ['Ш', 'Ш'],
    },
    37: {
      pos: ['Э', 'Э'],
      neg: ['Л'],
    },
    38: {
      pos: ['Э', 'Э'],
    },
    39: {
      neg: ['Л'],
    },
    40: {
      pos: ['Ц'],
    },
    41: {
      pos: ['Н', 'Н'],
    },
    42: {
      neg: ['Ц'],
    },
    43: {
      pos: ['Г', 'Ц'],
      neg: ['d'],
    },
    44: {
      pos: ['Ш'],
    },
    45: {
      neg: ['Э', 'Э'],
    },
    46: {
      pos: ['И', 'И', 'Е', 'Ф', 'Ф'],
    },
    47: {
      pos: ['Ф'],
    },
    48: {
      pos: ['Ш'],
    },
    49: {
      pos: ['Л', 'Л', 'П'],
    },
    50: {
      pos: ['Т', 'Т', 'Т'],
      neg: ['Г', 'Л'],
    },
    51: {
      pos: ['Л'],
    },
    52: {
      pos: ['П'],
    },
    53: {
      neg: ['И'],
    },
    54: {
      pos: ['d'],
      neg: ['Г'],
    },
    55: {
      pos: ['Т', 'Т'],
    },
    56: {
      pos: ['А', 'd'],
      neg: ['В'],
    },
    57: {
      pos: [2],
      neg: ['Ц'],
    },
    58: {
      neg: ['М'],
    },
    59: {
      neg: ['П'],
    },
    60: {
      pos: ['Л', 'Э'],
    },
    61: {
      pos: ['Н', 'd', 'Е'],
    },
    62: {
      pos: ['Л', 'Ф'],
    },
    63: {
      pos: ['Ш', 'И'],
    },
    64: {
      pos: ['Э'],
      neg: ['Л'],
    },
    65: {
      pos: [1],
      neg: ['Ф'],
    },
    66: {
      pos: ['Е'],
      neg: ['К'],
    },
    67: {
      pos: ['С', 'С'],
    },
    68: {
      pos: ['Э', 'Э', 'd'],
    },
    69: {
      pos: ['Ц', 'П', 'М'],
    },
    70: {
      neg: ['И', 'И'],
    },
    71: {
      pos: ['А', 'А'],
    },
    72: {
      pos: ['А'],
    },
    73: {
      pos: ['Д', 'Н', 'Н'],
      neg: ['М'],
    },
    74: {
      pos: ['Э', 'd'],
    },
    75: {
      pos: ['d'],
    },
    76: {
      pos: ['С', 'М'],
    },
    77: {
      neg: ['И'],
    },
    78: {
      pos: ['Ц'],
    },
    79: {
      pos: ['Ц', 'А'],
    },
    80: {
      pos: ['А'],
      neg: ['Ц', 'Э', 'М'],
    },
    81: {
      neg: ['Л', 'С'],
    },
    82: {
      neg: ['Д'],
    },
    83: {
      pos: ['Э'],
    },
    84: {
      pos: ['Ц'],
    },
    85: {
      pos: ['Г', 'Г', 'Е'],
      neg: ['С'],
    },
    86: {
      pos: ['М'],
      neg: ['Г'],
    },
    87: {
      pos: ['К'],
    },
    88: {
      pos: ['Ц'],
    },
    89: {
      pos: ['Ц', 'А', 'Ф'],
    },
    90: {
      pos: ['В', 'd'],
      neg: ['С'],
    },
    91: {
      pos: ['А', 'П'],
      neg: ['Г'],
    },
    92: {
      pos: ['Е'],
      neg: ['Л'],
    },
    93: {
      pos: ['d'],
    },
    94: {
      pos: ['d'],
    },
    95: {
      neg: ['А'],
    },
    96: {
      pos: ['С', -3],
      neg: ['Ц', 'Л', 2],
    },
    97: {
      pos: ['В', 'М'],
    },
    98: {
      pos: ['Г', 'Ц'],
      neg: ['С'],
    },
    99: {
      neg: ['И'],
    },
    100: {
      pos: ['Е'],
      neg: ['И'],
    },
    101: {
      pos: ['Л'],
    },
    102: {
      pos: ['П'],
    },
    103: {
      neg: ['Л', 'М'],
    },
    104: {
      pos: ['А'],
      neg: ['Л'],
    },
    105: {
      pos: ['Ш', 'Е'],
    },
    106: {
      neg: ['Э', 'И', 'В'],
    },
    107: {
      pos: ['С'],
    },
    108: {
      pos: ['Е'],
    },
    109: {
      pos: ['Э'],
      neg: ['Э', 'Э', 'Н'],
    },
    110: {
      pos: ['П'],
      neg: ['Г'],
    },
    111: {
      pos: ['Т'],
    },
    112: {
      pos: ['М'],
    },
    113: {
      pos: ['С', 'С'],
    },
    114: {
      pos: ['П'],
    },
    115: {
      neg: ['Л', 'Н'],
    },
    116: {
      pos: ['Е'],
      neg: ['К'],
    },
    117: {
      pos: ['Ц'],
      neg: ['d'],
    },
    118: {
      neg: ['Э'],
    },
    119: {
      neg: ['И'],
    },
    120: {
      pos: ['А', 'С'],
    },
    121: {
      pos: ['Г'],
      neg: ['С'],
    },
    122: {
      neg: ['Д', 'И'],
    },
    123: {
      pos: ['Ш', 'Ш', 'Е'],
      neg: ['К'],
    },
    124: {
      neg: ['И'],
    },
    125: {
      neg: ['М'],
    },
    126: {
      pos: ['Л', 'А'],
    },
    127: {
      pos: [-1],
      neg: [1],
    },
    128: {
      pos: ['П'],
    },
    129: {
      pos: ['Ц'],
      neg: ['Г'],
    },
    130: {
      pos: ['Э'],
      neg: ['В'],
    },
    131: {
      pos: ['Ц'],
      neg: ['d'],
    },
    132: {
      pos: ['С', 'С'],
    },
    133: {
      pos: ['Ц'],
    },
    134: {
      pos: ['Ф'],
    },
    135: {
      pos: ['Ц', 'd'],
    },
    136: {
      pos: ['Е'],
      neg: ['Г', 'Л', 'П', 'Э'],
    },
    137: {
      pos: ['Л', 'А'],
    },
    138: {
      pos: ['Г'],
      neg: ['С', 'С'],
    },
    139: {
      pos: ['Ц', 'Л'],
    },
    140: {
      pos: ['Г', 'Э', 'И', 'Н', 'Н'],
    },
    141: {
      pos: ['Г', 'Н'],
    },
    142: {
      pos: ['Ш'],
    },
    143: {
      neg: ['И', 'И'],
    },
    144: {
      neg: ['И'],
    },
    145: {
      pos: ['Г'],
    },
    146: {
      pos: ['Г'],
    },
    147: {
      pos: ['Е', 'Ф', 'Ф'],
    },
    148: {
      neg: ['Ш', 'Ш', 'd', 'd'],
    },
    149: {
      pos: ['Г', 'Н', 'М', 'М'],
    },
    150: {
      pos: ['М'],
    },
    151: {
      pos: ['И', 'И'],
      neg: ['К'],
    },
    152: {
      pos: ['М'],
    },
    153: {
      neg: ['Э'],
    },
    154: {
      neg: ['И'],
    },
    155: {
      neg: ['d', 'd', 'd'],
    },
    156: {
      pos: ['Э', 'И'],
      neg: ['А'],
    },
    157: {
      pos: ['А'],
    },
    158: {
      pos: [-1],
      neg: [2],
    },
    159: {
      pos: ['Л', 'А'],
      neg: ['И'],
    },
    160: {
      neg: ['Э', 'Э'],
    },
    161: {
      neg: ['Э', 'Э'],
    },
    162: {
      pos: ['Е'],
      neg: ['П', 'П'],
    },
    163: {
      pos: ['Г'],
      neg: ['С'],
    },
    164: {
      pos: ['Г', 'М'],
      neg: ['d'],
    },
    165: {
      pos: ['С'],
    },
    166: {
      neg: ['И'],
    },
    167: {
      pos: ['М'],
    },
    168: {
      pos: ['Г', 'Э', 'Н'],
      neg: ['С', 'П', 'Ш', 'Ш', 'Ш'],
    },
    169: {
      pos: ['К'],
    },
    170: {
      pos: ['Е'],
    },
    171: {
      neg: ['Л'],
    },
    172: {
      neg: ['С'],
    },
    173: {
      pos: ['Ц'],
    },
    174: {
      neg: ['К', 'В'],
    },
    175: {
      pos: ['Д'],
    },
    176: {
      pos: ['М'],
    },
    177: {
      pos: ['Ф'],
    },
    178: {
      pos: ['Е', 'Ф', 'Ф', 'Ф'],
    },
    179: {
      neg: ['И'],
    },
    180: {
      pos: ['Т'],
    },
    181: {
      pos: ['М'],
    },
    182: {
      neg: ['А', 'В'],
    },
    183: {
      neg: ['Э', 'Ф'],
    },
    184: {
      pos: ['Ш'],
    },
    185: {
      pos: ['Л', 'С'],
    },
    186: {
      pos: ['Е'],
      neg: ['Ц'],
    },
    187: {
      neg: ['П', 'П'],
    },
    188: {
      pos: ['Ц'],
    },
    189: {
      pos: ['Г', 'Г', 2],
      neg: ['С', -1],
    },
    190: {
      pos: ['И', 'М'],
    },
    191: {
      pos: ['Э'],
      neg: ['Г'],
    },
    192: {
      pos: ['Ш', 'В'],
      neg: ['П', 'П', 'Э'],
    },
    193: {
      pos: ['А'],
    },
    194: {
      pos: ['Д'],
      neg: ['Ц'],
    },
    195: {
      pos: ['Н'],
    },
  },
};

export default portableCode;
