import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReunioesComponent } from './lista-reunioes.component';

describe('ListaReunioesComponent', () => {
  let component: ListaReunioesComponent;
  let fixture: ComponentFixture<ListaReunioesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReunioesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReunioesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
