import { useState } from "react"
import { technologyDB } from "../DB/TechnologyDB";
import '../css/Technology.css'
import LazyLoad from 'react-lazy-load';


const Technology = () => {
    const [techs] = useState(technologyDB);
    const [value, setValue] = useState(0);
    const { name, images, description } = techs[value];

  return (
    <div className="technology-bg">
        <div className="technology">
          <main>
            <div className="title-page-tech">
              <h1>
                <span>03</span>SPACE LAUNCH 101
              </h1>
            </div>
            <div className="content-tech">
              <div className="left-side-tech">
                <div className="btns-tech">
                  {techs.map((tech, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setValue(index);
                      }}
                      className={`${index === value && 'active'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="about-tech">
                  <h2>THE TERMINOLOGY</h2>
                  <h1>{name.toUpperCase()}</h1>
                  <p>{description}</p>
                </div>
              </div>
              <div className="right-side-content">
                <LazyLoad>
                <img src={images.portrait} title={name} className="desktop-tech"/>
                </LazyLoad>

                <LazyLoad>
                <img src={images.landscape} title={name} className="mobile-tech" />
                </LazyLoad>
              </div>
            </div>
          </main>
        </div>
    </div>
  )
}

export default Technology;