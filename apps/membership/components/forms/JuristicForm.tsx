import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Tag } from '../Tag';

type JuristicFormProps = {
    display: boolean
}

export const JuristicForm: React.FunctionComponent<JuristicFormProps> = ({
    display
}) => {
    const [industry, setIndustry] = React.useState<string>('');
    const [industries, setIndustries] = React.useState<string[]>([]);

    const capitalize = (s: string) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const handleIndustryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndustry(event.target.value);
        
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                if (industry.length > 0) {
                    const newIndustry = capitalize(industry);
                            
                    setIndustries([...industries, newIndustry]);
                    setIndustry('');
                }             
            }
        });
    }

  return (
    <div
    className={display ? 'flex space-y-2 pb-10' : 'hidden'}>
        <main className='space-y-3 overflow-hidden max-w-lg'>
            <p className='text-sm text-gray-700'>
                Only fill in this section if you are enrolling a membership for an organisation.
            </p>
            <div
            className='space-y-1'
            >
                <label htmlFor="organizationName" className='text-sm'>Organization Name</label>
                <input
                placeholder='eg. Google' 
                type="text" 
                id="organizationName" 
                className='focus:outline-none w-full p-2 border rounded-md' />
            </div>
            <div
            className='space-y-1'
            >
                <label htmlFor="organizationRegNumber" className='text-sm'>Organization Registration Number</label>
                <input
                placeholder='eg. 123456789' 
                type="text" 
                id="organizationRegNumber" 
                className='focus:outline-none w-full p-2 border rounded-md' />
            </div>
            <div
            className='space-y-1'
            >
                <label htmlFor="organizationTelNumber" className='text-sm'>Organization Telephone Number</label>
                <input
                placeholder='eg. +44123456789' 
                type="text" 
                id="organizationTelNumber" 
                className='focus:outline-none w-full p-2 border rounded-md' />
            </div>
            <div
            className='space-y-1'
            >
                <label htmlFor="organizationEmail" className='text-sm'>Organization Email address</label>
                <input
                placeholder='eg. org@org.com' 
                type="text" 
                id="organizationEmail" 
                className='focus:outline-none w-full p-2 border rounded-md' />
            </div>
            <div
            className='space-y-3'
            >
                <div className='space-y-1'>
                    <label htmlFor="industry" className='text-sm'>Industry or Field of Organization</label>
                    <input
                    onChange={handleIndustryOnChange}
                    placeholder='eg. Technology, Finance, etc' 
                    type="text" 
                    id="industry" 
                    className='focus:outline-none w-full p-2 border rounded-md' />
                    <p
                    className='text-xs text-gray-500'
                    >You can now add multiple sectors by pressing the space-bar after each word.</p>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    {industries.map((industry, index) => (
                        <Tag
                        industries={industries}
                        setIndusries={setIndustries}
                        index={index}
                        title={industry}
                        />
                    ))}
                </div>
            </div>
            <div className='space-y-3'>
                <h4 className='text-lg font-light'>Declaration</h4>
                <div className='flex flex-row items-center space-x-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='text-xs text-gray-700'>
                        I have read, understood and agree to the above terms and conditions of Rifumo Social Savings Stokvel (RISSS).
                    </label>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='text-xs text-gray-700'>
                    I solemnly declare that i will abide by the aims and objectives of Rifumo Social Savings Stokvel (RISSS) as set in the constitution. I am joining the stokvel voluntarly and I will make my monthly contributions with honesty and intergrity. I promise to be a disciplined member of the stokvel and attend all member meetings.
                    </label>
                </div>
            </div>
            <button
            className=' transition-all transform-gpu flex flex-row items-center justify-center space-x-2 font-medium w-full bg-green-600 hover:bg-green-700 text-white  py-3 px-4 rounded-md active:scale-95'
            type='submit'
            >
                <span>
                    Next
                </span>
                <span>
                    <FiArrowRight />
                </span>
            </button>
        </main>
    </div>
  )
}