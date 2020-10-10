import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-corral',
  templateUrl: './corral.component.html',
  styleUrls: ['./corral.component.css']
})
export class CorralComponent implements OnInit {

  idCorral = this.route.snapshot.paramMap.get("id")

  allAnimals = []

  allAnimalsbyCorral = []

  constructor(private animalService: AnimalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalService.getAllAnimalsByIdCorral(this.idCorral)
      .then(response => {
        this.allAnimalsbyCorral = response
      })
      .catch(err => console.log())
  }

}
