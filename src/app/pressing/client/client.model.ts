import { Utilisateur } from "../utilisateur/utilisateur.model";

export class Client{
    id:number;
    nom:string;
    prenom:string;
    email:string;
    tel:number;
    adresse:string;
    utilisateur:Utilisateur
}