import React from 'react'
import { NavigationBar } from 'components/NavigationBar'
import { Skills } from 'page/HomePage/Skills/Skills'
import { About } from 'page/HomePage/About/About'
import { Header } from 'page/HomePage/Header'
import { Projects } from 'page/HomePage/Projects'
import { Contact } from 'page/HomePage/Contact'
import { Footer } from 'page/HomePage/Footer'






export const HomePage = () => {
	return (
		<div className='relative z-10'>
			<NavigationBar/>
			<Header/>
			<About/>
			<Skills/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
	)
}
