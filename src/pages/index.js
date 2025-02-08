import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/utils/utils.js'
// import LoginBtn from '@/components/login-btn'

const postData = [
  {
    id: 1,
    title: "静的ウェブサイトを素早くデプロイする方法",
    content: "静的ウェブサイトは現在、多くのサイトの基盤として利用されており、ウェブデザイナーや開発者の間で重要なツールとなっています。これにより、迅速な開発と簡単な保守が可能になります。",
    tag: "イベント",
    created_at: new Date().toString(), // 適当に今日の日付を取得
    updated_at: new Date().toString(),
  },
  {
    id: 2,
    title: "最新のJavaScriptフレームワークの比較",
    content: "近年、JavaScriptフレームワークは急速に進化しており、それぞれの特徴や利点を理解することが重要です。本記事では、React、Vue、Angularの違いについて詳しく解説します。",
    tag: "技術",
    created_at: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toString(), // 適当に1日前の日付を取得
    updated_at: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toString(),
  },
  {
    id: 3,
    title: "ウェブデザインの最新トレンド2025",
    content: "2025年のウェブデザインでは、ミニマリズムやダークモードの採用が増加しています。さらに、インタラクティブな要素やアニメーションも重要な役割を果たしています。",
    tag: "デザイン",
    created_at: new Date(new Date().getTime() - 48 * 60 * 60 * 1000).toString(), // 適当に2日前の日付を取得
    updated_at: new Date(new Date().getTime() - 48 * 60 * 60 * 1000).toString(),
  },
  {
    id: 4,
    title: "SEO対策の基本と最新のベストプラクティス",
    content: "SEO（検索エンジン最適化）は、ウェブサイトの可視性を高めるための重要な手法です。本記事では、基本的なSEO対策から最新のアルゴリズム変更への対応方法までを解説します。",
    tag: "マーケティング",
    created_at: new Date(new Date().getTime() - 96 * 60 * 60 * 1000).toString(), // 適当に4日前の日付を取得
    updated_at: new Date(new Date().getTime() - 96 * 60 * 60 * 1000).toString(),
  }
]

export default function Home() {
  return (
    <Layout>
      <article className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold dark:text-white">Our Blog</h2>
          <p className="font-light sm:text-xl text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">

          {postData.map((post) => (
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
          )) }
        </div>
      </article>
    </Layout>
  );
}
