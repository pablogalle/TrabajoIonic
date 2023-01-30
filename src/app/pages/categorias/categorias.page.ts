import {Component, OnChanges, OnInit} from '@angular/core';
import {Genre, Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }


}
