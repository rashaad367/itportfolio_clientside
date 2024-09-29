import React from "react";
import style from "./ExperienceTimeline.css";

const ExperienceTimelime: React.FC = () => {
  return (
    <>
      <h2 className="sub-heading container-lg">Experience</h2>
      <hr className="container-lg" />
      <div className="container-lg flex justify-evenly">
        <div className="mx-2">
          <h2 className="my-2">Harris Teeter</h2>
          <p>Cashier</p>
          <p>2017 - 2019</p>
          <ul className="my-12">
            <li className="my-3">
              • Provided efficient and courteous service to customers by utilizing customer service excellence skills, occasionally earning praise from
              customers.
            </li>
          </ul>
        </div>
        <div className="mx-2">
          <h2 className="my-2">YMCA</h2>
          <p>Maintenance</p>
          <p>2018 - 2019</p>
          <ul className="my-12">
            <li className="my-3">
              • Streamlined maintenance procedures by implementing proactive inspection schedules, resulting in reduced downtime and enhanced facility
              efficiency.
            </li>
          </ul>
        </div>
        <div className="mx-2">
          <h2 className="my-2">University of North Carolina at Charlotte</h2>
          <p>2020 - 2023</p>
          <p>Student</p>
          <ul className="my-12">
            <li className="my-3">
              • Mastered advanced concepts in operating systems and networks through rigorous coursework, gaining proficiency in system administration, network
              configuration, and troubleshooting methodologies.
            </li>
          </ul>
        </div>
        <div className="mx-2">
          <h2 className="my-2">Reunion Marketing</h2>
          <p>Web Designer</p>
          <p>2023 - 2024</p>
          <ul className="my-12">
            <li>
              • Enhanced workflow efficiency by up to 10% monthly through proactive ticketing with the software operations team, facilitating load and structure
              between different departments, with a group of 5.
            </li>
          </ul>
        </div>
        <div className="mx-2">
          <h2 className="my-2">Digital Brilliance Hour</h2>
          <p>Teacher / Mentor</p>
          <p>2023 - 2024</p>
          <ul className="my-12">
            <li>
              • Installed and created changes to computer systems using ethernet connections/cables and network options while troubleshooting and resolving
              network problems to ensure students can log in and use Windows 10/11 systems to learn.
            </li>
          </ul>
        </div>
        <div className="mx-2">
          <h2 className="my-2">PiperTech</h2>
          <p>IT Technician</p>
          <p>2024 - Present</p>
          <ul className="my-12">
            <li>
              • Regularly installed approximately 30 Acer cashier/customer monitors, Honeywell handscanners, and Ingenico pin-pads for front-end lanes and
              self-checkout a week with best practices to satisfy the needs of the store and customers.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceTimelime;
