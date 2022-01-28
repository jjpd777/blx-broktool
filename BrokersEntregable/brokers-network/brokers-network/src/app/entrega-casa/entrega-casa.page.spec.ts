import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaCasaPage } from './entrega-casa.page';

describe('EntregaCasaPage', () => {
  let component: EntregaCasaPage;
  let fixture: ComponentFixture<EntregaCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
