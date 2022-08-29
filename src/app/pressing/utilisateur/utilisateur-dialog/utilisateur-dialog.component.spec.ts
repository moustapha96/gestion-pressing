import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurDialogComponent } from './utilisateur-dialog.component';

describe('UtilisateurDialogComponent', () => {
  let component: UtilisateurDialogComponent;
  let fixture: ComponentFixture<UtilisateurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
