import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { ApiService } from 'src/app/api.service';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  service: Service;
  services: Service[]
  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<void> {

    let { service, error } = await this.api.getService()

    if (!error) {
      this.services = service ?? []
    }
  }

}
