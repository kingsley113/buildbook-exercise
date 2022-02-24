# Buildbook-Spotify-exercise

Take home exercise for BuildBook interview

## Installation & Use

Installation:
run $ npm install

Run the program with the following command:
$ spotify-modify spotify.json changes.json output-file-name.json

spotify.json - name must match the source Spotify JSON data file saved in the data folder
changes.json - name must match the data changes JSON file saved in the data folder
output-file-name.json - this is the output file to be saved in the output folder. Name can be anything you like (must include '.json' extension in name)

## Design Approach

I created this solution using JavaScript/node.js to demonstrate my JS comprehension as it relates closely to the React Engineer position.
I approached this project with a Redux-style implementation. The changes.json file contains objects with keys representing the action to perform, and values which include the data elements to modify. The program begins by parsing out the different file names from the command line arguments, creates a 'data' and 'changes' object filled with thier respective data.

Once the data is loaded, the program will iterate through each action key on the changes object and modify the data object as requred. I mutated the data object directly as it is a copy of the spotify.json file contents. Each iteration compares the key using a switch statement to then break out into separate functions to perform the modifications.

After each action has been performed the program then uses the modified data object and writes the output file into the output folder.

I organized the file structure for easy readability, with the data folder containing the input data, and output folder containing the user specified output file(s).

## Scaling

With scaling in mind, this was one of the reason for the Redux style approach. Assuming that a larger changes.json file would include a known number of action types, these can be added to the switch statement on line 15, maintaining readability, and then add the respective function to perform the modification elsewhere. On a larger scale these could be implemented as API endpoints with a full Redux action/reducer integration rather than the JSON/switch statement here.

If the spotify.json file grows, the program could read only the data it needs to modify (i.e. users, playlist, songs) rather than copy the entire file into a data object. Then load data as required based on the changes file requirements. Or, the most idea way is to use a Database with ActiveRecord, import the data once, and then eliminate the need for the spotify.json file altogether while carrying out future requests with the DB.

## Time Spent on Project

Overall I spent a little more than two hours on the project. I needed to brush up on reading/writing files, but otherwise went smoothly. I first took some time to lay out a gameplan and decide which approach to use, how to format the changes.json file, and how to maintain readability & scaling. I then roughed out a functional version and followed with refactoring to simplify and clean up the code.

Thank you for the opportunity to complete this project, I really enjoyed this problem and hope it provides useful insight into the quality of work you can expect. I agree that this is a much better representation than traditional whiteboard interviews. I am happy to answer any questions!
