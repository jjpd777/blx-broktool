import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterBlueComponent } from './footer-blue.component';

describe('FooterBlueComponent', () => {
  let component: FooterBlueComponent;
  let fixture: ComponentFixture<FooterBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBlueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
