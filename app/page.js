import Navbar from "./component/Navbar";
import Image from "next/image";
import NsbePic from "../public/NsbeGroup.jpg";

export default function Home() {
  return (
    <section className="bg-black text-black">
    {/* Hero Section */}
<div className="relative h-screen top-16 flex flex-col lg:flex-row items-center justify-center">
  {/* Text Content */}
  <div className="text-center lg:text-left max-w-xl">
    <h1 className="text-[7rem] font-extrabold leading-tight text-green-600">
      We are <span className="text-orange-500">ECC NSBE</span>
    </h1>
    <p className="mt-6 text-lg text-gray-600">
      Empowering the future of engineering through community, collaboration, and innovation.
    </p>
    <button className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
      Contact Us
    </button>
  </div>

  {/* Image */}
  <Image
    className="rounded-lg shadow-lg"
    src={NsbePic}
    height={500}
    width={800}
    alt="Current members of ECC NSBE"
/>
</div>


    
      {/* Mission Section */}
      <div className="py-16  text-center">
        <div className="w-[90%] bg-green-400 lg:w-[70%] p-10 rounded-[2rem] h-[22rem] mx-auto">
          <h2 className="text-4xl font-bold text-orange-600">
           <span className="text-black">Our</span>  Mission
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At ECC NSBE, we strive to foster an inclusive community of
            innovative engineers. Our mission is to empower the next generation
            with skills, mentorship, and opportunities to thrive in the
            engineering field.
          </p>
          <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
            Support Us
          </button>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="text-center w-[90%] mx-auto">
          <h2 className="text-4xl font-semibold text-green-600">
            Upcoming Events
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <h3 className="text-2xl font-bold text-orange-500">
                Tech Talk Series
              </h3>
              <p className="mt-4 text-gray-600">
                Join us for an engaging discussion on the latest trends in
                technology with industry leaders.
              </p>
              <span className="block mt-6 text-sm text-gray-500">
                Date: December 12th, 2024
              </span>
            </div>

            {/* Event 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <h3 className="text-2xl font-bold text-orange-500">
                Networking Night
              </h3>
              <p className="mt-4 text-gray-600">
                Connect with professionals and peers in the engineering
                community.
              </p>
              <span className="block mt-6 text-sm text-gray-500">
                Date: January 15th, 2025
              </span>
            </div>

            {/* Event 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <h3 className="text-2xl font-bold text-orange-500">
                Coding Bootcamp
              </h3>
              <p className="mt-4 text-gray-600">
                Learn coding fundamentals and build projects with our mentors.
              </p>
              <span className="block mt-6 text-sm text-gray-500">
                Date: February 20th, 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
