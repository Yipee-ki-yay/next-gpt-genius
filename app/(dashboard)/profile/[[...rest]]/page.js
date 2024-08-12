import { UserProfile } from "@clerk/nextjs";

const ProfilePage = async () => {
  const { userId } = auth();
  const currentToken = await fetchUserTokensById(userId);
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Token Amount: {currentToken}
      </h2>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
