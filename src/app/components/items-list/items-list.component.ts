import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemdataService, Item } from '../../service/itemdata.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit {
  constructor(private itemdataService: ItemdataService) { }
  @Input() itemData: Item[] = [];
  @Output() sendToParent = new EventEmitter();

  ngOnInit(): void {
    
  }

  clickItem(id: string) {
    const selItem = this.itemData.filter((item)=>item._id === id);
    if (selItem.length === 1) {
      this.sendToParent.emit(selItem[0]);
    }
  }
}
