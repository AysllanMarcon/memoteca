import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router,
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe((res)=>{
      alert("Criado com sucesso");
      this.router.navigate(['/listarPensamento']);
    }, err =>{
      alert(err.message)
    });
  }

  cancelar(){
    if(confirm('Deseja cancelar?'))
      this.router.navigate(['/listarPensamento']);
  }

}
