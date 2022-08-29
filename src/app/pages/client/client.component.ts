import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Client } from 'src/app/client.model';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client: Client;
  clients: Client[];
  actionlabel: string


  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.client = new Client,
      this.actionlabel = 'save'

  }
  AddClient() {

    this.api.AddClient(this.client)



  }
  closedialogue() {

    close()

  }




}



