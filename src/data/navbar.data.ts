import { House, Info, Share, UserRoundCog } from 'lucide-react';

import { INavbarItem } from '@/types/global.types';

export const NAVBAR_DATA: INavbarItem[] = [
	{ id: 1, title: 'Home', link: '/', icon: House },
	{ id: 2, title: 'Share', link: '/share', icon: Share },
	{ id: 3, title: 'Profile', link: '/profile', icon: UserRoundCog },
	{ id: 4, title: 'About', link: '/about', icon: Info },
];
