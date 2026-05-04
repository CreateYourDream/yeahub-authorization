import { useAppSelector } from "@/app/store/hooks";

interface Props {
className?: string;
}

export const UserPage = ({ className }:Props) => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className={className}>
        <h1>User Page</h1>
        <p>Username: {username}</p>
    </div>
  );
};