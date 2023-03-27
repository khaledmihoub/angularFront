import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPrivilegeComponent } from './modifier-privilege.component';

describe('ModifierPrivilegeComponent', () => {
  let component: ModifierPrivilegeComponent;
  let fixture: ComponentFixture<ModifierPrivilegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPrivilegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
