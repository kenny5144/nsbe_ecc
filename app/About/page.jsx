import Image from "next/image";


export default function page() {
  const teamMembers = [
    { name: "Jessica Dobrev", role: "Backend Lead", 
      // img: teamImage
     },
    { name: "Drew Cano", role: "Head of UX", 
      // img: teamImage
     },
    { name: "Sasha Kindred", role: "VP of Marketing", 
      // img: teamImage
     },
    { name: "Emily Donavan", role: "Product Lead", 
      // img: teamImage
     },
    { name: "Orlando Diggs", role: "Co-Founder and COO", 
      // img: teamImage
     },
    { name: "Sophie Chamberlain", role: "Head of Sales", 
      // img: teamImage
     },
    { name: "Lana Steiner", role: "VP of Customer Success", 
      // img: teamImage
     },
    { name: "Emmy Rosum", role: "Co-Founder and CEO", 
      // img: teamImage
     },
  ];

  return (
    <section className="bg-white text-black py-16 px-6">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-green-600">
          Meet Our Team
        </h1>
        <p className="text-lg mt-4 text-gray-700 leading-relaxed">
          At ECC NSBE, we’re a family of innovators, collaborators, and change-makers, working together to achieve our mission.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* <Image
              src={member.img}
              alt={member.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            /> */}
            <h3 className="text-xl font-semibold text-orange-600">
              {member.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="text-center mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600">Our Mission</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          At ECC NSBE, we aim to empower the next generation of engineers, 
          scientists, and leaders through community support, innovative programs, 
          and a commitment to excellence. Together, we’re building a brighter future.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-green-600">
          Want to Support Us?
        </h2>
        <p className="text-lg mt-4 text-gray-600">
          Your contributions help us create more opportunities and resources for our members.
        </p>
        <button className="mt-6 px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-green-600 transition">
          Support Us
        </button>
      </div>
    </section>
  );
}
