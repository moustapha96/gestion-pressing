import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleCreateComponent } from '../article-create/article-create.component';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.scss']
})
export class ArticleListeComponent implements OnInit {

  listeArtcile: Article[] = [];

  public page: any;
  public displayedColumns = ['selection', 'produit', 'conditionnement', 'emballage', 'prix', 'quantité', 'region', 'departement', 'zone', 'edit'];
  public dataSource: any;


  heads = [['Produit', 'Conditionnement', 'Emballage', 'Unite', 'Quantite', 'Prix(FCFA)', 'Date']];
  datas = [[]];

  constructor(private artcileService: ArticleService, public dialog: MatDialog ) {

    
  }

  ngOnInit(): void {
    this.loadData();
    this.dataSource = null;
   
    console.log(this.dataSource);
  }





  loadData() {
  
    this.artcileService.findAll().subscribe(res => {
      console.log(res);
    this.listeArtcile = res;
      this.dataSource = new MatTableDataSource <Article>(this.listeArtcile);
      
    }, error => {
      console.log(error);
     
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  public openViewDialog(collecte) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "600px";
    dialogConfig.height = "300px";
    dialogConfig.data = collecte;

    let dialogRef = this.dialog.open(ArticleCreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(collecte => {
      console.log(dialogRef);
    });

  }




}
function MatPaginator(MatPaginator: any) {
  throw new Error('Function not implemented.');
}

