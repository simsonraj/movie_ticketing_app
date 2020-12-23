# movie_ticketing_app
Movie Ticketing App in Hyperledger Fabric
Chaincode in golang and API in node.js

## Features
- Four (4) ticketing windows sell movie tickets at a theatre
- People can buy one or more tickets
- Once 100 tickets are sold for a movie, that movie-show  is full
- The theatre runs 5 movies at any time, and each show 4 times a day
- Once a ticket is purchased a buyer automatically gets a bottle of water and popcorn on Window-1
- At the end of the purchase, a ticket and receipt  is printed and the purchase is recorded on the blockchain
- The buyer can go and exchange the water for soda at the cafeteria. Window 1 must generate a random number. If that number is even, the buyer must be able to get the water
exchanged for soda at the cafeteria. The cafeteria has only 200 sodas, so only the first 200 requesters can exchange. 
- Model such that the tickets, shows and sodas availability are managed by contracts on the chain. The movie theatre has 5 shows running at any time and each show has 100 seats. The model such that more than 1 movie theatre can be supported by the blockchain. The blockchain records show, theatres, the number of movie halls per theatre, shows running in each movie hall, cafeteria soda inventory

### Chaincode

 - Main file [movies.go](chaincode/movies.go)
 - commands to install and invoke and populate data under [commands.txt](chaincode/commands.txt)


### API

    - Test cases under Test folder [app.e2e-spec.ts](API/test/app.e2e-spec.ts)
    - Furthur instructions to setup SDK in the [README.md](API/README.md) file

