import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getuserPost";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import { Metadata } from "next";
type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // request data where you need it because i will automativally "dedup" this request
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}
async function UserPage({ params: { userId } }: Params) {
  // we are requesting this data in parallel, as we do nnot use await keyword in any of the requests
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);

  // This will resolve in parallell
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        {/* @ts-expect-error server Component */}
        <UserPost promise={userPostsData} />
      </Suspense>
    </>
  );
}

export default UserPage;
