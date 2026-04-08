
import './App.css';



function App() {


	const urls = [
		['american.mp3', "HISTORY, INFORMATIVE, AMERICAN REICH: A NEW AGE OF HATE", 137],
		['assassin.mp3', "3 MALES, FANTASY, SCOTTISH, ASSASSIN'S APPRENTICE", 173],
		['club.mp3', "1 MALE 1 FEMALE, ROMANCE, AWKWARD, ATTACHMENTS", 50],
		['emails.mp3', "2 FEMALE, COMEDY, ATTACHMENTS", 126],
		['gio.mp3', "2 MALE, FICTION, FRENCH, GIOVANNI'S ROOM", 213],
		['jade.mp3', "1M ADULT, URBAN FANTASY, ACTION, JADE CITY", 163],
		['on_earth.mp3', "1M 1F, FICTION, VIETNAMESE, ON EARTH WE'RE BRIEFLY GORGEOUS", 18],
		['the_sun_and_the_star.mp3', "3 MALE 1 FEMALE, CHILDREN'S FANTASY, LGBTQ", 111]
	]
	urls.sort((a, b) => {
		if (a[1] > b[1]) return 1
		else if (a[1] < b[1]) return -1
		return 0
	});

	const works = [
		["/if you touch the sun.jpg", "https://www.amazon.com/dp/B0FTJQQ9LT"],
		["/maranther.jpg", "https://www.amazon.com/dp/B0044DFA1S"],
		["/M&S Audio.jpg", "https://www.audible.com/pd/B0GM3FSHD5?qid=1770517816&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=WVE85H73D88WHPG9GTS6&plink=Pn0gtZYjhRIN0LSP&pageLoadId=0L5njSNiA6saZbpu&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1"],
		["/Haunted_Hearts.jpg", "https://www.audible.com/pd/Haunted-Hearts-Audiobook/B0GHSLP2SH?qid=1770268669&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=MMS796Y1T8ACKAP4DHA6&plink=95QMcA9DbvsSt7aa&pageLoadId=KqWCYyC4KpFwoCIP&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1"]
	]

	const upcoming = [
		["/pebblestone.jpg", "https://www.amazon.com/dp/B0GHZNK2GB"]

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
				<div>Description Guide: [characters description], [book genre], [additional information], [book title], [button to my favorite part of the clip]</div>
				<ul className='info'>
					{urls.map((u) => {

						let className = "";
						if (typeof u[0] === 'string' && u[0].split(".")) {
							className += u[0].split(".")[0];
						}
						let srcName = "";
						if (typeof u[0] === 'string') {
							srcName += u[0];
						}
						return (
							<li>
								<figure>
									<figcaption>{u[1]}, <button onClick={() => {
										let className = ".";
										if (typeof u[0] === 'string' && u[0].split(".")) {
											className += u[0].split(".")[0];
										}
										console.log(className);
										const aud_elem: any = document.querySelector(className);
										aud_elem.currentTime = u[2];
									}} >my favorite part</button></figcaption>
									<audio className={className} controls src={srcName}></audio>
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
