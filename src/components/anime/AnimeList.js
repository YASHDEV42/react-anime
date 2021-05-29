import Anime from './Anime';
import './AnimeList.css';
import { Component } from 'react';
import monster from '../../img/monster.jpg'; import attack from '../../img/attack on titan.jpg'; import kaiji from '../../img/kaiji.jpg'; import moriarty from '../../img/moriarty.jpg'; import dethNote from '../../img/deth-note.jpg'; import code from '../../img/code.jpg'; import steinsGate from '../../img/steinsGate.jpg'; import neverland from '../../img/neverland.jpg'; import naruto from '../../img/naruto.jpeg'; import another from '../../img/Another_poster.jpg'; import Jujutsu from '../../img/Jujutsu.jpg'; import rainbow from '../../img/rainbow.jpg'; import zankyou from '../../img/zankyou.png'; import boku from '../../img/boku.jpeg'; import fullmetal from '../../img/fullmetal.jpg'; import dororo from '../../img/dororo.jpg'; import academia from '../../img/Academia.jpg'; import hunter from '../../img/hunter.jpg'; import charlotte from '../../img/charlotte.jpg'; import demon from "../../img/demon.jpg"; import vinland from "../../img/vinland.jpg"; import days from '../../img/days.jpg'; import kiseijuu from '../../img/kiseijuu.jpg'; import koutetsujou from '../../img/koutetsujou.jpg'; import tate from '../../img/tate.png'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'

