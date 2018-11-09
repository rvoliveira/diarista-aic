import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController) { }
  ionViewDidLoad() {
    this.pages = [
      { title: 'Agenda', component: 'AgendaPage' },
      { title: 'Perfil', component: 'PerfilPage' },
      { title: 'Compras', component: 'ComprasPage' },
      { title: 'Mapa', component: 'MapaPage' },
      { title: 'Histórico', component: 'HistoricoPage' },
      { title: 'Contato', component: 'ContatoPage' },
      { title: 'Configurações', component: 'ConfiguracoesPage' },
      { title: 'Sobre', component: 'SobrePage' },
      { title: 'Sair', component: null },
    ];
  }
  openPage(page: any) {
    this.navCtrl.push(page.component);  
  }
}
