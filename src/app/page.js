import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-lg border border-purple-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Welcome to <span className="text-purple-600">PopX</span></h1>
        <p className="text-gray-500 text-sm text-center mt-2">
          Explore the platform, connect, and manage with ease.
        </p>

        <div className="mt-8 space-y-4">
          <Link href="/signup">
          <button className="w-full mb-2 bg-purple-600 text-white py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-purple-700 transition-all duration-200">
            Create Account
          </button>
          </Link>
           <Link href="/signin">
          <button className="w-full bg-purple-100 text-purple-700 py-3 rounded-lg text-sm font-semibold hover:bg-purple-200 transition-all duration-200">
            Already Registered? Login
          </button>
           </Link>
        </div>
      </div>
    </div>
  );
}
