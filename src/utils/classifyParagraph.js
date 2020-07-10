import React from "react";

export const classifyParagraph = (paragraph) => {
  if (paragraph.type === "image") {
    return (
      <img
        key={paragraph.paragraphId}
        className={paragraph.type}
        src={paragraph.content}
        alt=""
      />
    );
  }

  if (paragraph.type === "quote") {
    return (
      <div key={paragraph.paragraphId} className={paragraph.type + " grey"}>
        <span>{paragraph.content}</span>
      </div>
    );
  }

  return (
    <div key={paragraph.paragraphId} className={paragraph.type}>
      {paragraph.content}
    </div>
  );
};
