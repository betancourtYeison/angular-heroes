import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "./../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.term = params["term"];
      if (this.term.length > 0) {
        this.heroes = this._heroesService.searchHeroe(this.term);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });
  }

  showHeroe(id: number) {
    this._router.navigate(["/heroe", id]);
  }
}
