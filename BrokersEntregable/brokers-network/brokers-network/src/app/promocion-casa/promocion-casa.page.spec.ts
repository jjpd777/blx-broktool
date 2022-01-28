import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromocionCasaPage } from './promocion-casa.page';

describe('PromocionCasaPage', () => {
  let component: PromocionCasaPage;
  let fixture: ComponentFixture<PromocionCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromocionCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
