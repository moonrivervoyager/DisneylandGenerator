let rides, activities, characters;

    rides = [
    "Space Mountain",
    "Splash Mountain",
    "The Matterhorn",
    "Pirates of the Caribbean",
    "The Haunted Mansion",
    "Alice in Wonderland",
    "Autopia",
    "Big Thunder Mountain Railroad",
    "Buzz Lightyear Astro Blasters",
    "Casey Junior Circus Train",
    "The Disneyland Monorail",
    "The Disneyland Railroad",
    "Dumbo the Flying Elephant",
    "Finding Nemo Submarine Voyage",
    "Indiana Jones Adventure",
    "it's a small world",
    "Jungle Cruise",
    "King Arthur Carrousel",
    "Mad Tea Party",
    "Mark Twain Riverboat",
    "Peter Pan's Flight",
    "Pinocchio's Daring Journey",
    "Snow White's Enchanted Wish",
    "Star Tour - The Adventures Continue",
    "Star Wars: Rise of the Resistance",
    "Storybook Land Canal Boats",
    "Millenium Falcon: Smugglers Run",
    "Mr. Toad's Wild Ride"
];

activities = [
"watch the fireworks",
"watch Fantasmic!",
"go to the Fantasy Faire",
"see the Enchanted Tiki Room",
"watch a parade",
"eat a churro",
"get a Dole Whip",
"go shopping on Main Street",
"watch Great Moments With Mr. Lincoln",
"buy a giant Mickey",
"get a pair of Mouse ears",
"go to Oga's Cantina for some cocktails",
"watch the Dapper Dans",
"explore Pirate's Lair",
"take some photos",
"get your face painted",
"have a coffee break at Jolly Holiday",
"test your aim at the Frontierland Shooting Gallery",
"explore Sleeping Beauty Castle",
"buy some candy",
"look in all the stores"
];

characters = [
"Mickey Mouse",
"Minnie Mouse",
"Donald Duck",
"Goofy",
"Pluto",
"Daisy Duck",
"Chip and Dale",
"Anna",
"Elsa",
"Ariel",
"Aurora",
"Belle",
"Elena of Avalor",
"Snow White",
"Rapunzel",
"Flynn Rider",
"Evil Queen",
"Alice",
"Mary Poppins",
"Bert",
"Winnie the Pooh",
"Eeyore",
"Tigger",
"Aladdin",
"Jasmine",
"Peter Pan",
"Captain Hook",
"Gaston", 
"the Beast",
"Fairy Godmother",
"Tinker Bell",
"Captain Jack Sparrow",
"Redd",
"Tiana",
"Prince Naveen",
"Rey",
"Chewbacca",
"R2-D2",
"a First Order Stormtrooper",
"Kylo Ren",
"Boba Fett",
"Darth Vader",
"Moana"
];

function randGen(){
    return 
Math.floor(Math.random() * 3);
}

function sentence() {
    var rand1 =
Math.floor(Math.random() * rides.length);
    var  rand2 =
Math.floor(Math.random() * activities.length) ;
    var rand3 =
Math.floor(Math.random() * characters.length);


    var content = "Ride " + rides[rand1] + ", then " + activities[rand2] + " with " + characters[rand3] + ".";
    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;"
};
    sentence();


