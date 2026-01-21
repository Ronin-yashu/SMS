import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-[88vh] mx-4 ">
      <div className="left w-1/2 flex justify-center items-center flex-col gap-6">
        <h1 className="text-6xl font-bold text-gray-900">
          Simplify your <span className="text-blue-500 text-5xl">Management</span>
        </h1>
        <p className="text-gray-700">Manage in a smater way within the wrapper of security and streamline communication effortlessly.</p>
        <div>
          <Link className=" bg-blue-500 px-6 py-3 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex justify-center items-center gap-2" href="/register">Get Started <span><ArrowRight /></span></Link>
        </div>
      </div>
      <div className="right w-1/2 flex justify-center items-center ">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-3/4">
          <div className="flex gap-2 mb-4 ">
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
