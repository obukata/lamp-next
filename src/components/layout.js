import Header from '@/components/layouts/header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="container-wrapper">
          <div className="px-6">
            <div>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}