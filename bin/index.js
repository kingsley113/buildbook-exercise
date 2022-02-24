#! /usr/bin/env node
console.log("Hello World!");

// Get command line arguments into constants
const [origFile, changeFile, outputFile] = process.argv.slice(2);
// console.log(origFile, changeFile, outputFile);

// Parse original JSON data
const data = require(`../data/${origFile}`);
// Parse changes JSON data
// Random assortment of changes created in changes.json file, per project requirements
const changes = require(`../data/${changeFile}`);
// console.log(changes);

for (const key in changes) {
  // console.log(changes[key]);
  const action = changes[key];
  switch (key) {
    case "add_song_to_playlist":
      addSongToPlaylist(action["playlist_id"], action["song_id"]);
    case "create_new_playlist":
      createNewPlaylist(action["user_id"], action["song_ids"]);
    case "remove_existing_paylist":
      removePlaylist(action["playlist_id"]);
    default:
  }
}

// Modify data as required

// output modified data into new file

// Define functions for modifying data

// Add song to existing playlist
const addSongToPlaylist = (playlistId, songId) => {};

const createNewPlaylist = (userId, songIds) => {};

const removePlaylist = (id) => {};
