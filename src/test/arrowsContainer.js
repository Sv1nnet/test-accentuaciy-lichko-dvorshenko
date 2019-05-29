/* eslint-diesabled */

// Object to manage arrows state
const arrowsContainer = {
  leftArrow: null,
  rightArrow: null,
  leftArrowFigure: null,
  rightArrowFigure: null,
  setArrowsState: null,
  setArrowsNotActive: null,
  setLeftArrowEventHanler: null,
  setRightArrowEventHanler: null,
  leftArrowEventHanler: null,
  rightArrowEventHanler: null,
  init: function init(state, questionContainer, cssStyles, questionElements, results) {
    this.leftArrow = {
      element: $('.left-arrow'),
      active: false,
    };

    this.rightArrow = {
      element: $('.right-arrow'),
      active: false,
    };

    this.leftArrowFigure = $('.left-arrow .arrow');
    this.rightArrowFigure = $('.right-arrow .arrow');

    this.setArrowsState = function setArrowsState(isAnswer, arrowToCheck, questionsList) {
      const currentQuestion = questionsList.getCurrent();
      if (!currentQuestion.next) {
        this.rightArrowFigure.addClass('not-active');
        if (isAnswer) this.rightArrow.element.addClass('show-results');
      } else if (isAnswer) {
        this.rightArrowFigure.removeClass('not-active');
        this.rightArrow.element.removeClass('show-results');
      }

      if (!currentQuestion.prev) {
        this.leftArrowFigure.addClass('not-active');
      } else if (isAnswer) {
        this.leftArrowFigure.removeClass('not-active');
      }

      if (arrowToCheck && this.rightArrowFigure.hasClass('not-active')) {
        arrowToCheck.removeClass('not-active');
      }
    };

    this.setArrowsNotActive = function setArrowsNotActive() {
      // Prevent arrowBtns from be pressed before they are ready
      this.rightArrow.active = false;
      this.leftArrow.active = false;
      this.rightArrowFigure.addClass('not-active');
      this.leftArrowFigure.addClass('not-active');
      this.rightArrow.element.removeClass('show-results');
    };

    this.setLeftArrowEventHanler = function setLeftArrowEventHanler(questions, progressBar, answerBar) {
      this.leftArrowEventHanler = () => {
        const currentQuestion = questions.getCurrent();
        if (currentQuestion.prev && this.leftArrow.active) {
          // Set this to prevent arrowBtns from be pressed before they are ready and show to user that he can't press the buttons yet
          this.setArrowsNotActive();

          // Set inline-css to move question container to display pervious question
          questionContainer.css(cssStyles.displayLeftQuestion);

          // Get previous question
          const prevQuestion = questions.getPrev();

          // Get answer. If answer exists then we allow user to click nextBtn and get next question
          const answer = answerBar.getCurrentAnswerAndSetInputChecked(prevQuestion);
          // Return container to initial state and do this immediately - transition: 0s
          state._questionRestoreInterval = setTimeout(() => {
            // Set inline-css to reset questions container position
            questionContainer.css(cssStyles.resetQuestionContainerPosition);

            // Move questions in question-html-elements
            switchQuestions(prevQuestion);
            this.rightArrow.active = true;
            this.leftArrow.active = true;
            this.setArrowsState(answer, this.rightArrowFigure, questions);
          }, 400);

          progressBar.moveProgressBar('left', -1);
        }
      };
    };

    this.setRightArrowEventHanler = function setRightArrowEventHanler(questions, progressBar, answerBar) {
      this.rightArrowEventHanler = () => {
        const currentQuestion = questions.getCurrent();
        const length = questions.getLength();
        if (currentQuestion.next && this.rightArrow.active) {
          // Set this to prevent arrowBtns from be pressed before they are ready and show to user that he can't press the buttons yet
          this.setArrowsNotActive();

          // Set inline-css to move question container to display next question
          questionContainer.css(cssStyles.displayRightQuestion);

          // Get next question
          const nextQuestion = questions.getNext();

          // Get answer. If answer exists then we allow user to click nextBtn and get next question
          const answer = answerBar.getCurrentAnswerAndSetInputChecked(nextQuestion);
          // Return container to initial state and do this immediately - transition: 0s
          state._questionRestoreInterval = setTimeout(() => {
            // Set inline-css to reset questions container position
            questionContainer.css(cssStyles.resetQuestionContainerPosition);

            // Move questions in question-html-elements
            switchQuestions(nextQuestion);
            this.rightArrow.active = !!answer;
            this.leftArrow.active = true;
            this.setArrowsState(answer, this.leftArrowFigure, questions);
          }, 400);

          progressBar.moveProgressBar('right', +1);
        }

        // If question is the last in zeroAnsweredList then process results from step 2
        if (state.zeroAnswersList) {
          if (progressBar.counter === length && arrowsContainer.rightArrow.active && !state.zeroAnswersHandled) {
            state.zeroAnswersHandled = true;
            // processing results
            state.zeroAnswersList = results.getZeroAnswers(state);
            results.processResults(state);
          }
        }

        // Step 1
        // If question is the last then process results
        if (progressBar.counter === length && arrowsContainer.rightArrow.active && !state.zeroAnswersHandled) {
          state.zeroAnswersList = results.getZeroAnswers(state);
          const currentZeroQuestion = state.zeroAnswersList.getLength() > 0 ? state.zeroAnswersList.getFirst() : null;
          console.log('getting zero answers');

          // Step 1
          if (state.zeroAnswersList && state.zeroAnswersList.getLength() >= 7) {
            alert('Вам будут представлены вопросы, на которые вы ответили "Примерно одинакого - 0". Попробуй уменьшить их количетво, выбрав другой вариант ответа, если это возможно. Если вы считаете, что подходит только ответ "Примерно одинакого - 0", то оставьте его как есть.');

            this.setArrowsState(currentZeroQuestion.data.answer, this.leftArrowFigure, state.zeroAnswersList);
            // Set arrow handlers with a new questions list (that containes answers equale zero)
            this.setRightArrowEventHanler(state.zeroAnswersList, progressBar, answerBar);
            this.setLeftArrowEventHanler(state.zeroAnswersList, progressBar, answerBar);
            // The same tiwh answerBar
            answerBar.setAnswerInputEventHandler(state.zeroAnswersList);
            // Set new answers input handler with a new questions list (that containes answers equale zero)
            answerBar.getCurrentAnswerAndSetInputChecked(currentZeroQuestion);

            // Set questions in questions container
            switchQuestions(currentZeroQuestion);

            // Reset progress bar
            progressBar.resetProgressBar(state.zeroAnswersList.getLength());
          } else {
            state.zeroAnswersHandled = true;
            // processing results
            results.processResults(state);
          }
        }
      };
    };

    // Set questions in questionTextContainers
    function switchQuestions(question) {
      $(questionElements[0]).text(question.prev && question.prev.data.question);
      $(questionElements[1]).text(question.data.question);
      $(questionElements[2]).text(question.next && question.next.data.question);
    }
  },
};

export default arrowsContainer;
