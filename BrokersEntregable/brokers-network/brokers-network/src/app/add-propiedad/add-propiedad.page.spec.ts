import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPropiedadPage } from './add-propiedad.page';

describe('AddPropiedadPage', () => {
  let component: AddPropiedadPage;
  let fixture: ComponentFixture<AddPropiedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropiedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
