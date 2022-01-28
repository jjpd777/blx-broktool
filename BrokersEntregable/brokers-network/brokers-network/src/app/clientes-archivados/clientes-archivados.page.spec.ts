import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesArchivadosPage } from './clientes-archivados.page';

describe('ClientesArchivadosPage', () => {
  let component: ClientesArchivadosPage;
  let fixture: ComponentFixture<ClientesArchivadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesArchivadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesArchivadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
