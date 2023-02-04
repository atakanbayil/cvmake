
import * as  socketIO from "socket.io-client"
//const socket = socketIO.connect('https://datamindtranslatesocket.azurewebsites.net');
const socket = socketIO.connect('http://localhost:4000');

export default socket;
  