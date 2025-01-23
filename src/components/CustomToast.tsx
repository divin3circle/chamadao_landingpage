import { Icon, IconProps } from "@tabler/icons-react";

function CustomToast({
  title,
  description,
  T_icon,
  isError,
  isSuccess,
}: {
  title: string;
  description?: string;
  T_icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<Icon>
  >;
  isError?: boolean;
  isSuccess?: boolean;
}) {
  return (
    <div>
      <div
        className={`flex ${
          T_icon ? "flex-row gap-2 items-center" : "flex-col gap-1"
        } h-full`}
      >
        {T_icon && <T_icon size={20} color={isError ? "red" : "#7FC786]"} />}
        <div>
          <h1
            className={`${isError ? "text-red-600" : "text-[#7FC786]"} 
        ${isSuccess ? "text-[#7FC786]" : "text-white"}  
        font-titles text-sm font-bold my-1 px-1`}
          >
            {title}
          </h1>
          <p className="text-xs px-1 font-body">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomToast;
