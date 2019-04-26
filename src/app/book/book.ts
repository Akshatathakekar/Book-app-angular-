
export class Author{
    firstName:string;
    lastName:string;
}

export class Book{

    bookId:number;
    imageUrl:string;
    title:string;
    authors:Author[];
    publisher:string;
    category:string;
    noOfPages:number;
    rating:number;
    edition:number;
    price:number;
    releaseDate:Date;
}