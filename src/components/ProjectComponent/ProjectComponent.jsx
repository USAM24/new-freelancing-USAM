import React from "react";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";

function ProjectComponent({ project }) {
  return (
    <div className="flex justify-center align-center">
      <a
        href={project.link}
        className="w-full p-4 m-2 rounded-lg bg-white border border-transparent hover:border-[#037C6A] hover:shadow-lg hover:bg-[#F0F0F0] transition duration-300"
      >
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold">{project.name}</h3>
              <h4 className="text-[#797987]">{project.date}</h4>
            </div>
            <ReadMoreRoundedIcon className="m-4" />
          </div>
          <p className="flex-1 overflow-hidden text-ellipsis">
            {project.summary}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectComponent;
