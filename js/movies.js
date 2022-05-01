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
      title: "Singin' in the rain",
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
  }

  function genreClicked(genre){
    document.getElementById(genre).classList.toggle('buttons-clicked');
  }

  window.onload = windowLoaded;
