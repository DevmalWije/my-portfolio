import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";

import Image from "next/image";
import devImg from "../public/devPic.png";
import programming from "../public/prog-3.svg";
import design from "../public/design-2.svg";
import appDev from "../public/app-dev-2.svg";
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ProjectsByDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white bg-cover px-10 md:px-40 lg:px-11 dark:bg-dark_mode">
        <section className="min-h-screen">
          <nav className="z-10 py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-oswald text-gray-800 dark:text-teal-100">
              ProjectsByDev
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-gray-800 dark:text-teal-100 "
                />
              </li>
              <li>
                <a
                  className=" font-oswald text-gray-800 text-lg bg-purple-600/40 drop-shadow-2xl px-4 py-2 rounded-lg ml-3 dark:text-teal-100 "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* ----------------Blob sets----------------------------------------------- */}
          <div className=" relative mx-auto w-full ">
            <div
              className="z-0 absolute top-0 w-36 h-36 md:w-72
            md:h-72 bg-pastel_purple  rounded-full -left-4  mix-blend-multiply blur-xl opacity-70
            animate-blob animation-delay-2000 lg:left-10 dark:bg-lime"
            ></div>
            <div
              className="z-0 absolute top-0 right-10 w-72
            h-72 bg-teal-500 rounded-full  mix-blend-multiply blur-xl opacity-70  animate-blob"
            ></div>
            <div
              className="z-0 scale-0 md:scale-75 lg:scale-110 absolute -top-48 -right-5 md:top-60 md:right-20 w-72
            h-72 bg-pink-500/0 md:bg-pink-500 rounded-3xl  mix-blend-multiply  opacity-70 blur-xl md:animate-blob animation-delay-4000"
            ></div>
            <div
              className="z-0 absolute top-36 right-10 lg:right-52 w-72
            h-72 bg-rose-500/0 md:bg-pastel_pink rounded-full  mix-blend-multiply blur-xl opacity-70  animate-blob"
            ></div>
            <div
              className="z-0  absolute bottom-60 right-60 w-72
            h-72 bg-blue-500/0 rounded-full mix-blend-multiply blur-xl opacity-70  animate-blob md:bg-blue-500 animation-delay-2000"
            ></div>
            <div
              className="z-0 bg-red-500 absolute top-20 -left-20 md:right-96 w-72
            h-72 animate-none  md:bg-rose-700 rounded-3xl  mix-blend-multiply blur-xl opacity-70  md:animate-blob  lg:left-10 lg:top-52"
            ></div>
            <div
              className="z-0 absolute -bottom-80 -left-80 md:left-20 w-72
            h-72 bg-pastel_green rounded-full  mix-blend-multiply blur-xl opacity-70  animate-blob animation-delay-4000  lg:left-52"
            ></div>
          </div>
          {/* hero section */}
          <div className="text-center p-5 max-w-xl mx-auto bg-white/70  dark:bg-gray-600 dark:text-pastel_green dark:shadow-2xl  dark:shadow-teal-500 drop-shadow-lg rounded-3xl">
            <h2
              className="bg-white/70 rounded-3xl drop-shadow-lg text-purple-500 text-3xl 
            py-2 font-medium font-Montserrat mb-3 max-w-md flex justify-center mx-auto md:text-4xl  dark:text-pastel_pink dark:bg-gray-500 animate-bounce"
            >
              Devmal Wijesinghe
            </h2>
            <h3
              className=" drop-shadow-lg text-gray-800 text-2xl
             py-2 font-Montserrat font-medium
             md:text-3xl max-w-xl mx-auto mt-5"
            >
              Developer and UX/UI Designer
            </h3>
            <p className="  text-m py-5 leading-7 p-4 text-gray-900 font-Montserrat md:text-lg max-w-xl mx-auto  dark:text-gray-300 ">
              As a dynamic and ambitious software engineering undergraduate, I
              possess a consistent drive to broaden my horizons and excel under
              pressure. My ability to quickly absorb and implement new knowledge
              allows me to adapt to new propositions with ease, making me an
              asset to any team
            </p>
          </div>
          {/* {*-socials-*} */}
          <div className=" text-gray-700 text-5xl flex-1 flex justify-center gap-14 py-3 m-10 cursor-pointer dark:text-white">
            <a href="https://github.com/DevmalWije" target={"_blank"}>
              <AiFillGithub className="z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-purple-700 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/devmalwije" target={"_blank"}>
              <AiFillLinkedin className="z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-blue-500 duration-300" />
            </a>
            <a
              href="https://twitter.com/devmal_w_?t=aoaQwGxqjjJAFdceI7UHqg&s=09"
              target={"_blank"}
            >
              <AiFillTwitterCircle className="z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-blue-400 duration-300" />
            </a>
            <a href="https://www.behance.net/Devmal_Amantha" target={"_blank"}>
              <AiFillBehanceCircle className="z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-blue-700 duration-300" />
            </a>
          </div>

          <div className="relative rounded-full mx-auto drop-shadow-2xl  w-80 h-80 mt-20 overflow-hidden mb-5 md:h-80 md:w-80  ">
            <Image src={devImg} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* 2nd section */}
        <section>
          {/* skills and passion descrip */}
          <div className="bg-white drop-shadow-lg rounded-3xl my-5 md:text-xl max-w-xl mx-auto dark:bg-gray-600 dark:text-pastel_green dark:shadow-2xl  dark:shadow-teal-500">
            <h3 className="font-Montserrat text-center font-medium text-gray-800 text-3xl py-1 p-5">
              Skills
            </h3>
            <p className="font-Montserrat text-md py-2 text-gray-800 p-5 md:text-lg dark:text-gray-300 ">
              I have always been into the role of
              <span className="text-teal-500">
                {" "}
                &ldquo; Jack of all trades&rdquo;
              </span>{" "}
              anything from
              <span className="text-teal-500">
                {" "}
                machine learning, web and app dev
              </span>
              , constantly looking into new and exciting ways to test my skills
              and learn new ones along the way
            </p>
            <p className=" font-Montserrat text-md py-2 text-gray-800 p-5 md:text-lg dark:text-gray-300 ">
              As of now, i primarily focus on
              <span className="text-teal-500">
                {" "}
                web design and development, Android development{" "}
              </span>
              and to a lesser degree{" "}
              <span className="text-teal-500">
                {" "}
                machine learning with python
              </span>
            </p>
          </div>

          {/*-------------------------------------------cards----------------------------------------------------------- */}
          <div className="lg:flex gap-5 ">
            {/* -------------------------------------------programming------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5 dark:bg-gray-700">
              <Image src={programming} width={100} height={100} />
              <h3 className="text-lg font-medium dark:text-pastel_pink  ">
                Programming
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Programming solutions to address technical problems through
                coding expertise and problem-solving.
              </p>
              <div className="grid grid-rows-2 grid-flow-col gap-2 md:grid-cols-3">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={python} width={50} height={50} className=" m-3" />
                  <p>Python</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={java} width={50} height={50} className="m-3" />
                  <p>Java</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={kotlin} width={50} height={50} className="m-3" />
                  <p>Kotlin</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={dart} width={50} height={50} className="m-3" />
                  <p>Dart</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={R} width={50} height={50} className="m-3" />
                  <p>R stat</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_purple duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={sql} width={50} height={50} className="m-3" />
                  <p>SQL</p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------app and web------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5 dark:bg-gray-700  ">
              <Image src={appDev} width={100} height={100} />

              <h3 className="text-lg font-medium dark:text-pastel_green">
                web and app development
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Using modern frameworks and technique to build responsive and
                interactive web and mobile apps.
              </p>

              <div className="grid grid-rows-5 md:grid-rows-3 grid-flow-col gap-2 md:grid-cols-4">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={flutter}
                    width={50}
                    height={50}
                    className=" m-3"
                  />
                  <p>Flutter</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={tailwind}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Tailwind</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={flask} width={50} height={50} className="m-3" />
                  <p>Flask</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={javascript}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Javascript</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={sass} width={50} height={50} className="m-3" />
                  <p>Sass</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={mediapipe}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Mediapipe</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={nextJS} width={50} height={50} className="m-3" />
                  <p>NextJs</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={react} width={50} height={50} className="m-3" />
                  <p>React</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={css} width={50} height={50} className="m-3" />
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={typescript}
                    width={50}
                    height={50}
                    className="m-3"
                  />
                  <p>Typescript</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={nodeJS} width={50} height={50} className="m-3" />
                  <p>NodeJs</p>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_green  duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={java} width={50} height={50} className="m-3" />
                  <p>JavaFX</p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------design------------------------------------------- */}
            <div className="text-center flex flex-col items-center shadow-lg p-5 rounded-xl my-5  dark:bg-gray-600 ">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium dark:text-pastel_purple">
                Design
              </h3>
              <p className="py-2 px-2 dark:text-gray-300">
                Keeping up with the latest trends and techniques to create
                beautiful and functional designs.
              </p>
              <div className="grid grid-rows-2 grid-flow-col gap-2 md:grid-cols-2">
                <div className="flex flex-col items-center bg-white  rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_pink duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image
                    src={photoshop}
                    width={50}
                    height={50}
                    className=" m-3"
                  />
                  <p>Photoshop</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_pink duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={figma} width={50} height={50} className="m-3" />
                  <p>Figma</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10  hover:shadow-pastel_pink duration-200 dark:bg-gray-500 dark:hover:bg-white">
                  <Image src={XD} width={50} height={50} className="m-3" />
                  <p>Adobe XD</p>
                </div>

                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400/10 hover:shadow-pastel_pink duration-200 dark:bg-gray-500 dark:hover:bg-white ">
                  <Image src={canva} width={50} height={50} className="m-3" />
                  <p>Canva</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
