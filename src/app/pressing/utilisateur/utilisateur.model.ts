export class Utilisateur{
 static token(token: any): string {
   throw new Error('Method not implemented.');
 }
 id: number;
 nom:string;
 prenom:string;
 email:string;
 type_uti:string;
 mdp : string;   
}