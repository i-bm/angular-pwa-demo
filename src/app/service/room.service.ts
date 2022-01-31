import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../interface/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

 
  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`https://i-bm.github.io/room-booking-detail-data/data.json`);
  }
}
