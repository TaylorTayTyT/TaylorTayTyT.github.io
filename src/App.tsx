
import './App.css';



function App() {


	const urls = [
		['/pj.mp3', "1M, FANTASY, TEENAGER, SARCASTIC, PERCY JACKSON"],
		['/on earth trevor.mp3', "1M, FICTION, TEENAGER, LGBTQ, EXPLICIT, ON EARTH WE'RE BREIFLY GORGEOUS"],
		['/bellies.mp3', "2M, FICTION, LGBTQ, ROMANCE, BELLIES"],
		['jade city.mp3', "3M, FANTASY, URBAN, MULTIPLE CHARACTERS, JADE CITY"],
		['/the shining.mp3', "1M CHILD 1M ADULT, HORROR, CHILD, ADULT, THE SHINING"],
		['/mountain.mp3', "1F ADULT 1F ELDER, FICTION, VIETNAMESE, STORYTELLER, THE MOUNTAINS SING"],
		['/a horse.mp3', "1M ADULT, FICTION, SARCASTIC, LOUD, A HORSE WALKS INTO A BAR"],
		['/spain.mp3', "HISTORY, INFORMATIVE, THE THIRTY YEARS WAR"]
	]
	urls.sort((a, b) => {
		if (a[1] > b[1]) return 1
		else if (a[1] < b[1]) return -1
		return 0
	});

	const works = [
		["/M&S Audio.jpg", "https://www.amazon.com/dp/B0FX7BSC1L"],
		["/Haunted_Hearts.jpg", "https://www.audible.com/pd/Haunted-Hearts-Audiobook/B0GHSLP2SH?qid=1770268669&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=MMS796Y1T8ACKAP4DHA6&plink=95QMcA9DbvsSt7aa&pageLoadId=KqWCYyC4KpFwoCIP&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1"]
	]

	const upcoming = [
		["/if you touch the sun.jpg", "https://www.amazon.com/dp/B0FTJQQ9LT"],
		["/maranther.jpg", "https://www.amazon.com/dp/B0044DFA1S"]

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
							my setup / skills
						</div>
						<ul className='info'>
							<li><b>Mic:</b> Rode NT3</li>
							<li><b>Software:</b> Reaper </li>
							<li><b>Environment:</b> Professionally Treated Vocal Booth</li>
							<li><b>Audio Interface:</b> Focusrite Scarlett Solo</li>
							<li><b>Languages: </b>English, Vietnamese, Mandarin</li>
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
						<div className='info works'>
							{works.map((item) => {
								return (
									<a href={item[1]}><img className="work" src={item[0]}></img></a>
								)
							})}
						</div>
					</div>
					<div id="upcoming work">
						<div className='header'>upcoming works</div>
						<div className='info works'>
							{upcoming.map((item) => {
								return (
									<a href={item[1]}><img src={item[0]} className='work'></img></a>
								)
							})}
						</div>
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
