# Encrypt Chatroom
# cs460-nut

- This project will be web base chatroom that will require two-factor authentication to
create secure chatroom.
- two-factor will be authenticated by using private and public key and token that expires
in set time.
- Msgs from the chatrooms will be encrypted

## Create Room
- Generates a random number as a key to be passed into the hash function. Hashed value
will be the URL endpoint

## Join Room
- Get key in some fashion (email, text, pigeon carrier, ur mom, etc)
- Pass key to hash
- Hash function will then send IP (?)
- Hash function will send request to Twilio API and user will have 60 seconds to type in
key for two factor auth

> not goign to lie... i forgot alot about our meeting...
> i only added what i remembered... rawr~ O.o

### Todos
- front end
- encryption for the chatroom
- make secure chatroom requests

### If time permits..
- Fetch the IP address and register on the backend whenever someone is verified by our system (through twilio).
- If the url is hit manually by an IP which is not registered, redirect to the homepage.

### License
CS 460... group?
