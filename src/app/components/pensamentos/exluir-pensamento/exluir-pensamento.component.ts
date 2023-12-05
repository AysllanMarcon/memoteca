import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exluir-pensamento',
  templateUrl: './exluir-pensamento.component.html',
  styleUrls: ['./exluir-pensamento.component.scss']
})
export class ExluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=> this.pensamento = pensamento);
  }

  excluirPensamento(){
    if(this.pensamento.id)
      this.service.excluir(this.pensamento.id).subscribe(
        ()=> this.router.navigate(['listarPensamento'])
      );
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }


}
