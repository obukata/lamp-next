import { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/utils/utils.js'

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        
        // ここでデータのnullチェック
        if (data && Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Received invalid data:', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <article className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold dark:text-white">Our Blog</h2>
          <p className="font-light sm:text-xl text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
        {posts.length === 0 ? (
          <p className="text-center">投稿がありません。</p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <section key={post.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <div className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-blue-200 text-blue-800">
                    <span className="icon-[mdi--event-edit]"></span>
                    <p>{post.tag}</p>
                  </div>
                  <p className="text-sm">{formatDate(post.updated_at)}</p>
                </div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-5 font-light text-gray-400">
                  {post.content}
                </p>
                <div className="flex justify-end items-center">
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    Read more
                    <span className="icon-[tabler--arrow-right]"></span>
                  </a>
                </div>
              </section>
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
}