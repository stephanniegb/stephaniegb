async function getUser(userId: string) {
  const END_POINT = `http://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(END_POINT);
  if (!response.ok) {
    throw new Error("failed to get data");
  }
  return response.json();
}

export default getUser;
