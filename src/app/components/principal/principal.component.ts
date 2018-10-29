import { Component, OnInit } from '@angular/core';
import { PokedatesService } from '../../services/pokedates.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
public listAllPokemon;
public pokemonDates;
  constructor(private pokemonDatesService: PokedatesService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
this.pokemonDatesService.getAllPokemon().subscribe(
   result => {
     this.listAllPokemon = result.results;
     console.log(result.results);
   },
  error => {
    console.log('Error al traer la información');
  }
);
  }

Click(target) {
  console.log('CLICK', target);
this.pokemonDatesService.getPokemonDates(target).subscribe(
  result => {
    this.pokemonDates = result;
    console.log(this.pokemonDates);
  },
  error => {
    console.log('Error al traer la información');
  }
);
}
}
