import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootInputComponent } from './toot-input.component';

describe('TootInputComponent', () => {
  let component: TootInputComponent;
  let fixture: ComponentFixture<TootInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
