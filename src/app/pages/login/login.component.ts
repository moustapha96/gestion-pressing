import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { Client } from 'src/app/client.model';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  client: Client;
  clients: Client[];
  actionLabel: string
  constructor(private dialogRef: MatDialog, private api: ApiService) {

  }

  async ngOnInit(): Promise<void> {

    this.clear()
    let { client, error } = await this.api.getClient()

    if (!error) {
      this.clients = client ?? []
    }
  }
  clear() {
    this.client = new Client(),
      this.actionLabel = "save"
  }
  ngOnDestroy() {
  }

  opendialogue() {

    this.dialogRef.open(ClientComponent);

  }

  closedialogue() {
    this.dialogRef.closeAll()
  }

}
