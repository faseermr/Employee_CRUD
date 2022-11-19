import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComComponent } from './pagination-com.component';

describe('PaginationComComponent', () => {
  let component: PaginationComComponent;
  let fixture: ComponentFixture<PaginationComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
