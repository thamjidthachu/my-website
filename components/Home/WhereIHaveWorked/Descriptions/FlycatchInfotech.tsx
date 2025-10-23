import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function FlycatchInfotech() {
  const tasks = [
    {
      text: "Led backend development across multiple projects, owning system architecture, API design, and performance tuning to ensure scalable and efficient solutions.",
      keywords: ["backend development", "system architecture", "API design", "performance tuning", "scalable", "efficient solutions"],
    },
    {
      text: "Delivered four fully customized, client-focused applications from scratch, ensuring on-time deployment and seamless integration into production.",
      keywords: ["customized", "client-focused applications", "on-time deployment", "seamless integration", "production"],
    },
    {
      text: "Collaborated with cross-functional teams and directly with clients to translate requirements into user-centric solutions, while mentoring junior developers and ensuring code quality.",
      keywords: ["cross-functional teams", "clients", "user-centric solutions", "mentoring", "junior developers", "code quality"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Flycatch Infotech Pvt. Ltd., Kochi, Kerala</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mar 2023 – Mar 2025</span>
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
