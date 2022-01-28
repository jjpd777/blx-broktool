import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisClientesPage } from './mis-clientes.page';

describe('MisClientesPage', () => {
  let component: MisClientesPage;
  let fixture: ComponentFixture<MisClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisClientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
