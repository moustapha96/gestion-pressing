import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstockutilDialogComponent } from './gestionstockutil-dialog.component';

describe('GestionstockutilDialogComponent', () => {
  let component: GestionstockutilDialogComponent;
  let fixture: ComponentFixture<GestionstockutilDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionstockutilDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstockutilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
