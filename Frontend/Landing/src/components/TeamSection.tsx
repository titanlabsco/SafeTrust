import React from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  role2: string
  image: string
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Josué Brenes',
      role: 'Co-founder',
      role2: 'Frontend Developer',
      image: '/img/brenes.jpg'
    },
    {
      name: 'Randall Valenciano',
      role: 'Co-founder',
      role2: 'Fullstack Developer',
      image: '/img/randall.jpg'
    },
    {
      name: 'Diego Duarte',
      role: 'Co-founder',
      role2: 'Fullstack Developer',
      image: '/img/diego.jpg'
    },
    {
      name: 'Humberto Trejos',
      role: 'Co-founder',
      role2: 'Backend Developer',
      image: '/img/humberto.jpg'
    },
    {
      name: 'Josué Soto',
      role: 'Co-founder',
      role2: 'Backend Developer',
      image: '/img/soto.jpg'
    }
  ]

  const colors = ['bg-[#344153]', 'bg-[#28313E]', 'bg-[#334050]', 'bg-[#283440]', 'bg-[#405164]']

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="relative max-w-7xl mx-auto text-center px-8 text-black">
        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-lg mb-12">
          Our talented team is committed to building reliable and innovative solutions for your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between h-full rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${colors[index]} max-w-60 mx-auto`}
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-1 text-white">{member.name.toUpperCase()}</h3>
                <p className="text-sm mb-1 text-white">{member.role}</p>
                <p className="text-sm mb-4 text-white">{member.role2}</p>
              </div>
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
