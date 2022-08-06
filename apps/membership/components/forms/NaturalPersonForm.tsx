import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Section } from '../Section'

type NaturalPersonFormProps = {
    display: boolean
}

export const NaturalPersonForm: React.FunctionComponent<NaturalPersonFormProps> = ({
    display
}) => {
  return (
    <div className={display ? 'flex items-center space-y-2' : 'hidden'}>
        <main className='w-full max-w-lg'>
            <Section title='Personal Information' />
            <form className='space-y-4 pb-5'>
            <div className='flex mt-5 space-x-4'>
                <div className='space-y-1'>
                <label htmlFor="firstName" className='text-sm'>First Name</label>
                <input
                placeholder='John' 
                type="text" 
                id="firstName" 
                className='focus:outline-none w-full p-2 border rounded-md' />
                </div>
                <div className='space-y-1'>
                <label htmlFor="lastName" className='text-sm'>Last Name</label>
                <input
                placeholder='Doe' 
                type="text" 
                id="lastName" 
                className='focus:outline-none w-full p-2 border rounded-md' />
                </div>
            </div>
            <div className='space-y-1'>
                <label htmlFor="contactNumber" className='text-sm'>Contact Number</label>
                <input
                type='phone'
                placeholder='+27123456789'
                id="contactNumber"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='space-y-1'>
                <label htmlFor="email" className='text-sm'>Email address</label>
                <input
                type='email'
                placeholder='example@example.com'
                id="email"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='space-y-1'>
                <label htmlFor="idNum" className='text-sm'>Identity Number</label>
                <input
                type='text'
                placeholder='9009081541698'
                id="idNum"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='space-y-1'>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="gender">Please select your gender</label>
                    <select 
                    className='py-3 rounded-md bg-white border px-2 text-sm'
                    placeholder='Select an option'
                    name="gender" id="">                    
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                    </select>
                </div>                
            </div>
            <div className='space-y-1'> 
                <div className='flex flex-col space-y-1'>
                    <label htmlFor="">Please select your ethnic group</label>
                    <select 
                    className='py-3 rounded-md bg-white border px-2 text-sm'
                    placeholder='Select an option'
                    name="" id="">
                        <option value="white">
                            White
                        </option>
                        <option value="indian">
                            Indian
                        </option>
                        <option value="african">
                            African
                        </option>
                        <option value="coloured">
                            Coloured
                        </option>
                    </select>
                </div>                
            </div>
            <Section title='Next of Kin' />
            <p className='text-sm text-gray-700'>
                These details are required in the event where the natural person is declared mentally incapable, dead etc. and is no longer available to receive funds. The funds will be transferred to the person nominated as Next of Kin.
            </p>
            <div className='flex mt-5 space-x-4'>
                <div className='space-y-1'>
                <label htmlFor="firstName" className='text-sm'>First Name</label>
                <input
                placeholder='Jane' 
                type="text" 
                id="firstName" 
                className='focus:outline-none w-full p-2 border rounded-md' />
                </div>
                <div className='space-y-1'>
                <label htmlFor="lastName" className='text-sm'>Last Name</label>
                <input
                placeholder='Doe' 
                type="text" 
                id="lastName" 
                className='focus:outline-none w-full p-2 border rounded-md' />
                </div>
            </div>
            <div className='space-y-1'>
                <label htmlFor="contactNumber" className='text-sm'>Contact Number</label>
                <input
                type='text'
                placeholder='+27123456789'
                id="contactNumber"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='space-y-1'>
                <label htmlFor="contactNumber" className='text-sm'>Identity Number</label>
                <input
                type='text'
                placeholder='+27123456789'
                id="contactNumber"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='space-y-1 text-sm flex flex-col'>
                <label htmlFor="">Please select a relationship</label>
                <select 
                className='py-3 rounded-md bg-white border px-2 text-sm'
                placeholder='Select an option'
                name="relationship" id="">
                    <option value="spouse">
                        Spouse
                    </option>
                    <option value="parent">
                        Parent
                    </option>
                    <option value="sibling">
                        Sibling
                    </option>
                    <option value="cousin">
                        Cousin / Relative
                    </option>
                    <option value="child">
                        Child
                    </option>
                    <option value="other">
                        Other
                    </option>
                </select>
            </div>            
            <div className='space-y-1'>
                <p className='text-sm text-gray-700'>
                If your answer to the above question was other, please provide details
                </p>
                <input
                placeholder='Please provide details'
                type='text'
                id="other"
                className='focus:outline-none w-full p-2 border rounded-md'
                />
            </div>
            <div className='font-light'>
                I understand and declare:
            </div>
            <div className='flex items-center space-x-2'>
                <input type="checkbox" />
                <span className='text-xs'>
                The above person is my nominee to receive my funds or take over my Rifumo Social Savings Stokvel membership in the case that anything happens to me.
                </span>
            </div>
            <button
            className='flex flex-row items-center justify-center space-x-2 font-medium w-full bg-green-600 hover:bg-green-700 text-white  py-3 px-4 rounded-md active:scale-95'
            type='submit'
            >
                <span>
                    Next
                </span>
                <span>
                    <FiArrowRight />
                </span>
            </button>
            </form>
        </main>
    </div>
  )
}