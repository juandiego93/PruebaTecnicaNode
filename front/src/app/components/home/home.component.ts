import { Component, OnInit } from '@angular/core';
import { CorralService } from '../../services/corral.service';
import { AnimalService } from '../../services/animal.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelCorral = {
    id: 0,
    name: '',
    desc: '',
    cantidad: 0,
    state: false
  }

  modelAnimal = {
    id: 0,
    name: '',
    desc: '',
    cantidad: 0,
    danger: 1,
    state: false,
    corral: ''
  }

  allCorrales = []

  constructor(private corralService: CorralService, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.corralService.getAllCorrales()
      .then(response => {
        if (response) {
          this.allCorrales = response
        }
        else {
          alert('Sin datos')
        }
      })
      .catch(err => console.log())
  }

  createCorral(modelCorral) {
    this.corralService.createNewCorral(modelCorral)
      .then(response => {
        if (response) {
          $('#crearCorral').modal('hide')
          $("#crearCorral.close").click()
          this.ngOnInit()
        }
      })
      .catch(err => console.log())
  }

  createAnimal(modelAnimal) {
    this.animalService.createNewAnimal(modelAnimal)
      .then(response => {
        if (response.status) {
          alert('Corral creado')
          this.ngOnInit()
        }
      })
      .catch(err => console.log())
  }

  removeCorral(id) {
    this.corralService.removeCorral(id)
      .then(response => {
        if (response) {
          this.ngOnInit()
        }
      })
      .catch(err => console.log)
  }

}
