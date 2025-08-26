import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project 1 Hrms Aqary */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://people.aqaryone.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/hrmsaqary.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/hrmsaqary-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">HRMS</span>
                <a href="https://www.https://people.aqaryone.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    HRMS - Aqary One
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  At <span className="text-AAsecondary">Aqary Investments and Development</span>, I played a key role in designing and developing real-time event subscription 
                  and notification services using <span className="text-AAsecondary">Webhooks and WebSockets</span>, significantly enhancing system responsiveness 
                  and improving the employee experience. I also developed an <span className="text-AAsecondary">AI-powered</span> HRMS platform that integrated 
                  ATS resume screening, chatbot support, and biometric attendance automation, leveraging <span className="text-AAsecondary">Flask</span> and an event-driven architecture.
                  These solutions streamlined HR workflows and showcased our commitment to delivering intelligent, scalable, and user-centric systems.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python/Flask</span>
                <span className="pr-4 z-10">PyTorch</span>
                <span className="pr-4 z-10">Transformers</span>
                <span className="pr-4 z-10">Google Generative AI</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery</span>
                <span className="pr-4 z-10">RabbitMQ/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a href="https://www.https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - ExploreWorld */}

        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://www.exploreworld.com/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/exploreworld.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/exploreworld-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://www.exploreworld.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Explore World
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
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

        {/* // ?  Project 3 - Wearlay */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://www.wearlay.in/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/wearlay.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/wearlay-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
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
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python/Django</span>
                <span className="pr-4 z-10">Django Rest Framework</span>
                <span className="pr-4 z-10">PostgresSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a href="https://www.wearlay.in/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 4 University Portals */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href="https://my.um.edu.sa/">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/projects/almaarefa.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/almaarefa-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
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

        {/* // ?  Project 5 Away2gether */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/userdatapuller"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/projects/away2gether.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/away2gether-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://my.away2gether.com"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Away2gether
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
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
               text-sm font-Text2 md:justify-start"
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

        {/* // ? Project 6 Redalion */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">On Hold...</span>
              </div>

              <Img src={"/projects/redalion.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/projects/redalion-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">On hold...</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
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
