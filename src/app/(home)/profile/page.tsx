import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: `${SITE_NAME} | Profile`,
}

// сделать гастройку темы
export default function Page() {
    return <div>profile</div>
}
