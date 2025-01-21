"use client";
import React, { useState } from 'react';
import NavigateNext from '@/app/components/icons/navigate_next.svg'
import NavigateBefore from '@/app/components/icons/navigate_before.svg'
import FiSkipForward from '@/app/components/icons/FiSkipForward.svg'
import Image from 'next/image';
type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
};

type Answer = {
  questionId: number;
  selectedOption: string | null; // null به معنای رد شدن از سوال
};

const questions: Question[] = [
  {
    id: 1,
    text: 'پایتخت ایران کدام است؟',
    options: ['تهران', 'مشهد', 'اصفهان', 'شیراز'],
    correctAnswer: 'تهران',
  },
  {
    id: 2,
    text: 'بزرگ‌ترین سیاره منظومه شمسی کدام است؟',
    options: ['زمین', 'مریخ', 'مشتری', 'زحل'],
    correctAnswer: 'مشتری',
  },
  {
    id: 3,
    text: 'رنگ برگ درختان در فصل پاییز معمولاً چیست؟',
    options: ['سبز', 'زرد', 'قرمز', 'آبی'],
    correctAnswer: 'زرد',
  },
  {
    id: 4,
    text: 'رنگ برگ درختان در فصل پاییز معمولاً چیست؟',
    options: ['سبز', 'زرد', 'قرمز', 'آبی'],
    correctAnswer: 'زرد',
  },
];

