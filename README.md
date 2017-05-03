# Encrypt Chatroom
# cs460-nut

## About
- This project is a web base chatroom that will allow you to create secure chatrooms and two-factor phone authentication to join.
- The SMS token for verification expires in 30 second (because of a free trial account of the twilio API we are utilizing), so user has to be quick to enter the code.
- Msgs from the chatrooms will be encrypted over the server to prevent third-man data intervention or stealing.

### Create Room
- Generates a random number as a key to be passed into the hash function, this hash value will be the URL endpoint.
- User can share this key with others to join the same room.
- Messages of one room are not visible in other rooms.

### Join Room
- Get key in some fashion (email, text, pigeon carrier, etc)
- Pass key to hash
- Hash function will send request to Twilio API and user will have 30 seconds to type in key (received by SMS) for two factor auth.

## Tech Stack
- Node.js and Express for the server.
- Socket.io to utilize web sockets to make private chat rooms.
- Twilio API for SMS verification.

> Feel free to look at our commit history to see the contributions made by each team member.

## Installation
- clone into the repository or download as a zip file.
- Navigate into source folder and type in the terminal ```npm install``` to install all the package dependencies.
- Run ```node app.js``` or ```nodemon app.js``` if you have ```nodemon``` installed (do ```npm install -g nodemon``` to install it).
- Open your web browser and go to ```localhost:8080``` to see it in action.
- Create a room to make a new chatroom and click on join room to enter an exiting chatroom.

## License
CS 460... group?
