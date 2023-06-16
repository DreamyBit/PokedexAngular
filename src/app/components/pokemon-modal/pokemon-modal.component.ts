import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  infoTable: any = [];
  statsTable: any = []

  constructor(private modalService: NgbModal, private pokemonDataService: PokemonDataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.infoTable = [
      { attribute: 'id', value: this.pokemon.id, icon: 'pi pi-id-card' },
      { attribute: 'tipos', value: this.pokemon.types.map((type:any) => type.type.name).join(', '), icon: 'pi pi-tag' },
      { attribute: 'exp. base', value: this.pokemon.base_experience, icon: 'pi pi-chart-bar' },
      { attribute: 'habilidad', value: this.pokemon.abilities[0].ability.name, icon: 'pi pi-star' },
      { attribute: 'altura', value: this.pokemon.height, icon: 'pi pi-info-circle' },
      { attribute: 'peso', value: this.pokemon.weight, icon: 'pi pi-info-circle' },
    ];
    this.statsTable = [
      { attribute: 'hp', value: this.pokemon.stats[0].base_stat, icon: 'pi pi-heart' },
      { attribute: 'ataque', value: this.pokemon.stats[1].base_stat, icon: 'pi pi-circle' },
      { attribute: 'defensa', value: this.pokemon.stats[2].base_stat, icon: 'pi pi-circle-fill' },
      { attribute: 'ataque sp.', value: this.pokemon.stats[3].base_stat, icon: 'pi pi-star' },
      { attribute: 'defensa sp.', value: this.pokemon.stats[4].base_stat, icon: 'pi pi-star-fill' },
      { attribute: 'velocidad', value: this.pokemon.stats[5].base_stat, icon: 'pi pi-stopwatch' },
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
