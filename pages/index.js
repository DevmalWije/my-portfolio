import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";

import Image from "next/image";
import devImg from "../public/devPic.png";
import programming from "../public/ProgrammingImage.svg";
import design from "../public/DesignImage.svg";
import appDev from "../public/AppDevImage.svg";
import { useState } from "react";
import python from "../public/python.png";
import java from "../public/java.png"; //<a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
import kotlin from "../public/Kotlin.png";
import dart from "../public/Dart.png";
import R from "../public/R.png";
import sql from "../public/database.png"; //<a href="https://www.flaticon.com/free-icons/sql" title="sql icons">Sql icons created by Uniconlabs - Flaticon</a>
import flutter from "../public/flutter.png";
import javascript from "../public/js.png"; //<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
import typescript from "../public/ts.png"; //<a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
import nextJS from "../public/next.svg";
import flask from "../public/flask.png";
import sass from "../public/sass.png"; //<a href="https://www.flaticon.com/free-icons/sass" title="sass icons">Sass icons created by Freepik - Flaticon</a>
import css from "../public/css.png";
import react from "../public/react.png";
import nodeJS from "../public/node.png";
import figma from "../public/figma.png";
import XD from "../public/adobe.png";
import photoshop from "../public/photoshop.png";
import canva from "../public/canva.svg";
import tailwind from "../public/talwind.svg";
import mediapipe from "../public/mediapipe.png";
import html from "../public/HTML.png";
import dribble from "../public/dribble.png";
import mozilla from "../public/mozilla.png";
import dicemania from "../public/dicemania.png";
import fitzen from "../public/fitzen.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ProjectsByDev</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="bg-white bg-cover px-4 md:px-40 lg:px-11 dark:bg-dark_mode">
        <section className="min-h-screen select-none">
          <nav className="z-30 py-10 lg:-mb-24 flex justify-between select-none m-auto max-w-6xl">
            <h1 className="font-bold text-xl font-Montserrat text-gray-800 dark:text-white rounded-lg px-1 py-2">
              <span className="text-teal-500">&lt;</span>ProjectsByDev
              <span className="text-teal-500">&#47;&gt;</span>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(false)}
                    className="cursor-pointer text-2xl text-teal-500 dark:hover:fill-white  transition-all ease-in-out delay-150  hover:fill-pastel_pink duration-300"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl text-teal-500  transition-all ease-in-out delay-150   hover:fill-gray-600 duration-300"
                  />
                )}
              </li>
              <li>
                <a
                  className="
                   z-40  font-oswald text-white text-lg bg-teal-500 drop-shadow-2xl px-4 py-2 rounded-lg ml-2 dark:text-white transition ease-in-out delay-150 hover:bg-gray-600 hover:text-white hover:dark:bg-white hover:dark:text-black duration-200"
                  href="https://drive.google.com/file/d/1MCEmG3nuHj_3CUD1nQDpD01a469SFfpJ/view?usp=share_link"
                  target={"blank"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* ----------------Blob sets----------------------------------------------- */}
          <div className=" relative mx-auto w-full select-none pointer-events-none">
            <div
              className="z-0 absolute top-0 w-36 h-36 md:w-72
            md:h-72 bg-teal-200  rounded-full -left-4  mix-blend-multiply  opacity-70
            md:animate-blob animation-delay-2000 lg:left-10 blur-3xl"
            ></div>
            <div
              className="z-0 absolute -bottom-96 left-5 md:top-16 right-10 w-60
              h-60 md:w-72
            md:h-72 bg-teal-500 rounded-full  mix-blend-multiply  opacity-70  md:animate-blob blur-3xl"
            ></div>
            <div
              className="z-0 scale-0 md:scale-75 lg:scale-110 absolute -top-48 -right-5 md:top-60 md:right-20 w-72
            h-72 bg-pink-500/0 bg-teal-100  rounded-full  mix-blend-multiply  opacity-70 md:animate-blob animation-delay-4000 blur-3xl"
            ></div>
            <div
              className="z-0  absolute top-36 left-1 lg:right-52 w-60
              h-60 md:w-72
            md:h-72 bg-rose-500/0 bg-teal-100 rounded-full  mix-blend-multiply  opacity-70  md:animate-blob blur-3xl"
            ></div>
            <div
              className="z-0  absolute bottom-60 right-60 w-72
            h-72 bg-blue-500/0 rounded-full mix-blend-multiply  opacity-70  md:animate-blob bg-teal-500 animation-delay-2000 blur-3xl"
            ></div>
            <div
              className="z-0 bg-teal-200 absolute top-96 md:top-20 -left-20 md:right-96 w-60
              h-60 md:w-72
            md:h-72   rounded-full  mix-blend-multiply  opacity-70  md:animate-blob  lg:left-10 lg:top-52 blur-3xl"
            ></div>
            <div
              className="z-0 absolute -bottom-80 -left-80 md:left-20 w-72
            h-72 bg-pastel_green rounded-full  mix-blend-multiply  opacity-70  md:animate-blob animation-delay-4000  lg:left-52 blur-3xl"
            ></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:h-screen items-center gap-16">
            {/* hero section */}
            <div className="text-center p-5 max-w-xl  bg-white/70  dark:bg-gray-800 dark:shadow-doublexl  dark:shadow-teal-500/30 drop-shadow-2xl rounded-3xl select-none">
              <h2
                className="text-teal-500 text-3xl 
            py-2 font-medium font-Montserrat mb-3 max-w-md flex justify-center mx-auto md:text-4xl"
              >
                Devmal Wijesinghe
              </h2>
              <h3
                className=" drop-shadow-lg text-gray-800 dark:text-gray-200 text-2xl
             py-2 font-Montserrat font-medium
             md:text-3xl max-w-xl mx-auto mt-5"
              >
                Developer and UX/UI Designer
              </h3>
              <p className="  text-m py-5 leading-7 p-4 text-gray-900 font-Montserrat md:text-lg max-w-xl mx-auto  dark:text-gray-300 ">
                As a dynamic and ambitious software engineering undergraduate, I
                possess a consistent drive to broaden my horizons and excel
                under pressure. My ability to quickly absorb and implement new
                knowledge allows me to adapt to new propositions with ease,
                making me an asset to any team
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="z-10 relative rounded-full drop-shadow-2xl  w-80 h-80 overflow-hidden mb-5 md:h-80 md:w-80  ">
                <Image src={devImg} layout="fill" objectFit="cover" />
              </div>
              {/* {*-socials-*} */}
              <div className=" text-teal-500 text-5xl flex-1 flex justify-center gap-10 cursor-pointer select-none">
                <a
                  href="https://www.linkedin.com/in/devmalwije"
                  target={"_blank"}
                >
                  <AiFillLinkedin className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
                <a href="https://github.com/DevmalWije" target={"_blank"}>
                  <AiFillGithub className="z-10 transition ease-in-out delay-150  hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
                <a href="https://twitter.com/devmal_w_" target={"_blank"}>
                  <AiFillTwitterCircle className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
                <a
                  href="https://www.behance.net/Devmal_Amantha"
                  target={"_blank"}
                >
                  <AiFillBehanceCircle className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2nd section */}
        <section>
          {/* ----------------Blob sets----------------------------------------------- */}
          <div className=" relative mx-auto w-full pointer-events-none ">
            <div
              className="z-0 absolute -top-90 w-36 h-36 md:w-72
            md:h-72 bg-teal-200  rounded-full -left-4  mix-blend-multiply opacity-70
             animation-delay-2000 lg:left-10  md:animate-blob blur-3xl"
            ></div>
            <div
              className="z-0 absolute -top-4 right-10 w-60
              h-60 md:w-72
            md:h-72 bg-teal-100 rounded-full  mix-blend-multiply opacity-70  md:animate-blob  blur-3xl"
            ></div>

            <div
              className="z-0 absolute -top-20 left-20   w-72
            h-72 bg-teal-100 rounded-full  mix-blend-multiply opacity-70 scale-0 md:animate-blob md:scale-100 blur-3xl"
            ></div>

            <div
              className="z-0 absolute w-60
              h-60  -bottom-52 right-10 lg:right-52 md:w-72
            md:h-72 bg-rose-500/0  rounded-full  mix-blend-multiply  opacity-70   md:animate-blob blur-3xl"
            ></div>
            <div
              className="z-0  absolute -bottom-20 right-60 w-72
            h-72 bg-blue-500/0 rounded-full mix-blend-multiply opacity-70  bg-teal-200 animation-delay-2000 md:animate-blob blur-3xl"
            ></div>
            <div
              className="z-0 absolute bottom-10 -left-80 md:left-20 w-72
            h-72 bg-teal-100 rounded-full  mix-blend-multiply  opacity-70   animation-delay-4000  lg:left-52 md:animate-blob blur-3xl"
            ></div>
          </div>

          {/* skills and passion descrip */}
          <div className="my-5 md:text-xl max-w-xl mx-auto  dark:text-pastel_green p-5">
            <h3 className=" text-teal-500 font-Montserrat text-center font-semibold text-5xl py-1 p-5">
              Skills
            </h3>
          </div>
        </section>

        <section>
          {/*-------------------------------------------cards----------------------------------------------------------- */}
          <div className="lg:flex gap-5 select-none pb-5 font-Montserrat">
            {/* -------------------------------------------programming------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5 dark:bg-gray-800">
              <Image src={programming} width={100} height={100} />
              <h3 className="text-lg  text-gray-900 font-semibold dark:text-gray-200 ">
                Programming
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Programming solutions to address technical problems through
                coding expertise and problem-solving.
              </p>
              {/*Tech card slots*/}
              <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 md:grid-cols-2">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={python} width={50} height={50} className=" m-3" />
                  <p>Python</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={java} width={50} height={50} className="m-3" />
                  <p>Java</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={kotlin} width={50} height={50} className="m-3" />
                  <p>Kotlin</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={dart} width={50} height={50} className="m-3" />
                  <p>Dart</p>
                </div>

                {/* <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={R} width={50} height={50} className="m-3" />
                  <p>R stat</p>
                </div> */}
              </div>
            </div>

            {/* -------------------------------------------app and web------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5 dark:bg-gray-800  ">
              <Image src={appDev} width={100} height={100} />

              <h3 className="text-lg  text-gray-900 font-semibold dark:text-gray-200">
                Web and App Development
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Using modern frameworks and technique to build responsive and
                interactive web and mobile apps.
              </p>
              {/*Tech card slots*/}
              <div className="grid grid-rows-6 md:grid-rows-4 md:grid-cols-3 grid-flow-col gap-2 ">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={flutter}
                    width={50}
                    height={50}
                    className=" m-3"
                  />
                  <p>Flutter</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50   duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={tailwind}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Tailwind</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={flask} width={50} height={50} className="m-3" />
                  <p>Flask</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={javascript}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Javascript</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={sass} width={50} height={50} className="m-3" />
                  <p>Sass</p>
                </div>
                {/* 
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={mediapipe}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Mediapipe</p>
                </div> */}

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={nextJS} width={50} height={50} className="m-3" />
                  <p>NextJs</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={react} width={50} height={50} className="m-3" />
                  <p>React</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={css} width={50} height={50} className="m-3" />
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={typescript}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Typescript</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={nodeJS} width={50} height={50} className="m-3" />
                  <p>NodeJs</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={html} width={50} height={50} className="m-3" />
                  <p>HTML</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={sql} width={50} height={50} className="m-3" />
                  <p>SQL</p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------design------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-800 ">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg  text-gray-900 font-semibold dark:text-gray-200">
                Design
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Keeping up with the latest trends and techniques to create
                beautiful and functional designs.
              </p>
              <div className="grid grid-rows-2 grid-flow-col gap-2 md:grid-cols-2">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={photoshop}
                    width={50}
                    height={50}
                    className=" m-3"
                  />
                  <p>Photoshop</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={figma} width={50} height={50} className="m-3" />
                  <p>Figma</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={XD} width={50} height={50} className="m-3" />
                  <p>Adobe XD</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out  hover:bg-teal-50 duration-200 dark:bg-gray-500 dark:hover:bg-white ">
                  <Image src={canva} width={50} height={50} className="m-3" />
                  <p>Canva</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------past projects------------------------------------------- */}
        <section>
          <div className="max-w-xl mx-auto text-center flex flex-col items-center p-5 rounded-xl my-5  font-Montserrat ">
            <h3 className="text-teal-500 text-center  text-5xl py-1 p-5 font-semibold">
              Projects
            </h3>
          </div>
          <div className="text-gray-700 lg:flex gap-5 select-none pb-5 font-Montserrat ">
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-800 ">
              <Image
                src={fitzen}
                width={700}
                height={700}
                className="hover:scale-125 ease-in-out duration-300"
              />
              <h3 className="text-lg dark:text-gray-200 font-semibold">
                &ldquo;FitZen&rdquo; Posture Detection Flutter App
              </h3>
              <p className="dark:text-gray-200">Technologies</p>
              <div className="flex flex-row md:flex-wrap gap-5 m-1 shadow-lg p-2 rounded-xl  dark:bg-gray-800">
                <Image
                  src={python}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={flutter}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={dart}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={mediapipe}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={flask}
                  width={25}
                  height={25}
                  className=" hover:grayscale-0 ease-in-out duration-300 "
                />
              </div>
              <p className="py-2 px-2 dark:text-gray-300 max-w-xl mx-auto">
                A python{" "}
                <span className="text-teal-500">machine learning </span>based
                posture detection flutter application operating in realtime to
                alert users about their posture habits and how to improve them.
              </p>
            </div>

            <div className="text-center md:flex-wrap flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-800 ">
              <Image
                src={mozilla}
                width={700}
                height={700}
                className="hover:scale-125 ease-in-out duration-300"
              />

              <h3 className="text-l dark:text-gray-200 font-semibold">
                Mozilla and FOSS community of IIT Website
              </h3>
              <p className="dark:text-gray-200">Technologies</p>
              <div className="flex flex-row gap-5 m-1 shadow-lg p-2 rounded-xl  dark:bg-gray-800">
                <Image
                  src={react}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={typescript}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={sass}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={nodeJS}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
              </div>
              <p className="py-2 px-2 dark:text-gray-300 max-w-xl mx-auto">
                A simplistic website for the Mozilla and Foss community of
                IIT.Built upon the always reliable{" "}
                <span className="text-teal-500">M.E.R.N </span>stack.
              </p>
            </div>

            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-800 ">
              <Image
                src={dicemania}
                width={700}
                height={700}
                className="hover:scale-125 ease-in-out duration-300"
              />

              <h3 className="text-l dark:text-gray-200 font-semibold">
                &ldquo;DiceMania&rdquo; pure Android kotline based Game
              </h3>
              <p className="dark:text-gray-200">Technologies</p>
              <div className="flex flex-row gap-5 m-1 shadow-lg p-2 rounded-md  dark:bg-gray-800">
                <Image
                  src={kotlin}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
              </div>
              <p className="py-2 px-2 dark:text-gray-300 max-w-xl mx-auto">
                A simple yet engaging android game built using{" "}
                <span className="text-teal-500">Kotlin</span> and{" "}
                <span className="text-teal-500">Android Studio</span> that
                utilizes a speacialised algorithm to beat the user every time.
              </p>
            </div>

            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-800 ">
              <Image
                src={dribble}
                width={700}
                height={700}
                className="hover:scale-125 ease-in-out duration-300"
              />

              <h3 className="text-l dark:text-gray-200 font-semibold">
                &ldquo;Dribblerz&rdquo; Basketball focused sports goods E-shop
              </h3>

              <p className="dark:text-gray-200">Technologies</p>
              <div className="flex flex-row gap-5 m-1 shadow-lg p-2 rounded-xl  dark:bg-gray-800">
                <Image
                  src={html}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={javascript}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
                <Image
                  src={css}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 ease-in-out duration-300 "
                />
              </div>
              <p className="py-2 px-2 dark:text-gray-300 max-w-xl mx-auto">
                A simple and modern looking basketball E-shop built using
                vanilla <span className="text-teal-500">HTML</span>,{" "}
                <span className="text-teal-500">CSS</span> and{" "}
                <span className="text-teal-500">Javascript</span>.
              </p>
            </div>
          </div>
        </section>

        <footer class=" bg-white rounded-t-xl shadow  dark:bg-gray-800">
          <div class="w-full mx-auto container md:p-6 p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <span class="text-sm text-teal-500 text-center">
              <span className="font-bold text-xl font-Montserrat text-gray-800 dark:text-white rounded-lg">
                <span className="text-teal-500">&lt;</span>ProjectsByDev
                <span className="text-teal-500">&#47;&gt;</span>
              </span>
            </span>
            <ul class="flex flex-wrap justify-center items-center text-teal-500 gap-5 text-3xl mt-5 md:mt-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/devmalwije"
                  target={"_blank"}
                >
                  <AiFillLinkedin className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
              </li>
              <li>
                <a href="https://github.com/DevmalWije" target={"_blank"}>
                  <AiFillGithub className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/devmal_w_" target={"_blank"}>
                  <AiFillTwitterCircle className="z-10 transition ease-in-out delay-150   hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/Devmal_Amantha"
                  target={"_blank"}
                >
                  <AiFillBehanceCircle className="z-10 transition ease-in-out delay-150  hover:fill-gray-600 dark:hover:fill-white duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
