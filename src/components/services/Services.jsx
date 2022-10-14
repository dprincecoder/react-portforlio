import React from "react";
import { BiCheck } from "react-icons/bi";
import './services.css'

const Services = () => {
  return (
     <section id='services'>
      <h5>what I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>SEO OPTIMIZATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
          </ul>
        </article>
        {/* end of seo */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service__head">
            <h3>TEMPLATE DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem akpgo;ijesiogjk;dfyhontj.nkmmsdghnke9el</p>
            </li>
          </ul>
        </article>
        {/* end of template creation */}
      </div>
    </section>
  );
};

export default Services;
