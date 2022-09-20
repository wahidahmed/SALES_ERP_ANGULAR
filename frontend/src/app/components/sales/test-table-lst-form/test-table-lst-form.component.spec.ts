import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTableLstFormComponent } from './test-table-lst-form.component';

describe('TestTableLstFormComponent', () => {
  let component: TestTableLstFormComponent;
  let fixture: ComponentFixture<TestTableLstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTableLstFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTableLstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
