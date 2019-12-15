import React, { Fragment } from "react";
import "./home.scss";

const Home = () => {
  return (
    <Fragment>
            <div className="container- fluid about-top-bg">
        <div className="container about-top-body">
          <section>
            <div className="row about-top">
              <h1 className="about-top-text">HOME</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="row blocks_top">
          <div className="col single_top">
            <div className="title_top">
              <h4>My First Text</h4>
            </div>
            <div className="desc_top">
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology.
              </p>
              <button type="button" className="btn btn-outline-dark more-news">
                Join now
              </button>
            </div>
          </div>
          <div className="col single_top">
            <div className="title_top">
              <h4>My First Text</h4>
            </div>
            <div className="desc_top">
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology.
              </p>
              <button type="button" className="btn btn-outline-dark more-news">
                Join now
              </button>
            </div>
          </div>
          <div className="col single_top">
            <div className="title_top">
              <h4>My First Text</h4>
            </div>
            <div className="desc_top">
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology.
              </p>
              <button type="button" className="btn btn-outline-dark more-news">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid info-midle-fluid">
        <div className="row info-midle">
          <div className="col  info-midle-left">
            <div className="img-fluid"></div>
          </div>
          <div className="col info-midle-right">
            <h2>Who we are to Serave the nation</h2>
            <p>
              Inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach. inappropriate behavior is often
              laughed off as “boys will be boys,” women face higher conduct
              standards especially in the workplace. That’s why it’s crucial
              that, as women, our behavior on the job is beyond reproach.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row goals-header">
            <h2>Goals to Achieve for the leadership</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="row goals-row">
            <div className="col goals-left">
              <div className="goals-item"><a href="#" className="goals-item-a">Lorem ipsum</a></div>
              <div className="goals-item"><a href="#" className="goals-item-a">Lorem ipsum</a></div>
              <div className="goals-item"><a href="#" className="goals-item-a">Lorem ipsum</a></div>
              <div className="goals-item"><a href="#" className="goals-item-a">Lorem ipsum</a></div>
            </div>
            <div className="col goals-right">
              <div className="img-goals">
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="container-fluid under-f-area">
      <div className="container">
            <div className="row">
                <div className="col-lg-8 und-left">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                </div>
                <div className="col-lg-4 und-right">
                    <button className="btn btn-outline-dark view">View our blog</button>
                </div>
        </div>
        </div>
        </div>
    </Fragment>
  );
};

export default Home;
