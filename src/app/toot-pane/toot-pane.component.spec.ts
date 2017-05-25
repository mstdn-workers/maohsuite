import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootPaneComponent } from './toot-pane.component';

describe('TootPaneComponent', () => {
  let component: TootPaneComponent;
  let fixture: ComponentFixture<TootPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
