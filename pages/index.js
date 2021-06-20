/** @format */
import { FaArrowRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
const Home = () => {
  return (
    <div className='home-container'>
      <div className='heading-container'>
        <GiMaterialsScience size={50} />
        <h1 className='heading'>Science Bowl Aid</h1>
      </div>
      <div className='hero-container'>
        <h1 className='hero-title'>Practice for National Science Bowl</h1>
        <p className='hero-body'>
          Science Bowl Aid is a simple, open-source, and intuitive platform to
          time and score practices while accessing official Science Bowl
          questions with just a few clicks.
        </p>
        <div className='hero-buttons'>
          <a href='/app'>
            <button className='action-button'>
              Start Practicing
              <FaArrowRight size={20} className='button-icon' />
            </button>
          </a>
          <a href='https://github.com/Sarthak-Dayal/Science-Bowl-Aid'>
            <button className='github-button'>
              <AiFillGithub className='github-icon' />
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
