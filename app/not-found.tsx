import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-40">
      <div className="text-center">
        <h1 className="text-3xl text-white">404</h1>
        <p className="mt-2 text-lg text-neutral-400">Page not found</p>
        <p className="mt-1 text-neutral-500">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/">
            <p className="inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 ease-in-out">
              Return to home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
