
import './App.css';



function App() {


	const urls = [
		['/pj.mp3', "FANTASY, TEENAGER, SARCASTIC, PERCY JACKSON"],
		['/the shining.mp3', "HORROR, CHILD, ADULT, THE SHINING"],
		['/mountain.mp3', "FICTION, VIETNAMESE, STORYTELLER, THE MOUNTAINS SING"],
		['/war.mp3', "HISTORY, INFORMATIVE, THE THIRTY YEARS WAR"]
	]


	return (
		<div id="container">
			<div id="about">
				<div className='header'>
					about me
				</div>
				<div className='info'>
					Hi, I'm Taylor Nguyen! I'm an audiobook narrator/voiceover artist.
					Look at my demos to see how my voice could fit into your project!
				</div>
				<div id="more_info">
					<div id="setup">
						<div className='header'>
							my setup
						</div>
						<ul className='info'>
							<li><b>Mic:</b> Rode NT3</li>
							<li><b>Software:</b> Reaper </li>
							<li><b>Environment:</b> Professionally Treated Vocal Booth</li>
							<li><b>Audio Interface:</b> Focusrite Scarlett Solo</li>
						</ul>
					</div>
					<div id="contact">
						<div className='header'>
							contact
						</div>
						<ul className='info'>
							<li>taylornguyen904@gmail.com</li>
							<li>
								<a href="https://www.acx.com/narrator?p=A2OS7K3L2TWAMS">https://www.acx.com/narrator?p=A2OS7K3L2TWAMS</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="demos">
				<div className='header'>demos</div>
				<ul className='info'>
					{urls.map((u) => {
						return (
							<li>
								<figure>
									<figcaption>{u[1]}</figcaption>
									<audio controls src={u[0]}></audio>
								</figure>
							</li>
						)
					})}

				</ul>
				<div id="waveform"></div>
			</div>
		</div>
	)
}

export default App
