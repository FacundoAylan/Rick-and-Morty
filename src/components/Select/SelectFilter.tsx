import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  title: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const SelectFilter: React.FC<SelectProps> = ({ title, options, value, onChange }) => {
  return (
    <div className="flex flex-col relative">

      <label 
        className="absolute z-10 -top-3 left-1/2 transform -translate-x-1/2 backdrop-blur px-2 text-green-600 text-sm font-bold"
      >
        {title}:
      </label>
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="relative px-4 py-2 rounded-md border-2 border-purple-400 bg-transparent text-green-500 font-extrabold"
      >
        {options.map((opt) => (
          <option 
          key={opt.value} 
          value={opt.value} 
          >
            {opt.label}
          </option>
        ))}
      </select>

    </div>
  );
};
