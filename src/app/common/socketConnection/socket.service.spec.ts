export class SocketioService {

    socket;
  
    constructor() {   }
  
    setupSocketConnection() {
      this.socket = io('');
    }
  }