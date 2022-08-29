import { Client } from "src/app/client.model";

export class Commande{
   id : number;
   date: Date;
   date_liv: Date;
   etat_paiement : string;
   etat_livraison : number;
   client:Client;
}