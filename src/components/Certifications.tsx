import React from "react";
import testout from "../assets/testoutsecpro.png";
import comptiaaplus from "../assets/comptiaaplus.png";

const Certifications: React.FC = () => {
  return (
    <>
      <h1 className="sub-heading container-lg">Certifications</h1>
      <div className="container-lg flex border">
        <img src={comptiaaplus} alt="Testout cert from school" width="150" className="w-1/9 mx-4"/>
        <img src={testout} alt="Testout cert from school" width="150" className="w-1/9 mx-4"/>
      </div>
    </>
  );
};

export default Certifications;
