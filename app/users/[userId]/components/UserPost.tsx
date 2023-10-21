type props = {
  promise: Promise<Post[]>;
};

export default async function UserPost({ promise }: props) {
  const posts = await promise;
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  });
  return content;
}
