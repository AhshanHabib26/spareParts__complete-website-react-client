import React from "react";


const AboutMe = () => {
  return (
    <div className=" bg-slate-200">
      <div class="hero min-h-screen bg-slate-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-4xl lg:text-7xl italic uppercase text-opacity-20 text-primary font-bold text-center ">
              About Me
            </h1>
            <p class="py-6  text-center">
              I am Ahshan Habib. Working As A Professional Web Design And
              Developer in Bangladesh Having 3+ Years Experience. I Have
              Experience In All Expect In Web Design And Development Using
              Language And FrameWork. I Have Skilled In HTML5, CSS3, Bootstrap,
              Tailwind, Javascript, React JS And Wordpress Themes Customization.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card  bg-slate-200">
                <div className="card-body">
                  <h2 className="card-title">Personal Details</h2>
                  <p className=" text-lg  text-slate-800 font-semibold text-opacity-60">
                    Name: Ahshan Habib
                  </p>
                  <p className=" text-lg  text-slate-800 font-semibold text-opacity-60">
                    Email: habib.net27@gmail.com
                  </p>
                  <p className=" text-lg  text-slate-800 font-semibold text-opacity-60">
                    Hello: (+880 )-1646418365
                  </p>

                  <button className=" btn w-[160px] btn-error mt-4 lg:mt-8">
                    Download Cv
                  </button>
                </div>
              </div>
              <div className="card mt-[-50px] lg:mt-0 bg-slate-200">
                <div className="card-body">
                  <h2 className="card-title">Skills & Experience</h2>
                  <div>

                    <div>
                      <span className=' text-lg font-semibold text-error'>HTML5</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="100"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold text-error'>CSS3</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="100"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold text-error'>Bootstrap 5</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="100"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold text-error'>Tailwind</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="70"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold  text-error'>JavaScript</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="80"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold text-error'>React JS</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="80"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold  text-error'>Node JS</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="60"
                      max="100"
                    ></progress>
                    </div>
                    
                    <div>
                      <span className=' text-lg font-semibold  text-error'>Express JS</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="80"
                      max="100"
                    ></progress>
                    </div>
                    <div>
                      <span className=' text-lg font-semibold text-error'>Mongo DB</span>
                      <progress
                      className="progress progress-primary ml-2 w-56"
                      value="70"
                      max="100"
                    ></progress>
                    </div>
                    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
