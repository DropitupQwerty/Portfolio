import React from 'react'
import { BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoUnity } from 'react-icons/bi'
import { SiAdobeillustrator, SiAdobephotoshop, SiFlask, SiMysql, SiNextdotjs } from 'react-icons/si'
import { FaLaravel, FaWordpress } from 'react-icons/fa6'
import { FaGitAlt } from 'react-icons/fa'

export const ProgrammingLanguages = [
	{
		icon: <BiLogoJavascript />,
		name: 'Javascript',
		color: '#EFD81D',
		link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
	},
	{
		icon: <BiLogoTypescript />,
		name: 'Typescript',
		color: '#3178C6',
		link: 'https://www.typescriptlang.org/',
	},
	{
		icon: <FaGitAlt />,
		name: 'Git',
		color: '#E54C21',
		link: '',
	},
	{
		icon: <BiLogoJava />,
		name: 'Java',
		color: '#5382A1',
		link: 'https://docs.oracle.com/en/java/',
	},
	{
		icon: <BiLogoReact />,
		name: 'React',
		color: '#06bcee',
		link: 'https://reactjs.org/',
	},
	{
		icon: <BiLogoSpringBoot />,
		name: 'Springboot',
		color: '#6CB52D',
		link: 'https://spring.io/projects/spring-boot',
	},
	{
		icon: <BiLogoTailwindCss />,
		name: 'Tailwind',
		color: '#38bdf8',
		link: 'https://tailwindcss.com/',
	},
	{
		icon: <BiLogoUnity />,
		name: 'Unity',
		color: '#202124',
		link: 'https://unity.com/',
	},
	{
		icon: <BiLogoFirebase />,
		name: 'Firebase',
		color: '#FFCD32',
		link: 'https://firebase.google.com/',
	},
	{
		icon: <BiLogoNodejs className='' />,
		name: 'NodeJs',
		color: '#6CB52D',
		link: 'https://nodejs.org/',
	},
	{
		icon: <SiMysql className='' />,
		name: 'MySql',
		color: '#5382A1',
		link: 'https://www.mysql.com/',
	},
	{
		icon: <SiAdobephotoshop />,
		name: 'Adobe Photoshop',
		color: '#001D34',
		link: 'https://www.adobe.com/products/photoshop.html',
	},
	{
		icon: <SiAdobeillustrator className='' />,
		name: 'Adobe Illustrator',
		color: '#320000',
		link: 'https://www.adobe.com/products/illustrator.html',
	},
	{
		icon: <FaWordpress className='' />,
		name: 'Wordpress',
		color: '#320000',
		link: 'https://wordpress.com/',
	},
	{
		icon: <FaLaravel className='' />,
		name: 'Laravel',
		color: '#320000',
		link: 'https://laravel.com/',
	},
	{
		icon: <SiFlask className='' />,
		name: 'Flask',
		color: '#320000',
		link: 'https://flask.palletsprojects.com/en/3.0.x/',
	},
	{
		icon: <SiNextdotjs />,
		name: 'NextJs',
		color: '#320000',
		link: 'https://nextjs.org/',
	},
]
