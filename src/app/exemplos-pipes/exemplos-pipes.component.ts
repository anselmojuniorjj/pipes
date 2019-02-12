import { Component, OnInit } from '@angular/core';

import { Observable, from } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Titulo do livro',
    rating: 4.54321,
    numeroPaginas: 324,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Angular', 'Java'];

  filtro: string;

  addLivro(livro: string) {
    this.livros.push(livro);
  }


  // ---- lógica para filtrar ------
  obterLivro() {

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }
    // tslint:disable-next-line:no-shadowed-variable
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
        return false;
    });
  }
// -----------------------------------------------------------

  // tslint:disable-next-line:member-ordering
  valorAsync = new Promise((resolve, reject) => {
    // tslint:disable-next-line:semicolon
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  // tslint:disable-next-line:member-ordering
  valorAsync2 = interval(2000).pipe(
    map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit() {
  }

}
