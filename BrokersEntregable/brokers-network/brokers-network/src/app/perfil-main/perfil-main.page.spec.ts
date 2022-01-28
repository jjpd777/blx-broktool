import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilMainPage } from './perfil-main.page';

describe('PerfilMainPage', () => {
  let component: PerfilMainPage;
  let fixture: ComponentFixture<PerfilMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
