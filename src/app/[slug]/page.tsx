import * as i from "@/types/contentful";
import Post from "@/components/Post";
import { getPosts } from "@/queries/getPosts";

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: DataProps = await getPosts();
  const posts = data.postCollection.items || null;
  const filterPostsBySlug = (slug: string) => {
    return posts.find((post) => post.slug === slug);
  };
  const filteredPost = filterPostsBySlug(params.slug);

  if (!filteredPost) return <h1>Post not found.</h1>;

  return <Post post={filteredPost} />;
};

export default Page;

type DataProps = {
  postCollection: {
    items: i.Post[];
  };
};
