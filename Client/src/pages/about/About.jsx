import { useRef } from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <img
        className="aboutImage"
        src="https://images.pexels.com/photos/6707376/pexels-photo-6707376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="aboutText">
        <h1> About this blog </h1>
      </div>
      <div className="desc">
        <h3 className="abouth3">MEET SARAH</h3>
        <p className="aboutPar">
          Sarah Green lives in Berlin with her cat Voltaire. Sarah is a
          25-year-old medical student who enjoys vandalising bus stops, eating
          out and learning new languages. Sarah's best friend is a medical
          student called Rae Khan. They get on well most of the time. She also
          hangs around with Anita Bell and Christian Fox. They enjoy
          binge-watching boxed sets together. In March 2021 she created this
          blog to inspire people cooking plant-based recipes. If she is not
          cooking, she is hiking, travelling or doing something else with her
          life.
        </p>
      </div>
    </>
  );
}
