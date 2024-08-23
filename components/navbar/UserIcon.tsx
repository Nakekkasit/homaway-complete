import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="User profile"
        width={24} // Adjust width as needed
        height={24} // Adjust height as needed
        className="rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
