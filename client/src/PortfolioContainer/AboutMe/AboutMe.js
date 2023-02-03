import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import './AboutMe.css';

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "A quick introduction about my self, I would say that I'm a curious kind of person who actually love to learn something new in many sectors as I could and I like to challenge my personal skill to be enhanced. I'm a great learner and a proactive contributor who is currently have a strong passion in Web Development sector, either Frontend or Backend Development, and wanting to grow my personal skill in that field. Graduated from Trisakti University with major Petroleum Engineering makes me good with numbers, calculation, problem solving and logical thoughts. Engineering skill has been strenghten along with my work experience at a company focusing in oil and gas industry. In addition, as an extrovert person with having organization experiences, I also confident with my communication skill, leadership skill, and team working.",
    highlights: {
      bullets: [
        'Full stack web development',
        'Interactive Front End Design',
        'React workflws',
        'Redux for state management',
        'Building REST API',
      ],
      heading: 'Here are the highlights',
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
      return (
        <div className='highlight ' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className='about-me-container screen-container' id={props.id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading title='About Me' subHeading='Personal Summary' />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn'>
                {''}
                Hire Me{' '}
              </button>
              <a
                href='Gesta_Gemilang_Resume.pdf'
                download='Gesta Putra Gemilang.pdf'
              >
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
