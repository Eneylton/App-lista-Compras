import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  
  produtos: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public serve: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.produtos = [];
    this.listarProdutos();
  }

  listarProdutos(){
 
    let body = {

      crud: 'listar'

    };

    this.serve.postData(body, 'servidor.php').subscribe((data:any) => {
      for (let prd of data.result) {
        this.produtos.push({

          id:     prd.id,
          nome:   prd.nome,
          qtd:    prd.qtd
        })	
         console.log("OOOK" + data.result);
      }
  })


    
}

}
