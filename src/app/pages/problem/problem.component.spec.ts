import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProblemComponent } from './problem.component';
import { RouterModule } from '@angular/router';
import { ProblemGuard } from '@core/guards/problem.guard';

describe('ProblemComponent', () => {
  let component: ProblemComponent;
  let fixture: ComponentFixture<ProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemComponent],
      imports: [
        RouterModule.forRoot([
          {
            path: ':id',
            component: ProblemComponent,
            canActivate: [ProblemGuard],
          },
        ]),
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
