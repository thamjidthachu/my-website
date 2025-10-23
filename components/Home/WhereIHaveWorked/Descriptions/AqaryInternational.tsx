import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AqaryInternational() {
  const tasks = [
    {
      text: "Developed and maintained an AI-enhanced HRMS platform using Flask, featuring ATS-driven resume screening and an intelligent chatbot for employee assistance and onboarding support.",
      keywords: ["AI-enhanced", "Flask", "ATS-driven", "chatbot", "employee assistance", "onboarding support"],
    },
    {
      text: "Implemented a subscription-based event system that allows external applications to receive real-time HRMS updates via Webhooks, improving automation and system interoperability.",
      keywords: ["subscription-based event system", "real-time HRMS updates", "webhooks", "automation", "interoperability"],
    },
    {
      text: "Integrated biometric devices and designed event-driven workflows to automate attendance tracking, validation, and exception handling for a seamless HR experience.",
      keywords: ["biometric devices", "event-driven", "automate", "attendance tracking", "HR experience"],
    },
    {
      text: "Built a WebSocket-powered notification module to deliver instant alerts and real-time updates, enhancing employee engagement and operational visibility.",
      keywords: ["WebSocket-powered notification", "alert", "real-time", "enhancing"],
    },
    {
      text: "Contributed to the backend development of a large-scale CRM platform, handling backend coding, database architecture, API design, and system integration.",
      keywords: ["backend development", "large-scale CRM", "coding", "architecture", "design", "integration"],
    },
    {
      text: "Integrated WebSockets and message queuing mechanisms to enable real-time updates, asynchronous communication, and efficient data processing.",
      keywords: ["WebSockets", "queuing mechanisms ", "real-time", "asynchronous", "efficient", "processing"],
    },
    {
      text: "Collaborated closely with cross-functional teams to ensure scalability, maintainability, and clean code practices across the system’s microservices.",
      keywords: ["cross-functional", "scalability,", "maintainability", "clean code", "architecture", "microservices"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AL/ML Engineer <span className="text-AAsecondary">@ Aqary International Group, Al-Reem Island, Abu Dhabi</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2025– Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
