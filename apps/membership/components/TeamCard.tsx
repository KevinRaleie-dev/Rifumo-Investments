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
    <div className="flex flex-col space-y-3 items-center justify-center mb-10">
        <div>
            <Image
            className="rounded-full"
            objectFit='cover'
            alt="team member image"
            src={imageSrc}
            width={150}
            height={150}
            />
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center text-center">
            <h3 className="text-xl font-medium">
                {teamMemberName}
            </h3>
            <p className="font-light">
                {teamMemberRole}
            </p>
            <p className="italic text-sm max-w-sm text-center text-gray-600">
                {teamMemberBio}
            </p>
        </div>
    </div>
  )
}
