import { Client } from "src/app/client.model";
import { Gestionstock } from "../gestionstock/gestionstock.model";
import { Utilisateur } from "../utilisateur/utilisateur.model";

export class Gestionstockutil{
    id: number;
    qte_entree: number;
    qte_sortie: number;
    datej: Date;
    utilisateur: Utilisateur;
    gestionstock: Gestionstock;
}