import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirmaCasaPage } from './firma-casa.page';

describe('FirmaCasaPage', () => {
  let component: FirmaCasaPage;
  let fixture: ComponentFixture<FirmaCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirmaCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
