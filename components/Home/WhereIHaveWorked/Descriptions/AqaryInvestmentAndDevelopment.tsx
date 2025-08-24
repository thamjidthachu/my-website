import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AqaryInvestmentAndDevelopment() {
  const tasks = [
    {
      text: "Developed and maintained an AI-enhanced HRMS platform with Flask, featuring ATS resume screening and a chatbot for employee support.",
      keywords: ["AI-enhanced HRMS", "Flask", "ATS resume screening", "chatbot", "employee support"],
    },
    {
      text: "Created a subscription-based event service that enables external apps to receive real-time HRMS updates through webhooks.",
      keywords: ["subscription-based event service", "real-time HRMS updates", "webhooks"],
    },
    {
      text: "Integrated biometric devices and implemented event-driven processing to automate attendance tracking and validation.",
      keywords: ["biometric devices", "event-driven processing", "attendance tracking", "validation"],
    },
    {
      text: "Built a WebSocket-powered notification system to promptly alert employees about daily swipe discrepancies.",
      keywords: ["WebSocket-powered notification system", "alert", "swipe discrepancies"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AL/ML Engineer <span className="text-AAsecondary">@ Aqary Investment and Development, Abu Dhabi, United Arab Emirates</span>
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
