import React from 'react';

const SkillIcon = ({skill}) => {
    return (
        <div>
              <div className="flex gap-2 mt-5">
                      <div className="py-2 px-10 rounded-[10px] font-semibold text-[#037C6A] bg-[#D1FAF4] text-center">{skill}</div>
                </div>
        </div>
    );
}

export default SkillIcon;
