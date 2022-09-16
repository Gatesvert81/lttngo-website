import React from 'react'
import Button from './Button'

function SectionText({ title, children, btnText }) {
    return (
        <section className='flex justify-center items-center' >
            <div className='md:w-[60%] flex flex-col justify-center items-center text-center gap-5' >
                <h5 className='text-green normal-case ' >
                    {title}
                </h5>
                <p className='text-light-gray text-base' >
                    {children}
                </p>
                {
                    btnText && (
                        <Button style="primary-btn">
                            {btnText}
                        </Button>
                    )
                }
            </div>
        </section>
    )
}

export default SectionText