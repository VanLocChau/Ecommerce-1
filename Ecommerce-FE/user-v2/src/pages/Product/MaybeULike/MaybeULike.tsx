import { Link } from 'react-router-dom'

import Stars from 'src/components/Stars'

const MaybeULike = () => {
    return (
        <section className='flex gap-4 hover:bg-[#F8F9FA] p-[24px] relative'>
            <Link to={'/'} className='flex-shrink-0'>
                <img
                    src='https://ableproadmin.com/react/static/media/prod-1.0a0009b51cfdd224835e.png'
                    alt='review-img'
                    className='rounded-12 w-14 h-14 object-cover border border-border/30'
                />
            </Link>
            <div className='space-y-1'>
                <Link
                    to={'/'}
                    className='font-semibold text-sm tracking-wide line-clamp-2 leading-5 w-fit pr-4'
                >
                    Apple MacBook Pro with Iphone
                </Link>
                <div className='space-x-3 text-xs'>
                    <span className=''>$12.99</span>
                    <span className='line-through text-gray-400'>$15.99</span>
                </div>
                <Stars amount={3} />
            </div>
            <button className='absolute top-[24px] right-5'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 text-[#bfbfbf] hover:fill-red-600 hover:text-red-600'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />
                </svg>
            </button>
        </section>
    )
}

export default MaybeULike
