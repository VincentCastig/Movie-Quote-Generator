var quotes = [ { movie: '"Frankly, my dear, I don\'t give a damn." Gone with the Wind',
    genre: 'drama' },
  { movie: '"I\'m gonna make him an offer he can\'t refuse." The Godfather',
    genre: 'crime' },
  { movie: '"You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am." On the Waterfront',
    genre: 'crime' },
  { movie: '"Toto, I\'ve a feeling we\'re not in Kansas anymore." The Wizard of Oz',
    genre: 'fantasy' },
  { movie: '"Here\'s looking at you, kid." Casablanca',
    genre: 'romance' },
  { movie: '"Go ahead, make my day." Sudden Impact',
    genre: 'action' },
  { movie: '"All right, Mr. DeMille, I\'m ready for my close-up." Sunset Boulevard',
    genre: 'drama' },
  { movie: '"May the Force be with you." Star Wars',
    genre: 'sci-fi' },
  { movie: '"Fasten your seatbelts. It\'s going to be a bumpy night." All About Eve',
    genre: 'drama' },
  { movie: '"You talkin\' to me?" Taxi Driver', genre: 'crime' },
  { movie: '"What we\'ve got here is failure to communicate." Cool Hand Luke',
    genre: 'drama' },
  { movie: '"I love the smell of napalm in the morning." Apocalypse Now',
    genre: 'drama' },
  { movie: '"Love means never having to say you\'re sorry." Love Story',
    genre: 'romance' },
  { movie: '"The stuff that dreams are made of." The Maltese Falcon',
    genre: 'mystery' },
  { movie: '"E.T. phone home." E.T. the Extra-Terrestrial',
    genre: 'sci-fi' },
  { movie: '"They call me Mister Tibbs!" In the Heat of the Night',
    genre: 'crime' },
  { movie: '"Rosebud." Citizen Kane', genre: 'drama' },
  { movie: '"Made it, Ma! Top of the world!" White Heat',
    genre: 'action' },
  { movie: '"I\'m as mad as hell, and I\'m not going to take this anymore!" Network',
    genre: 'drama' },
  { movie: '"Louis, I think this is the beginning of a beautiful friendship." Casablanca',
    genre: 'romance' },
  { movie: '"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." The Silence of the Lambs',
    genre: 'thriller' },
  { movie: '"Bond. James Bond." Dr. No', genre: 'action' },
  { movie: '"There\'s no place like home." The Wizard of Oz',
    genre: 'fantasy' },
  { movie: '"I am big! It\'s the pictures that got small." Sunset Boulevard',
    genre: 'drama' },
  { movie: '"Show me the money!" Jerry Maguire', genre: 'comedy' },
  { movie: '"Why don\'t you come up sometime and see me?" She Done Him Wrong',
    genre: 'comedy' },
  { movie: '"I\'m walking here! I\'m walking here!" Midnight Cowboy',
    genre: 'drama' },
  { movie: '"Play it, Sam. Play \'As Time Goes By.\'" Casablanca',
    genre: 'romance' },
  { movie: '"You can\'t handle the truth!" A Few Good Men',
    genre: 'thriller' },
  { movie: '"I want to be alone." Grand Hotel', genre: 'drama' },
  { movie: '"After all, tomorrow is another day!" Gone with the Wind',
    genre: 'romance' },
  { movie: '"Round up the usual suspects." Casablanca',
    genre: 'romance' },
  { movie: '"I\'ll have what she\'s having." When Harry Met Sally...',
    genre: 'comedy' },
  { movie: '"You know how to whistle, don\'t you, Steve? You just put your lips together and blow." To Have and Have Not',
    genre: 'romance' },
  { movie: '"You\'re gonna need a bigger boat." Jaws',
    genre: 'thriller' },
  { movie: '"Badges? We ain\'t got no badges! We don\'t need no badges! I don\'t have to show you any stinking badges!" The Treasure of the Sierra Madre',
    genre: 'western' },
  { movie: '"I\'ll be back." The Terminator', genre: 'action' },
  { movie: '"Today, I consider myself the luckiest man on the face of the Earth." The Pride of the Yankees',
    genre: 'drama' },
  { movie: '"If you build it, he will come." Field of Dreams',
    genre: 'fantasy' },
  { movie: '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." Forrest Gump',
    genre: 'comedy' },
  { movie: '"We rob banks." Bonnie and Clyde', genre: 'crime' },
  { movie: '"Plastics." The Graduate', genre: 'drama' },
  { movie: '"We\'ll always have Paris." Casablanca',
    genre: 'romance' },
  { movie: '"I see dead people." The Sixth Sense',
    genre: 'thriller' },
  { movie: '"Stella! Hey, Stella!" A Streetcar Named Desire',
    genre: 'drama' },
  { movie: '"Oh, Jerry, don\'t let\'s ask for the moon. We have the stars." Now, Voyager',
    genre: 'drama' },
  { movie: '"Shane. Shane. Come back!" Shane', genre: 'drama' },
  { movie: '"Well, nobody\'s perfect." Some Like It Hot',
    genre: 'comedy' },
  { movie: '"It\'s alive! It\'s alive!" Frankenstein',
    genre: 'thriller' },
  { movie: '"Houston, we have a problem." Apollo 13',
    genre: 'drama' },
  { movie: '"You\'ve got to ask yourself one question: \'Do I feel lucky?\' Well, do ya, punk?" Dirty Harry',
    genre: 'action' },
  { movie: '"You had me at \'hello.\'" Jerry Maguire',
    genre: 'comedy' },
  { movie: '"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know." Animal Crackers',
    genre: 'comedy' },
  { movie: '"There\'s no crying in baseball!" A League of Their Own',
    genre: 'comedy' },
  { movie: '"La-dee-da, la-dee-da." Annie Hall', genre: 'romance' },
  { movie: '"A boy\'s best friend is his mother." Psycho',
    genre: 'thriller' },
  { movie: '"Greed, for lack of a better word, is good." Wall Street',
    genre: 'drama' },
  { movie: '"Keep your friends close, but your enemies closer." The Godfather Part II',
    genre: 'crime' },
  { movie: '"As God is my witness, I\'ll never be hungry again." Gone with the Wind',
    genre: 'drama' },
  { movie: '"Well, here\'s another nice mess you\'ve gotten me into!" Sons of the Desert',
    genre: 'comedy' },
  { movie: '"Say \'hello\' to my little friend!" Scarface',
    genre: 'action' },
  { movie: '"What a dump." Beyond the Forest', genre: 'drama' },
  { movie: '"Mrs. Robinson, you\'re trying to seduce me. Aren\'t you?" The Graduate',
    genre: 'drama' },
  { movie: '"Gentlemen, you can\'t fight in here! This is the War Room!" Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    genre: 'comedy' },
  { movie: '"Elementary, my dear Watson." The Adventures of Sherlock Holmes',
    genre: 'mystery' },
  { movie: '"Get your stinking paws off me, you damned dirty ape." Planet of the Apes',
    genre: 'action' },
  { movie: '"Of all the gin joints in all the towns in all the world, she walks into mine." Casablanca',
    genre: 'romance' },
  { movie: '"Here\'s Johnny!" The Shining', genre: 'thriller' },
  { movie: '"They\'re here!" Poltergeist', genre: 'thriller' },
  { movie: '"Is it safe?" Marathon Man', genre: 'crime' },
  { movie: '"Wait a minute, wait a minute. You ain\'t heard nothin\' yet!" The Jazz Singer',
    genre: 'drama' },
  { movie: '"No wire hangers, ever!" Mommie Dearest',
    genre: 'drama' },
  { movie: '"Mother of mercy, is this the end of Rico?" Little Caesar',
    genre: 'action' },
  { movie: '"Forget it, Jake, it\'s Chinatown." Chinatown',
    genre: 'mystery' },
  { movie: '"I have always depended on the kindness of strangers." A Streetcar Named Desire',
    genre: 'drama' },
  { movie: '"Hasta la vista, baby." Terminator 2: Judgment Day',
    genre: 'action' },
  { movie: '"Soylent Green is people!" Soylent Green',
    genre: 'sci-fi' },
  { movie: '"Open the pod bay doors, HAL." 2001: A Space Odyssey',
    genre: 'sci-fi' },
  { movie: 'Striker: "Surely you can\'t be serious." Rumack: "I am serious … and don\'t call me Shirley." Airplane!',
    genre: 'comedy' },
  { movie: '"Yo, Adrian!" Rocky', genre: 'action' },
  { movie: '"Hello, gorgeous." Funny Girl', genre: 'romance' },
  { movie: '"Toga! Toga!" National Lampoon\'s Animal House',
    genre: 'comedy' },
  { movie: '"Listen to them. Children of the night. What music they make." Dracula',
    genre: 'fantasy' },
  { movie: '"Oh, no, it wasn\'t the airplanes. It was Beauty killed the Beast." King Kong',
    genre: 'fantasy' },
  { movie: '"My precious." The Lord of the Rings: The Two Towers',
    genre: 'fantasy' },
  { movie: '"Attica! Attica!" Dog Day Afternoon', genre: 'drama' },
  { movie: '"Sawyer, you\'re going out a youngster, but you\'ve got to come back a star!" 42nd Street',
    genre: 'romance' },
  { movie: '"Listen to me, mister. You\'re my knight in shining armor. Don\'t you forget it. You\'re going to get back on that horse, and I\'m going to be right behind you, holding on tight, and away we\'re gonna go, go, go!" On Golden Pond',
    genre: 'drama' },
  { movie: '"Tell \'em to go out there with all they got and win just one for the Gipper." Knute Rockne, All American',
    genre: 'drama' },
  { movie: '"A martini. Shaken, not stirred." Goldfinger',
    genre: 'action' },
  { movie: '"Who\'s on first?" The Naughty Nineties',
    genre: 'comedy' },
  { movie: '"Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It\'s in the hole! It\'s in the hole! It\'s in the hole!" Caddyshack',
    genre: 'comedy' },
  { movie: '"Life is a banquet, and most poor suckers are starving to death!" Auntie Mame',
    genre: 'drama' },
  { movie: '"I feel the need—the need for speed!" Top Gun',
    genre: 'action' },
  { movie: '"Carpe diem. Seize the day, boys. Make your lives extraordinary." Dead Poets Society',
    genre: 'drama' },
  { movie: '"Snap out of it!" Moonstruck', genre: 'drama' },
  { movie: '"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." Yankee Doodle Dandy',
    genre: 'drama' },
  { movie: '"Nobody puts Baby in a corner." Dirty Dancing',
    genre: 'romance' },
  { movie: '"I\'ll get you, my pretty, and your little dog too!" The Wizard of Oz',
    genre: 'fantasy' },
  { movie: '"I\'m the King of the World" Titanic',
    genre: 'romance' } ]
