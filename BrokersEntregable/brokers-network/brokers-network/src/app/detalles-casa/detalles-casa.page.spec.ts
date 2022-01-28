import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesCasaPage } from './detalles-casa.page';

describe('DetallesCasaPage', () => {
  let component: DetallesCasaPage;
  let fixture: ComponentFixture<DetallesCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
