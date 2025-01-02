import React from "react";
import style from "./ExperienceTimeline.css";

const ExperienceTimelime: React.FC = () => {
  return (
    <>
      <h2 className="sub-heading container-lg">Experience</h2>
      <hr className="container-lg" />
      <div className="container-lg flex">
        <div className="mx-2 w-1/6">
          <h2 className="my-2">Harris Teeter</h2>
          <p>Cashier</p>
          <p>2017 - 2019</p>
          <ul className="my-12">
            <li className="my-3">
              Worked as a cashier.
            </li>
          </ul>
        </div>
        <div className="mx-2 w-1/6">
          <h2 className="my-2">YMCA</h2>
          <p>Maintenance</p>
          <p>2018 - 2019</p>
          <ul className="my-12">
            <li className="my-3">
              Worked as a maintenance person.
            </li>
          </ul>
        </div>
        <div className="mx-2 w-1/6">
          <h2 className="my-2">UNCC</h2>
          <p>2020 - 2023</p>
          <p>Student</p>
          <ul className="my-12">
            <li className="my-3">
              Learned some concepts, methodologies, and tehcnologies.
            </li>
          </ul>
        </div>
        <div className="mx-2 w-1/6">
          <h2 className="my-2">Reunion Marketing</h2>
          <p>Web Designer</p>
          <p>2023 - 2024</p>
          <ul className="my-12">
            <li>
             Built websites.
            </li>
          </ul>
        </div>
        <div className="mx-2 w-1/6">
          <h2 className="my-2">Digital Brilliance Hour</h2>
          <p>Teacher / Mentor</p>
          <p>2023 - 2024</p>
          <ul className="my-12">
            <li>
              Learned how to teach students and mentor.
            </li>
          </ul>
        </div>
        <div className="mx-2 w-1/6">
          <h2 className="my-2">PiperTech</h2>
          <p>IT Technician</p>
          <p>2024 - Present</p>
          <ul className="my-12">
            <li>
              Currently a technician.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceTimelime;
