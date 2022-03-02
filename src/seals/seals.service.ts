import { Injectable, Inject } from '@nestjs/common';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';
//import { Seals } from './seals.interface';
import { Model } from 'mongoose';
import {createQueryBuilder, getConnection}from 'typeorm'
import { Seals } from './entities/seal.entity';
import { Client } from 'src/clients/entities/client.entity';
const fs = require('fs')
const pdf = require('html-pdf')
var convert = require('xml-js');
@Injectable()
export class SealsService {

  constructor(
    @Inject('SEALS_MODEL')
    private sealsModel: Model<Seals>,
  ) {}


  test = {
    "LoteRps": {
        "-xmlns": "http://www.el.com.br/nfse/xsd/el-nfse.xsd",
        "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "-xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
        "-xsi:schemaLocation": "http://www.el.com.br/nfse/xsd/el-nfse.xsd el-nfse.xsd ",
        "Id": "123456789112345",
        "NumeroLote": "1",
        "QuantidadeRps": "1",
        "IdentificacaoPrestador": {
            "CpfCnpj": "99999999000199",
            "IndicacaoCpfCnpj": "2",
            "InscricaoMunicipal": "9999999"
        },
        "ListaRps": {
            "Rps": {
                "Id": "123456789112345",
                "LocalPrestacao": "2",
                "IssRetido": "2",
                "DataEmissao": "2011-09-20T00:00:00",
                "IdentificacaoRps": {
                    "Numero": "0000001",
                    "Serie": "1",
                    "Tipo": "1"
                },
                "DadosPrestador": {
                    "IdentificacaoPrestador": {
                        "CpfCnpj": "99999999000199",
                        "IndicacaoCpfCnpj": "2",
                        "InscricaoMunicipal": "9999999"
                    },
                    "RazaoSocial": "NOME RAZAO SOCIAL",
                    "NomeFantasia": "NOME FANTASIA",
                    "IncentivadorCultural": "2",
                    "OptanteSimplesNacional": "2",
                    "NaturezaOperacao": "1",
                    "RegimeEspecialTributacao": "1",
                    "Endereco": {
                        "LogradouroTipo": "Rua",
                        "Logradouro": "LOGRADOURO",
                        "LogradouroNumero": "999",
                        "LogradouroComplemento": "Casa",
                        "Bairro": "CENTRO",
                        "CodigoMunicipio": "9999999",
                        "Municipio": "NOME MUNICIPIO",
                        "Uf": "ES",
                        "Cep": "99999999"
                    },
                    "Contato": {
                        "Telefone": "9999999999",
                        "Email": "email@email.com.br"
                    }
                },
                "DadosTomador": {
                    "IdentificacaoTomador": {
                        "CpfCnpj": "999999999999",
                        "IndicacaoCpfCnpj": "1",
                        "InscricaoMunicipal": "999999"
                    },
                    "RazaoSocial": "NOME RAZAO SOCIAL",
                    "NomeFantasia": "NOME FANTASIA",
                    "Endereco": {
                        "LogradouroTipo": "Rua",
                        "Logradouro": "LOGRADOURO",
                        "LogradouroNumero": "999",
                        "LogradouroComplemento": "Casa",
                        "Bairro": "CENTRO",
                        "CodigoMunicipio": "9999999",
                        "Municipio": "NOME MUNICIPIO",
                        "Uf": "ES",
                        "Cep": "99999999"
                    },
                    "Contato": {
                        "Telefone": "9999999999",
                        "Email": "email@email.com.br"
                    }
                },
                "Servicos": {
                    "Servico": {
                        "CodigoCnae": "999999999",
                        "CodigoServico116": "99.99",
                        "CodigoServicoMunicipal": "99.99",
                        "Quantidade": "1",
                        "Unidade": "UN",
                        "Descricao": "DESCRICAO SERVIÇO",
                        "Aliquota": "5.00",
                        "ValorServico": "100.00",
                        "ValorIssqn": "5.00",
                        "ValorDesconto": "0.00",
                        "NumeroAlvara": "0"
                    }
                },
                "Valores": {
                    "ValorServicos": "100.00",
                    "ValorDeducoes": "0.00",
                    "ValorPis": "0.00",
                    "ValorCofins": "0.00",
                    "ValorInss": "0.00",
                    "ValorIr": "0.00",
                    "ValorCsll": "0.00",
                    "ValorIss": "5.00",
                    "ValorOutrasRetencoes": "0.00",
                    "ValorLiquidoNfse": "100.02",
                    "ValorIssRetido": "0.00"
                },
                "Observacao": "Observação",
                "Status": "1"
            }
        }
    }
}

  /*generatePDF = () => {

    const html = fs.readFileSync('index.html').toString()
      
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html, options).toBuffer((err, buffer) => {
                      return buffer
    })
}*/

 
    async create(createSealDto: CreateSealDto) {
  /* const createdSeal = new this.sealsModel(createSealDto);
       createdSeal.save();  */

       await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Seals)
    .values(createSealDto)
    .execute();

       
//var json = require('fs').readFileSync('test.json', 'utf8');
var options = {compact: true, ignoreComment: true, spaces: 4};
var result = convert.json2xml(this.test, options);
console.log(result);
      return result
    }
  

  async findAll() {


    const a = await createQueryBuilder("Client")
    .innerJoin("Client.id", "Seals")
    //.leftJoinAndSelect(Seals, "Seals", "Seals.client_id = Client.id")
   // .innerJoin("seals.cleints", "clients", "clients.id = :id", { id: this.Client.id })
    .getRawMany()
    return a
/*
    
    var a = this.sealsModel.find().populate('client_id')
    var b = this.sealsModel.aggregate([{
        $lookup: {
          from: 'seals',
          localField: 'client_id',
          foreignField: '_id',
          as: 'clients' 
        }
    }])    
    return a*/
}

  findOne(id: number) {
    return this.sealsModel.findOne({id: id})
  }

  async update(id: String, updateSealDto: UpdateSealDto) {
    //return await this.sealsModel.updateOne({_id: id.trim() }, updateSealDto).exec();
    
  }

  async remove(id: string) {
    //return await this.stockModel.deleteOne({id: id});
    //return await this.sealsModel.deleteOne({ _id: id.trim() }).exec();
    
    
  }

}
