const answerBar = {
  answerInputs: null,
  currentAnswer: undefined,
  getCurrentAnswerAndSetInputChecked: null,
  setAnswer: null,
  answerInputEventHandler: null,
  setAnswerInputEventHandler: null,
  init(arrowsContainer) {
    this.answerInputs = $('input[type=radio]');

    this.getCurrentAnswerAndSetInputChecked = function getCurrentAnswerAndSetInputChecked(current) {
      const { answer } = current.data;
      // If answer exists then set related input checked and currentAnswer
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
    };

    this.setAnswer = function setAnswer(currentQuestion, value) {
      this.currentAnswer = value;
      currentQuestion.data.answer = value;

      return value;
    };

    this.setAnswerInputEventHandler = function setAnswerInputEventHandler(questions) {
      console.log('set', questions);
      this.answerInputEventHandler = function answerInputEventHandler(e) {
        console.log('event', questions);
        const currentQuestion = questions.getCurrent();
        // If buttons is not active then don't allow user to choose answer because of setTimout in left and right arrow onClick function
        if (!arrowsContainer.leftArrow.active && !arrowsContainer.rightArrow.active && currentQuestion.data.index !== 1) {
          e.preventDefault();
          return;
        }
        // Set current answer in answerBar
        const answer = answerBar.setAnswer(currentQuestion, e.target.value);

        // And set arrows active
        arrowsContainer.rightArrow.active = true;
        arrowsContainer.setArrowsState(answer, arrowsContainer.rightArrow.element, questions);
      };
    };
  },
};

export default answerBar;
