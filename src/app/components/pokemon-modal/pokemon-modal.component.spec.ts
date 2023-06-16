import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModal } from './pokemon-modal.component';

describe('PokemonModalComponentComponent', () => {
  let component: PokemonModal;
  let fixture: ComponentFixture<PokemonModal>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonModal]
    });
    fixture = TestBed.createComponent(PokemonModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
