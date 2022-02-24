#! /usr/bin/env node

// Get command line arguments into constants
const [origFile, changeFile, outputFile] = process.argv.slice(2);
// Parse original JSON data
let data = require(`../data/${origFile}`);
console.log("Original: ", data);

// Parse changes JSON data
// Random assortment of changes created in changes.json file, per project requirements
const changes = require(`../data/${changeFile}`);

// Iterate through all changes
for (const key in changes) {
  const action = changes[key];

  switch (key) {
    case "add_song_to_playlist":
      addSongToPlaylist(action["playlist_id"], action["song_id"]);
      break;
    case "create_new_playlist":
      createNewPlaylist(action["user_id"], action["song_ids"]);
      break;
    case "remove_existing_playlist":
      removePlaylist(action["playlist_id"]);
      break;
    default:
      break;
  }
}

// Modify data as required
function addSongToPlaylist(playlistId, songId) {
  for (const playlist of data["playlists"]) {
    if (playlist["id"] == playlistId) {
      playlist["song_ids"].push(songId);
      break;
    }
  }
}

function createNewPlaylist(userId, songIds) {
  // iterate through ids to find max in case ids are not in order
  let ids = [];
  for (const playlist of data["playlists"]) {
    ids.push(parseInt(playlist["id"]));
  }
  const newId = Math.max(...ids) + 1;

  // Create new playlist object
  const newPlaylist = {
    id: newId.toString(),
    owner_id: userId,
    song_ids: songIds,
  };

  // Add new playlist to data object
  data["playlists"].push(newPlaylist);
}

function removePlaylist(playlistId) {
  data.playlists = data.playlists.filter((playlist) => {
    return playlist.id !== playlistId;
  });
}

// output modified data into new file
console.log("Modified: ", data);
