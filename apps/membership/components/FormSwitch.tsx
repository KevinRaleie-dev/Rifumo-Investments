import React from 'react'

type FormSwitchProps = {
    setShowJuristicForm: (value: boolean) => void
    setShowNaturalForm: (value: boolean) => void
    showJuristicForm: boolean
    showNaturalForm?: boolean
}

export const FormSwitch: React.FunctionComponent<FormSwitchProps> = ({
    setShowJuristicForm,
    setShowNaturalForm,
    showJuristicForm,
}) => {

    const handleFormSwitch = () => {
        if (showJuristicForm) {
            setShowJuristicForm(false)
            setShowNaturalForm(true)
        } else {
            setShowJuristicForm(true)
            setShowNaturalForm(false)
        }
    }

  return (
    <div className='flex items-center space-x-2'>
        <button 
        onClick={handleFormSwitch}
        disabled={!showJuristicForm}
        className={
        !showJuristicForm ? `hover:scale-105 bg-green-600 text-white hover:cursor-not-allowed transition-all transform-gpu 
        py-3 px-5 border rounded-md hover:shadow-lg 
        hover:bg-green-500 hover:text-white 
        active:border-2 active:border-green-600 
        active:scale-90`: 
        `hover:scale-105 transition-all transform-gpu 
        py-3 px-5 border rounded-md hover:shadow-lg hover:bg-green-500 
        hover:text-white active:border-2 active:border-green-600 
        active:scale-90`}>
            Natural Person
        </button>
        <button 
        disabled={showJuristicForm}
        onClick={handleFormSwitch}
        className={
            showJuristicForm ? `hover:scale-105 bg-green-600 text-white hover:cursor-not-allowed transition-all transform-gpu 
            py-3 px-5 border rounded-md hover:shadow-lg hover:bg-green-500 
            hover:text-white active:border-2 active:border-green-600 
            active:scale-90` : 
            `hover:scale-105 transition-all transform-gpu 
            py-3 px-5 border rounded-md hover:shadow-lg hover:bg-green-500 
            hover:text-white active:border-2 active:border-green-600 
            active:scale-90`}>
            Juristic Person
        </button>
    </div>
  )
}