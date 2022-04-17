import React,{useEffect} from "react";
import locomotiveScroll from "locomotive-scroll";


import JobButton from '../../../Assets/Svgs/JobButton'
import RightArrow from '../../../Assets/Svgs/RightArrow'
import HomePageBanner from '../../../Assets/Images/HomePageBanner.png'

import OutSystems from '../../../Assets/Images/TechImages/out-systems.jpg'
import BusinessQa from '../../../Assets/Images/TechImages/business-qa.jpg'
import CloudDevelopment from '../../../Assets/Images/TechImages/cloud-development.jpg'
import Helpdesk from '../../../Assets/Images/TechImages/helpdesk.jpg'
import Qa from '../../../Assets/Images/TechImages/qa.jpg'
import MachineBlockchain from '../../../Assets/Images/TechImages/machine-blockchain.png'
import Mike from '../../../Assets/Images/Mike.jpg'

import CircularText from '../../CommonComponent/CircularText/CircularText'
import HexagonText from '../../CommonComponent/HexagonText/HexagonText'
import RectangleText from '../../CommonComponent/RectangleText/RectangleText'
import CircleBtn from '../../CommonComponent/Button/CircleBtn'
import ParallelText from '../../CommonComponent/ParallelText/ParallelText'

import Navbar from "../../AllPageComponent/Navbar";


import Facebook from '../../../Assets/Social/Facebook' 
import Tweeter from '../../../Assets/Social/Tweeter' 
import Instagram from '../../../Assets/Social/Instagram' 
import LinkedIn from '../../../Assets/Social/LinkedIn' 
import Git from '../../../Assets/Social/Git' 
import GlassDoor from '../../../Assets/Social/GlassDoor' 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import Star from "../../../Assets/Svgs/Star";
import IconComment from "../../../Assets/Svgs/IconComment";
import IconBlueComment from "../../../Assets/Svgs/IconBlueComment";

