import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // استيراد الأيقونات من react-icons

import "./Works.css";

// Import الصور الخاصة بالمشاريع
import movies from "../../assets/recentprojects/1.png";
import fastPizza from "../../assets/recentprojects/2.png";
import NextWebsite from "../../assets/recentprojects/6.png";
import reactQuiz from "../../assets/recentprojects/5.png";
import dashboard from "../../assets/recentprojects/7.png";

const projects = [
  {
    id: 1,
    title: "The Wild Oasis Dashboard",
    description: `
     The Wild Oasis dashboard, built with React, React Query, Styled Components, and Supabase, allows hotel staff to manage rooms, bookings, and user profiles while providing real-time analytics. It features a responsive design with dark mode for enhanced usability.`,
    image: dashboard,
    github: "https://github.com/abdelrhmanreda1/the-wild-oasis-dashboard",
    demo: "https://the-wild-oasis-dashboard-liard.vercel.app/",
  },
  {
    id: 2,
    title: "Fast Pizza",
    description: `
    The Fast Pizza website, built with React, Redux, and Tailwind CSS, allows users to explore a dynamic pizza menu, customize orders, and track their cart in real-time. The site offers a fast, responsive interface with smooth state management for an optimal user experience.`,
    image: fastPizza,
    github: "https://github.com/abdelrhmanreda1/Fast-Pizza",
    demo: "https://1fast-pizza.netlify.app/",
  },
  {
    id: 3,
    title: "The Wild Oasis Website",
    description: `The Wild Oasis web platform, built with Next.js, Tailwind CSS, and Supabase, offers hotel management functionalities, including room listings, bookings, and real-time guest tracking. It features a sleek, responsive design, providing an intuitive interface for users to manage hotel operations efficiently.`,
    image: NextWebsite,
    github: "https://github.com/abdelrhmanreda1/the-wild-oasis-web",
    demo: "https://the-wild-oasis-web-xi.vercel.app/",
  },
  {
    id: 4,
    title: "The React Quizzes",
    description: `The React Quizzes website, built with React, offers users the ability to take multiple-choice quizzes on various topics. It features a clean, responsive design, with a smooth user interface for answering questions and receiving feedback on correct or incorrect answers in real time. This platform is ideal for testing knowledge interactively.`,
    image: reactQuiz,
    github: "https://github.com/abdoreda33/React-Quiz",
    demo: "https://react-quiizes.netlify.app/",
  },

  {
    id: 5,
    title: "The Movies App",
    description: `The website you built with React offers an interactive movie display with features like categories and search to help users explore content easily. It stands out for its responsiveness and enhances the user experience with optimized React components.`,
    image: movies,
    github: "https://github.com/abdelrhmanreda1/Movies",
    demo: "https://movies-cyan-nu.vercel.app/",
  },
];

export const Works = () => {
  return (
    <section id="works">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project">
              <div className="__img_wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="__content_wrapper">
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
              <div className="overlay">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  <FaGithub />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn">
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
