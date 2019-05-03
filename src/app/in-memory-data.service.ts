import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Superman', imageUrl: 'https://static.comicvine.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg' },
      { id: 12, name: 'Batman', imageUrl: 'https://rfathead-res.cloudinary.com/image/upload/c_scale,f_auto,h_600,q_auto,w_600/v1506311513/assets/web/97-97013_batman_justice_league_pdp_left_prod_01.png' },
      { id: 13, name: 'Deadpool', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Deadpool.png/220px-Deadpool.png' },
      { id: 14, name: 'Captain America', imageUrl: 'https://i.pinimg.com/originals/ec/b8/67/ecb867283a30f334f40d11de551f5f36.jpg' },
      { id: 15, name: 'Iron Man', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg' },
      { id: 16, name: 'Wonder Woman', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg' },
      { id: 17, name: 'Captain Marvel', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg' },
      { id: 18, name: 'Spiderman', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png' },
      { id: 19, name: 'The Hulk', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png' },
      { id: 20, name: 'Silver Surfer', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/92/Silver_Surfer.jpg' },
      { id: 21, name: 'One Punch Man', imageUrl: 'https://cdn.vox-cdn.com/thumbor/V4vEEUZ66YB_fwC79HX1MT964zU=/0x0:1136x636/1200x800/filters:focal(571x43:751x223)/cdn.vox-cdn.com/uploads/chorus_image/image/63181071/Screen_Shot_2018_06_04_at_1.19.04_PM.0.png' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
