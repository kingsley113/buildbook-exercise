#! /usr/bin/env node

// Get command line arguments into constants
const [origFile, changeFile, outputFile] = process.argv.slice(2);

// Parse original and changes JSON data
let data = require(`../data/${origFile}`);
const changes = require(`../data/${changeFile}`);

// Iterate through all changes
for (const key in changes) {
  const action = changes[key];

  switch (key) {
    case "add_song_to_playlist":
      addSongToPlaylist(action.playlist_id, action.song_id);
      break;
    case "create_new_playlist":
      createNewPlaylist(action.user_id, action.song_ids);
      break;
    case "remove_existing_playlist":
      removePlaylist(action.playlist_id);
      break;
    default:
      break;
  }
}

// Modify data as required
function addSongToPlaylist(playlistId, songId) {
  // Find playlist, add song id to songs array
  for (const playlist of data.playlists) {
    if (playlist.id === playlistId) {
      playlist.song_ids.push(songId);
      break;
    }
  }
}

function createNewPlaylist(userId, songIds) {
  // iterate through ids to find max in case ids are not in order
  const ids = data.playlists.map((playlist) => {
    return parseInt(playlist.id);
  });
  const newId = Math.max(...ids) + 1;

  // Create new playlist object
  const newPlaylist = {
    id: newId.toString(),
    owner_id: userId,
    song_ids: songIds,
  };

  // Add new playlist to data object
  data.playlists.push(newPlaylist);
}

function removePlaylist(playlistId) {
  // Filter out playlist with matching id
  data.playlists = data.playlists.filter((playlist) => {
    return playlist.id !== playlistId;
  });
}

// output modified data to new file
const fs = require("fs");

fs.writeFile(`./output/${outputFile}`, JSON.stringify(data, null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log(`JSON output file is saved at "./output/${outputFile}"`);
});
