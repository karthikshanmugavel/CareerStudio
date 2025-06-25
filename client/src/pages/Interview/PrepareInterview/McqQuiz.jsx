import React, { useEffect, useState } from 'react';
import axios from 'axios';

const McqQuiz = ({ topic, questionCount, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ashwin07.pythonanywhere.com/api/quiz/search`, {
        params: {
          topic: topic,
          level: 'beginner',
          count: questionCount,
        },
      })
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to fetch quiz questions');
        setLoading(false);
      });
  }, [topic, questionCount]);

  const handleOptionChange = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
    setScore(0);
  };

  if (loading) return <p className="p-4">Loading questions...</p>;
  if (questions.length === 0) return <p className="p-4 text-red-500">No questions found.</p>;

  if (showResult) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Quiz Result</h2>
        <p className="mb-2">Topic: <strong>{topic}</strong></p>
        <p className="mb-2">Score: <strong>{score}</strong> out of <strong>{questions.length}</strong></p>

        <div className="mt-4">
          {questions.map((q, idx) => (
            <div key={idx} className="mb-4 border-b pb-2">
              <p className="font-medium">{idx + 1}. {q.question}</p>
              <p className={`ml-4 ${answers[idx] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                Your answer: {answers[idx] || 'Not Answered'}
              </p>
              <p className="ml-4 text-gray-600">Correct answer: {q.correctAnswer}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={restartQuiz} className="px-4 py-2 bg-blue-500 text-white rounded">Restart</button>
          <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded">Back to Setup</button>
        </div>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="p-6 bg-white border rounded shadow">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>

      <div className="space-y-2">
        {question.options.map((opt, idx) => (
          <label key={idx} className="block">
            <input
              type="radio"
              name={`q${current}`}
              value={opt}
              checked={answers[current] === opt}
              onChange={() => handleOptionChange(opt)}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((prev) => prev + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default McqQuiz;
