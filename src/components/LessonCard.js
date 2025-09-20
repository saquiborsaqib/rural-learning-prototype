import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const quizzes = {
  1: [{ q: "2 + 2 = ?", options: ["3","4","5"], answer: "4" }],
  2: [{ q: "Water boils at ___ °C?", options: ["90","100","120"], answer: "100" }]
};

const LessonCard = ({ lesson, onComplete, onQuizComplete }) => {
  const { t } = useTranslation();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [pointsPopup, setPointsPopup] = useState(0);

  const handleQuizSubmit = () => {
    if (selected === quizzes[lesson.id][0].answer) {
      setResult(t("correct"));
      onQuizComplete(5);
      setPointsPopup(5);
    } else setResult(t("wrong"));

    setTimeout(() => {
      setShowQuiz(false);
      setResult("");
      setSelected("");
      setPointsPopup(0);
    }, 1500);
  };

  return (
    <div className={`lesson-card ${lesson.completed ? "completed" : ""}`} style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      backgroundColor: lesson.completed ? "#d4edda" : "#fff3cd",
      transition: "all 0.3s ease",
      position: "relative"
    }}>
      <h3>{lesson.title}</h3>
      <button onClick={() => onComplete(lesson.id)} disabled={lesson.completed} style={{
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px"
      }}>
        {lesson.completed ? t("complete")+" ✅" : t("complete")}
      </button>
      {lesson.completed && quizzes[lesson.id] &&
        <button onClick={() => setShowQuiz(true)} style={{padding:"5px 10px", borderRadius:"5px"}}>{t("takeQuiz")}</button>
      }

      {pointsPopup > 0 && (
        <div style={{
          position: "absolute",
          top: "-20px",
          right: "10px",
          color: "green",
          fontWeight: "bold",
          animation: "floatUp 1s ease-out forwards"
        }}>
          +{pointsPopup} pts
        </div>
      )}

      {showQuiz && (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px dashed #999" }}>
          <p>{quizzes[lesson.id][0].q}</p>
          {quizzes[lesson.id][0].options.map(opt => (
            <label key={opt} style={{ display: "block" }}>
              <input type="radio" value={opt} checked={selected===opt} onChange={(e)=>setSelected(e.target.value)}/> {opt}
            </label>
          ))}
          <button onClick={handleQuizSubmit} style={{marginTop:"5px"}}>Submit</button>
          <p>{result}</p>
        </div>
      )}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity:1; }
            100% { transform: translateY(-20px); opacity:0; }
          }
          .lesson-card.completed {
            transform: scale(1.03);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default LessonCard;