class AnimeList extends Component {
state = {
    anime:[
        
        {id: 1, img: monster, name:"monster",             score: 9.9, rank: 1, episodes:74, season:1, genres:"Drama, Horror, Mystery, Police, Psychological, Seinen, Thriller",youtube:"https://www.youtube.com/embed/9aS-EgdAq6U",        link:"https://myanimelist.net/anime/19/Monster",                                                        story:"Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.So when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director.",},
        {id: 2, img: attack, name:"Attack on titan",      score: 9.8, rank: 2, episodes:75, season:5, genres: "Action, Military, Mystery, Super Power, Drama, Fantasy, Shounen",youtube:"https://www.youtube.com/embed/LHtdKWJdif4",      link:"https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=attac&cat=anime",        story:"Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",},
        {id: 9, img: code, name:"Code geass",             score: 9.4, rank: 3, episodes:50, season:2, genres:'Action, Military, Sci-Fi, Super Power, Drama, Mecha, School',youtube:"https://www.youtube.com/embed/DR1d_Pm729o",      link:"https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch?q=code&cat=anime",             story:"Lelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the 'Power of Kings.' Realizing the vast potential of his newfound 'power of absolute obedience,' Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.",},
        {id: 4, img: kaiji, name:"Kaiji",                 score: 9.3, rank: 4, episodes:52, season:2, genres:"Game, Psychological, Thriller, Seinen",youtube:"https://www.youtube.com/embed/EK1LiaJ-TSU",        link:"https://myanimelist.net/anime/3002/Gyakkyou_Burai_Kaiji__Ultimate_Survivor?q=kaiji&cat=anime",    story:"Kaiji Itou is a good-for-nothing loiterer who spends his days drinking beer and stealing hubcaps—that is, until he ends up being tricked by his former co-worker. Unable to suddenly repay his friend's huge debt all by himself, Kaiji is offered a shady deal to participate in an illegal underground gamble on a cruise ship. This turns out to be nothing more than the beginning of his new life of hell—thrown headlong into a life-threatening roller coaster of mind games, cheating, and deceit.",},      
        {id: 3, img: moriarty, name:"Moriarty",           score: 9.2, rank: 5, episodes:19, season:2, genres:"Mystery, Historical, Psychological, Thriller, Shounen",youtube:"https://www.youtube.com/embed/YA_zLUnLaQM",      link:"https://myanimelist.net/anime/40911/Yuukoku_no_Moriarty?q=mor&cat=anime",                         story:"During the late 19th century, Great Britain has become the greatest empire the world has ever known. Hidden within its success, the nation's rigid economic hierarchy dictates the value of one's life solely on status and wealth. To no surprise, the system favors the aristocracy at the top and renders it impossible for the working class to ascend the ranks.William James Moriarty, the second son of the Moriarty household, lives as a regular noble while also being a consultant for the common folk to give them a hand and solve their problems. However, deep inside him lies a desire to destroy the current structure that dominates British society and those who benefit from it.Alongside his brothers Albert and Louis, the trio will do anything it takes to change the filthy world they live in—even if blood must be spilled."},
        {id: 5, img: dethNote, name:"Death Note",         score: 8.6, rank: 6, episodes:37, season:1, genres:"Mystery, Drama, Shounen, Supernatural, Psychological",youtube:"https://www.youtube.com/embed/NlJZ-YgAt-c",         link:"https://myanimelist.net/manga/21/Death_Note?q=deth&cat=manga",                                    story:"Ryuk, a god of death, drops his Death Note into the human world for personal pleasure. In Japan, prodigious high school student Light Yagami stumbles upon it. Inside the notebook, he finds a chilling message: those whose names are written in it shall die. Its nonsensical nature amuses Light; but when he tests its power by writing the name of a criminal in it, they suddenly meet their demise.",},
        {id:21, img: vinland, name:"Vinland Saga",        score:8.5, rank:  7, episodes:24, season:1, genres:'Action, Adventure, Drama, Historical, Seinen',youtube:"https://www.youtube.com/embed/QlvdlIPCUHo",        link:"https://myanimelist.net/anime/37521/Vinland_Saga",                                                story:"Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, 'You have no enemies, nobody does. There is nobody who it's okay to hurt,' as he grew, Thorfinn knew that nothing was further from the truth.The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on"},
        {id:10, img: steinsGate, name:"Steins Gate",      score:8.4, rank:  8, episodes:47, season:2, genres:'Sci-Fi, Psychological, Drama, Thriller',youtube:"https://www.youtube.com/embed/27OZc-ku6is",        link:"https://myanimelist.net/anime/9253/Steins_Gate?q=stein&cat=anime",                                story:"The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective 'future gadgets' with fellow lab members: Mayuri Shiina, his air-headed childhood friend, and Hashida Itaru, a perverted hacker nicknamed 'Daru.' The three pass the time by tinkering with their most promising contraption yet, a machine dubbed the 'Phone Microwave,' which performs the strange function of morphing bananas into piles of green gel.Though miraculous in itself, the phenomenon doesn't provide anything concrete in Okabe's search for a scientific breakthrough; that is, until the lab members are spurred into action by a string of mysterious happenings before stumbling upon an unexpected success—the Phone Microwave can send emails to the past, altering the flow of history."},
        {id: 7, img: neverland, name:"Neverland",         score:8.3, rank:  9, episodes:23, season:2, genres:'Sci-Fi, Mystery, Horror, Psychological, Thriller, Shounen',youtube:"https://www.youtube.com/embed/JIcjo7XVlOY",       link:"https://myanimelist.net/anime/37779/Yakusoku_no_Neverland?q=the%20pro&cat=anime",                 story:"Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their 'Mama,' Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage—a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family, never to be heard from again.However, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama."},
        {id:16, img: fullmetal,name:'Fullmetal alchemist',score:8.2, rank: 10, episodes:64, season:1, genres:'Action, Military, Adventure, Comedy, Drama, Magic, Fantasy, Shounen',youtube:"https://www.youtube.com/embed/RNwNA1M8A94",       link:"https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=full&cat=anime",            story:"Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called 'automail' and become a state alchemist, the Fullmetal Alchemist."},
        {id:22, img: days, name:"91 Days",                score:7.9, rank: 11, episodes:12, season:1, genres:"Shochiku, Mainichi Broadcasting System, Shochiku Music Publishing",youtube:"https://www.youtube.com/embed/5Vhwzy-NkLU",      link:"https://myanimelist.net/anime/32998/91_Days?q=91&cat=anime",                                      story:"As a child living in the town of Lawless, Angelo Lagusa has witnessed a tragedy: his parents and younger brother have been mercilessly slaughtered by the Vanetti mafia family. Losing everything he holds dear, he leaves both his name and hometown behind, adopting the new identity of Avilio Bruno.Seven years later, Avilio finally has his chance for revenge when he receives a mysterious letter prompting him to return to Lawless. Obliging, he soon encounters the Vanetti don's son, Nero, and seeks to befriend him using the skills he has quietly honed for years.Set during the Prohibition era, 91 Days tells the story of Avilio's dark, bloodstained path to vengeance, as he slowly ends each of the men involved in the killing of his family."},
        {id:19, img: hunter, name:'Hunter x Hunter',      score:7.6, rank: 12, episodes:148, season:1,   genres:"Action, Adventure, Fantasy, Shounen, Super Power",youtube:"https://www.youtube.com/embed/d6kBeJjTGnY",      link:"https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011?q=hunter&cat=anime",                     story:"Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined."},
        {id: 8, img: naruto, name:"Naruto",               score:7.4, rank: 13, episodes:720, season:2,  genres:"Action, Adventure, Comedy, Super Power, Martial Arts, Shounen",youtube:"https://www.youtube.com/embed/j2hiC9BmJlQ",     link:"https://myanimelist.net/anime/20/Naruto?q=naruto&cat=anime",                                      story:"Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."},
        {id: 6, img: demon, name:'Demon Slayer',          score:7.3, rank: 14, episodes:26, season:1,  genres:"Action, Demons, Historical, Shounen, Supernatural",youtube:"https://www.youtube.com/embed/6vMuWuWlW4I",        link:"https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon%20sl&cat=anime",                     story:"Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."},
        {id:23, img: kiseijuu, name:"Kiseijuu",           score:7.2, rank: 15, episodes:24, season:1,  genres:'Action, Sci-Fi, Horror, Psychological, Drama, Seinen',youtube:"https://www.youtube.com/embed/9Oe9umzw1Gc",        link:"https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu?q=Kiseijuu&cat=anime",             story:"All of a sudden, they arrived: parasitic aliens that descended upon Earth and quickly infiltrated humanity by burrowing into the brains of vulnerable targets. These insatiable beings acquire full control of their host and are able to morph into a variety of forms in order to feed on unsuspecting prey.Sixteen-year-old high school student Shinichi Izumi falls victim to one of these parasites, but it fails to take over his brain, ending up in his right hand instead. Unable to relocate, the parasite, now named Migi, has no choice but to rely on Shinichi in order to stay alive. Thus, the pair is forced into an uneasy coexistence and must defend themselves from hostile parasites that hope to eradicate this new threat to their species."},
        {id:18, img: academia, name:"Boku no Hero",       score:7.1, rank: 16, episodes:97, season:5, genres:"Action, Comedy, School, Shounen, Super Power",youtube:"https://www.youtube.com/embed/D5fYOnwYkj4",        link:"https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=my%20hero&cat=anime",                 story:"The appearance of 'quirks,' newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!"},
        {id:17, img: dororo, name:'Dororo',               score:6.5, rank: 17, episodes:24, season:1, genres:"Action, Adventure, Demons, Historical, Samurai, Shounen, Supernatural",youtube:"https://www.youtube.com/embed/v3ApcTz1lwE",       link:"https://myanimelist.net/anime/37520/Dororo?q=dor&cat=anime",                                      story:"The greedy samurai lord Daigo Kagemitsu's land is dying, and he would do anything for power, even renounce Buddha and make a pact with demons. His prayers are answered by 12 demons who grant him the power he desires by aiding his prefecture's growth, but at a price. When Kagemitsu's first son is born, the boy has no limbs, no nose, no eyes, no ears, nor even skin—yet still, he lives."},
        {id:12, img: Jujutsu, name:'Jujutsu kaisen',      score:6.4, rank: 18, episodes:24, season:1, genres:"Action, Demons, Supernatural, School, Shounen",youtube:"https://www.youtube.com/embed/4A_X-Dvl0ws",       link:"https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV?q=jujut&cat=anime",                         story:"Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the 'King of Curses.'"},
        {id:25, img: tate, name:"Tate no Yuusha",         score:4,   rank: 19, episodes:25, season:1,  genres:"Action, Adventure, Drama, Fantasy", youtube:"https://www.youtube.com/embed/h3n-chI028E",        link:"https://myanimelist.net/anime/35790/Tate_no_Yuusha_no_Nariagari?q=tate&cat=anime",                story:"The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the 'Shield Hero.' Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality."},
        {id:11, img: another, name:'Another',             score:3.5, rank: 20, episodes:12, season:1, genres:"Mystery, Horror, Supernatural, Thriller, School", youtube:"https://www.youtube.com/embed/UGoAl3L13bc",      link:"https://myanimelist.net/anime/11111/Another?q=another&cat=anime",                                 story:"In 1972, a popular student in Yomiyama North Middle School's class 3-3 named Misaki passed away during the school year. Since then, the town of Yomiyama has been shrouded by a fearful atmosphere, from the dark secrets hidden deep within.Twenty-six years later, 15-year-old Kouichi Sakakibara transfers into class 3-3 of Yomiyama North and soon after discovers that a strange, gloomy mood seems to hang over all the students. He also finds himself drawn to the mysterious, eyepatch-wearing student Mei Misaki; however, the rest of the class and the teachers seem to treat her like she doesn't exist. Paying no heed to warnings from everyone including Mei herself, Kouichi begins to get closer not only to her, but also to the truth behind the gruesome phenomenon plaguing class 3-3 of Yomiyama North."},
        {id:20, img: charlotte, name:"Charlotte",         score:3.3, rank: 21, episodes:13, season:1,  genres:"Drama, School, Super Power",youtube:"https://www.youtube.com/embed/6AgEzww-a0w",      link:"https://myanimelist.net/anime/28999/Charlotte?q=charlott&cat=anime",                              story:"While on the surface Yuu Otosaka appears to be just another charming and intelligent teenager, he has a secret—he has the ability to slip into people's minds and fully control their body for five seconds at a time. Yuu has been using this skill for years to gain the highest grades, which allowed him to enter a prestigious high school.When the enigmatic Nao Tomori catches Yuu using his power, she coerces him and his sister Ayumi into transferring to Hoshinoumi Academy, a school for students with supernatural abilities. The student council of the school, led by Nao, is tasked with secretly tracking down adolescents who abuse their powers. Yuu is forced to join the student council and together, they face formidable challenges that bring him closer to the shocking truth that his own, seemingly incomplete ability, might be more powerful than he could have ever imagined."},
        {id:14, img: zankyou, name:"Zankyou no Terror",   score:3.1, rank: 22, episodes:11, season:1, genres:"Mystery, Psychological, Thriller",youtube:"https://www.youtube.com/embed/nLVy50LnLMM",       link:"https://myanimelist.net/anime/23283/Zankyou_no_Terror?q=zanky&cat=anime",                         story:"Painted in red, the word 'VON' is all that is left behind after a terrorist attack on a nuclear facility in Japan. The government is shattered by their inability to act, and the police are left frantically searching for ways to crack down the perpetrators. The public are clueless—until, six months later, a strange video makes its way onto the internet. In it, two teenage boys who identify themselves only as Sphinx directly challenge the police, threatening to cause destruction and mayhem across Tokyo. Unable to stop the mass panic quickly spreading through the city and desperate for any leads in their investigation, the police struggle to act effectively against these terrorists, with Detective Kenjirou Shibazaki caught in the middle of it all."},
        {id:13, img: rainbow, name:"Rainbow",             score:3,   rank: 23, episodes:26, season:1,  genres:"Drama, Historical, Seinen, Thriller",youtube:"https://www.youtube.com/embed/mfpDLHEOdVU",      link:"https://myanimelist.net/anime/6114/Rainbow__Nisha_Rokubou_no_Shichinin?q=rain&cat=anime",         story:"Japan, 1955: Mario Minakami has just arrived at Shounan Special Reform School along with five other teenagers who have been arrested on serious criminal charges. All assigned to the same cell, they meet older inmate Rokurouta Sakuragi—a former boxer—with whom they establish a close bond. Under his guidance, and with the promise that they will meet again on the outside after serving their sentences, the delinquents begin to view their hopeless situation in a better light."},
        {id:15, img: boku, name:"Boku dake",              score:2,   rank: 24, episodes:12, season:1,  genres:"Mystery, Supernatural, Psychological, Seinen",youtube:"https://www.youtube.com/embed/SUKevBJ703o",       link:"https://myanimelist.net/manga/39325/Boku_dake_ga_Inai_Machi?q=boku%20da&cat=manga",               story:"Satoru Fujinuma is a 29-year-old who works part-time as a pizza deliveryman in order to make ends meet due to his unsuccessful career as a mangaka. But there is more to this struggling adult than meets the eye, as he possesses a mysterious ability which takes him back in time right before a life-threatening incident occurs. When Revival, as he calls it, triggers, it will continue to send him back again and again until he is able to save the lives of the individuals involved.But Satoru's life is about to take a turn for the worse when a loved one is killed by an unknown man and he is framed for the crime. Desperate to get away so that he can assess his situation, he is inexplicably sent 18 years into the past—right before the disappearance and death of his classmate, Kayo Hinazuki, an event that has plagued him since childhood."},
        {id:24, img:koutetsujou,name:"Kabaneri",          score:1,   rank: 25, episodes:12, season:1,  genres:"Action, Horror, Supernatural, Drama, Fantasy", youtube:"https://www.youtube.com/embed/NljBw9RtOx4",        link:"https://myanimelist.net/anime/28623/Koutetsujou_no_Kabaneri",                                     story:"The world is in the midst of the industrial revolution when horrific creatures emerge from a mysterious virus, ripping through the flesh of humans to sate their never-ending appetite. The only way to kill these beings, known as Kabane, is by destroying their steel-coated hearts. However, if bitten by one of these monsters, the victim is doomed to a fate worse than death, as the fallen rise once more to join the ranks of their fellow undead.Only the most fortified of civilizations have survived this turmoil, as is the case with the island of Hinomoto, where mankind has created a massive wall to protect themselves from the endless hordes of Kabane. The only way into these giant fortresses is via heavily-armored trains, which are serviced and built by young men such as Ikoma. Having created a deadly weapon that he believes will easily pierce through the hearts of Kabane, Ikoma eagerly awaits the day when he will be able to fight using his new invention. Little does he know, however, that his chance will come much sooner than he expected..."},
    ],
    Banime:[],
    search:"",

}

allHandler = () => {
    const Aanimes = [...this.state.Banime]
    Aanimes.map(item=>{
        return this.state.anime.push(item)
    })
    const anime=[...this.state.anime]
    anime.sort();
    const Banime=[]
    this.setState({
        anime:anime,
        Banime:Banime,
    })
    
}

fiveHandler = () => {
    const BAanimes = [...this.state.Banime]
    const anime = [...this.state.anime]
    anime.sort((a, b) => {
        return a.rank - b.rank;
    });
    BAanimes.map(item => {
        return anime.push(item)
    })

    this.setState({
        anime:anime,
    })
    
    const fanime = []
    const Banime = []
    anime.map(item => {
        return item.rank <= 5 ? fanime.push(item):Banime.push(item); 
        
        
    })
    this.setState({
        anime:fanime,
        Banime:Banime
    })    
    

}

tenHandler = () => {
    const BAanimes = [...this.state.Banime]
    const anime = [...this.state.anime]
    anime.sort((a, b) => {
        return a.rank - b.rank;
    });
    BAanimes.map(item => {
        return anime.push(item)
    })
    this.setState({
        anime:anime,
    })
    
    const Tanime = []
    
    const Banime=[]
    anime.map(item => {
        return item.rank <= 10 ? Tanime.push(item):Banime.push(item); 

    })
    this.setState({
        anime:Tanime,
        Banime:Banime
    })

    
}

searchHandler = e => {
    this.setState({ search: e.target.value })
}

atozHandler=() =>{
    const anime =[...this.state.anime]
    anime.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }else {
            return 0;
        }
        
    });
    this.setState({
        anime:anime,
    })
}

