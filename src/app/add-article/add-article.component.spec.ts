import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleComponent } from './add-article.component';

describe('AddArticleComponent', () => {
  let component: AddArticleComponent;
  let fixture: ComponentFixture<AddArticleComponent>;g
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
