async function getUserPost(userId: string) {
  const END_POINT = `http://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await fetch(END_POINT);
  if (!response.ok) {
    throw new Error("failed to get data");
  }
  return response.json();
}

export default getUserPost;
