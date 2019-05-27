// Progress bar and methods to manage this one
const progressBar = {
  progressLine: null,
  progressCounter: null,
  progressTotalQuestions: null,
  totalQuestions: 0,
  moveProgressBar: null,
  resetProgressBar: null,
  _setCounter: null,
  counter: 0,
  init: function init(state) {
    this.progressLine = $('.progressbar-line');
    this.progressCounter = $('.progressbar-counter #answered');
    this.progressTotalQuestions = $('.progressbar-counter #total');
    this.totalQuestions = state.questionsList.getLength();

    this.moveProgressBar = function moveProgressBar(side) {
      const step = 100 / this.totalQuestions;

      let count;

      if (side) {
        if (side === 'left') {
          count = -1;
        }
        if (side === 'right') {
          count = 1;
        }
      } else {
        count = 0;
      }
      this._setCounter(count);

      const positionToSet = this.counter * step - 100;
      this.progressLine.css({ transform: `translate(${positionToSet}%)` });
    };

    this._setCounter = function setCounter(count) {
      this.counter += count;
      this.progressCounter.text(this.counter);
    };

    this.resetProgressBar = function resetProgressBar(total) {
      this.counter = 0;
      this.totalQuestions = total;
      this.progressTotalQuestions.text(total);
      this.moveProgressBar('right');
    };

    this.moveProgressBar('right');
  },
};

export default progressBar;
