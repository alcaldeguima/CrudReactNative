export class Contato {
  
    constructor() {
}
   // constructor(id?: number, nome?: string, email?: string) {
   //   this.id = id;
   //   this.nome = nome;
   //   this.email = email;
   // }
   
   public id: number;
   public nome: string;    
   public email: string; 
   public natural: string;    
   
   toString() {
     return this.id+''+this.nome+''+this.email+''+this.natural;
   }
 }