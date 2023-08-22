import React from 'react'


const projects=[
    {   id : "01",
        title: "Movie Search App",
        description:
        "A movie search app using React Js and OMDB API(external)",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/Movie-App.git"
      },
      { id : "02",
        title: "Ecommerce Full-Stack App",
        description:
          "MERN stack with responsive UI using React Js and scalable back-end using Node Js, mongoose and express Js.",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/Ecommerce-app.git",
      },
      { id : "03",
        title: "Real Time Chat App",
        description:
          "Responsive UI using React Js and real time chat using socket.io",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/chatapp.git",
      },
      { id : "04",
        title: "Calculator App",
        description:
          "Responsive Calculator using React Js and useState hook ",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/calculatorapp.git",
      },
      { id : "05",
        title: "Simple Math Quiz App",
        description:
          "Quiz app with score points using React js and its hooks(useState,useEffect)",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/quizapp.git",
      },
      { id : "06",
        title: "Face Detection Using Open CV and Python",
        description:
          "Face Detection app using haar cascade algorithm",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/Face-Detection-Using-Open-CV.git",
      },
      { id : "07",
        title: "Face Recognition Model using CNN and ANN",
        description:
          "Face Recognition Modelling using Tensorflow and keras",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://github.com/Swaroop-007/Face-Reco-with-Tensorflow-keras.git",
      }
]

const Projects = () => {
  return (
    <div name="projects" className='bg-[#ede8e871]'>
              <div className='flex justify-center items-center'>
                <h1 className="pt-20 text-primary font-semibold text-3xl border-b-4 border-gray-600  ">Projects</h1>
              </div>
              
              <div className='grid md:grid-cols-3 mx-9  my-8 gap-5'>
              {
                projects.map(service => <div key={service.id} className='service-card flex flex-col justify-center mb-3 items-center p-6 text-center text-black border border-gray-600'>
                    
                    <h6 className='text-2xl mb-4'>{service.title}</h6>
                    <p className='text-base'>{service.description}</p>
                    <a href={service.siteUrl} target="_blank" rel="noopener noreferrer"> 
                        <button  className='text-black group border-2 px-6 py-4 font-bold my-2 flex items-center hover:bg-gray-300 hover:border-gray-300'>
                            Git Hub
                        </button>
                    </a>
                    
                </div>)
              }
              </div>
        </div>
    
      )
}

export default Projects