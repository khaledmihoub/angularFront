import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrivilegeComponent } from './ajouter-privilege.component';

describe('AjouterPrivilegeComponent', () => {
  let component: AjouterPrivilegeComponent;
  let fixture: ComponentFixture<AjouterPrivilegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPrivilegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
