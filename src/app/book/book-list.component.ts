import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { ActivatedRoute } from '@angular/router';

@Component({

    // selector:"book-list",
    templateUrl:"./book-list.component.html"
})
export class BookListcomponent implements OnInit{

    books:Book[];

    constructor(private bookService:BookService,
                private route:ActivatedRoute){}

    ngOnInit():void{
       // alert("hi");
       this.route.paramMap.subscribe((map)=>{
       let category=map.get("category");
       console.log(category);

       this.bookService.findBooksByCategory(category).subscribe((data)=>{
           this.books=data;
           console.log(data);

       });

       
       });
      }

    // books = [
    //     {
    //         "bookId": 101,
    //         "imageUrl": "assets/images/her_last_wish.jpeg",
    //         "title": "Her Last Wish",
    //         "price": 250,
    //         "rating": 3.2,
    //         "category": "Biographies"
    //     },
    //     {
    //         "bookId": 102,
    //         "imageUrl": "assets/images/lifes_amazing_secrets.jpeg",
    //         "title": "Lifes Amazing Secrets",
    //         "price": 300,
    //         "rating": 4,
    //         "category": "Biographies"
    //     },
    //     {
    //         "bookId": 103,
    //         "imageUrl": "assets/images/secret_of_nagas.jpeg",
    //         "title": "Secret of Nagas",
    //         "price": 400,
    //         "rating": 4.9,
    //         "category": "Biographies"
    //     }
    // ];
}