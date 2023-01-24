  const movies =
      [{
        title: 'The Thing',
        director: 'John Carpenter',
        year: '1982',
        genre: 'Horror, Sci-Fi',
      },
      {
        title: 'Blade Runner',
        director: 'Ridley Scott',
        year: '1982',
        genre: 'Drama, Sci-Fi, Thriller',
      },
      {
        title: 'Blade Runner 2049',
        director: 'Denis Villeneuve',
        year: '2017',
        genre: 'Drama, Sci-Fi',
      },
      {
        title: 'Dead Poets Society',
        director: 'Peter Weir',
        year: '1989',
        genre: 'Drama',
      },
      {
        title: 'Garden State',
        director: 'Zach Braff',
        year: '2014',
        genre: 'Drama, Romance, Comedy',
      },
      {
        title: 'Donnie Darko',
        director: 'Richard Kelly',
        year: '2001',
        genre: 'Drama, Sci-Fi, Mystery',
      },
      {
        title: 'Fargo',
        director: 'Coen Brothers',
        year: '1996',
        genre: 'Drama, Thriller',
      },
      {
        title: 'Stand By Me',
        director: 'Rob Reiner',
        year: '1986',
        genre: 'Drama, Crime',
      },
      {
        title: "Ferris Bueller's Day Off",
        director: 'John Huges',
        year: '1986',
        genre: 'Comedy',
      },
      {
        title: 'The Life Aquatic with Steve Zissou',
        director: 'Wes Anderson',
        year: '2004',
        genre: 'Drama, Comedy, Adventure',
      },
      {
        title: 'Nightcrawler',
        director: 'Dan Gilroy',
        year: '2014',
        genre: 'Drama, Crime, Thriller',
      },
      {
        title: 'My Own Private Idaho',
        director: 'Gus Van Sant',
        year: '1991',
        genre: 'Drama, Adventure, Romance',
      },
      {
        title: 'The Goonies',
        director: 'Richard Donner',
        year: '1985',
        genre: 'Adventure, Comedy',
      },
      {
        title: 'Better Off Dead',
        director: 'Savage Steve Holland',
        year: '1985',
        genre: 'Comedy, Romance',
      },
      {
        title: 'Clue',
        director: 'Jonathan Lynn',
        year: '1985',
        genre: 'Mystery, Crime, Thriller, Comedy',
      },
      {
        title: 'The Mummy',
        director: 'Stephen Sommers',
        year: '1999',
        genre: 'Fantasy, Comedy, Action, Adventure',
      },
      {
        title: 'Inside Llewyn Davis',
        director: 'Coen Brothers',
        year: '2013',
        genre: 'Drama, Music',
      },
      {
        title: 'The Lighthouse',
        director: 'Robbert Eggers',
        year: '2019',
        genre: 'Drama, Fantasy, Horror, Thriller',
      },
      {
        title: 'Running on Empty',
        director: 'Sidney Lumet',
        year: '1988',
        genre: 'Drama, Crime, Romance',
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: '1994',
        genre: 'Drama, Crime',
      },
      {
        title: 'Christine',
        director: 'John Carpenter',
        year: '1983',
        genre: 'Horror',
      },
      {
        title: 'Brokeback Mountain',
        director: 'Ang Lee',
        year: '2005',
        genre: 'Drama, Romance',
      },
      {
        title: 'A Day on the Grand Canal with the Emperor of China or: Surface Is Illusion But So Is Depth',
        director: 'Philip Haas',
        year: '1988',
        genre: 'Documentary',
      },
      {
        title: 'Almost Famous',
        director: 'Cameron Crowe',
        year: "2000",
        genre: 'Drama, Music',
      },
      {
        title: 'Skeleton Twins',
        director: 'Craig Johnson',
        year: '2014',
        genre: 'Drama, Family',
      },
      {
        title: 'Gremlins',
        director: 'Joe Dante',
        year: '1984',
        genre: 'Horror, Fantasy, Comedy',
      },
      {
        title: 'My Best Friend Is a Vampire',
        director: 'Jimmy Hutson',
        year: '1987',
        genre: 'Horror, Family, Comedy',
      },
      {
        title: 'Under an Arctic Sky',
        director: 'Chris Burkard',
        year: '2017',
        genre: 'Documentary, Adventure',
      },
      {
        title: "Singin' in the Rain",
        director: 'Stanley Donen, Gene Kelly',
        year: '1952',
        genre: 'Comedy, Music, Romance',
      },
      {
        title: 'The NeverEnding Story',
        director: 'Wolfgang Petersen',
        year: '1984',
        genre: 'Drama, Fantasy, Adventure, Family',
      },
      {
        title: 'The Princess Bride',
        director: 'Rob Reiner',
        year: '1987',
        genre: 'Drama, Fantasy, Comedy, Adventure, Romance',
      },
      {
        title: 'Ghostbusters',
        director: 'Ivan Reitman',
        year: '1984',
        genre: 'Fantasy, Comedy',
      },
      {
        title: 'Halloween',
        director: 'John Carpenter',
        year: '1978',
        genre: 'Horror, Thriller',
      },
      {
        title: 'The Breakfast Club',
        director: 'John Hughes',
        year: '1985',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Jurassic Park',
        director: 'Steven Spielberg',
        year: '1993',
        genre: 'Sci-Fi, Adventure',
      },
      {
        title: 'Alien',
        director: 'Ridley Scott',
        year: '1979',
        genre: 'Sci-Fi, Horror',
      },
      {
        title: 'Back to the Future',
        director: 'Robert Zemeckis',
        year: '1985',
        genre: 'Family, Sci-Fi, Comedy, Adventure',
      },
      {
        title: 'Star Wars: A New Hope',
        director: 'George Lucas',
        year: '1977',
        genre: 'Sci-Fi, Action, Adventure',
      },
      {
        title: 'Silence of the Lambs',
        director: 'Jonathan Demme',
        year: '1991',
        genre: 'Drama, Crime, Thriller',
      },
      {
        title: 'Mad Max: Fury Road',
        director: 'George Miller',
        year: '2015',
        genre: 'Sci-Fi, Action, Adventure',
      },
      {
        title: 'Grand Budapest Hotel',
        director: 'Wes Anderson',
        year: '2014',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Fight Club',
        director: 'David Fincher',
        year: '1999',
        genre: 'Drama, Crime',
      },
      {
        title: 'The Sunlit Night',
        director: 'David Wnendt',
        year: '2019',
        genre: 'Drama, Romance',
      },
      {
        title: 'Eternal Sunshine of the Spotless Mind',
        director: 'Michel Gondry',
        year: '2004',
        genre: 'Drama, Romance, Sci-Fi',
      },
      {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        year: '1994',
        genre: 'Crime, Thriller',
      },
      {
        title: 'Jojo Rabbit',
        director: 'Taika Waititi',
        year: '2019',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Manchester by the Sea',
        director: 'Kenneth Lonergan',
        year: '2006',
        genre: 'Drama, Family',
      },
      {
        title: 'Little Miss Sunshine',
        director: 'Jonathan Dayton, Valerie Faris',
        year: '2006',
        genre: 'Drama, Comedy',
      },
      {
        title: 'The Neon Demon',
        director: 'Nicholas Winding Refn',
        year: '2016',
        genre: 'Drama, Thriller, Horror',
      },
      {
        title: 'Into the Wild',
        director: 'Sean Penn',
        year: '2007',
        genre: 'Adventure, Drama',
      },
      {
        title: 'The Secret Life of Walter Mitty',
        director: 'Ben Stiller',
        year: '2013',
        genre: 'Drama, Comedy, Fantasy, Adventure',
      },
      {
        title: 'The Outsiders',
        director: 'Francis Ford Coppola',
        year: '1983',
        genre: 'Drama, Crime',
      },
      {
        title: 'The Goldfinch',
        director: 'John Crowley',
        year: '2019',
        genre: 'Drama',
      },
      {
        title: 'Pleasantville',
        director: 'Gary Ross',
        year: '1998',
        genre: 'Comedy, Drama, Fantasy',
      },
      {
        title: 'October Sky',
        director: 'Joe Johnson',
        year: '1999',
        genre: 'Family, Drama',
      },
      {
        title: 'Suburbicon',
        director: 'George Clooney',
        year: '2017',
        genre: 'Crime, Mystery, Drama, Thriller',
      },
      {
        title: 'Velvet Buzzsaw',
        director: 'Dan Gilroy',
        year: '2019',
        genre: 'Horror, Mystery, Thriller',
      },
      {
        title: 'Coherence',
        director: 'James Ward Byrkit',
        year: '2013',
        genre: 'Thriller, Sci-Fi',
      },
      {
        title: 'The Square',
        director: 'Ruben Östlund',
        year: '2017',
        genre: 'Drama, Comedy, Swedish',
      },
      {
        title: 'On the Rocks',
        director: 'Sofia Coppola',
        year: '2020',
        genre: 'Drama, Comedy, Family',
      },
      {
        title: 'Never Let Me Go',
        director: 'Mark Romanek',
        year: '2010',
        genre: 'Romance, Sci-Fi, Drama',
      },
      {
        title: 'Anna and the Apocalypse',
        director: 'John McPhail',
        year: '2017',
        genre: 'Comedy, Horror, Fantasy',
      },
      {
        title: 'Weird Science',
        director: 'John Hughes',
        year: '1985',
        genre: 'Romance, Comedy, Sci-Fi',
      },
      {
        title: 'Black Bear',
        director: 'Lawrence Michael Levine',
        year: '2020',
        genre: 'Thriller, Comedy, Drama',
      },
      {
        title: "St. Elmo's Fire",
        director: 'Joel Schumacher',
        year: '1985',
        genre: 'Drama, Comedy, Romance',
      },
      {
        title: 'Catch Me If You Can',
        director: 'Steven Spielberg',
        year: '2002',
        genre: 'Drama, Crime',
      },
      {
        title: 'Broken Hill Blues',
        director: 'Sofis Norlin',
        year: '2013',
        genre: 'Drama, Swedish',
      },
      {
        title: 'A Ghost Story',
        director: 'David Lowery',
        year: '2017',
        genre: 'Drama, Fantasy',
      },
      {
        title: 'Detachment',
        director: 'Tony Kaye',
        year: '2011',
        genre: 'Drama',
      },
      {
        title: 'Brazil',
        director: 'Terry Gillam',
        year: '1985',
        genre: 'Comedy, Sci-Fi',
      },
      {
        title: 'The Oregonian',
        director: 'Calvin Lee Reeder',
        year: '2011',
        genre: 'Thriller, Mystery, Horror',
      },
      {
        title: 'Being John Malkovich',
        director: 'Spike Jonze',
        year: '1999',
        genre: 'Drama, Fantasy, Comedy',
      },
      {
        title: 'The Ritual',
        director: 'David Brukner',
        year: '2017',
        genre: 'Mystery, Horror, Thriller',
      },
      {
        title: 'Extra Ordinary',
        director: 'Mike Ahern, Edna Loughman',
        year: '2019',
        genre: 'Fantasy, Horror, Comedy',
      },
      {
        title: 'Sorry to Bother You',
        director: 'Boots Riley',
        year: '2018',
        genre: 'Comedy, Fantasy, Sci-Fi',
      },
      {
        title: 'Rushmore',
        director: 'Wes Anderson',
        year: '1998',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Time Bandits',
        director: 'Terry Gillam',
        year: '1981',
        genre: 'Comedy, Fantasy, Family, Adventure, Sci-Fi',
      },
      {
        title: 'Greener Grass',
        director: 'Jocelyn DeBoer, Dawn Luebbe',
        year: '2019',
        genre: 'Comedy',
      },
      {
        title: 'Dasies',
        director: 'Vêra Chytilová',
        year: '1966',
        genre: 'Comedy, Fantasy, Czech',
      },
      {
        title: 'The Linguini Incident',
        director: 'Richard Shepard',
        year: '1991',
        genre: 'Comedy, Crime',
      },
      {
        title: 'Thoroughbreds',
        director: 'Cory Finley',
        year: '2017',
        genre: 'Drama, Thriller',
      },
      {
        title: 'Burn Burn Burn',
        director: 'Chanya Button',
        year: '2015',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Igby Goes Down',
        director: 'Burr Steers',
        year: '2002',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Grosse Pointe Blank',
        director: 'George Armitage',
        year: '1997',
        genre: 'Romance, Action, Thriller, Comedy',
      },
      {
        title: 'Brooklyn',
        director: 'John Crowley',
        year: '2015',
        genre: 'Romance, Drama',
      },
      {
        title: 'Adventureland',
        director: 'Gerg Mottola',
        year: '2009',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Cinema Paradiso',
        director: 'Giuseppe Tornatore',
        year: '1988',
        genre: 'Drama, Romance, Italian',
      },
      {
        title: 'BeetleJuice',
        director: 'Tim Burton',
        year: '1988',
        genre: 'Comedy, Fantasy',
      },
      {
        title: 'Moonrise Kingdom',
        director: 'Wes Anderson',
        year: '2012',
        genre: 'Comedy, Romance, Drama',
      },
      {
        title: 'The Darjeeling Limited',
        director: 'Wes Anderson',
        year: '2007',
        genre: 'Drama, Comedy, Adventure',
      },
      {
        title: 'Bottle Rocket',
        director: 'Wes Anderson',
        year: '1996',
        genre: 'Drama, Comedy, Crime',
      },
      {
        title: 'The Grand Budapest Hotel',
        director: 'Wes Anderson',
        year: '2014',
        genre: 'Comedy, Drama',
      },
      {
        title: 'The Royal Tennenbaums',
        director: 'Wes Anderson',
        year: '2001',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Cocktail',
        director: 'Roger Donaldson',
        year: '1988',
        genre: 'Comedy, Drama, Romance',
      },
      {
        title: 'Repo Man',
        director: 'Alex Cox',
        year: '1984',
        genre: 'Sci-Fi, Comedy',
      },
      {
        title: 'Gummo',
        director: 'Harmony Korine',
        year: '1997',
        genre: 'Drama, Comedy, ',
      },
      {
        title: 'Last Night in Soho',
        director: 'Edgar Wright',
        year: '2021',
        genre: 'Horror, Thriller, Mystery',
      },
      {
        title: 'Everything Everywhere All at Once',
        director: 'Daniel Scheinert, Daniel Kwan',
        year: '2022',
        genre: 'Comedy, Action, Sci-Fi',
      },
      {
        title: 'Parasite',
        director: 'Bong Joon-ho',
        year: '2019',
        genre: 'Comedy, Drama, Thriller, Korean',
      },
      {
        title: 'The Lobster',
        director: 'Yorgos Lanthimos',
        year: '2015',
        genre: 'Drama, Romance, Comedy',
      },
      {
        title: 'Diabolique',
        director: 'Henri-Georges Clouzot',
        year: '1955',
        genre: 'Horror, Thriller, Drama',
      },
      {
        title: 'Rebel Without a Cause',
        director: 'Nicholas Ray',
        year: '1955',
        genre: 'Drama',
      },
      {
        title: 'Anatomy of a Murder',
        director: 'Otto Preminger',
        year: '1959',
        genre: 'Mystery, Crime, Thriller, Drama',
      },
      {
        title: 'Vertigo',
        director: 'Alfred Hitchcock',
        year: '1958',
        genre: 'Thriller, Mystery, Romance',
      },
      {
        title: 'The Blob',
        director: 'Irvin S. Yeaworth Jr.',
        year: '1958',
        genre: 'Horror, Sci-Fi',
      },
      {
        title: 'North by Northwest',
        director: 'Alfred Hitchcock',
        year: '1959',
        genre: 'Thriller, Mystery',
      },
      {
        title: 'Sabrina',
        director: 'Billy Wilder',
        year: '1954',
        genre: 'Romance, Comedy, Drama',
      },
      {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: '1954',
        genre: 'Thriller, Mystery',
      },
      {
        title: 'Creature from the Black Lagoon',
        director: 'JAck Arnold',
        year: '1954',
        genre: 'Sci-Fi, Adventure, Horror',
      },
      {
        title: 'Roman Holiday',
        director: 'William Wyler',
        year: '1953',
        genre: 'Comedy, Romance, Drama',
      },
      {
        title: 'Strangers on a Train',
        director: 'Alfred Hitchcock',
        year: '1951',
        genre: 'Mystery, Thriller, Crime',
      },
      {
        title: 'Psycho',
        director: 'Alfred Hitchcock',
        year: '1960',
        genre: 'Drama, Thriller, Horror',
      },
      {
        title: "Breakfast at Tiffany's",
        director: 'Blake Edwards',
        year: '1961',
        genre: 'Comedy, Romance',
      },
      {
        title: 'The Birds',
        director: 'Alfred Hitchcock',
        year: '1963',
        genre: 'Horror',
      },
      {
        title: 'The Umbrellas of Cherbourg',
        director: 'Jacques Demy',
        year: '1964',
        genre: 'Romance, Drama, French',
      },
      {
        title: 'The Endless Summer',
        director: 'Bruce Brown',
        year: '1966',
        genre: 'Documentary',
      },
      {
        title: 'Kuroneko',
        director: 'Kaneto Shindō',
        year: '1968',
        genre: 'Fantasy, Horror',
      },
      {
        title: '2001: A Space Odyssey',
        director: 'Stanley Kubrick',
        year: '1968',
        genre: 'Sci-Fi, Adventure, Mystery',
      },
      {
        title: "Rosemary's Baby",
        director: 'Roman Polanski',
        year: '1968',
        genre: 'Drama, Horror',
      },
      {
        title: 'Yellow Submarine',
        director: 'George Dunning',
        year: '1968',
        genre: 'Animation, Music, Comedy, Fantasy, Adventure',
      },
      {
        title: 'Butch Cassidy and the Sundance Kid',
        director: 'George Roy Hill',
        year: '1969',
        genre: 'Drama, Crime, Western',
      },
      {
        title: 'Mad Max',
        director: 'George Miller',
        year: '1979',
        genre: 'Action, Thriller, Sci-Fi, Adventure',
      },
      {
        title: 'Close Encounters of the Third Kind',
        director: 'Steven Spielberg',
        year: '1977',
        genre: 'Drama, Sci-Fi',
      },
      {
        title: 'Grey Gardens',
        director: 'Albert Maysles, David Maysles',
        year: '1975',
        genre: 'Documentary',
      },
      {
        title: 'Monty Python and the Holy Grail',
        director: 'Terry Gillam, Terry Jones',
        year: '1975',
        genre: 'Adventure, Comedy, Fantasy',
      },
      {
        title: 'WereWolves Within',
        director: 'Josh Ruben',
        year: '2021',
        genre: 'Horror, Comedy',
      },
      {
        title: 'Nobody',
        director: 'Ilya Naishuller',
        year: '2021',
        genre: 'Thriller, Crime, Action',
      },
      {
        title: 'CODA',
        director: 'Siân Heder',
        year: '2021',
        genre: 'Music, Romance, Drama',
      },
      {
        title: 'I Care a Lot',
        director: 'J Blakeson',
        year: '2020',
        genre: 'Crime, Comedy, Thriller, Drama',
      },
      {
        title: 'Nomadland',
        director: 'Cholé Zhao',
        year: '2020',
        genre: 'Drama',
      },
      {
        title: 'Old Guard',
        director: 'Gina Prince-Bythewood',
        year: '2020',
        genre: 'Fantasy, Action',
      },
      {
        title: 'The Ryhtm Section',
        director: 'Reed Morano',
        year: '2020',
        genre: 'Action, Thriller',
      },
      {
        title: 'Kajillionaire',
        director: 'Miranda July',
        year: '2020',
        genre: 'Crime, Drama, Comedy',
      },
      {
        title: 'The Humans',
        director: 'Stephen Karam',
        year: '2021',
        genre: 'Drama',
      },
      {
        title: 'The Worst Person in the World',
        director: 'Joachim Trier',
        year: '2021',
        genre: 'Drama, Romance, Comedy',
      },
      {
        title: 'Bergman Island',
        director: 'Mia Hansen-Løve',
        year: '2021',
        genre: 'Drama, Norwegian',
      },
      {
        title: "I'm Thinking of Ending Things",
        director: 'Charlie Kaufman',
        year: '2020',
        genre: 'Mystery, Drama, Thriller',
      },
      {
        title: 'The Nowhere Inn',
        director: 'Bill Benz',
        year: '2020',
        genre: 'Comedy, Horror, Music, Drama',
      },
      {
        title: 'Another Round',
        director: 'Thomas Vinterberg',
        year: '2020',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Sputnik',
        director: 'Egor Abramenko',
        year: '2020',
        genre: 'Horror, Drama, Sci-Fi, Russian',
      },
      {
        title: 'Minari',
        director: 'Lee Issac Chung',
        year: '2020',
        genre: 'Drama, Korean',
      },
      {
        title: 'Shiva Baby',
        director: 'Emma Seligman',
        year: '2020',
        genre: 'Comedy, Drama',
      },
      {
        title: 'My Octopus Teacher',
        director: 'Philippa Ehrlich, James Reed',
        year: '2020',
        genre: 'Documentary',
      },
      {
        title: 'Stargate',
        director: 'Roland Emmerich',
        year: '1994',
        genre: 'Action, Adventure, Sci-Fi',
      },
      {
        title: 'Contact',
        director: 'Robert Zemeckis',
        year: '1997',
        genre: 'Sci-Fi, Mystery, Drama',
      },
      {
        title: 'The Fog',
        director: 'John Carpenter',
        year: '1980',
        genre: 'Horror',
      },
      {
        title: 'Casablanca',
        director: 'Michael Curtiz',
        year: '1942',
        genre: 'Romance, Drama',
      },
      {
        title: 'On the Count of Three',
        director: 'Jerrod Carmichael',
        year: '2021',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Fire of Love',
        director: 'Sara Dosa',
        year: '2022',
        genre: 'Documentary',
      },
      {
        title: 'Petit Maman',
        director: 'Céline Sciamma',
        year: '2021',
        genre: 'Family, Fantasy, Drama',
      },
      {
        title: 'Nope',
        director: 'Jordan Peele',
        year: '2022',
        genre: 'Thriller, Mystery, Sci-Fi, Horror',
      },
      {
        title: 'Mad God',
        director: 'Phil Tippett',
        year: '2021',
        genre: 'Animation, Fantasy, Horror, Sci-Fi',
      },
      {
        title: 'Re-Animator',
        director: 'Stuart Gordon',
        year: '1985',
        genre: 'Sci-Fi, Comedy, Horror',
      },
      {
        title: 'The Lawnmower Man',
        director: 'Brett Leonard',
        year: '1992',
        genre: 'Horror, Sci-Fi',
      },
      {
        title: 'The French Dispatch',
        director: 'Wes Anderson',
        year: '2021',
        genre: 'Drama, Romance, Comedy',
      },
      {
        title: 'Burn After Reading',
        director: 'Ethan Coen, Joel Coen',
        year: '2008',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Bullet Train',
        director: 'David Leitch',
        year: '2022',
        genre: 'Comedy, Action, Thriller',
      },
      {
        title: 'Oldboy',
        director: 'Park Chan-wook',
        year: '2003',
        genre: 'Drama, Action, Mystery, Thriller',
      },
      {
        title: 'Amélie',
        director: 'Jean-Pierre Jeunet',
        year: '2001',
        genre: 'Romance, Comedy',
      },
      {
        title: 'Chungking Express',
        director: 'Wong Kar-wai',
        year: '1994',
        genre: 'Romance, Comedy, Drama',
      },
      {
        title: '8 1/2',
        director: 'Federico Fellini',
        year: '1963',
        genre: 'Fantasy, Drama',
      },
      {
        title: 'The Good, the Bad, and the Ugly',
        director: 'Sergio, Leone',
        year: '1966',
        genre: 'Western',
      },
      {
        title: 'Solaris',
        director: 'Andrei Tarkovsky',
        year: '1972',
        genre: 'Drama, Mystery',
      },
      {
        title: 'La Haine',
        director: 'Mathieu Kassovitz',
        year: '1995',
        genre: 'Drama',
      },
      {
        title: 'Innerspace',
        director: 'Joe Dante',
        year: '1987',
        genre: 'Sci-Fi, Comedy, Action',
      },
      {
        title: 'Night of the Comet',
        director: 'Thom Eberhardt',
        year: '1984',
        genre: 'Sci-Fi, Comedy, Horror',
      },
      {
        title: 'Raiders of Atlantis',
        director: 'Ruggero Deodato',
        year: '1983',
        genre: 'Sci-Fi, Action',
      },
      {
        title: 'Braindead',
        director: 'Peter Jackson',
        year: '1992',
        genre: 'Comedy, Horror',
      },
      {
        title: 'Animal House',
        director: 'John Landis',
        year: '1978',
        genre: 'Comedy',
      },
      {
        title: 'Starman',
        director: 'John Carpenter',
        year: '1984',
        genre: 'Sci-Fi, Romance',
      },
      {
        title: 'Short Circuit',
        director: 'John Badham',
        year: '1986',
        genre: 'Sci-Fi, Comedy, Family',
      },
      {
        title: 'Boy',
        director: 'Taika Waititi',
        year: '2010',
        genre: 'Comedy, Drama',
      },
      {
        title: 'As Above, So Below',
        director: 'John Erick Dowdle',
        year: '2014',
        genre: 'Horror, Thriller',
      },
      {
        title: 'Frank',
        director: 'Lenny Abrahamson',
        year: '2014',
        genre: 'Comedy, Drama, Mystery',
      },
      {
        title: 'The Void',
        director: 'Gilbert M. Shilton',
        year: '2001',
        genre: 'Sci-Fi, Thriller, Action',
      },
      {
        title: 'Termors',
        director: 'Ron Underwood',
        year: '1990',
        genre: 'Sci-Fi, Horror, Comedy, Action',
      },
      {
        title: 'The Black Cat',
        director: 'Luigi Cozzi',
        year: '1989',
        genre: 'Horror, Drama, Fantasy',
      },
      {
        title: 'Born of Fire',
        director: 'Jamil Dehlavi',
        year: '1987',
        genre: 'Fantasy, Horror, Drama',
      },
      {
        title: 'Decoder',
        director: 'Muscha',
        year: '1984',
        genre: 'Horror, Mystery, Sci-Fi',
      },
      {
        title: 'Fade to Black',
        director: 'Vernon Zimmerman',
        year: '1980',
        genre: 'Horror, Drama, Thriller',
      },
      {
        title: 'One Dark Night',
        director: 'Tom McLoughlin',
        year: '1982',
        genre: 'Horror',
      },
      {
        title: 'A Knights Tale',
        director: 'Brian Helgeland',
        year: '2001',
        genre: 'Action, Drama, Adventure, Romance',
      },
      {
        title: 'Stranger Than Fiction',
        director: 'Marc Forster',
        year: '2006',
        genre: 'Fantasy, Drama, Romance, Comedy',
      },
      {
        title: 'Bedazzled',
        director: 'Harold Ramis',
        year: '2000',
        genre: 'Romance, Comedy, Fantasy',
      },
      {
        title: 'Speak No Evil',
        director: 'Christian Tafdrup',
        year: '2022',
        genre: 'Drama, Horror, Thriller',
      },
      {
        title: 'See How They Run',
        director: 'Tom George',
        year: '2022',
        genre: 'Mystery, Thriller, Comedy',
      },
      {
        title: '24 Hour Party People',
        director: 'Michael Winterbottom',
        year: '2002',
        genre: 'Comedy, Drama, Music',
      },
      {
        title: 'Foodfight!',
        director: 'Lawrence Kasanoff',
        year: '2012',
        genre: 'Comedy, Animation, Action, Family',
      },
      {
        title: 'Paprika',
        director: 'Satoshi Kon',
        year: '2006',
        genre: 'Thriller, Animation, Sci-Fi, Mystery',
      },
      {
        title: 'Top Gun',
        director: 'Tony Scott',
        year: '1986',
        genre: 'Drama, Action',
      },
      {
        title: 'After Yang',
        director: 'Kogonada',
        year: '2021',
        genre: 'Drama, Sci-Fi',
      },
      {
        title: 'Thirteen Lives',
        director: 'Ron Howard',
        year: '2022',
        genre: 'Action, Thriller, Adventure, Drama',
      },
      ];

    console.log('js is here');

    function button1Clicked(){
      let length = Object.keys(movies).length;
      let random = Math.floor(Math.random() * length);
      // console.log(movies[random]);
      let title = movies[random].title;
      let genre = movies[random].genre;
      let director = movies[random].director;
      let year = movies[random].year;

      document.getElementById("generateLine1").innerHTML = `<h2>${title}</h2>`;
      document.getElementById("generateLine2").innerHTML = `<h5>${director}, ${year}</h5>`;
      document.getElementById("generateLine3").innerHTML = `<h5>${genre}</h5>`;
    }

    function windowLoaded(){
      console.log('loaded');
      document.getElementById('button-1').addEventListener('click', button1Clicked);
      document.getElementById('50').addEventListener('click', function(){decadeClicked('50')});
      document.getElementById('60').addEventListener('click', function(){decadeClicked('60')});
      document.getElementById('70').addEventListener('click', function(){decadeClicked('70')});
      document.getElementById('80').addEventListener('click', function(){decadeClicked('80')});
      document.getElementById('90').addEventListener('click', function(){decadeClicked('90')});
      document.getElementById('00').addEventListener('click', function(){decadeClicked('00')});
      document.getElementById('10').addEventListener('click', function(){decadeClicked('10')});
      document.getElementById('20').addEventListener('click', function(){decadeClicked('90')});

      document.getElementById('Action').addEventListener('click', function(){genreClicked('Action')});
      document.getElementById('Adventure').addEventListener('click', function(){genreClicked('Adventure')});
      document.getElementById('Animation').addEventListener('click', function(){genreClicked('Animation')});
      document.getElementById('Comedy').addEventListener('click', function(){genreClicked('Comedy')});
      document.getElementById('Crime').addEventListener('click', function(){genreClicked('Crime')});
      document.getElementById('Documentary').addEventListener('click', function(){genreClicked('Documentary')});
      document.getElementById('Drama').addEventListener('click', function(){genreClicked('Drama')});
      document.getElementById('Family').addEventListener('click', function(){genreClicked('Family')});
      document.getElementById('Fantasy').addEventListener('click', function(){genreClicked('Fantasy')});
      document.getElementById('Horror').addEventListener('click', function(){genreClicked('Horror')});
      document.getElementById('Music').addEventListener('click', function(){genreClicked('Music')});
      document.getElementById('Mystery').addEventListener('click', function(){genreClicked('Mystery')});
      document.getElementById('Romance').addEventListener('click', function(){genreClicked('Romance')});
      document.getElementById('Sci-Fi').addEventListener('click', function(){genreClicked('Sci-Fi')});
      document.getElementById('Thriller').addEventListener('click', function(){genreClicked('Thriller')});
    }

    function decadeClicked(decade){
      document.getElementById(decade).classList.toggle('buttons-clicked');
      decadeClicked(decade) = decade;
    }

/*

// a function for each decade button, probably an easier way to do this but i dont care
// needs to be an if? so i can account for multiple buttons pressed
// ie:    if 1960's, else if 1970's, else if 1980's 

  if decadeClicked(50){
  check if the year is in th edecade
  if yes, exit, if no, go to else if
    if movies.[random].year = 1950 || 1951 || etc{
      return;
    }
     else if{
       exit and get a movie, try again
    }
  }
  
*/

    function genreClicked(genre){
      document.getElementById(genre).classList.toggle('buttons-clicked');
    }

 // trying to get the button filters to work, not there yet
 
    // for(let i = 0; i< movies.length; i++){
    //   if (movies[i].year < 1999 && movies[i] > 1990){
    //     console.log(movies[i]);
    //   }
    // }

    window.onload = windowLoaded;
