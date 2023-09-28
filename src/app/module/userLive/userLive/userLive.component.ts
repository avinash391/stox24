import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-live',

  templateUrl: './userLive.component.html',
  styleUrls: ['./userLive.component.scss'],
})
export class UserLiveComponent implements OnInit {
  private socket!: WebSocket;
  public liveData: any; // Define the structure of your live data

  ngOnInit() {
    // Create a WebSocket connection
    this.socket = new WebSocket('wss://api.stox24.com/NSE');

    // WebSocket event handlers
    this.socket.onopen = (event) => {
      console.log('WebSocket connection opened:', event);
    };

    this.socket.onmessage = (event) => {
      // Handle incoming live data here
      this.liveData = JSON.parse(event.data);
      console.log(JSON.stringify(this.liveData),"this is live feed");
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    this.socket.onerror = (event) => {
      console.error('WebSocket error:', event);
    };
  }

  ngOnDestroy() {
    // Close the WebSocket connection when the component is destroyed
    if (this.socket) {
      this.socket.close();
    }
  }
}
