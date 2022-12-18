import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filteredTransaction, transaction } from 'src/transaction';

@Component({
  selector: 'nodeass-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  transactions: transaction[] = [];
  filteredTransaction: filteredTransaction[] = [];
  constructor(private http: HttpClient) {}

  getTransactionSortedByDateFilteredByStatus() {
    return this.http.get('http://localhost:3000/api/transaction');
  }
  getTransactionSortedByDate() {
    return this.http.get(
      'http://localhost:3000/api/transaction/sortby?startDate="2022-12-17"&endDate="2022-12-17'
    );
  }
  ngOnInit(): void {
    this.getTransactionSortedByDateFilteredByStatus().subscribe(
      (trans: transaction[]) => {
        this.transactions = trans;
        this.transactions.map((transaction) => {
          transaction.date = new Date(transaction.date)
            .toISOString()
            .slice(0, 10);
        });
      }
    );
    this.getTransactionSortedByDate().subscribe((trans: transaction[]) => {
      this.filteredTransaction = trans;
      this.filteredTransaction.map((transaction) => {
        transaction.date = new Date(transaction.date)
          .toISOString()
          .slice(0, 10);
      });
    });
  }
}
