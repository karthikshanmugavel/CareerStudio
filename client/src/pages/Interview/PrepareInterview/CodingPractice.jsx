import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CodingPractice = ({ topic, questionCount, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  // ✅ Fetch questions once on mount
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.post('https://ashwin07.pythonanywhere.com/get-questions', {
          topic: topic || 'react',
          count: questionCount || 2,
        });

        const data = response.data;
        const fetched = Array.isArray(data) ? data : data.questions || [];

        if (!fetched.length) {
          alert('No questions returned from API.');
        }

        setQuestions(fetched);
      } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []); // Fetch only once on component mount

  // ✅ Handle user code input
  const handleCodeChange = (id, code) => {
    setAnswers((prev) => ({ ...prev, [id]: code }));
  };

  // ✅ Submit answers to backend
  const handleSubmit = async () => {
  try {
    const formattedAnswers = [];

    questions.forEach((q) => {
      const id = q.id || q._id;
      const code = answers[id];
      if (id && code && code.trim() !== '') {
        formattedAnswers.push({
          question_id: id,
          code: code.replace(/\n/g, "\\n") // ✅ convert line breaks
        });
      }
    });

    if (formattedAnswers.length === 0) {
      alert("Please provide answers before submitting.");
      return;
    }

    const payload = {
      topic: topic,
      answers: formattedAnswers
    };

    console.log("📤 Payload being sent:", payload);

    const response = await axios.post(
      'https://ashwin07.pythonanywhere.com/submit-answers',
      payload
    );

    setResults(response.data.results || {});
  } catch (error) {
    console.error('Error submitting answers:', error.response?.data || error.message);
    alert('Error submitting answers: ' + (error.response?.data?.error || error.message));
  }
};

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Coding Practice</h2>

      {loading ? (
        <p>Loading questions...</p>
      ) : questions.length === 0 ? (
        <p className="text-red-600">No questions found for the selected topic.</p>
      ) : (
        questions.map((q) => {
          const qid = q.id || q._id;
          if (!qid) return null;

          return (
            <div key={qid} className="mb-8 p-4 border rounded shadow bg-gray-50">
              <h3 className="text-lg font-semibold mb-2">
                {q.title || q.question || 'Untitled Question'}
              </h3>

              {(q.description || q.details || q.prompt) && (
                <p className="mb-2 text-sm text-gray-700">
                  {q.description || q.details || q.prompt}
                </p>
              )}

              <textarea
                rows={10}
                placeholder="Write your code here..."
                value={answers[qid] || ''}
                onChange={(e) => handleCodeChange(qid, e.target.value)}
                className="w-full p-3 border rounded font-mono text-sm"
              />

              {results[qid] && (
                <div
                  className={`mt-3 p-3 rounded text-sm ${
                    results[qid].correct
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  <strong>Result:</strong> {results[qid].message}
                </div>
              )}
            </div>
          );
        })
      )}

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded"
        >
          Submit All
        </button>
        <button
          onClick={onBack}
          className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-3 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CodingPractice;
