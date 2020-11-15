import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage({})
@Component({
  selector: 'page-contador',
  templateUrl: 'contador.html',
})
export class ContadorPage {
  id: number;
  nome: string = "";
  qtd: number;
  total1: number;
  total2: number;
  carrihho: number;
  calculo: number;

  produtos: any[];
  calculos: any[];
  contador: number =0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serve: ServiceProvider) {
  }

  ionViewDidLoad() {

    this.listarProdutos();
    this.listarTotal();
    this.produtos = [];


  }


  listarProdutos() {

    let body = {

      crud: 'listar-contador'

    };

    this.serve.postData(body, 'servidor.php').subscribe((data: any) => {
      for (let i = 0; i < data.result.length; i++) {
        this.produtos.push({

          id: data.result[i]["id"],
          nome: data.result[i]["nome"],
          valor: data.result[i]["valor"],
          total: data.result[i]["total"],
          qtd: data.result[i]["qtd"]
        })

      }
    })
  }


  
  listarTotal() {

    let body = {

      crud: 'listar-total'

    };

    this.serve.postData(body, 'servidor.php').subscribe((data: any) => {
      for (let i = 0; i < data.result.length; i++) {
        
        this.calculo = data.result[i]["soma"];

      }
    })
  }

  acresentar(id: number, qtd: number, valor:any, total:any) {
      
     this.contador++ ;

      let body = {
        id: id,

        qtd: qtd,

        total: total,

        valor: valor,

        crud: 'add'

      };

      this.serve.postData(body, 'servidor.php').subscribe((data: any) => {


        this.ionViewDidLoad();

      });
    

  }

  remover(id: number, qtd: number, valor: any, total:any) {

    this.contador-- ;

      let body = {

        id: id,

        qtd: qtd,

        total: total,

        valor: valor,

        crud: 'rev'

      };

      this.serve.postData(body, 'servidor.php').subscribe((data: any) => {
      
        this.ionViewDidLoad();
      
      });
    

  }




}
