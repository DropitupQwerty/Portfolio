import React , { useCallback }  from 'react'
import type { Container, Engine } from 'tsparticles-engine'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'
import { Particles  }  from 'react-tsparticles'





export const ParticlesBackground = () => {


	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container)
	}, [])


	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 140,
				interactivity: {
					events: {
						resize: true,
					},
				},
				particles: {
					color: {
						value: '#333'
					},
					links: {
						color: '#000',
						distance: 150,
						enable: true,
						opacity: .2,
						width: .4
					},
					collisions: {
						enable: true
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce'
						},
						random: false,
						speed: .1,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 1000
						},
						value: 80
					},
					opacity: {
						value: 1
					},
					shape: {
						type: 'circle'
					},
					size: {
						value: { min: 1, max:3 }
					}
				},
				detectRetina: true
			}}
		/>
	)
}
