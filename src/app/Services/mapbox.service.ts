import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapboxService {


  private readonly MAPBOX_ACCESS_TOKEN = 'sk.eyJ1IjoibWVkYW1pbmU0NyIsImEiOiJjbGd6MDFpZngwZW5pM2pwbnJybGkxM2JiIn0.AAF5Kb1dlDUNY3-Rp6--1g';

  constructor(private http: HttpClient) { }

  public getInfo(x1: string, y1: string, x2: string, y2: string): Promise<any> {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${x1},${y1};${x2},${y2}?access_token=${this.MAPBOX_ACCESS_TOKEN}`;
    return this.http.get(url).toPromise();
  }
}
