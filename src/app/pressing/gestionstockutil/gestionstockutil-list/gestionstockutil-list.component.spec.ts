import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstockutilListComponent } from './gestionstockutil-list.component';

describe('GestionstockutilListComponent', () => {
  let component: GestionstockutilListComponent;
  let fixture: ComponentFixture<GestionstockutilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionstockutilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstockutilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
