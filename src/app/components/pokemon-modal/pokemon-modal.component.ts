import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDataService } from'../../services/pokemon-data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModal implements OnInit {
  @Input() pokemon: any;
  @ViewChild('modalContent') modalContent: any;

  sprites: any = [];
  info1Table: any = [];

  constructor(private modalService: NgbModal, private pokemonDataService: PokemonDataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.info1Table = [
      { attribute: 'id', value: this.pokemon.id, icon: 'pi pi-info-circle' },
      { attribute: 'types', value: this.pokemon.types.map((type:any) => type.type.name).join(', '), icon: 'pi pi-tag' },
      { attribute: 'base exp', value: this.pokemon.base_experience, icon: 'pi pi-chart-bar' },
      { attribute: 'ability', value: this.pokemon.abilities[0].ability.name, icon: 'pi pi-chart-bar' },
      { attribute: 'Height', value: this.pokemon.height, icon: 'pi pi-chart-bar' },
      { attribute: 'Weight', value: this.pokemon.weight, icon: 'pi pi-chart-bar' },
    ];
    this.open(null);
  }

  open(content: any): void {
    this.loadSprites();
    if(content != null){
      this.modalService.open(content, { ariaLabelledBy: 'modal-title', centered: true });
    }
  }

  loadSprites(): void {
    const auxArray = Object.values(this.pokemon.sprites);
    this.sprites = auxArray.slice(0, 8);
  }

  get filteredSprites(): string[] {
    return this.sprites.filter((sprite:any) => sprite !== null);
  }
}
