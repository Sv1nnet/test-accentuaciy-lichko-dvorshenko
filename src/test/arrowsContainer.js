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
      active: false, // Set false to prevent pressing the button until next or previous question is switched
    };

    this.rightArrow = {
      element: $('.right-arrow'),
      active: false, // Set false to prevent pressing the button until next or previous question is switched
    };

    this.leftArrowFigure = $('.left-arrow .arrow');
    this.rightArrowFigure = $('.right-arrow .arrow');

    // Set arrow state 'active' or 'not active' in order to prevent button from be clicked until they are ready. ArrowToCheck is the arrow
    this.setArrowsState = function setArrowsState(isAnswer, questionsList) {
      // Get current question. If current question has answer and is not the last then we activate next button
      const currentQuestion = questionsList.getCurrent();

      // If there is no next question (current question is the last)
      if (!currentQuestion.next) {
        this.rightArrowFigure.addClass('not-active'); // Set the next-button is not active
        if (isAnswer) this.rightArrow.element.addClass('show-results'); // And if current question has an answer then we show 'show results button'
      } else if (isAnswer) { // If there is next a question and this one has an answer
        this.rightArrowFigure.removeClass('not-active'); // Make the next-button active
        this.rightArrow.element.removeClass('show-results'); // Hide 'show-results' button
      }

      // If there is no previous question (current question is the first)
      if (!currentQuestion.prev) {
        this.leftArrowFigure.addClass('not-active'); // Set previous-button is not active
      } else { // If there is a previous question and this one has an answer
        this.leftArrowFigure.removeClass('not-active'); // Set previous-button is active
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
            this.setArrowsState(answer, questions);
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
            this.setArrowsState(answer, questions);
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

            this.setArrowsState(currentZeroQuestion.data.answer, state.zeroAnswersList);
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
