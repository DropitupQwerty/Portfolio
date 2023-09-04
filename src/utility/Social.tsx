import React from 'react'

import { BsFacebook, BsInstagram, BsDiscord,  BsGithub, BsLinkedin} from 'react-icons/bs'

export type socmedType = {
    icon: React.ReactNode,
    link: string
	name:string
}

export const  MySocmed:socmedType[] = [
	{
		name:'Facebook',
		icon:<BsFacebook/>,
		link: 'https://www.facebook.com/vjacoballen/',
	},
	{
		name:'Instagram',
		icon:<BsInstagram />,
		link: 'https://www.instagram.com/valderamajacoballen/',

	},
	{
		name:'Discord',
		icon:<BsDiscord />,
		link: 'https://discord.com/users/697003746361606175',
	},
	{
		name:'Github',
		icon:<BsGithub />,
		link: 'https://github.com/DropitupQwerty',

	},
	{
		name:'LinkedIn',
		icon:<BsLinkedin />,
		link: 'https://www.linkedin.com/in/jacob-allen-valderama-616743253/',
	},
]