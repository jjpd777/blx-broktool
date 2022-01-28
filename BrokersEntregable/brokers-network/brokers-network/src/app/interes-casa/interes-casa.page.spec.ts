import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteresCasaPage } from './interes-casa.page';

describe('InteresCasaPage', () => {
  let component: InteresCasaPage;
  let fixture: ComponentFixture<InteresCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteresCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
