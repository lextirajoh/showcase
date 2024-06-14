'use client';

import * as i from '@/types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

const Post = ({ post }: PostProps) => {
  const currentRoute = usePathname();
  const isHomepage = currentRoute === '/';

  return (
    <article className='grid gap-y-8'>
      <header className='font-mono uppercase'>
        <h2>{post.title}</h2>
      </header>
      {documentToReactComponents(post.body.json)}
      <Link href={isHomepage ? `${post.slug}` : '/'} className='w-fit font-mono text-sm uppercase'>
        {isHomepage ? 'read more' : 'home'}
      </Link>
    </article>
  );
};

export default Post;

type PostProps = {
  post: i.Post;
};