topHandler = () => {
    const anime = [...this.state.anime]
    anime.sort((a, b) => {
        return a.rank - b.rank;
    });
    this.setState({
        anime:anime,
    })
    console.log(this.state.anime);
}

scrollyHandler = ()=> {
    if(window.scrollY <= 220) {
        window.scroll({
            top: 250 - window.scrollY,
            behavior: "smooth"
        });
    }else if (window.scrollY > 220){
        window.scroll({
            top: window.scrollY + 680,
            behavior: "smooth"
        });
    }
    
    console.log(window.scrollY)
}

reversScrollyHandler = ()=> {
    window.scroll({
        top: window.scrollY - 680,
        behavior: "smooth"
    });
    console.log(window.scrollY)
}

render () {
    return (
        <div className="anime-list">
            <div className="fillter-box">
                <div className="search-box">
                    <form action="madry">
                        <input type="text" placeholder="Search..." name="search" onChange={this.searchHandler}/>
                        <button type="submit" disabled>Search</button>
                    </form>
                </div>
                <div className="fillters">
                    <button onClick={this.allHandler}>All</button>
                    <button onClick={this.topHandler}>Top</button>
                    <button onClick={this.fiveHandler}>Top 5</button>
                    <button onClick={this.tenHandler}>Top 10</button>
                    <button onClick={this.atozHandler}>A - Z</button>
                </div>
            </div>
            <div className="item">
            {
            
            this.state.anime.filter(item =>{
                    if (this.state.search === "") {
                        return item
                    }else if(item.name.toLowerCase().includes(this.state.search.toLowerCase())){
                        return item
                    }

                }).map(item => {
                    return(
                    <Anime animes={this.state.anime} anime={item} key={item.id}/>
                    )
                    

                })
            }
            
            </div>
            <button className="scroll" onClick={this.scrollyHandler}><AiOutlineArrowDown size="2.5em" /></button>
            <button className="scroll" onClick={this.reversScrollyHandler}><AiOutlineArrowUp size='2.5em' /></button>
        </div>

    );
}
}

export default AnimeList;