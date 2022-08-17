import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeLinkComponent } from './leetcode-link.component';

describe('LeetcodeLinkComponent', () => {
  let component: LeetcodeLinkComponent;
  let fixture: ComponentFixture<LeetcodeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetcodeLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeetcodeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
