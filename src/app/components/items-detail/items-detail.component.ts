import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Item, ItemdataService } from '../../service/itemdata.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.scss'
})
export class ItemsDetailComponent implements OnInit{
  @Input() detailData: Item[] = [];
  @Output() sendToParentDeleteId = new EventEmitter();

  constructor(private itemDataService : ItemdataService, private cdr:ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  
  onClickDeleteButton(deleteId:string){
    this.sendToParentDeleteId.emit(deleteId);
  }
}
