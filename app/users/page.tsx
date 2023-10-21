import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Users",
  description: "page bout users",
};

const UsersPage = async () => {
  // this is a server component so it request the data as it builds the website
  // server component
  const UsersData: Promise<User[]> = getAllUsers();
  const Users = await UsersData;
  console.log("heyyy, server guy");

  const Content = (
    <section>
      <h3>
        <Link href={"/"}>Go Home</Link>
      </h3>
      <br />
      {Users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>
              <p>{user.name}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
  return Content;
};

export default UsersPage;
