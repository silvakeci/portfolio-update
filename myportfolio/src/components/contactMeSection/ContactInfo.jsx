import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="silvakeci05@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+355692122415" Image={FiPhone} />
      <SingleInfo text="Tirane, Albania" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;