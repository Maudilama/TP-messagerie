import {Component, OnInit} from '@angular/core';
import {Personne} from '../class/personne';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {

  public personnes: Array<Personne> = [];

  constructor() {
  }

  ngOnInit() {
    this.initPersonnes();
  }


  initPersonnes(){
    this.personnes.push(new Personne('Paul'));
    this.personnes.push(new Personne('Alain'));
  }
}
