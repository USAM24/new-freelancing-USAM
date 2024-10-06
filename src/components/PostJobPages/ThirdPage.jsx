import React, { useContext, useEffect, useRef } from "react";
import PostJobContext from "../../Contexts/PostJobContext";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default function ThirdPage() {
  const { file, setFile, description, setDescription } =
    useContext(PostJobContext);

    console.log(description);
    
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDivClick = () => {
    if (!fileInputRef.current.contains(event.target)) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file upload (e.g., send file to a server)
  // const handleFileUpload = () => {
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     fetch("YOUR_UPLOAD_URL", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error("Error:", error));
  //   }
  // };

  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-x-6 ">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl font-semibold">
            Tell Us More About Your Project
          </h2>
          <p className="leading-7 mt-2">
            Detail the project specifications, resources, and any additional
            information freelancers need to know.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-y-4 items-center">
          <div className="m-3">
            <h3 className="text-2xl font-semibold m-3">Description</h3>
            <textarea
              rows="15"
              cols="50"
              name="description"
              id="description"
              className="border border-gray-300 p-4 mb-3 mx-3 rounded-md focus:outline-none focus:border-teal-600 dark:text-black hover:border-teal-600 shadow-sm transition duration-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={description ? "" : "I’m looking for..."}
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="border-2 border-gray-950 p-4 pb-3 px-3 rounded-md focus:outline-none focus:border-teal-600 hover:border-teal-600 shadow-sm transition duration-300 cursor-pointer">
              <AttachFileOutlinedIcon onClick={handleDivClick} />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-white dark:bg-neutral-900 px-4 py-2 text-center text-gray-700 dark:text-gray-300 transition duration-300"
              >
                {file || "Attach File"}
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {/* <button onClick={handleFileUpload}>Upload</button>
              {file && <p>Selected file: {file.name}</p>} */}
          </div>
        </div>
      </div>
    </form>
  );
}
