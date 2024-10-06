import React, { useContext, useEffect } from "react";
import PostJobContext from "../../Contexts/PostJobContext";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import RadioCard from "../RadioCard/RadioCard";

export default function FirstPage() {
  const { scope, setScope, category, setCategory,otherCategory,
    setOtherCategory } = useContext(PostJobContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories = [
    {
      title: "Design & Creative",
      icon: BrushRoundedIcon,
      value: "design",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Sales & Marketing",
      icon: CampaignRoundedIcon,
      value: "sales",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Development & IT",
      icon: CodeRoundedIcon,
      value: "it",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Finance",
      icon: MonetizationOnOutlinedIcon,
      value: "finance",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Legal",
      icon: BalanceOutlinedIcon,
      value: "legal",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Writing",
      icon: DriveFileRenameOutlineOutlinedIcon,
      value: "writing",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Engineering",
      icon: EngineeringOutlinedIcon,
      value: "engineering",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Other",
      icon: DataSaverOnOutlinedIcon,
      value: "Other",
      description: "Qorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-x-6 my-4">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl font-semibold">What Will Be The Scope Of Your Project?</h2>
          <p className="leading-7 mt-2">
            Long-term for ongoing work, short-term for defined timelines. Consider complexity and goals for the right freelancer match.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <RadioCard
              title="Long Term Project"
              Icon={WorkHistoryOutlinedIcon}
              description="Ideal for continuous collaboration and complex tasks."
              name="scope"
              value="Long Term Project"
              selectedValue={scope}
              setValue={setScope}
            />
            <RadioCard
              title="Short Term Project"
              Icon={QueryBuilderOutlinedIcon}
              description="Suited for smaller tasks and individual contributions."
              name="scope"
              value="Short Term Project"
              selectedValue={scope}
              setValue={setScope}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-x-6 my-4">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl font-semibold">Which Category Your Project Belongs to?</h2>
          <p className="leading-7 mt-2">
            Choose a project category that aligns with your project's goals and requirements.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {categories.map((item, index) => (
              <RadioCard
                title={item.title}
                Icon={item.icon}
                description={item.description}
                name="category"
                value={item.title}
                key={index}
                selectedValue={category}
                setValue={setCategory}
                otherCategory={otherCategory}
                setOtherCategory={setOtherCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
