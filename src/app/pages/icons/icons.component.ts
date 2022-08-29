import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientComponent } from '../client/client.component';
import { FactureComponent } from '../facture/facture.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor(private dialogRef: MatDialog) {

  }



  ngOnInit() {

    document.querySelector('date').textContent = Date()
  }

  opendialogue() {
    const dialogconfig = new MatDialogConfig()

    dialogconfig.width = "35%";

    this.dialogRef.open(ClientComponent, dialogconfig)


  }

  openfacture() {
    this.dialogRef.open(FactureComponent)
    const dialogconfig = new MatDialogConfig()
    dialogconfig.width = "900%"
  }

}

