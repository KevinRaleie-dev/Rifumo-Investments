import React from 'react'
import { FiX } from 'react-icons/fi'

type TagProps = {
    title: string
    index: number
    setIndusries: (industries: string[]) => void
    industries: string[]
}

export const Tag: React.FunctionComponent<TagProps> = ({
    title,
    index,
    industries,
    setIndusries
}) => {
    const removeIndustry = (index: number) => {
        const newIndustries = industries.filter((industry, i) => i !== index)
        setIndusries(newIndustries)
    }
  return (
    <div key={index}>
        <div className='flex items-center space-x-1 py-1 px-4 bg-amber-300 text-gray-800 rounded-full text-sm'>
            <p>
                {title}
            </p>
            <div 
            onClick={() => {removeIndustry(index)}}
            className='hover:bg-slate-100 transition-all transform-gpu rounded-full px-1 py-1'>
                <FiX className='cursor-pointer' />
            </div>
        </div>
    </div>
  )
}