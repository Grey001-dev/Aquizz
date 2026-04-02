import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Check } from "lucide-react";
import { UsernameContext } from "./UsernameContext";
const subjectsList = [
  "Mathematics",
  "English",
  "Chemistry",
  "Physics",
  "Biology",
  "Government",
  "Economics",
];

const Practice = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const navigate = useNavigate();
  const {username}=useContext(UsernameContext)  

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };
  const [questionCount, setQuestionCount] = useState(10);

  const options = [10, 25, 40,60];

  const startPractice = async () => {
    const res = await fetch("https://aquizz.onrender.com/api/aquizz/practice/question", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subjects, numQuestion
        })
    })

    console.log("Selected:", selectedSubjects);
    // later → navigate("/practice/session")
    navigate("/cbt")
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      
      <div className="flex flex-col min-h-screen p-4">

        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-2xl font-bold">Practice</h1>
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            Back
          </span>
        </div>

        {/* Hero */}
        <div className="pb-6">
          <h2 className="text-[28px] font-bold leading-tight">
            Choose Subjects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Select one or more subjects to begin practice.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subjectsList.map((subject, index) => {
            const isSelected = selectedSubjects.includes(subject);
 
            return (
              <div
                key={index}
                onClick={() => toggleSubject(subject)}
                className={`rounded-2xl p-5 border cursor-pointer transition 
                  ${
                    isSelected
                      ? "bg-primary/10 border-primary"
                      : "bg-white dark:bg-primary/5 border-primary/20 hover:bg-primary/5"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <BookOpen className="text-primary" size={24} />
                  {isSelected && (
                    <Check className="text-primary" size={20} />
                  )}
                </div>

                <h3 className="mt-4 font-bold text-lg">{subject}</h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Practice questions and improve performance
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Count */}
        {selectedSubjects.length > 0 && (
          <div className="mt-6 text-sm text-primary font-semibold">
            {selectedSubjects.length} subject(s) selected
          </div>
        )}
        <div className="mt-6">


      <h3 className="text-lg font-bold mb-3">Number of Questions</h3>

      <div className="grid grid-cols-4 gap-3">
        {options.map((num) => (
          <div
            key={num}
            onClick={() => setQuestionCount(num)}
            className={`h-12 flex items-center justify-center rounded-xl cursor-pointer border transition
              ${
                questionCount === num
                  ? "bg-primary text-white border-primary"
                  : "bg-white dark:bg-primary/5 border-primary/20 hover:bg-primary/5"
              }
            `}
          >
            {num}
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
        You selected {questionCount} questions
      </p>
    </div>

        {/* Start Button */}
        <div className="mt-auto pt-6">
          <button
            onClick={startPractice}
            disabled={selectedSubjects.length === 0}
            className={`w-full h-14 rounded-xl font-bold transition 
              ${
                selectedSubjects.length === 0
                  ? "bg-primary/40 text-white cursor-not-allowed"
                  : "bg-primary text-white shadow-lg shadow-primary/20"
              }
            `}
          >
            Start Practice
          </button>
        </div>

      </div>
    </div>
  );
};

export default Practice;