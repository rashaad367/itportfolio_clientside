import React from "react";
import ProjectCards from "../components/ProjectCards";
import image1 from "../assets/helpdesk.png";

const Projects: React.FC = () => {
  return (
    <>
      <h2 className="sub-heading container-lg" data-aos="fade-in" data-aos-duration="3000">
        Projects
      </h2>
      <div className="container-lg flex justify-evenly">
          <ProjectCards
            name="Helpdesk Project"
            imageUrl={image1}
            description="A lab dedicated to learning Helpdesk workflows."
            button1Text="View"
            link="/project1"
          />
          <ProjectCards
            name="My Blog"
            imageUrl={image1}
            description="My blog with various blog post."
            button1Text="View"
            link="https://rashaadjones367.wixsite.com/my-site/"
          />
      </div>
    </>
  );
};

export default Projects;
