import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstockDialogComponent } from './gestionstock-dialog.component';

describe('GestionstockDialogComponent', () => {
  let component: GestionstockDialogComponent;
  let fixture: ComponentFixture<GestionstockDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionstockDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
