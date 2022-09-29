import React from "react";
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const Connects = () => {
  return (
    <div className="header-socials">
      <a href="" target="_blank">
        {" "}
        <FaLinkedinIn />
      </a>
      <a href="" target="_blank">
       <BsGithub />
      </a>
      <a href="" target="_blank">
        {" "}
        <BsTwitter />
      </a>
      <a href="" target="_blank">
       <BsFacebook />
      </a>
    </div>
  );
};

export default Connects;
