// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Slightly Hung Over", artist: "Blues Delight", genre: "Blues" }, // added 5 songs
    { title: "A Lot More free", artist: "Max McNown", genre: "Country" },
    { title: "Midnight Healing", artist: "Gene Deer", genre: "Blues" },
    { title: "Heading South", artist: "Zack Bryan", genre: "Country" },
    { title: "Get It On", artist: "Marvin Gaye", genre: "R&B" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Country",
    "Groot": "Blues"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, genre, playlist };
    });
    // Return playlist
    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
function displayPlaylists() {
    const playlists = generatePlaylist(guardians, songs);
    playlists.forEach(({ guardian, genre, playlist }) => {
        console.log(`Playlist for ${guardian} (${genre}):`);
        playlist.forEach(song => {
            console.log(`- ${song.title} by ${song.artist}`);
        });
        console.log('');
    });
}

displayPlaylists();