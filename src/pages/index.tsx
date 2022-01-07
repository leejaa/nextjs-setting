import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home pages</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};

export default Home;