export default function Home() {
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });
  return (
    <>
      <Navbar/>
      {/* header_section */}
      <div className="scroll" ref={scrollRef}>
      <header className='header_section' data-scroll  >
        <div className="large_text">
          <CircularText><span>Technology</span></CircularText>
          <CircularText><span>is</span></CircularText>
          <HexagonText><span>human-level</span></HexagonText>
          <RectangleText><span>Magic</span></RectangleText>
        </div>
        <div className="row g-0 align-items-center">
          <div className="col-lg-4 col-12 order-last order-lg-first ">
            <div className="text_wrapper">
              <h2>We love to solve problems.</h2>
              <h2>We can’t go a day without looking to optimize an interaction or procedure.</h2>
              <h2>That is the reason we build long-lasting relationships and enduring partnerships.</h2>
            </div>
          </div>
          <div className="col-lg-8 col-12   order-first order-lg-last">
            <div className="image_wrapper" id='HomePageBanner'>
              <img className='HomePageBanner' src={HomePageBanner} alt="HomePageBanner" />
              <div className="job_button" id='jobBtn'>
                <JobButton />
                <p  className="highlight-event-title">
                  Looking for your dream job?
                  <span >Check our open positions! &gt;&gt;&gt;&gt;</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center heading_text_wrapper">
          <div className="col-lg-8 col-12">
            <h1 className='heading_text text-center'>You do want your technology to be exciting, right?</h1>
          </div>
        </div>
      </header>

      {/* ytech-technologies section */}

      <section className='ytech_technologies_section' data-scroll  >
        <div className="yt_title">
          <h2 >ytech®<br />technologies</h2>
          <a href="/" >
            <RightArrow />
            <CircleBtn>view technologies</CircleBtn>
          </a>
        </div>
        <div className="yt_techs">
          <div className="tech-wrapper">
            <ParallelText IsActive='active'><p>OutSystems</p></ParallelText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={OutSystems} alt="OutSystems" />
            </div>
          </div>
          <div className="tech-wrapper">
            <CircularText IsActive='active'>
              <p>Mobile App Development</p>
            </CircularText>
          </div>
          <div className="tech-wrapper">
            <ParallelText IsActive='active'><p>DevOps</p></ParallelText>

          </div>
          <div className="tech-wrapper">
            <CircularText IsActive='active'>
              <p>Mobile App Development</p>
            </CircularText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={CloudDevelopment} alt="CloudDevelopment" />
            </div>
          </div>
          <div className="tech-wrapper">
            <ParallelText IsActive='active'>
              <p>Java Development</p>
            </ParallelText>
          </div>
          <div className="tech-wrapper">
            <HexagonText IsActive='active'>
              <p>Business analyst</p>
            </HexagonText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={BusinessQa} alt="BusinessQa" />
            </div>
          </div>
          <div className="tech-wrapper">
            <ParallelText IsActive='active'>
              <p>Project Management</p>
            </ParallelText>
          </div>
          <div className="tech-wrapper">
            <CircularText IsActive='active'><p>QA</p></CircularText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={Qa} alt="Qa" />
            </div>
          </div>
          <div className="tech-wrapper">
            <HexagonText IsActive='active'><p>Business analyst</p></HexagonText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={MachineBlockchain} alt="MachineBlockchain" />
            </div>
          </div>
          <div className="tech-wrapper">
            <ParallelText IsActive='active'>
              <p>Project Management</p>
            </ParallelText>

          </div>

          <div className="tech-wrapper">
            <RectangleText IsActive='active'>
              <p>Helpdesk</p>
            </RectangleText>
          </div>
          <div className="tech-wrapper">
            <div className="tech_img">
              <img src={Helpdesk} alt="Helpdesk" />
            </div></div>
          <button className="tech-wrapper">
            <CircularText IsActive='active'><p>Talk with us</p></CircularText>
            <div data-type="circle" className="tag-container svg-tag-container" >
              <svg viewBox="0 0 121 105">
                <circle cx="60" cy="53" r="52" width="120" height="104"></circle></svg>
              <span className="svg">
                <IconBlueComment/>
              </span>
            </div>
          </button>
        </div>

      </section>
      <div className="yt_shadows" data-scroll  >
        <span data-scroll></span>
        <span data-scroll></span>
        <span data-scroll></span>
        <span data-scroll></span>
        <span data-scroll></span>
      </div>

      {/* home_services */}
      <section className='home_services' data-scroll  >
        <div className="searviec_title">
          <h2>ytech®<br />services</h2>
        </div>
        <div className="view_btn_wrapper">
          <div className="view_searvice_content">
            <p>
              IF YOU NEED TECH, WELL, LET’S DANCE.
            </p>
            <div className="yt_title">
              <a href="/" >
                <RightArrow />
                <CircleBtn>view technologies</CircleBtn>
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* searvice_slider */}
      <section className='searvice_slider' data-scroll  >
        <div className="know_more">
          <div className="yt_title">
            <a href="/">
              <RightArrow />
              <CircleBtn>Know more</CircleBtn>
            </a>
          </div>
        </div>
      </section>
    {/* special_job_offers */}
      <section className="special_job_offers" data-scroll  >
        <div className="scroll_text first_scroll">
          <span className="text_1">Opportunity &gt; Opportunity &gt; Opportunity &gt; Opportunity &gt;</span>
          <span className="text_2">Opportunity &gt; Opportunity &gt; Opportunity &gt; Opportunity &gt;</span>
        </div>
        <div className="sj_title">
          <Star />
          <div className="sj_text">
            <h3>new talent, check the</h3>
            <h2>Special<br />Job offers</h2>
            <div className="yt_title">
              <a href="/">
                <RightArrow />
                <CircleBtn>Know more</CircleBtn>
              </a>
            </div>
          </div>

        </div>
        <div className="scroll_text second_scroll">
          <span className="text_1">Opportunity &gt; Opportunity &gt; Opportunity &gt; Opportunity &gt;</span>
          <span className="text_2">Opportunity &gt; Opportunity &gt; Opportunity &gt; Opportunity &gt;</span>
        </div>
      </section>
    {/* footer_arrows */}
      <section className="footer_arrows" data-scroll  >
        <div data-v-ec3a60ae="" className="big-arrows__wrapper"><svg data-v-ec3a60ae="" viewBox="0 0 1831.94 992.91" className="show-desktop" >
          <path data-v-ec3a60ae="" d="M1105.23 0v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 49.56v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 48.9v232.33m10.41 62.89l103-119.95m-226.94 0l103.09 119.95M1519.23 0v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 49.56v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 48.9v232.33m10.41 62.89l103-119.95m-226.94 0l103.09 119.95M707.23 0v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 49.56v232.33M717.61 640l103-120m-226.94 0l103.09 120m10.41 48.9v232.33m10.41 62.89l103-119.95m-226.94 0l103.18 119.95M309.23 0v232.33m10.41 62.89l103-120m-226.94 0l103.09 120m10.41 49.56v232.33M319.61 640l103-120m-226.94 0l103.09 120m10.41 48.9v232.33m10.41 62.89l103-119.95m-226.94 0l103.18 119.95"></path>
        </svg> <svg data-v-ec3a60ae="" viewBox="0 0 1831.94 992.91" className="show-desktop">
            <path data-v-ec3a60ae="" d="M1718.5 180.85v232.32m10.41 62.89l103-119.95m-226.94 0l103.09 120m10.41 49.57v232.27m10.41 62.89l103-119.95m-226.94 0l103.09 119.95m-403.59-640v232.33m10.41 62.89l103-119.95m-226.94 0l103.09 120m10.41 49.57v232.27m10.41 62.89l103-119.95m-226.94 0l103.09 119.95m-387.59-640v232.33m10.41 62.89l103.18-119.95m-226.94 0l103.09 120m10.41 49.57v232.27m10.41 62.89l103.03-119.95m-226.94 0l103.06 119.95m-387.59-640v232.33m10.41 62.89l103.06-119.95m-226.94 0l103.09 120m10.41 49.57v232.27m10.41 62.89l103.03-119.95m-226.94 0l103.06 119.95m-384.59-640v232.33m10.41 62.89l103.06-119.95m-226.94 0l103.09 120m10.41 49.57v232.27m10.41 62.89l103.03-119.95m-226.94 0l103.06 119.95"></path>
          </svg> <svg data-v-ec3a60ae="" viewBox="0 0 670.89 359.64" className="show-mobile" >
            <path data-v-ec3a60ae="" d="M408.92 84.22h-9.77V.09h9.77zm39.89-17.48l-7.41-6.36-37.3 43.43 7.41 6.37zm-44.85 37.07l-37.32-43.43-7.41 6.36 37.33 43.44zm5 21.13h-9.77v84.13h9.77zm39.89 66.65l-7.4-6.36-37.35 43.44 7.41 6.36zM404 228.66l-37.32-43.43-7.41 6.36L396.56 235zm5 20.9h-9.77v84.13H409zm39.89 66.64l-7.4-6.36-37.39 43.44 7.41 6.36zm-44.85 37.08l-37.32-43.44-7.41 6.37 37.33 43.43zM558.82.09h-9.77v84.13h9.77zm39.88 66.65l-7.41-6.36L554 103.81l7.41 6.37zm-44.85 37.07l-37.31-43.43-7.41 6.36 37.33 43.44zm5 21.13h-9.77v84.13h9.77zm39.85 66.65l-7.41-6.36L554 228.67l7.41 6.36zm-44.85 37.07l-37.33-43.43-7.41 6.36L546.46 235zm5 20.9h-9.77v84.13h9.77zm39.85 66.64l-7.41-6.36L554 353.28l7.41 6.36zm-44.85 37.08l-37.33-43.44-7.41 6.37 37.33 43.43zM264.88 0h-9.77v84.13h9.77zm39.9 66.65l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07L222.6 60.28l-7.41 6.37 37.33 43.44zm4.95 18h-9.77v84.13h9.77zm39.9 66.65l-7.41-6.37-37.31 43.4 7.41 6.36zm-44.85 37.03L222.6 182l-7.41 6.37 37.33 43.43zm4.95 18h-9.77v84.13h9.77zm39.9 66.6l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07l-37.33-43.43-7.41 6.36 37.33 43.43zM120.63 0h-9.76v84.13h9.76zm39.9 66.65l-7.41-6.37-37.3 43.44 7.41 6.36zm-44.83 37.07L78.35 60.28l-7.4 6.37 37.33 43.44zm5 18h-9.76v84.13h9.76zm39.9 66.65l-7.48-6.37-37.3 43.44 7.41 6.36zm-44.9 37.03L78.35 182l-7.4 6.37 37.33 43.43zm5 18h-9.76v84.13h9.76zm39.83 66.6l-7.41-6.37-37.3 43.44 7.41 6.36zm-44.83 37.08l-37.35-43.44-7.4 6.36 37.33 43.43z"></path></svg>
          <svg data-v-ec3a60ae="" viewBox="0 0 670.89 359.64" className="show-mobile"><path data-v-ec3a60ae="" d="M481.09 149.71h-9.77V65.58h9.77zm39.9-17.48l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07l-37.33-43.44-7.41 6.37 37.3 43.44zm4.95 21.13h-9.77v84.13h9.77zm39.9 66.65l-7.41-6.36-37.31 43.43 7.41 6.36zm-44.85 37.07l-37.33-43.44-7.41 6.37 37.3 43.44zM630.99 65.58h-9.76v84.13h9.76zm39.9 66.65l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07l-37.34-43.44-7.41 6.37 37.33 43.44zm4.95 21.13h-9.76v84.13h9.76zm39.9 66.65l-7.41-6.36-37.31 43.43 7.41 6.36zm-44.85 37.07l-37.34-43.44-7.41 6.37 37.33 43.44zM336.84 65.58h-9.76v84.13h9.76zm39.86 66.65l-7.41-6.37-37.27 43.44 7.41 6.36zm-44.81 37.07l-37.33-43.44-7.4 6.37 37.32 43.44zm4.95 21.13h-9.76v84.13h9.76zm39.86 66.65l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07l-37.33-43.44-7.4 6.37 37.32 43.44zM192.7 63.8h-9.77v84.13h9.77zm39.9 66.65l-7.41-6.37-37.31 43.44 7.41 6.36zm-44.85 37.07l-37.33-43.44-7.41 6.37 37.33 43.43zm4.95 18h-9.77v84.13h9.77zm39.9 66.64l-7.41-6.36-37.3 43.4 7.41 6.36zm-44.84 37.04l-37.33-43.44-7.41 6.37 37.33 43.43zM49.7 63.8h-9.78v84.13h9.78zm39.9 66.65l-7.41-6.37-37.3 43.44 7.4 6.36zm-44.9 37.07L7.4 124.08 0 130.45l37.33 43.43zm4.95 18h-9.73v84.13h9.78zm39.9 66.64l-7.41-6.36-37.27 43.4 7.4 6.36zM44.7 289.2L7.4 245.76 0 252.13l37.33 43.43z"></path></svg></div>
      </section>

    {/* talk_with_us_wrapper */}
      <section className="talk_with_us_wrapper" data-scroll  >
        <CircularText>
          <div className="scroll_text second_scroll">
            <span className="text_1">Talk with us</span>
            <span className="text_2">Talk with us</span>
          </div>
        </CircularText>
        <div className="telk_img">
          <img src={Mike} alt="Mike" />
        </div>
        <div className="comment_icon">
          <IconComment />
        </div>
      </section>
      
  {/* Footer */}
      <section className="footer" data-scroll>
        <div className="year">
          <span className="no-hover">Ytech © 2022</span>
        </div>
        <div className="social_links">
          <a href="/" className="social_icons">
            <Facebook/>
          </a>
          <a href="/" className="social_icons">
          <Tweeter/>
          </a>
          <a href="/" className="social_icons">
          <Instagram/>
          </a>
          <a href="/" className="social_icons">
          <LinkedIn/>
          </a>
          <a href="/" className="social_icons">
          <Git/>
          </a>
          <a href="/" className="social_icons">
          <GlassDoor/>
          </a>
        </div>
        <div className="telegram">
          <a href="/" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </section>
      </div>


    </>
  )
}





