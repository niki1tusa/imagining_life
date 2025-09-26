import Title from '@/components/ui/Title'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: `${SITE_NAME} | Profile`,
}

// сделать гастройку темы
export default function Page() {
    return <div className=' flex flex-col gap-3'>
        <Title className='text-primary px-5 pt-5'>Profile</Title>
        <span className='text-lg  px-5 border-b border-gray pb-5'>Your photo</span>
        <div className='grid grid-cols-3 gap-1'></div>
    </div>
}
