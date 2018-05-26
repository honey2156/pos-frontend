import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOrdersDasboardComponent } from './save-orders-dasboard.component';

describe('SaveOrdersDasboardComponent', () => {
  let component: SaveOrdersDasboardComponent;
  let fixture: ComponentFixture<SaveOrdersDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveOrdersDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOrdersDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
