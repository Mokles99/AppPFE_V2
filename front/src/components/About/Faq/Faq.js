import React, { useEffect } from "react";
import './Faq.css'
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";

import {BsQuestionSquareFill} from "react-icons/bs"
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="faq"> 
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          {/* <MdOutlineLibraryBooks color="orangered" size={30} /> */}
          <h2 className="titlefaq">
          <BsQuestionSquareFill/>
            FAQs</h2>
          <p className="u-text-small">
          No question is too small, no idea too big. Your curiosity is the beginning of your next great adventure. Ask us your questions, we're here to answer them and guide you on your dream journey.
          </p>
        </div>
        <div className="questions" data-aos="zoom-in-down" >
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
