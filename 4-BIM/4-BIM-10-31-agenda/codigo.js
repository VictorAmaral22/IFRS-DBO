class agenda {
    constructor(dono) {
        this.dono = dono;
        this.pacientes = [];
    }
    abrirAgenda() {
        this.dias = [{
            dia: '1 de Novembro',
            hora: [{
                    hr: 1,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 2,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 3,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 4,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 5,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 6,
                    disponivel: true,
                    consultar: undefined
                },
                {
                    hr: 7,
                    disponivel: true,
                    consultar: undefined
                }
            ]
        }];
    }

    ResgatarAgenda() {
        for (let c = 0; c < this.dias.length; c++) {
            console.log(this.dias[c].dia);
            for (let c1 = 0; c1 < this.dias.hora.length; c1++) {
                console.log(this.dias[c].hora[c1].hr);
                if (!this.dias[c].hora[c1].disponivel) {
                    console.log(this.dias[c].hora[c1].consultar);
                } else {
                    console.log('Não há consultas...');
                }
            }
        }
    }
}

class horario extends agenda {
    constructor(dono) {
        super(dono);
    }
    ObterHorariosDisponiveis() {
        var disp = [];
        var caixa = [];
        for (let c = 0; c < super.dias.length; c++) {
            for (let c1 = 0; c1 < super.dias[c].hora.length; c1++) {
                if (super.dias[c].hora[c1].disponivel) {
                    caixa[caixa.length - 1] = super.dias[c].hora[c1].hr;
                }
            }
            disp[disp.length - 1] = {
                dia: super.dias[c],
                hr: caixa
            }
        }
        return disp;
    }
    AlterarDisp() {
        var dia = prompt('Digite o dia: ');
        var hora = parseInt(prompt('Digite horáro do dia ' + dia + ': '));
        for (let c = 0; c < super.dias.length; c++) {
            if (super.dias[c].dia == dia) {
                for (let c1 = 0; c1 < super.dias[c].hora.length; c1++) {
                    if (super.dias[c].hora[c1] == hora) {
                        super.dias[c].disponivel = true;
                        super.dias[c].hora[c1].consultar = undefined;
                    }
                }
            }
        }
    }
}
//serviços
class servico {
    constructor() {
        this.des = '';
        this.price = 100;
    }
    registrar(agenda, paciente) {
        let c = paciente.AdicionarConsulta().c;
        let c1 = paciente.AdicionarConsulta().c1;
        let servico = paciente.AdicionarConsulta().servico;
        agenda.dias[c].hora[c1].consultar = 'Nome: ' + paciente.nome + '\nDia: ' + agenda.dias[c].dia + '\nHora: ' + agenda.dias[c].hora[c1].hr + '\nServiço: ' + servico + '\nDescrição: ' + limpeza.des + '\nPreço: ' + limpeza.price;
    };
}
class limpeza extends servico {
    constructor() {
        super()
        this.des = 'Limpeza';
        this.material = 'Lâminas';
        this.dente = '';
    }
}
class exame extends servico {
    constructor() {
        super()
        this.tipo = 'Exame';
        this.des = this.tipo;
    }
    medida() {
        let m = prompt('Qual foi a medida preventiva utilizada?');
        this.med = m;
    }
    tp_exame() {
        let t = prompt('Que tipo de exame é?');
        this.tipo = t;
    }
}


class Paciente {
    AdicionarConsulta(hor, agenda, limpeza, exame) {
        let d = prompt("Digite um dia");
        let h = parseInt(prompt("Digite um horario"))
        let c = 0;
        let c1 = 0;
        for (; c < agenda.dias.length; c++) {
            let obj = agenda.dias[c];
            if (obj.dia == d) {
                for (; c1 < obj.hora.length; c1++) {
                    if (h == obj.hora[c1]) {
                        break;
                    }
                }
            }
        }
        agenda.dias[c].hora[c1].disponivel = false;
        let oq_c_quer = prompt('Que tipo de consulta desejas? (limpeza ou exame)');
        if (oq_c_quer == 'limpeza') {
            limpeza.dente = prompt('Qual dente?');
            limpeza.registrar(agenda, paciente);
        }
        if (oq_c_quer == 'exame') {
            exame.tp_exame();
            exame.medida();
            exame.registrar(agenda, paciente);
        }


        agenda.dias[c].hora[c1].consultar = '';
        return {
            c: c,
            c1: c1,
            servico: oq_c_quer
        }
    }
    CadastrarPaciente() {
        this.nome = prompt('Digite o nome do paciente: ');
        this.rg = prompt('Digite o RG do paciente: ');
        this.endereco = prompt('Digite o endereço do paciente: ');
        this.telefone = prompt('Digite o telefone do paciente: ');
        this.nasc = prompt('Digite a data de nascimento do paciente: ');
        this.prof = prompt('Digite a profissão do paciente: ');

    }
}

var Fulano = new Paciente();
var Agenda_Joazinho = new agenda('Joazinho');
var horario_Joazinho = new horario();
var Limpeza_Joazinho = new limpeza();
var Exame_Joazinho = new exame();
Fulano.CadastrarPaciente();
Fulano.AdicionarConsulta(horario_Joazinho, Agenda_Joazinho, Limpeza_Joazinho, Exame_Joazinho);

//Teve herança na classe exame e limpeza que herdaram coisas da servico