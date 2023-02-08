import React, { useState } from 'react';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import './Resume.css';

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet' />
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : props.fromDate ? (
            <div className='heading-date'>{props.fromDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work Experience', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  const programmingSkillDetails = [
    {
      skill: 'JavaScript',
      ratingPercentage: 85,
    },
    {
      skill: 'Python',
      ratingPercentage: 85,
    },
    {
      skill: 'React Js',
      ratingPercentage: 85,
    },
    {
      skill: 'Redux',
      ratingPercentage: 85,
    },
    {
      skill: 'Node Js',
      ratingPercentage: 85,
    },
    {
      skill: 'Mongo DB',
      ratingPercentage: 85,
    },
    {
      skill: 'Express Js',
      ratingPercentage: 85,
    },
    {
      skill: 'HTML',
      ratingPercentage: 85,
    },
    {
      skill: 'CSS',
      ratingPercentage: 85,
    },
  ];

  const projectDetails = [
    {
      title: 'Personal Website',
      fromDate: '2023',
      description:
        'A Personal website portfolio, showcase all my details, experiences, projects, and skill using React Js and Node Js tech stack',
    },
    {
      title: 'uShop',
      fromDate: '2023',
      description:
        'A simple e-commerce full stack web application to buy excellent goods for customer using MERN stack workflows, including Redux as a state management, Axios, and JWT as authorization',
    },
    {
      title: 'iConnect',
      fromDate: '2022',
      description:
        'A simple sosial media full stack web application for developers using MERN stack workflows, including Redux as a state management, Axios, and JWT as authorization',
    },
    {
      title: 'Natours App',
      fromDate: '2022',
      description:
        'A Back End application implementing server-side rendering using template engine, Tech stack: NodeJs, ExpressJs, MongoDB, mongoose, MVC architecture, Pug, heroku, JSON Web Tokens, and other 3rd Party API (Stripe, nodemailer, sharp and multer)',
    },
    {
      title: 'goodyApp',
      fromDate: '2021',
      description:
        'A simple web application implementing CRUD operation using React, Redux, Redux-Thunk, hooks, and Firebase as a storage, database, and authentication',
    },
    {
      title: 'foodiesApp',
      fromDate: '2021',
      description:
        '•A simple web application implementing CRUD operation using React, React Context, hooks, and Firebase Realtime Database as a server',
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'Trisakti University, Indonesia'}
        subHeading={'Bachelor of Engineering in Petroleum Engineering'}
        fromDate={'2014'}
        toDate={'2018'}
      />
      <ResumeHeading
        heading={'Rakamin Academy, Indonesia'}
        subHeading={'Data science and Machine Learing basic Course'}
        fromDate={'2022'}
      />
      <ResumeHeading
        heading={'Binar Academy, Indonesia'}
        subHeading={'Full Stack Web Development Course'}
        fromDate={'2021'}
      />
      <ResumeHeading
        heading={'Digital Talent - Professional Academy, Indonesia'}
        subHeading={'Cloud Operaton (AWS) Course'}
        fromDate={'2021'}
      />
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      <ResumeHeading
        heading={'Frontend Developer'}
        subHeading={'Daya Dimensi Indonesia'}
        fromDate={'2021'}
        toDate={'present'}
      />
      <ul>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Responsible for 3 application interfaces including admin's web
              (CMS) and user's web using JavaScript following React.js workflows
              and JIRA as an agile project management tools
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Troubleshooting interface software and debugging application codes
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Collaborating with UI/UX and Backend team in order to connect UI
              design with REST API
            </span>
          </div>
        </li>
      </ul>
      <ResumeHeading
        heading={'Frontend Developer'}
        subHeading={'Daya Dimensi Indonesia'}
        fromDate={'2021'}
        toDate={'present'}
      />
      <ul>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Responsible for 3 application interfaces including admin's web
              (CMS) and user's web using JavaScript following React.js workflows
              and JIRA as an agile project management tools
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Troubleshooting interface software and debugging application codes
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Collaborating with UI/UX and Backend team in order to connect UI
              design with REST API
            </span>
          </div>
        </li>
      </ul>
      <ResumeHeading
        heading={'Frontend Developer'}
        subHeading={'Daya Dimensi Indonesia'}
        fromDate={'2021'}
        toDate={'present'}
      />
      <ul>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Responsible for 3 application interfaces including admin's web
              (CMS) and user's web using JavaScript following React.js workflows
              and JIRA as an agile project management tools
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Troubleshooting interface software and debugging application codes
            </span>
          </div>
        </li>
        <li>
          <div className='experience-description'>
            <span className='resume-description-text'>
              Collaborating with UI/UX and Backend team in order to connect UI
              design with REST API
            </span>
          </div>
        </li>
      </ul>
    </div>,
    <div
      className='resume-screen-container programming-skills-container'
      key='programming'
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className='resume-screen-container' key='projects'>
      {projectDetails.map((projectDetail, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetail.title}
          subHeading={projectDetail.subHeading}
          description={projectDetail.description}
          fromDate={projectDetail.fromDate}
          toDate={projectDetail.toDate}
        />
      ))}
    </div>,
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading heading='Music' />
      <ResumeHeading heading='Sports' />
      <ResumeHeading heading='Travelling' />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 568;
    let newCarouselOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='oops.. no internet connection'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className='resume-details-carousel'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <ScreenHeading title='Resume' subHeading='My Formal Bio Details' />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
