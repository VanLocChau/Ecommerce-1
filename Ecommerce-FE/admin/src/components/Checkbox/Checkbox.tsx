import { useState } from 'react'

/* eslint-disable jsx-a11y/label-has-associated-control */
type CheckboxProps = {
    title?: string
    checked?: boolean
}

const Checkbox = ({ checked = false, title }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked)
    return (
        <section className='inline-flex items-center space-x-3'>
            <label
                className='relative flex items-center rounded-full'
                htmlFor='link'
            >
                <input
                    type='checkbox'
                    className="before:content[''] peer cursor-pointer relative h-5 w-5 appearance-none rounded-md border border-border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-border before:opacity-0 before:transition-opacity checked:bg-blue hover:before:opacity-10"
                    id={new Date().toISOString()}
                    checked={isChecked}
                    onChange={() => setIsChecked((preState) => !preState)}
                />
                <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3.5 w-3.5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth={1}
                    >
                        <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                        />
                    </svg>
                </span>
            </label>
            <label
                className='text-gray-700 cursor-pointer select-none'
                htmlFor={new Date().toISOString()}
            >
                {title}
            </label>
        </section>
    )
}

export default Checkbox
