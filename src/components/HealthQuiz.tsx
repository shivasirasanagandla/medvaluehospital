import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { HeartPulse, CheckCircle, ArrowRight, Award } from "lucide-react";

interface HealthQuizProps {
  onComplete: (score: number) => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How often do you engage in physical activity?",
    options: [
      { text: "Rarely or never", score: 1 },
      { text: "1-2 times a week", score: 2 },
      { text: "3-4 times a week", score: 3 },
      { text: "5 or more times a week", score: 4 },
    ],
  },
  {
    id: 2,
    text: "How would you rate your sleep quality?",
    options: [
      { text: "Poor (frequently wake up tired)", score: 1 },
      { text: "Fair (sometimes wake up tired)", score: 2 },
      { text: "Good (usually feel rested)", score: 3 },
      { text: "Excellent (always feel refreshed)", score: 4 },
    ],
  },
  {
    id: 3,
    text: "How balanced is your diet?",
    options: [
      { text: "Mostly processed foods", score: 1 },
      { text: "Some fruits/vegetables", score: 2 },
      { text: "Balanced with whole foods", score: 3 },
      { text: "Mostly whole, unprocessed foods", score: 4 },
    ],
  },
];

const HealthQuiz = ({ onComplete }: HealthQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((currentQuestion + 1) / questions.length) * 100);
  }, [currentQuestion]);

  const handleAnswer = (selectedScore: number) => {
    setUserAnswers([...userAnswers, selectedScore]);
    setScore(score + selectedScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    onComplete(score + selectedScore);
    }
  };

  const getHealthRecommendations = () => {
    const totalPossibleScore = questions.length * 4;
    const percentage = (score / totalPossibleScore) * 100;

    if (percentage < 50) {
      return {
        title: "Let's Improve Together!",
        message: "Your health could use some attention. Consider making small, sustainable changes to your daily routine.",
        tips: [
          "Aim for at least 30 minutes of moderate exercise daily",
          "Prioritize 7-9 hours of quality sleep",
          "Incorporate more whole foods into your diet",
          "Schedule regular health check-ups"
        ]
      };
    } else if (percentage < 75) {
      return {
        title: "Good Job!",
        message: "You're on the right track! With a few adjustments, you can optimize your health further.",
        tips: [
          "Try to maintain consistent sleep patterns",
          "Include strength training in your exercise routine",
          "Stay hydrated throughout the day",
          "Practice stress-reduction techniques"
        ]
      };
    } else {
      return {
        title: "Excellent!",
        message: "You're doing great with your health habits! Keep up the good work and maintain these healthy choices.",
        tips: [
          "Continue your balanced routine",
          "Consider trying new physical activities",
          "Share your healthy habits with others",
          "Stay consistent with your health check-ups"
        ]
      };
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
    onComplete(0);
  };

  if (showResult) {
    const result = getHealthRecommendations();
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl w-full mx-auto"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h3>
          <p className="text-gray-600 mb-6">{result.message}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Your Health Score: {Math.round((score / (questions.length * 4)) * 100)}/100
            </h4>
            <Progress value={(score / (questions.length * 4)) * 100} className="h-2 bg-blue-100" />
          </div>
          
          <div className="mb-6 text-left">
            <h4 className="font-semibold text-gray-800 mb-3">Recommendations:</h4>
            <ul className="space-y-2">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            onClick={restartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Take Quiz Again
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl w-full mx-auto"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-700">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-100" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {questions[currentQuestion].text}
      </h3>
      
      <div className="space-y-3 mb-8">
        {questions[currentQuestion].options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer(option.score)}
            className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center">
              <div className="flex-1">{option.text}</div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </motion.button>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Your health journey starts here</span>
        <span>{currentQuestion + 1}/{questions.length}</span>
      </div>
    </motion.div>
  );
};

export default HealthQuiz;
