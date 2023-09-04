import React from 'react'
import { BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareimage.png'
import yokai from 'assets/projects/yokai.png'


export type ProgrammingLanguage = {
	icon: React.ReactNode; // Use ReactNode to specify that 'icon' can be a React element
	name: string;
  };
  
export type ProjectType = {
	img: string; // Assuming 'img' is a string URL
	name: string;
	nameDesc: string;
	links: string;
	description: string;
	programminglanguagesIcons: ProgrammingLanguage[];
  };

export const projects : ProjectType[] = [
	{
		img: reskyutBg,
		name: 'RESKYUT',
		nameDesc:'Made Adoption Fun and Easy',
		links: 'https://reskyut-landing-page.vercel.app/',
		description:'The web and mobile project is dedicated to simplifying the pet adoption process while aiding overcrowded animal shelters and facilitating ideal pet-parent matches. This platform offers an intuitive interface for users to search for pets based on their preferences, utilizing geolocation services to connect users with nearby shelters. In addition to adoption services, it provides a wealth of pet care resources, ensuring responsible pet ownership. The mobile app extends accessibility, fostering a pet-loving community. By bridging shelters, prospective pet owners, and resources, this project streamlines adoption, promotes animal well-being, and strengthens the bond between pets and their new families.',
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