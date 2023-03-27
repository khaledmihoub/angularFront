import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';


@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {


  clientForm: FormGroup;
  image="";

  codes_banques = [
    {
      banque: "ATB",
      code: "01"
    },
    {
      banque: "BFT",
      code: "02"
    },
    {
      banque: "BNA",
      code: "03"
    },
    {
      banque: "ATTIJARI",
      code: "04"
    },
    {
      banque: "BT",
      code: "05"
    },
    {
      banque: "AMEN",
      code: "07"
    },
    {
      banque: "BIAT",
      code: "08"
    },
    {
      banque: "STB",
      code: "10"
    },
    {
      banque: "UBCI",
      code: "11"
    },
    {
      banque: "UIB",
      code: "12"
    },
    {
      banque: "BH",
      code: "14"
    },
    {
      banque: "CITI",
      code: "16"
    },
    {
      banque: "BTS",
      code: "27"
    },
    {
      banque: "ABC",
      code: "28"
    },
    {
      banque: "QNB",
      code: "23"
    },
    {
      banque: "BTE",
      code: "24"
    },
    {
      banque: "ZITOUNA",
      code: "25"
    },
    {
      banque: "BARAKA",
      code: "32"
    },
    {
      banque: "WIFAK",
      code: "47"
    },
    {
      banque: "BTK",
      code: "20"
    },
    {
      banque: "BFPME",
      code: "29"
    },
    {
      banque: "BTL",
      code: "26"
    },
    {
      banque: "STUSID",
      code: "21"
    },
    {
      banque: "POSTE",
      code: "17"
    },
    {
      banque: "BCT",
      code: "00"
    },
    {
      banque: "NAIB",
      code: "33"
    },
    {
      banque: "TIB",
      code: "73"
    }
  ]
  constructor(_formBuilder: FormBuilder, private clientService:ClientService) {
    this.clientForm = _formBuilder.group({
      nom: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      prenom: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl("",[Validators.required,Validators.email]),
      mat_fis: new FormControl("",[Validators.required]),
      tel: new FormControl("",[Validators.required,Validators.pattern("[0-9]{8}")]),
      zone: new FormControl("",[Validators.required]),
      adresse: new FormControl("",[Validators.required]),
      banque: new FormControl("",[Validators.required]),
      note: new FormControl("",[]),
    })
  }

  ngOnInit(): void {
  }


  saveFormulaire()
  {
    if(this.clientForm.valid)
    {
      let client=this.clientForm.value;
      this.clientService.ajouterClient(client).subscribe(res=>{
        if(res.success)
        {
          //res.obj = id
          console.log(res.msg);
        }else{
          //res.obj = err
          console.log(res.msg)
        }
      })
    }else{
      console.log("FORMULAIRE INVALIDE")
    }

  }


  get fc()
  {
    return this.clientForm.controls;
  }
}
