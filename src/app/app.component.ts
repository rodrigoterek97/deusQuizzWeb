import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public area: string;
	public pergunta: string;
	public correta: string;
	public alternativa1: string;
	public alternativa2: string;
	public alternativa3: string;
	public alternativa4: string;
	public alternativa5: string;

	constructor(public db: AngularFireDatabase) {
	}

	enviar() {
		if (this.area && this.pergunta && this.alternativa1 && this.alternativa2 && this.correta) {

			let alternativas = [];
			let altCorreta;

			alternativas.push(this.alternativa1);
			alternativas.push(this.alternativa2);

			if (this.alternativa3 && this.alternativa3 != "")
				alternativas.push(this.alternativa3)

			if (this.alternativa4 && this.alternativa4 != "")
				alternativas.push(this.alternativa4)

			if (this.alternativa5 && this.alternativa5 != "")
				alternativas.push(this.alternativa5)

			switch (this.correta) {
				case '1':
					altCorreta = this.alternativa1;
					break;
				case '2':
					altCorreta = this.alternativa2;
					break;
				case '3':
					altCorreta = this.alternativa3;
					break;
				case '4':
					altCorreta = this.alternativa4;
					break;
				case '5':
					altCorreta = this.alternativa5;
					break;
			}

			if (altCorreta && altCorreta != '') {

				this.db.database
					.ref('perguntas')
					.push({
						area: this.area,
						pergunta: this.pergunta,
						alternativas: alternativas,
						correta: altCorreta
					})
					.then(data => {
						console.log(data);
					})

			} else {
				alert("Escolha uma alternativa correta que esteja preenchida");
			}

		} else {
			alert("Preencha ao menos as duas primeiras alternativas");
		}

		console.log(this.area);
		console.log(this.pergunta);
		console.log(this.alternativa1);
		console.log(this.alternativa2);
		console.log(this.alternativa3);
		console.log(this.alternativa4);
		console.log(this.alternativa5);
		console.log(this.correta);

	}


}
