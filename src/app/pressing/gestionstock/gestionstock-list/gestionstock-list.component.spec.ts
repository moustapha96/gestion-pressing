import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstockListComponent } from './gestionstock-list.component';

describe('GestionstockListComponent', () => {
  let component: GestionstockListComponent;
  let fixture: ComponentFixture<GestionstockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionstockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
