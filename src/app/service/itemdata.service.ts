import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  _id: string,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {
  private itemSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemSubject.asObservable();

  private item_url = 'http://localhost:3000/items';
  
  constructor(private http: HttpClient) { }

  private uniquString() {
    const randomPart = Math.random().toString(36).substring(2, 9)
    const timePart = Date.now().toString(36);
    return randomPart + timePart;
  }

  public getItems(id?:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.item_url}`)
  }
  
  public addNewItem(newItem: Item) {
    newItem._id = this.uniquString();
    return this.http.post<any>(this.item_url, newItem, {headers:{'Content-Type': 'application/json'}})
  }

  public deleteItem(id: string):Observable<any>{
    return this.http.delete<any>(`${this.item_url}/${id}`);
  }
}
