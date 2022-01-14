import React, { FC } from "react";

export const CourseInfo: FC<{
  courseName: string;
  courseDescription: string;
}> = ({ courseName, courseDescription }) => {
  return (
    <div className={'courseInfoWrapper'}>
      <h1>{courseName}</h1>
      <h2>{courseDescription}</h2>
    </div>
  )
};