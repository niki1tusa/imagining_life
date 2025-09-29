import type { Metadata } from 'next';
import Image from 'next/image';

import Accordion from '@/components/pages/Accordion';
import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';

import { ABOUT_DATA } from '@/data/about.data';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
	title: `${SITE_NAME} | About`,
	description: `Узнайте больше о ${SITE_NAME}: наша история, ценности и команда. Контакты для связи: телефон, email и адрес.`,
	alternates: {
		canonical: '/about',
	},
	  openGraph: {
    title: `${SITE_NAME} | About`,
    description: `Подробнее о ${SITE_NAME}: кто мы, чем занимаемся и как с нами связаться.`,
    url: '/about',
    siteName: SITE_NAME,
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: 'About us - команда сайта',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function Page() {
	return (
		<div className='px-5 pt-5'>
			<Title heading='2xl' className='text-primary'>
				About us
			</Title>
			<div className='grid grid-cols-1 items-center xl:grid-cols-2'>
				<div className='flex flex-col gap-4'>
					{ABOUT_DATA.map((item, i) => (
						<Accordion key={i} i={i} item={item} />
					))}
					<div className='flex flex-col rounded bg-slate-200 p-2 text-black'>
						<Title heading='lg'>Contact Us</Title>
						<ul>
							<li>tel: +1 (555) 013-2468</li>
							<li>mail: hello@yourphotosite.example</li>
							<li>address: 123 Example Street, Suite 400, Springfield, IL 62701, USA</li>
						</ul>
					</div>
				</div>
				<Image width={600} height={600} alt='about' src='/about.png' />
			</div>
		</div>
	);
}
