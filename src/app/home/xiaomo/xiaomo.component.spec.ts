import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomoComponent } from './xiaomo.component';

describe('XiaomoComponent', () => {
  let component: XiaomoComponent;
  let fixture: ComponentFixture<XiaomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiaomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiaomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
