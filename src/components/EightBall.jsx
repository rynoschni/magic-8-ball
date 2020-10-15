import React, { useState } from "react";
import Answer from './Answer';


const EightBall = (props) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const _handleChange = (question) => {
        setQuestion(question);
    };

    const _HandleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
        const response = await fetch(url);
        const data = await response.json();
        setAnswer(data.magic.answer);
    }
  return (
    <>
      <h1>Magic EightBall</h1>
      <form onSubmit = {(event) => _HandleSubmit(event)}>
        <label>
          What is your question??
          <input type="type" onChange={(event) => -_handleChange(event.target.value)}/>
        </label>
        <button type='submit'>Ask the Magic 8 Ball</button>
      </form>
      {!!answer ? (
          <Answer answer={answer} />
      ): null}
    </>
  );
};

export default EightBall;
