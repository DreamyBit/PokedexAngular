import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDataService } from '../../services/pokemon-data-service.service';
import { PokemonModal } from '../pokemon-modal/pokemon-modal.component';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PokemonComponent implements OnInit {
  pokemons: any = [];
  filteredPokemons: any = [];
  query = '';
  currentPage = 1;
  itemsPerPage = 20;
  currentSortState: number = 0; // 0: id, -1: dsc, 1: asc

  constructor(
    private http: HttpClient,
    private pokemonDataService: PokemonDataService,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPokemonAPI();
  }

  getPokemonAPI(): void {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

    this.http.get(url).subscribe({
      next: (data) => {
        this.pokemons.push(data);
        this.pokemons = this.pokemons[0].results;
        this.filteredPokemons = this.pokemons.slice();
      },
      error: (e) => console.error(e),
    });
  }

  filterPokemons(): void {
    this.filteredPokemons = this.pokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(this.query.toLowerCase())
    );

    this.currentPage = 1;
  }

  sortData(): void {

    if (this.currentSortState === 0) {
      // Ascending sort
      this.filteredPokemons.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
      this.currentSortState = 1;
    } else if (this.currentSortState === 1) {
      // Descending sort
      this.filteredPokemons.sort((a: any, b: any) =>
      b.name.localeCompare(a.name)
      );
      this.currentSortState = -1;
    } else {
      this.filteredPokemons = [...this.pokemons.slice()];
      this.currentSortState = 0;
    }

    this.cdRef.markForCheck();
  }

  getPaginatedPokemons(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPokemons.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(
      this.filteredPokemons.length / this.itemsPerPage
    );
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredPokemons.length / this.itemsPerPage);
  }

  onPokemonClick(pokemonName: string): void {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        console.log(data);
        this.pokemonDataService.pokemon = data;
        this.openModal();
      },
      (error) => {
        console.error(error); // Handle any errors
      }
    );
  }

  openModal(): void {
    const modalReference = this.modalService.open(PokemonModal, {
      ariaLabelledBy: 'modal-title',
      centered: true,
    });
    modalReference.componentInstance.pokemon = this.pokemonDataService.pokemon;
  }
}
