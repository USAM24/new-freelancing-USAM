import { useState, useContext, createContext } from "react";

const PostJobContext = createContext();

export const PostJobProvider = ({ children }) => {
  const [scope, setScope] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [fixedPrice, setFixedPrice] = useState();
  const [hourlyRate, setHourlyRate] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [exp, setExp] = useState("");
  const [pay, setPay] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <PostJobContext.Provider
      value={{
        scope,
        timeframe,
        category,
        jobTitle,
        skills,
        exp,
        pay,
        description,
        file,
        otherCategory,
        fixedPrice,
        hourlyRate,
        setOtherCategory,
        setFixedPrice,
        setHourlyRate,
        setFile,
        setScope,
        setTimeframe,
        setCategory,
        setJobTitle,
        setSkills,
        setExp,
        setPay,
        setDescription,
      }}
    >
      {children}
    </PostJobContext.Provider>
  );
};

export default PostJobContext;
