import React from 'react'
import { BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareimage.png'
import yokai from 'assets/projects/yokai.png'


export const projects = [
	{
		img: reskyutBg,
		name: 'RESKYUT',
		nameDesc:'Made Adoption Fun and Easy',
		links: 'https://reskyut-landing-page.vercel.app/',
		description:'A web and mobile project that makes it easier to select the ideal pet while also assisting overcrowded animal shelters. It aids animals in locating the ideal parents.',
		programminglanguagesIcons: [
			{
				icon: <BiLogoJavascript />,
				name: 'Javascript',
			},
			{
				icon: <BiLogoReact />,
				name: 'ReactJs',
			},
			{
				icon: <BiLogoFirebase />,
				name: 'Firebase',
			},
		]
    
	},
	{
		img: yokai,
		name: 'Yokai Express',
		nameDesc:'Project I work with in my Internship',
		links: 'https://www.yokaiexpress.com/',
		description:'A web-based and mobile project, this was the project I worked on throughout my internship. As a full-stack developer, I work on the admin side. This website allows you to order ramen through an Android device and can display the location of the closest vending machine to you.',
		programminglanguagesIcons: [
			{
				icon: <BiLogoTypescript />,
				name: 'TypeScript',
			},
			{
				icon: <BiLogoReact />,
				name: 'ReactTs',
			},
			{
				icon: <BiLogoJava />,
				name: 'Java',
			},
			{
				icon: <BiLogoSpringBoot />,
				name: 'Springboot',
			},
			{
				icon: <SiMysql />,
				name: 'MySql',
			},
		]
	},
	{
		img: healthcare,
		name: 'Santos Maternity Clinic',
		nameDesc:'Healthcare Management System',
		links: 'https://healthcare-management-system.vercel.app/',
		description:'This is the website with mobile application that we just finished lately . This is for managing the appointments and the schedules of doctors and helps the user to have an appoitnment with the clinic',
		programminglanguagesIcons: [
			{
				icon: <BiLogoJavascript />,
				name: 'Javascript',
			},
			{
				icon: <BiLogoTypescript />,
				name: 'Typescript',
			},
			{
				icon: <BiLogoReact />,
				name: 'ReactTS',
			},
			{
				icon: <BiLogoNodejs />,
				name: 'NodeJs',
			},
			{
				icon: <SiMysql />,
				name: 'MySql',
			},
		]
	},

]