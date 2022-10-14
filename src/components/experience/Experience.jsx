import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section>
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__language">
          <h3>Language</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>TypeScript</h4>
            </article>
          </div>
        </div>
        <div className="experience__framework">
          <h3>FrameWorks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>React.js</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Svelte.js</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>React-TypeScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>JQuery.js</h4>
            </article>
          </div>
        </div>

        <div className="experience__framework">
          <h3>Library</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>REST API</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Framer Motion</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>FireBase (BaaS)</h4>
            </article>
          </div>
        </div>
        <div className="experience__framework">
          <h3>Library</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Bootstrapp.css</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Animate On Scroll Library (AOS)</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Material-Ui.css</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>Swipper.js</h4>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
