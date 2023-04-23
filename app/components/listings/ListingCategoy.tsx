import React from "react";
import { IconType } from "react-icons";
interface ListingCategoyProps {
  icon: IconType;
  label: string;
  description: string;
}
const ListingCategoy: React.FC<ListingCategoyProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-neutral-600 font-light">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategoy;
