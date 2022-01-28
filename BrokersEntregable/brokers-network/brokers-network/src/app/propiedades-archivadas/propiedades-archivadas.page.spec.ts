import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadesArchivadasPage } from './propiedades-archivadas.page';

describe('PropiedadesArchivadasPage', () => {
  let component: PropiedadesArchivadasPage;
  let fixture: ComponentFixture<PropiedadesArchivadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadesArchivadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadesArchivadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
