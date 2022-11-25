import React from 'react'
import "./CMFeatures.css";


const CMFeatures = () => {

const featuresSecton3 = () => {
    return (
      <div className="features-section-container-3">
        <div className="usecases-Container-3">
          <p>Self improvement, Workflow completion.</p>
          <p>View Features</p>
        </div>
        <div className="evolveContainer">
          <h1>Evolve</h1>
          <p>
            The ease of assigning roles & permissions to experience the
            customised learning platform for mentees and mentors.
          </p>
        </div>
      </div>
    );
  };


  const featuresSecton2 = () => {
    return (
      <div className="features-section-container-2">
        <div className="usecases-Container-2">
          <p>
            Conduct evaluations,Interactive feedback loop & Analytical dasboard
          </p>
          <p>View Features</p>
        </div>
        <div className="analyseContainer">
          <h1>Analyse</h1>
          <p>
            Continouds feedbacks monitoring inorder to increase the efficiency
            of trainers, trainees & courses
          </p>
        </div>
      </div>
    );
  };


  const featuresSecton1 = () => {
    return (
      <div className="features-section-container-1">
        <div className="usecases-Container-1">
          <p>Build course material & Shedule classes</p>
          <p>View Features</p>
        </div>
        <div className="createContainer">
          <h1>Create</h1>
          <p>
            Trainers can create or schedule courses & classes for an entire year
            or even more.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="features-container">
      {featuresSecton1()}
      {featuresSecton2()}
      {featuresSecton3()}
    </div>
  );
};

export {CMFeatures}
