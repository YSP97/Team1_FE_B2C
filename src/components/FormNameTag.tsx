import { memo } from "react";

interface FormNameTagProps {
  name: string;
  children: React.ReactNode;
  type?: "input";
}
function FormNameTag({ name, children, type }: FormNameTagProps) {
  return (
    <div className="flex flex-col px-0 py-2 w-full">
      {type === "input" ? (
        <label className="w-full text-gray-100 text-[1.125rem] font-normal">
          {name}
          {children}
        </label>
      ) : (
        <div className="w-full text-gray-100 text-[1.125rem] font-normal">
          {name}
          {children}
        </div>
      )}
    </div>
  );
}

export default memo(FormNameTag);
