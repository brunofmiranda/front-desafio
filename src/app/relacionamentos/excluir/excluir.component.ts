import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Relacionamento } from '../models/relacionamento';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Relacionamento) {}

  ngOnInit(): void {
  }

}
