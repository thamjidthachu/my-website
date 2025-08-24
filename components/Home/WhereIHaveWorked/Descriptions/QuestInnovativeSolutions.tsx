import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function QuestInnovativeSolutions() {
  const tasks = [
    {
      text: "Gained hands-on experience with Python, JavaScript, SQL, Django, Flask, and AngularJS.",
      keywords: ["Python", "JavaScript", "SQL", "Django", "Flask", "AngularJS"],
    },
    {
      text: "Contributed to live projects, bridging theoretical knowledge with real-world application.",
      keywords: ["live projects", "real-world application"],
    },
    {
      text: "Completed certifications in multilanguage and framework development.",
      keywords: ["certifications", "multilanguage", "framework development"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern <span className="text-AAsecondary">@ Quest Innovative Solutions, Kochi, Kerala</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Sep 2021 – Mar 2022</span>
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
