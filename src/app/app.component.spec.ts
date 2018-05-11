import { AngularMaterialModule } from './shared/angular-material.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));



});
