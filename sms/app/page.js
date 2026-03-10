import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-[88vh] mx-4 gap-8 py-8 md:py-0">

      <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Simplify your{" "}
          <span className="text-blue-500 text-3xl sm:text-4xl md:text-5xl">Management</span>
        </h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-md">
          Manage in a smarter way within the wrapper of security and streamline communication effortlessly.
        </p>
        <div>
          <Link
            className="bg-blue-500 px-6 py-3 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
            href="/register"
          >
            Get Started <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm md:w-3/4">
          <div className="flex gap-2 mb-4">
            <div className="rounded-full h-3 w-3 bg-red-500"></div>
            <div className="rounded-full h-3 w-3 bg-yellow-500"></div>
            <div className="rounded-full h-3 w-3 bg-green-500"></div>
          </div>
          <div className="space-y-3">
            <div className="h-8 bg-blue-100 rounded w-3/4"></div>
            <div className="h-24 bg-gray-100 rounded"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-purple-100 rounded"></div>
              <div className="h-16 bg-green-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
