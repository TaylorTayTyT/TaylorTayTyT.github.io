
import { useState } from 'react';
import './App.css';



function App() {
	const [effect, SetEffect] = useState(true);

	const urls = [
		['Taylor_Nguyen_Nonfiction_American_Reich.mp3', "HISTORY, INFORMATIVE, AMERICAN REICH: A NEW AGE OF HATE", 144],
		['Taylor_Nguyen_Fantasy_Assassins_Apprentice.mp3', "3 MALES, FANTASY, SCOTTISH, ASSASSIN'S APPRENTICE", 0],
		['Taylor_Nguyen_Comedy_Attachments.mp3', "2 FEMALES, COMEDY, ATTACHMENTS", 65],
		['Taylor_Nguyen_Fiction_Giovannis_Room.mp3', "2 MALES, FICTION, FRENCH, GIOVANNI'S ROOM", 0],
		['Taylor_Nguyen_Urban_Fantasy_Jade_City.mp3', "1 MALE ADULT, URBAN FANTASY, ACTION, JADE CITY", 247],
		['Taylor_Nguyen_Fiction_The_Emperor_Of_Gladness.mp3', "2 MALES 1 FEMALE, FICTION, VIETNAMESE, THE EMPEROR OF GLADNESS", 0],
		['Taylor_Nguyen_Children_Fantasy_The_Sun_and_the_Star.mp3', "3 MALES 1 FEMALE, CHILDREN'S FANTASY, LGBTQ, The Sun and the Star", 123],
		["Taylor_Nguyen_Fiction_Portrait_of_a_Thief.mp3", "2 MALES 1 FEMALE, FICTION, MANDARIN, PORTRAIT OF A THIEF", 0],
		["Taylor_Nguyen_Romance_But_Love_Is_A_Voice_On_The_Wind.mp3", "3 MALES, ROMANCE, BRITISH GENERAL, BUT LOVE IS A VOICE ON THE WIND", 0],
		["Taylor_Nguyen_Foreword_The_Song_of_Kieu.mp3", "SOCIAL SCIENCE, INFORMATIVE, VIETNAMESE, THE SONG OF KIEU", 0]
	]
	urls.sort((a, b) => {
		if (a[1] > b[1]) return 1
		else if (a[1] < b[1]) return -1
		return 0
	});

	const works = [
		["/if you touch the sun.jpg", "https://www.amazon.com/dp/B0FTJQQ9LT"],

		["/M&S Audio.jpg", "https://www.audible.com/pd/B0GM3FSHD5?qid=1770517816&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=WVE85H73D88WHPG9GTS6&plink=Pn0gtZYjhRIN0LSP&pageLoadId=0L5njSNiA6saZbpu&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1"],
		["/Haunted_Hearts.jpg", "https://www.audible.com/pd/Haunted-Hearts-Audiobook/B0GHSLP2SH?qid=1770268669&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=MMS796Y1T8ACKAP4DHA6&plink=95QMcA9DbvsSt7aa&pageLoadId=KqWCYyC4KpFwoCIP&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1"],
		["/pebblestone.jpg", "https://www.audible.com/pd/The-Pebblestone-Massacre-Audiobook/B0GYBC32FX"]
	]


	const upcoming = [
		["/maranther.jpg", "https://www.amazon.com/dp/B0044DFA1S"],

	]

	const aSentence = ["He", "has", "a", "youthful", "voice", "that", "can", "portray", "natural", "character", "growth"];
	const baseFontSize = 1;
	const rotatingSentence = ["characters", "that", "brings", "an", "environment", "to", "life", "."];
	const rotations = [2, -2, -5, 5];
	return (
		<div id="container">
			<div id="about">
				<div className='header'>
					about me
				</div>
				<div className='info'>
					{effect ?
						<><span style={{ fontWeight: 'bold', fontSize: "5rem" }}>Taylor</span> (he/him) is a <span style={{ fontSize: "3rem" }}><span style={{ color: "#C8102E" }}>Vietnamese</span>-<span style={{ color: "#cea70c" }}>American</span></span> audiobook narrator dedicated to entertaining and authentic storytelling. {aSentence.map((word, idx) => <span style={{ fontSize: baseFontSize + 0.25 * idx + "rem" }}>{word} </span>)}while maintaining an acoustically <i>diverse</i> arsenal of <div style={{ display: "inline-flex", gap: "0.5rem", flexWrap: "wrap" }}>{rotatingSentence.map((word, idx) => <div style={{ display: "inline-block", rotate: rotations[idx % rotations.length] + "deg" }}><b>{word + " "}</b></div>)}</div>While not narrating, Taylor enjoys <span className='long_cang'>drinking tea</span>, <div className='retro' style={{ display: "inline-block" }}>playing guitar</div>, and (of course) reading <div className='books'><span>b</span><span>o</span>o<span>k</span><span>s</span></div> (<span className='butcherman_regular' >yes, listening counts as reading</span>)!</> : <>Taylor(he/him) is a Vietnamese-American audiobook narrator dedicated to entertaining and authentic storytelling. He has a youthful voice that can portray natural character growth, while maintaining an acoustically diverse arsenal of characters that brings an environment to life. While not narrating, Taylor enjoys drinking tea, playing guitar, and (of course) reading books (yes, listening counts as reading)!</>}
				</div>
				<button onClick={() => SetEffect(!effect)}>click here to toggle effects above if it's too hard to read</button>
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
							<li><b>Languages: </b>English, Vietnamese <i>(Conversational)</i>, Mandarin <i>(HSK5)</i></li>
							<li><b>Accents/Dialects: </b>French, Scottish (General), British (General), Vietnamese, Asian (General)</li>
						</ul>
					</div>
					<div id="contact">
						<div className='header'>
							contact
						</div>
						<ul className='info'>
							<li>taylornguyen904@gmail.com</li>
							<li>
								<a target="_blank" href="https://www.acx.com/narrator?p=A2OS7K3L2TWAMS">https://www.acx.com/narrator?p=A2OS7K3L2TWAMS</a>
							</li>
						</ul>
					</div>
					<div id="recent_work">
						<div className='header'>recent works</div>
						<div className='info works'>
							{works.map((item) => {
								return (
									<a target='_blank' href={item[1]}><img className="work" src={item[0]}></img></a>
								)
							})}
						</div>
					</div>
					<div id="upcoming work">
						<div className='header'>upcoming works</div>
						<div className='info works'>
							{upcoming.map((item) => {
								return (
									<a target="_blank" href={item[1]}><img src={item[0]} className='work'></img></a>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<div id="demos">
				<div className='header'>demos</div>
				<div>Description Guide: [characters description], [book genre], [additional information], [book title] </div>
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
									<figcaption>{u[1]} </figcaption>

									<audio className={className} controls src={srcName}></audio>
									<a target="_blank" title='download this sample' href={srcName} download={srcName}><img className='download' src='/download.png'></img></a>
								</figure>
							</li>
						)
					})}

				</ul>
				<div>Downloaded samples will have the filename format:</div><div> <b>Taylor_Nguyen_Genre_Title.mp3</b></div>
				<br></br>
				<div className='header'>Associations</div>
				<a target='_blank' href='https://pronarrators.org/'><img className='association' src='/pana.jpg'></img></a>
				<br />
				<a target='_blank' href='https://www.audiopub.org/'><img className='association' src='/apa.png'></img></a>
				<div className='header'>Social Media</div>
				<div className='socials'>
					<a target='_blank' href='https://www.tiktok.com/@unemployed_reader'><img className='social_media_logo' src='/tik_tok_logo.png'></img></a>
					<a target='_blank' href='https://www.instagram.com/unemployed_readerr/'><img className='social_media_logo' src='/ig_logo.png'></img></a>
					<a target='_blank' href='https://www.youtube.com/@unemployedreader'><img className='social_media_logo' src='/yt_logo.png'></img></a>
				</div>
			</div>

		</div >
	)
}

export default App
