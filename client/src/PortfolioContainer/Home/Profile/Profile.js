import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa fa-youtube'></i>
              </a>
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              Hello, I'm <span className='highlighted-text'>Gesta</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Front End Developer',
                    1500,
                    'Full Stack Developer',
                    1500,
                    'React Dev',
                    1500,
                  ]}
                />
              </h1>
              <span>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
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
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
