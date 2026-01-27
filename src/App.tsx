
import './App.css';



function App() {


	const urls = [
		['/pj.mp3', "FANTASY, TEENAGER, SARCASTIC, PERCY JACKSON"],
		['/on earth trevor.mp3', "FICTION, TEENAGER, LGBTQ, EXPLICIT, ON EARTH WE'RE BREIFLY GORGEOUS"],
		['/bellies.mp3', "FICTION, LGBTQ, ROMANCE, BELLIES"],
		['jade city.mp3', "FANTASY, URBAN, MULTIPLE CHARACTERS, JADE CITY"],
		['/the shining.mp3', "HORROR, CHILD, ADULT, THE SHINING"],
		['/mountain.mp3', "FICTION, VIETNAMESE, STORYTELLER, THE MOUNTAINS SING"],
		['/a horse.mp3', "FICTION, SARCASTIC, LOUD, A HORSE WALKS INTO A BAR"],
		['/war.mp3', "HISTORY, INFORMATIVE, THE THIRTY YEARS WAR"]
	]
	urls.sort((a, b) => {
		if (a[1] > b[1]) return 1
		else if (a[1] < b[1]) return -1
		return 0
	});


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
					<div id="recent_work">
						<div className='header'>recent works</div>
						<ul className='info'>
							<li>Haunted Hearts by Lucas Mangum</li>
						</ul>
					</div>
					<div id="upcoming work">
						<div className='header'>upcoming works</div>
						<ul className='info'>
							<li>If You Touch the Sun by Josi B</li>
							<li>Maranther's Deception by Nik Colyer</li>
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
			</div>
		</div>
	)
}

export default App
