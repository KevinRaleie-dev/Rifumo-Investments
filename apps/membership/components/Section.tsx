import React from 'react'

type SectionProps = {
    title: string
}

export const Section: React.FunctionComponent<SectionProps> = ({
    title
}) => {
  return (
    <div className=' space-y-2'>
        <h3 className=' text-xl font-medium' id={title}>
            # {title}
        </h3>
        <div className='border'></div>
    </div>
  )
}