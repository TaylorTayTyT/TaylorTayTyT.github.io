

import './App.css';


const BIO =
	"Taylor is a queer, Vietnamese-American born in Michigan and raised in Southern California (Orange County!). He earned his BS in Computer Science and BA in East Asian Studies at Johns Hopkins University, but discovered his passion for audio storytelling through a digital media program. He can speak Vietnamese and Mandarin, and has a youthful voice that naturally lends itself to YA, LGBTQ+, Children\'s Fantasy, and LitRPG (though he personally loves to read fantasy and magical realism). While not reading, you can find him preparing gongfu tea, playing with his one and a half eyed cat, or baking bread. You can visit his website at www.t- oh wait, you're aleady here!";

const TAGS =
	"tags: Asian American, Vietnamese, queer, lion dance, tea, cat, baking, computer, computer science, Mandarin, Vietnamese, Chinese language, youthful";
//format is src, title, descriptor
const SAMPLES = [
	["/Taylor_Nguyen_Children_Fantasy_The_Sun_And_The_Star.mp3", "Children's Fantasy, LGBTQ+, 3M 1F, The Sun and the Star"],
	["/Taylor_Nguyen_Children_Fantasy_Aru_Shah.mp3", "Children's Fantasy, 3F 1M, Aru Shah"],
	["/Taylor_Nguyen_LitRPG_ORV.mp3", "LitRPG, 2M 1F, ORV"],
	["/Taylor_Nguyen_Fantasy_Tehanu.mp3", "Fantasy, 1M 1F, Scottish (General Medieval), British (General), Philosophical Conversation, Tehanu"],
	["/Taylor_Nguyen_Fiction_Giovannis_Room.mp3", "Fiction, LGBTQ+, 2M, French, Messy Breakup, Giovanni's Room"],
	["/Taylor_Nguyen_Romace_A_Pho_Love_Story.mp3", "Fiction, 2M 1F, Vietnamese, Fight With Parents, A Pho Love Story"],
	["/Taylor_Nguyen_Romance_But_Love_Is_A_Voice_On_The_Wind.mp3", "Romance, 3M, LGBTQ+, British (General), Making the First Romantic Move, But Love Is A Voice on the Wind"],
	["/Taylor_Nguyen_Erotica_The_Bride_Test.mp3", "Erotica, 1M 1F, Vietnamese, First Time, The Bride Test"],


]

const SOCIALS = ["tik_tok_logo.png", "ig_logo.png", "yt_logo.png"];
const SOCIALS_LINK = ["https://tiktok.com/@unemployed_reader", "https://www.instagram.com/unemployed_readerr/", "https://www.youtube.com/@unemployedreader"];



function App() {
	return (
		<main className="page">
			{/* Left: bio */}
			<section className="panel panel--bio" aria-labelledby="narrator-name">
				<p className="listen">Listen to</p>

				<div className="bar bar--logos">
					<div id="orgs">
						<a href="https://www.audiopub.org/"><img src="/apa.png"></img></a>
						<a href="https://pronarrators.org/"><img src="/pana.png"></img></a>
					</div>
				</div>

				<h1 className="name" id="narrator-name">
					Taylor Nguyen
				</h1>

				<div className="bar bar--tagline">Shoot me a message at taylor@taylorthenguyen.com!</div>

				<div className="bio-row">
					<div>
						<figure className="photo">
							<img src="\pic of me.JPG"></img>
						</figure>
						<p className="tags">{TAGS}</p>
					</div>

					<div>
						<p className="bio">{BIO}</p>
						<div className="gallery" aria-hidden="true">
							{SOCIALS.map((elem, idx) => (
								<a href={SOCIALS_LINK[idx]}><img src={elem} className="gallery__item" key={idx}>

								</img></a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Right: samples */}
			<section className="panel panel--samples" aria-labelledby="samples-heading">
				<p className="kicker">Don't miss hearing out these spellbinding</p>

				<div className="samples-bar">
					<h2 id="samples-heading">Samples</h2>
				</div>

				<p className="subhead">from audiobook narrator</p>

				<div className="narrator-bar">Taylor Nguyen</div>

				{/* list samples here*/}
				<p className='subhead' style={{ "fontSize": "1.5rem" }}><b>Title Format</b>: [Genre], [Character Descriptions], [Accents], [Scene Description], [Title]</p>
				<ul className="samples">
					{SAMPLES.map(item => {
						return (
							<li>
								<figure>
									<figcaption>{item[1]}</figcaption>
									<audio controls preload='true'>
										<source src={item[0]}></source>
									</audio>
									<a href={item[0]} download={item[0].split(".")[0]}><img srcSet='download.png'></img></a>
								</figure>
							</li>

						)
					})}
				</ul>
			</section>
		</main>
	);
}

export default App;

