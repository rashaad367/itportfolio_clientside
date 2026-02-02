import React from "react";
import testout from "../assets/testoutsecpro.png";
import comptiaaplus from "../assets/comptiaaplus.png";
import ccna from "../assets/ccna.png";

const Certifications: React.FC = () => {
  return (
    <>
      <h1 className="sub-heading container-lg">Certifications</h1>
      <div className="container-lg flex border">
        <img src={comptiaaplus} alt="A+ Certification" width="100" height="100" className="w-1/9 mx-4 my-4"/>
        <img src={testout} alt="Testout Certification" width="100" height="100" className="w-1/9 mx-4 my-4"/>
        <img src={ccna} alt="CCNA Certification" width="100" height="100" className="w-1/9 mx-4 my-4"/>
      </div>
    </>
  );
};

export default Certifications;
