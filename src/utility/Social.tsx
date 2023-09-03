import React from 'react'

import { BsFacebook, BsInstagram, BsDiscord,  BsGithub, BsLinkedin} from 'react-icons/bs'

export type socmedType = {
    icon: React.ReactNode,
    link: string
}

export const  MySocmed:socmedType[] = [
	{
		icon:<BsFacebook/>,
		link: 'https://www.facebook.com/vjacoballen/',
	},
	{
		icon:<BsInstagram />,
		link: 'https://www.instagram.com/valderamajacoballen/',

	},
	{
		icon:<BsDiscord />,
		link: 'https://discord.com/users/697003746361606175',
	},
	{
		icon:<BsGithub />,
		link: 'https://github.com/DropitupQwerty',

	},
	{
		icon:<BsLinkedin />,
		link: 'https://www.linkedin.com/in/jacob-allen-valderama-616743253/',
	},
]