const OnlineExam: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examFinished, setExamFinished] = useState(false);

  const handleOptionClick = (questionId: number, selectedOption: string) => {
    const existingAnswerIndex = answers.findIndex((answer) => answer.questionId === questionId);

    if (existingAnswerIndex !== -1) {
      // اگر پاسخ قبلی وجود دارد، آن را به‌روزرسانی کنید
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex].selectedOption = selectedOption;
      setAnswers(updatedAnswers);
    } else {
      // اگر پاسخ جدید است، آن را اضافه کنید
      setAnswers([...answers, { questionId, selectedOption }]);
    }
  };

  const handleSkipQuestion = () => {
    const questionId = questions[currentQuestionIndex].id;
    const existingAnswerIndex = answers.findIndex((answer) => answer.questionId === questionId);

    if (existingAnswerIndex !== -1) {
      // اگر پاسخ قبلی وجود دارد، آن را به "رد شده" تغییر دهید
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex].selectedOption = null;
      setAnswers(updatedAnswers);
    } else {
      // اگر پاسخ جدید است، آن را به عنوان "رد شده" اضافه کنید
      setAnswers([...answers, { questionId, selectedOption: null }]);
    }

    // به سوال بعدی بروید
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleFinishExam = () => {
    setExamFinished(true);
  };

  const getQuestionStatus = (questionId: number) => {
    const answer = answers.find((answer) => answer.questionId === questionId);
    if (answer) {
      return answer.selectedOption === null ? 'پاسخ داده نشده' : 'پاسخ داده شده';
    }
    return 'پاسخ داده نشده';
  };

  const calculateResult = () => {
    let correctAnswers = 0;
    let unansweredQuestions = 0;

    questions.forEach((question) => {
      const answer = answers.find((ans) => ans.questionId === question.id);
      if (answer && answer.selectedOption === question.correctAnswer) {
        correctAnswers++;
      } else if (!answer || answer.selectedOption === null) {
        unansweredQuestions++;
      }
    });

    return {
      correctAnswers,
      incorrectAnswers: questions.length - correctAnswers - unansweredQuestions,
      unansweredQuestions,
    };
  };

  // تعداد سوالات پاسخ داده شده و پاسخ داده نشده
  const answeredQuestions = answers.filter((answer) => answer.selectedOption !== null).length;
  const unansweredQuestions = questions.length - answeredQuestions;
  // محاسبه درصد پیشرفت
  const progressPercentage = (answeredQuestions / questions.length) * 100;
  if (examFinished) {
    const result = calculateResult();
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">نتایج آزمون</h1>
          <div className="space-y-4">
            <p className="text-lg">
              پاسخ‌های صحیح: <span className="font-bold">{result.correctAnswers}</span>
            </p>
            <p className="text-lg">
              پاسخ‌های نادرست: <span className="font-bold">{result.incorrectAnswers}</span>
            </p>
            <p className="text-lg">
              سوالات بدون پاسخ: <span className="font-bold">{result.unansweredQuestions}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-12 gap-5 my-4">
        {/* نمایش سوال فعلی */}
        <div className="col-span-12 lg:col-span-9">
        <div className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4">
            <h2 className="text-lg font-semibold mb-4">
            سوال {currentQuestionIndex + 1}: {questions[currentQuestionIndex].text}
            </h2>
            <div className="space-y-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                key={index}
                onClick={() =>
                    handleOptionClick(questions[currentQuestionIndex].id, option)
                }
                className={`w-full text-left p-3 rounded-lg ${
                    answers.some(
                    (answer) =>
                        answer.questionId === questions[currentQuestionIndex].id &&
                        answer.selectedOption === option
                    )
                    ? 'text-dark'
                    : 'bg-secondary700s hover:bg-gray-300'
                }`}
                >
                {option}
                </button>
            ))}
            </div>
        </div>

        {/* دکمه‌های ناوبری و رد شدن */}
        <div className="flex justify-between mt-6">
            <button
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestionIndex === 0}
            className="bg-secondary700 text-secondary800 px-6 py-2 rounded-2xl disabled:opacity-50  flex gap-1 items-center"
            >
                <Image
              src={NavigateNext}
              alt="navigate_before icone"
              height={24} 
              width={24}
              />
              قبلی
              </button>
        <div className="flex gap-5 items-center">
            
            <button
            onClick={handleSkipQuestion}
            className="bg-purple100/15 text-secondary800 px-6 py-2 rounded-2xl hover:bg-purple100/30 flex gap-1 items-center"
            >
              <Image
              src={FiSkipForward}
              alt="navigate_before icone"
              height={24} 
              width={24}
              />
              رد شدن
            </button>
            <button
            onClick={() =>
                setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))
            }
            disabled={currentQuestionIndex === questions.length - 1}
            className="bg-did px-6 py-2 rounded-2xl disabled:opacity-50 flex gap-1 items-center"
            >
            ذخیره و بعدی
            <Image
              src={NavigateBefore}
              alt="navigate_before icone"
              height={24} 
              width={24}
              />
            </button>
        </div>
        </div>
        {/* نوار پیشرفت */}
        <div className="mt-6 w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#0578B9] via-[#C0BEFF] to-[#464E8C]"
            style={{ width: `${progressPercentage}%` }}
          >
          </div>
        </div>
        </div>
        {/*  پاسخ نامه سوالات */}
        <div className="col-span-12 lg:col-span-3">
           <div className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4">
                <h3 className=" text-dark font-semibold mb-4 text-center">پاسخ نامه سوالات</h3>
                <div className="flex items-center gap-1 justify-center">
                    {questions.map((question, index) => (
                        <button
                        key={question.id}
                        onClick={() => setCurrentQuestionIndex(index)}
                        className={`flex items-center px-5 py-2 text-center rounded-full ${
                            currentQuestionIndex === index
                            ? 'bg-purple text-white'
                            : getQuestionStatus(question.id) === 'پاسخ داده شده'
                            ? 'bg-did text-white'
                            : 'bg-did/20 text-did'
                        }`}
                        >
                         {question.id}
                        </button>
                    ))}
                </div>
                {/* تعداد سوالات پاسخ داده شده و پاسخ داده نشده */}
                <div className="text-center my-4">
                    <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-1">
                    تعداد سوالات پاسخ داده شده: <span className="font-bold text-dark">{answeredQuestions}</span>
                    </p>
                    <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-secondary700 before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-1">
                    تعداد سوالات پاسخ داده نشده: <span className="font-bold text-dark">{unansweredQuestions}</span>
                    </p>
                </div>
                {/* دکمه اتمام آزمون */}
                <div className="text-center w-4/6 mx-auto mt-8">
                    <button
                    onClick={handleFinishExam}
                    className="bg-blue text-white px-6 py-2 rounded-2xl w-full"
                    >
                    اتمام آزمون
                    </button>
                </div>
           </div>
        </div>

    </div>

  );
};

export default OnlineExam;