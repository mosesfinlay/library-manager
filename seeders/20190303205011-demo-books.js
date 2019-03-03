'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Books", [
      {
        id: 1,
        title: "Balseros (Cuban Rafters)",
        author: "Kelley Jeynes",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2002
      }, {
        id: 2,
        title: "Redemption (Hummingbird)",
        author: "Derek Sines",
        genre: "Action|Crime|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2001
      }, {
        id: 3,
        title: "Doc Savage: The Man of Bronze",
        author: "Nollie Pippard",
        genre: "Adventure",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 4,
        title: "Brief Vacation, A (breve vacanza, Una)",
        author: "Maure Peffer",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 5,
        title: "Klip (Clip)",
        author: "Marillin Kirkbright",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1993
      }, {
        id: 6,
        title: "I Was an Adventuress",
        author: "Annemarie Boram",
        genre: "Comedy|Crime",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 7,
        title: "On a marché sur Bangkok",
        author: "Amil Starkie",
        genre: "Comedy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2000
      }, {
        id: 8,
        title: "Mister Johnson",
        author: "Breena Minnis",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2010
      }, {
        id: 9,
        title: "Week-End in Havana",
        author: "Devinne Lintott",
        genre: "Comedy|Musical|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2000
      }, {
        id: 10,
        title: "You Can't Take It with You",
        author: "Izzy Matthews",
        genre: "Comedy|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 11,
        title: "Hustle",
        author: "Christa Moyce",
        genre: "Crime|Drama|Mystery|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1997
      }, {
        id: 12,
        title: "Dead Presidents",
        author: "Jarvis Draper",
        genre: "Action|Crime|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1995
      }, {
        id: 13,
        title: "Runaway Jury",
        author: "Cookie Payler",
        genre: "Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2007
      }, {
        id: 14,
        title: "When the Bough Breaks",
        author: "Sheelagh Kelemen",
        genre: "Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2002
      }, {
        id: 15,
        title: "Underdog",
        author: "Tana Mixer",
        genre: "Action|Adventure|Children|Comedy|Fantasy|Sci-Fi",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 16,
        title: "Pulp Fiction",
        author: "Deni Jager",
        genre: "Comedy|Crime|Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2002
      }, {
        id: 17,
        title: "Time Changer",
        author: "Calli Mingaud",
        genre: "Drama|Sci-Fi",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 18,
        title: "Secret Life of Walter Mitty, The",
        author: "Gian Northam",
        genre: "Adventure|Comedy|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1987
      }, {
        id: 19,
        title: "Against The Sun",
        author: "Georgette Tilby",
        genre: "Adventure",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 20,
        title: "Best Offer, The (Migliore offerta, La)",
        author: "Reinaldo Malyon",
        genre: "Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2003
      }, {
        id: 21,
        title: "To Cross the Rubicon",
        author: "Em Medd",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1996
      }, {
        id: 22,
        title: "Divorcee, The",
        author: "Luise Tarte",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(), 
        year: 2000
      }, {
        id: 23,
        title: "Baby of Mâcon, The (a.k.a. The Baby of Macon)",
        author: "Millard Buswell",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 24,
        title: "Travelling Players, The (O thiasos)",
        author: "Jarad Prest",
        genre: "Drama|War",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 25,
        title: "Street Scene",
        author: "Darda Sarfat",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2009
      }, {
        id: 26,
        title: "Praise",
        author: "Sheri Hartfleet",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1984
      }, {
        id: 27,
        title: "Bound",
        author: "Klaus Rembrandt",
        genre: "Crime|Drama|Romance|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1994
      }, {
        id: 28,
        title: "Distant (Uzak)",
        author: "Fiorenze Beernaert",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1986
      }, {
        id: 29,
        title: "So Much Water",
        author: "Janith Stiddard",
        genre: "Comedy|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2012
      }, {
        id: 30,
        title: "Cult of the Cobra",
        author: "Chickie Statefield",
        genre: "Horror",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1993
      }, {
        id: 31,
        title: "Down and Out with the Dolls",
        author: "Myrilla Wadhams",
        genre: "Comedy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 32,
        title: "Chaser, The (Chugyeogja)",
        author: "Georgianna Dank",
        genre: "Crime|Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2011
      }, {
        id: 33,
        title: "The Dancer",
        author: "Townie Hemphall",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2003
      }, {
        id: 34,
        title: "News from a Personal War (Notícias de uma Guerra Particular)",
        author: "Noe Lafond",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1990
      }, {
        id: 35,
        title: "To Tulsa and Back: On Tour with J.J. Cale",
        author: "Marysa Byrch",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2000
      }, {
        id: 36,
        title: "Isadora",
        author: "Mady Batstone",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 37,
        title: "Yankee Doodle Dandy",
        author: "Karol Warratt",
        genre: "Drama|Musical",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1997
      }, {
        id: 38,
        title: "Visitors",
        author: "Melitta Eckh",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2000
      }, {
        id: 39,
        title: "X: The Man with the X-Ray Eyes",
        author: "Marty Trafford",
        genre: "Sci-Fi|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2008
      }, {
        id: 40,
        title: "Invisible Sign, An",
        author: "Veronike Blancowe",
        genre: "Comedy|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1997
      }, {
        id: 41,
        title: "From Beijing with Love",
        author: "Yorgos Purdie",
        genre: "Action|Comedy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1995
      }, {
        id: 42,
        title: "Mystery Road",
        author: "Cindie Stafford",
        genre: "Mystery|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2009
      }, {
        id: 43,
        title: "Eyes of Laura Mars",
        author: "Octavia Stranaghan",
        genre: "Mystery|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 44,
        title: "Nine Miles Down",
        author: "Genia Dominguez",
        genre: "Horror|Mystery|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1993
      }, {
        id: 45,
        title: "Horror Express",
        author: "Xylina Champniss",
        genre: "Horror",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2005
      }, {
        id: 46,
        title: "Shakespeare's Globe: Henry V",
        author: "Alleen Obern",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1999
      }, {
        id: 47,
        title: "The Private Life of Deer",
        author: "Ettie De Roeck",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2011
      }, {
        id: 48,
        title: "Pursued",
        author: "Edwin Tramel",
        genre: "Thriller|Western",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2002
      }, {
        id: 49,
        title: "Red's Dream",
        author: "Xenia Edison",
        genre: "Animation|Children",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2007
      }, {
        id: 50,
        title: "When Dinosaurs Ruled the Earth",
        author: "Cora Skains",
        genre: "Adventure|Fantasy|Romance|Sci-Fi",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2001
      }, {
        id: 51,
        title: "Starship Troopers 2: Hero of the Federation",
        author: "Bernetta Tilberry",
        genre: "Action|Horror|Sci-Fi|War",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 52,
        title: "On the Run",
        author: "Roanna Middlehurst",
        genre: "Crime|Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1999
      }, {
        id: 53,
        title: "Brokeback Mountain",
        author: "Fionna Spottiswood",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2009
      }, {
        id: 54,
        title: "Midnight Clear",
        author: "Nevile Brumbye",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  year: 2011
      }, {
        id: 55,
        title: "Brothers at War",
        author: "Charo Gomm",
        genre: "Documentary|War",
        createdAt: new Date(), 
        updatedAt: new Date(),  year: 2011
      }, {
        id: 56,
        title: "Dirty Dozen: Next Mission, The",
        author: "Wilow Rumens",
        genre: "Action|War",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 57,
        title: "Blossoms in the Dust",
        author: "Silvie Curd",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1997
      }, {
        id: 58,
        title: "Partners: The Movie II (Aibô: Gekijô-ban II)",
        author: "Reggis Moulson",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1966
      }, {
        id: 59,
        title: "Music Never Stopped, The",
        author: "Netta Bawden",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1994
      }, {
        id: 60,
        title: "Magic",
        author: "Jock Gerrell",
        genre: "Drama|Horror|Romance|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2011
      }, {
        id: 61,
        title: "Birth of the Living Dead",
        author: "Margaux Sillito",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1999
      }, {
        id: 62,
        title: "Land of Happines (Onnen maa)",
        author: "Vinny Clawe",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 63,
        title: "The Hunting Ground",
        author: "Pieter Balog",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2011
      }, {
        id: 64,
        title: "Girl, The",
        author: "Caryl Demer",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2009
      }, {
        id: 65,
        title: "Visitors, The",
        author: "Kendrick Goring",
        genre: "Crime|Drama|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 66,
        title: "Withnail & I",
        author: "Nicko Ridel",
        genre: "Comedy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2002
      }, {
        id: 67,
        title: "Budd Boetticher: An American Original ",
        author: "Tadeo McNeish",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1993
      }, {
        id: 68,
        title: "Leather Jacket Love Story",
        author: "Fawnia Shalcros",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 69,
        title: "Kolberg",
        author: "Orrin Willment",
        genre: "Drama|War",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2000
      }, {
        id: 70,
        title: "Matador, The",
        author: "Randall Cumberland",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2001
      }, {
        id: 71,
        title: "Enter the Void",
        author: "Hayyim McKeowon",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1989
      }, {
        id: 72,
        title: "Accidental Spy, The (Dak miu mai shing)",
        author: "Chrysler Etuck",
        genre: "Action|Comedy|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 73,
        title: "Things to Come",
        author: "Dante Honnan",
        genre: "Sci-Fi",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1977
      }, {
        id: 74,
        title: "Keoma",
        author: "Wynne Querree",
        genre: "Action|Drama|Western",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2008
      }, {
        id: 75,
        title: "Diving Bell and the Butterfly, The (Scaphandre et le papillon, Le)",
        author: "Far MacRitchie",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2006
      }, {
        id: 76,
        title: "Insidious",
        author: "Carlina Dunstone",
        genre: "Fantasy|Horror|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1986
      }, {
        id: 77,
        title: "Jade",
        author: "Dusty Gaisford",
        genre: "Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2001
      }, {
        id: 78,
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        author: "Sholom Ley",
        genre: "Crime|Horror",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2010
      }, {
        id: 79,
        title: "The Strange Affair",
        author: "Kassi McKearnen",
        genre: "Crime|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1998
      }, {
        id: 80,
        title: "Mating Season, The",
        author: "Binny Galea",
        genre: "Comedy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2005
      }, {
        id: 81,
        title: "Incir Reçeli",
        author: "Callean Purches",
        genre: "Drama|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1991
      }, {
        id: 82,
        title: "Dampfnudelblues",
        author: "Veronike Manwaring",
        genre: "Comedy|Crime",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 83,
        title: "Wrong Man, The",
        author: "Verene Hallgalley",
        genre: "Romance|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2012
      }, {
        id: 84,
        title: "X-Men: The Last Stand",
        author: "Barnabe Murrey",
        genre: "Action|Sci-Fi|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 85,
        title: "Against All Odds",
        author: "Ottilie Shoubridge",
        genre: "Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1988
      }, {
        id: 86,
        title: "Invitation to a Gunfighter",
        author: "Mirabella Raiment",
        genre: "Action|Western",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1986
      }, {
        id: 87,
        title: "Wayward Bus, The",
        author: "Robinet Gaynsford",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1995
      }, {
        id: 88,
        title: "Sea, The (Hafið)",
        author: "Milena Haythornthwaite",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1996
      }, {
        id: 89,
        title: "Lost Boys, The",
        author: "Melanie Fawlkes",
        genre: "Comedy|Horror|Thriller",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2011
      }, {
        id: 90,
        title: "Closer to the Moon",
        author: "Jobie Mattisssen",
        genre: "Comedy|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(), 
        year: 2006
      }, {
        id: 91,
        title: "Twilight Saga: Eclipse, The",
        author: "Moria Hellmore",
        genre: "Fantasy|Romance|Thriller|IMAX",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1970
      }, {
        id: 92,
        title: "Captain EO",
        author: "Marybeth Gatus",
        genre: "Adventure|Children|Comedy|Musical|Sci-Fi",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1992
      }, {
        id: 93,
        title: "Pelicanman (Pelikaanimies)",
        author: "Benni Rusk",
        genre: "Adventure|Children|Fantasy",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1989
      }, {
        id: 94,
        title: "Last Hurrah for Chivalry (Hao xia)",
        author: "Odo Backs",
        genre: "Action|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2001
      }, {
        id: 95,
        title: "One Good Cop",
        author: "Hilliary Donnersberg",
        genre: "Action|Crime|Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1966
      }, {
        id: 96,
        title: "Being Human",
        author: "Demetris Abel",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2007
      }, {
        id: 97,
        title: "A Follower for Emily",
        author: "Alidia Lamacraft",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2012
      }, {
        id: 98,
        title: "Dr. Phibes Rises Again",
        author: "Rory Wisher",
        genre: "Adventure|Comedy|Horror|Romance",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1990
      }, {
        id: 99,
        title: "My Best Fiend (Mein liebster Feind)",
        author: "Donella Humburton",
        genre: "Documentary",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 2004
      }, {
        id: 100,
        title: "Wild Reeds (Les roseaux sauvages)",
        author: "Ynez Sowray",
        genre: "Drama",
        createdAt: new Date(), 
        updatedAt: new Date(),  
        year: 1968
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Books", null, {});
  }
};
