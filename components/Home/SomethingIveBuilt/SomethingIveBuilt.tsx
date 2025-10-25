import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import ParticleBackground from "../../Background/ParticleBackground";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-black w-full overflow-x-hidden
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 relative"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0014 50%, #000000 100%)'
      }}
    >
      {/* Particle background for this section */}
      <ParticleBackground />
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-white"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">       

        {/* Project 1 Azure Horizon */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://crm.aqaryone.com" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 z-10">
                <span className="text-AAsecondary text-xs bg-AAprimary px-2 py-1 rounded">🚧In Development...👷</span>
              </div>

              <Img src={"/projects/azurehorizon.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/azurehorizon-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8 md:hidden">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">🚧Developement In Progress...👷</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Personal Project</span>
                <a href="https://resort.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Azure Horizon
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I initiated <span className="text-AAsecondary">Azure Horizon</span> in 2021 as a{" "}
                  <span className="text-AAsecondary">demo project</span> for my first job, which
                  later grew into a <span className="text-AAsecondary">personal passion project</span>.
                  Originally built with <span className="text-AAsecondary">Django templates</span>,
                  it has since evolved into a modern stack using{" "}
                  <span className="text-AAsecondary">Django REST Framework</span> and{" "}
                  <span className="text-AAsecondary">Next.js</span>. The vision is to transform
                  this platform into the official digital presence of a{" "}
                  <span className="text-AAsecondary">real resort</span> under the same name,
                  combining <span className="text-AAsecondary">scalability</span> and{" "}
                  <span className="text-AAsecondary">future-ready design</span> to bring the dream
                  of <span className="text-AAsecondary">Azure Horizon Resort</span> to life.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
              <GithubIcon link="https://github.com/thamjidthachu/azure-horizon" />
              <a href="https://resort.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 2 Aqary CRM */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://crm.aqaryone.com"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqarycrm.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqarycrm-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-gray-400 text-base">Internal Web Application</span>
                <a href="https://crm.aqaryone.com" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Aqary CRM
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Building <span className="text-AAsecondary">Aqary CRM</span>, a{" "}
                  <span className="text-AAsecondary">real estate management platform</span> powered by{" "}
                  <span className="text-AAsecondary">Django REST Framework</span> and{" "}
                  <span className="text-AAsecondary">Flask-SocketIO</span> for{" "}
                  <span className="text-AAsecondary">real-time operations</span>.  
                  It features a scalable{" "}
                  <span className="text-AAsecondary">microservices architecture</span> with modules like{" "}
                  <span className="text-AAsecondary">Admin</span>,{" "}
                  <span className="text-AAsecondary">Notification</span>, and{" "}
                  <span className="text-AAsecondary">Booking Management</span>, leveraging{" "}
                  <span className="text-AAsecondary">Celery & Redis</span> for{" "}
                  <span className="text-AAsecondary">async workflows</span>.  
                  Designed to be a{" "}
                  <span className="text-AAsecondary">cloud-ready CRM</span> that unites{" "}
                  <span className="text-AAsecondary">automation</span> with{" "}
                  <span className="text-AAsecondary">modern real estate operations</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2"
              >
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
                <span className="pr-4 z-10">WebSocket</span>
                <span className="pr-4 z-10">Azure ServiceBus</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              <GithubIcon link="https://github.com/thamjidthachu" />
              <a href="https://crm.aqaryone.com" target={"_blank"} rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 Aqary Identity */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://id.aqaryone.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/aqaryidentity.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryidentity-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Internal Web Application.</span>
                <a href="https://www.https://id.aqaryone.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    HRMS - Identity Service
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Developing the <span className="text-AAsecondary">Aqary Identity Service</span>, the{" "}
                  <span className="text-AAsecondary">core authentication engine</span> of the{" "}
                  <span className="text-AAsecondary">Aqary ecosystem</span>.  
                  It handles{" "}
                  <span className="text-AAsecondary">user onboarding</span>,{" "}
                  <span className="text-AAsecondary">multi-role access control</span>, and{" "}
                  <span className="text-AAsecondary">secure token-based authentication</span> across microservices.  
                  Built with{" "}
                  <span className="text-AAsecondary">Django REST Framework</span> and{" "}
                  <span className="text-AAsecondary">OAuth2 / JWT</span>, it ensures{" "}
                  <span className="text-AAsecondary">secure, scalable,</span> and{" "}
                  <span className="text-AAsecondary">consistent access control</span> across the platform.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
                <span className="pr-4 z-10">GRPC</span>
                <span className="pr-4 z-10">Azure BusService</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidthachu" />
                <a href="https://www.https://id.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>        

        {/* // ? Project 4 Aqary App Console */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://console.aqaryone.com"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqaryconsole.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryconsole-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-gray-400 text-base">Internal Web Application</span>
                <a href="https://console.aqaryone.com" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    App Console
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Building the <span className="text-AAsecondary">Aqary App Console</span>, a{" "}
                  <span className="text-AAsecondary">developer platform</span> for seamless{" "}
                  <span className="text-AAsecondary">app integration</span> within the{" "}
                  <span className="text-AAsecondary">Aqary ecosystem</span>.  
                  Built with{" "}
                  <span className="text-AAsecondary">Flask</span> and{" "}
                  <span className="text-AAsecondary">SQLAlchemy</span>, it enables{" "}
                  <span className="text-AAsecondary">OAuth-based app registration</span>,{" "}
                  <span className="text-AAsecondary">webhooks</span>, and{" "}
                  <span className="text-AAsecondary">permission management</span> through{" "}
                  <span className="text-AAsecondary">modular APIs</span>.  
                  Supports{" "}
                  <span className="text-AAsecondary">IP whitelisting</span>,{" "}
                  <span className="text-AAsecondary">callback validation</span>, and{" "}
                  <span className="text-AAsecondary">dynamic event mapping</span> to deliver{" "}
                  <span className="text-AAsecondary">secure, scalable integrations</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">Event Driven Architecture</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
                <span className="pr-4 z-10">Azure ServiceBus</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
              <GithubIcon link="https://github.com/thamjidthachu" />
              <a href="https://console.aqaryone.com" target={"_blank"} rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 5 Aqary API Gateway */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href={"https://aqaryaaid.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqaryrealestate.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryrealestate-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Internal Web Application.</span>
                <a href="https://www.https://aqaryaid.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Aqary API Gateway
                  </span>
                </a>
              </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Architected the <span className="text-AAsecondary">Aqary API Gateway</span> as the{" "}
                <span className="text-AAsecondary">central entry point</span> for all{" "}
                <span className="text-AAsecondary">Aqary microservices</span>.  
                Built with{" "}
                <span className="text-AAsecondary">Flask</span> and{" "}
                <span className="text-AAsecondary">Nginx</span>, it manages{" "}
                <span className="text-AAsecondary">routing</span>,{" "}
                <span className="text-AAsecondary">authentication</span>,{" "}
                <span className="text-AAsecondary">rate limiting</span>, and{" "}
                <span className="text-AAsecondary">service-level security</span>.  
                Integrated with the{" "}
                <span className="text-AAsecondary">Identity Service</span> for{" "}
                <span className="text-AAsecondary">JWT validation</span> and{" "}
                <span className="text-AAsecondary">RBAC</span>, featuring{" "}
                <span className="text-AAsecondary">centralized logging</span> and{" "}
                <span className="text-AAsecondary">dynamic service discovery</span> for{" "}
                <span className="text-AAsecondary">high availability</span> and{" "}
                <span className="text-AAsecondary">scalability</span>.
              </p>
            </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidthachu" />
                <a href="https://www.https://aqaryaid.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>        

        {/* // ? Project 6 Hrms Aqary */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/hrmsaqary.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/hrmsaqary-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1 
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-gray-400 text-base">Internal Web Application.</span>
                <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    HRMS - Aqary One
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                    At <span className="text-AAsecondary">Aqary Investments and Development</span>, I built{" "}
                    <span className="text-AAsecondary">real-time notification services</span> using{" "}
                    <span className="text-AAsecondary">Webhooks</span> and{" "}
                    <span className="text-AAsecondary">WebSockets</span> to boost system responsiveness.  
                    Also developed an{" "}
                    <span className="text-AAsecondary">AI-powered HRMS</span> with{" "}
                    <span className="text-AAsecondary">ATS screening</span>,{" "}
                    <span className="text-AAsecondary">chatbot support</span>, and{" "}
                    <span className="text-AAsecondary">biometric automation</span> using{" "}
                    <span className="text-AAsecondary">Flask</span> and{" "}
                    <span className="text-AAsecondary">event-driven architecture</span>, improving{" "}
                    <span className="text-AAsecondary">HR workflows</span> and{" "}
                    <span className="text-AAsecondary">employee experience</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2">
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">PyTorch</span>
                <span className="pr-4 z-10">Transformers</span>
                <span className="pr-4 z-10">Google Generative AI</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 7 - ExploreWorld */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">

              <a href="https://www.exploreworld.com/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/exploreworld.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/exploreworld-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Travel and Tourism</span>
                <a href="https://www.exploreworld.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Explore World
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I had the opportunity to spearhead the backend development of a travel aggregator platform, leveraging a{" "}
                  <span className="text-AAsecondary"> microservices architecture</span>. My focus was on integrating{" "}
                  <span className="text-AAsecondary"> payment gateways</span> and{" "}
                  <span className="text-AAsecondary"> third-party APIs</span> such as{" "}
                  <span className="text-AAsecondary"> Elasticsearch</span>, ensuring a{" "}
                  <span className="text-AAsecondary"> scalable architecture</span> for smooth transactions and an enhanced{" "}
                  <span className="text-AAsecondary"> user experience</span>.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">Elastic Search</span>
                <span className="pr-4 z-10">Django Rest Framework</span>
                <span className="pr-4 z-10">Postgres</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link="https://github.com/flycatchinfotech/explore-world" />
                  <a href="https://www.exploreworld.com/" target={"_blank"} rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 8 - Wearlay */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://www.wearlay.in/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/wearlay.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/wearlay-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
            col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-gray-400 text-base">CRM & Inventory Management</span>
                <a href="https://www.wearlay.in/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Wearlay
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I led the backend development of a CRM & Inventory system, built with{" "}
                  <span className="text-AAsecondary"> Django</span> and{" "}
                  <span className="text-AAsecondary"> Django REST Framework</span>. The platform automated{" "}
                  <span className="text-AAsecondary"> lead workflows</span> and optimized{" "}
                  <span className="text-AAsecondary"> warehouse management</span>, while a customized{" "}
                  <span className="text-AAsecondary"> Django Admin</span> with integrated{" "}
                  <span className="text-AAsecondary"> analytics</span> enabled data-driven decision making for improved business operations.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">Django Rest Framework</span>
                <span className="pr-4 z-10">PostgresSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.wearlay.in/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 9 University Portals */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <Link href="https://my.um.edu.sa/">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/projects/almaarefa.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/almaarefa-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Learning & Management System</span>
                <Link href="https://my.um.edu.sa/">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Al Maarefa
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I led the backend development of a role-based{" "}
                  <span className="text-AAsecondary"> academic platform</span> designed for{" "}
                  <span className="text-AAsecondary"> students</span>,{" "}
                  <span className="text-AAsecondary"> instructors</span>, and{" "}
                  <span className="text-AAsecondary"> admins</span>. The system included{" "}
                  <span className="text-AAsecondary"> academic tracking</span>,{" "}
                  <span className="text-AAsecondary"> messaging</span>, and{" "}
                  <span className="text-AAsecondary"> payment management</span>. I also developed an{" "}
                  <span className="text-AAsecondary"> online admission system</span>, centralizing{" "}
                  <span className="text-AAsecondary"> registration</span>,{" "}
                  <span className="text-AAsecondary"> document upload</span>, and{" "}
                  <span className="text-AAsecondary"> interview processes</span>, improving efficiency for both{" "}
                  <span className="text-AAsecondary"> applicants</span> and{" "}
                  <span className="text-AAsecondary"> staff</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">Django Rest Framework</span>
                <span className="pr-4 z-10">PostgresSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/flycatchinfotech/al-maarefa-backend" />
                <ExternalLink url={"https://my.um.edu.sa/"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 10 Away2gether */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <Link href={"www.away2gether.com"}>
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/projects/away2gether.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/away2gether-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
            col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-gray-400 text-base">Hospitality Management</span>
                <Link href={"https://my.away2gether.com"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Away2gether
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I solely developed the backend of a{" "}
                  <span className="text-AAsecondary"> hospitality platform</span> using{" "}
                  <span className="text-AAsecondary"> Django</span>,{" "}
                  <span className="text-AAsecondary"> Django CMS</span>, and{" "}
                  <span className="text-AAsecondary"> PostgreSQL</span>. The platform enhanced{" "}
                  <span className="text-AAsecondary"> user experience</span> through{" "}
                  <span className="text-AAsecondary"> interactive elements</span> built with{" "}
                  <span className="text-AAsecondary"> AJAX</span> and{" "}
                  <span className="text-AAsecondary"> JavaScript</span>. I also ensured{" "}
                  <span className="text-AAsecondary"> scalability</span> and{" "}
                  <span className="text-AAsecondary"> data integrity</span>, laying the foundation for future{" "}
                  <span className="text-AAsecondary"> enhancements</span>.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">CMS</span>
                <span className="pr-4 z-10">PostgresSQL</span>
                <span className="pr-4 z-10">html/css</span>
                <span className="pr-4 z-10">Javascript</span>
                <span className="pr-4 z-10">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/flycatchinfotech/awaytogether-website" />
                <ExternalLink url={"https://my.away2gether.com"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 11 Redalion */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 z-10">
                <span className="text-AAsecondary text-xs">🧱 On Hold...</span>
              </div>

              <Img src={"/projects/redalion.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-900 opacity-70 z-10 md:opacity-0"></div>
                <div className="absolute w-full h-full bg-gray-800 opacity-70 z-10 md:opacity-0"></div>
                <Img src={"/projects/redalion-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8 md:hidden">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">On hold...</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Innovative E-Commerce Platform</span>
                <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Redalion
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I led the backend development of a platform that links{" "}
                  <span className="text-AAsecondary"> QR-coded medallions</span> to{" "}
                  <span className="text-AAsecondary"> digital ancestral profiles</span>, featuring{" "}
                  <span className="text-AAsecondary"> secure authentication</span> and{" "}
                  <span className="text-AAsecondary"> profile management</span>. The system was built with a focus on{" "}
                  <span className="text-AAsecondary"> scalability</span> and{" "}
                  <span className="text-AAsecondary"> clean code</span>, ensuring a solid foundation for{" "}
                  <span className="text-AAsecondary"> future enhancements</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">PostgresSQL</span>
                <span className="pr-4 z-10">html/css</span>
                <span className="pr-4 z-10">Javascript</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Stripe</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
              <GithubIcon link="https://github.com/flycatchinfotech/redalion" />
              <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
