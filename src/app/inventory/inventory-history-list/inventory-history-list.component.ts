import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { InventoryService } from './../../service/inventory/inventory.service';

@Component({
  selector: 'app-inventory-history-list',
  templateUrl: './inventory-history-list.component.html',
  styleUrls: ['./inventory-history-list.component.scss'],
})
export class InventoryHistoryListComponent implements OnInit {
  ngOnInit(): void {}
  displayedColumns: string[] = [
    'data',
    'orderNumber',
    'type',
    'product',
    'amount',
  ];
  titlePage: string = 'Movimentação de Estoque';
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private inventoryService: InventoryService) {
    this.inventoryService.listHistory().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Erro ao procurar movimentação de estoque');
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
