import React from "react";
import classNames from "classnames";

type Props = {
  type?: "info" | "success" | "error";
  importantText?: string;
  text: string;
};

export const Alert = ({ type = "info", importantText, text }: Props) => {
  return (
    <div
      className={classNames("p-4 mb-4 text-sm rounded-lg", {
        "text-green-700 bg-green-100": type === "success",
        "text-red-700 bg-red-100": type === "error",
        "text-blue-700 bg-blue-100": type === "info",
      })}
      role="alert"
    >
      {importantText && <span className="font-medium">{importantText}</span>}{" "}
      {text}
    </div>
  );
};
