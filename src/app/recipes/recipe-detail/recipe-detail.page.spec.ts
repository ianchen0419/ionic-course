import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { RecipeDetailPage } from './recipe-detail.page';

describe('RecipeDetailPage', () => {
  let component: RecipeDetailPage;
  let fixture: ComponentFixture<RecipeDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: of({recipeId: 'p1'})
        }
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
