import Head from 'next/head'
import React from 'react'
import { Nav } from '../../components/Nav'
import { Section } from '../../components/Section'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { FormSwitch } from '../../components/FormSwitch'
import { JuristicForm } from '../../components/forms/JuristicForm'
import { NaturalPersonForm } from '../../components/forms/NaturalPersonForm'

export default function MembershipForm() {
  const [showJuristicForm, setShowJuristicForm] = React.useState<boolean>(false);
  const [showNaturalForm, setShowNaturalForm] = React.useState<boolean>(false);
  const router = useRouter()
  return (
    <div>
        <Head>
            <title>
                Rifumo Investments | Membership Form
            </title>
        </Head>
        <Nav />
        <div className='container mx-auto px-4 mt-4 space-y-5'>
            <div className='flex'>
              <div
              onClick={() => router.push('/')}
              className='hover:cursor-pointer p-2 active:scale-75 transition-all hover:bg-slate-100 rounded-full'>
                <FiArrowLeft />              
              </div>
            </div>
            <h1 className='text-5xl font-medium'>
              Rifumo Investments Stokvel
            </h1>
            <p className=' text-gray-700 font-light'>
              Please fill out one of the forms below to join our membership program. Select one that is most relevant to you.
            </p>
            <FormSwitch
              showJuristicForm={showJuristicForm}
              setShowJuristicForm={setShowJuristicForm}
              setShowNaturalForm={setShowNaturalForm}
            />
            <JuristicForm 
            display={showJuristicForm}/>
            <NaturalPersonForm
            display={showNaturalForm}
            />
            <p className='text-red-600 text-sm hidden'>
              * = Required field
            </p>
            
        </div>

    </div>
  )
}