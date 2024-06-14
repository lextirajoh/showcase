import * as i from "@/types/contentful";
import Post from "@/components/Post";
import { getPosts } from "@/queries/getPosts";

const Page = async () => {
  const data: DataProps = await getPosts();
  const posts = data.postCollection.items || null;

  return (
    <section className="grid gap-y-12 ">
      {posts.map((post, index) => (
        <>
          <Post key={post.sys.id} post={post} />
          <hr key={index} />
        </>
      ))}
    </section>
  );
};

export default Page;

type DataProps = {
  postCollection: {
    items: i.Post[];
  };
};
