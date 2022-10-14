import React from "react";
import "./portfolio.css";
import { portfolioData } from "./data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(
          ({ id, title, desc, credit, code, live, img, tags }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-img">
                  <img src="assets/myphoto.png" alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-desc">
                  <p>{desc}</p>
                </div>
                <div className="portfolio__item-tags">
                  <div className="portfolio__item-tags-name-wrap">
                    <small>--------</small>
                    <strong className="portfolio__item-tags-name">TAGs</strong>
                    <small>--------</small>
                  </div>
                  <ul className="portfolio__item-tags-list">
                    {tags.map(({ id, tag }) => {
                      return (
                        <li className="portfolio__item-tags-listItem" key={id}>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Source Code
                  </a>
                  <a href={live} className="btn btn-primary" target="_blank" rel="noreferrer">
                    View Live
                  </a>
                </div>
                <small className="text-light cour">Credit: {credit}</small>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
