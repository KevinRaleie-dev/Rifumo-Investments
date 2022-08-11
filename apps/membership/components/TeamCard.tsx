import Image from 'next/image'
import React from 'react'

type TeamCardProps = {
    imageSrc: string;
    teamMemberName: string;
    teamMemberRole: string;
    teamMemberBio: string;
}

export const TeamCard = ({ 
    imageSrc,
    teamMemberName,
    teamMemberRole,
    teamMemberBio,
 }: TeamCardProps) => {
  return (
    <div className="flex flex-col px-10 py-8 shadow-md rounded-3xl  border-[1px] space-y-3 justify-start mb-10">
        <div>
            <Image
            className="rounded-full"
            objectFit='cover'
            alt="team member image"
            src={imageSrc}
            width={80}
            height={80}
            />
        </div>
        <div className="flex flex-col space-y-3 justify-start ">
            <h3 className="text-xl font-black">
                {teamMemberName}
            </h3>
            <p className="font-normal">
                {teamMemberRole}
            </p>
            <p className="text-sm max-w-sm leading-loose text-gray-500">
                {teamMemberBio}
            </p>
        </div>
    </div>
  )
}
