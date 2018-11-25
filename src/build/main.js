webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronometroInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CronometroInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronometroInicioPage = /** @class */ (function () {
    function CronometroInicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        CronometroInicioPage_1.sprint = this.navParams.get('sprint');
        this.dateSprint = this.navParams.get('dateSprint');
        this.choiceSprint = this.navParams.get('choiceSprint');
        this.exercicio = this.navParams.get('exercicio');
    }
    CronometroInicioPage_1 = CronometroInicioPage;
    CronometroInicioPage.prototype.start = function () {
        console.log(CronometroInicioPage_1.sprint);
        CronometroInicioPage_1.isenabled = false;
        CronometroInicioPage_1.intervalo = setInterval(function () {
            CronometroInicioPage_1.segundos += 1;
            if (CronometroInicioPage_1.segundos === 60) {
                CronometroInicioPage_1.minutos++;
                CronometroInicioPage_1.segundos = 0;
            }
            if (CronometroInicioPage_1.sprint == CronometroInicioPage_1.minutos) {
                CronometroInicioPage_1.clean();
            }
            if (CronometroInicioPage_1.minutos < 10) {
                if (CronometroInicioPage_1.segundos < 10) {
                    CronometroInicioPage_1.setTempo('0' + CronometroInicioPage_1.minutos + ':' + '0' + CronometroInicioPage_1.segundos);
                }
                else {
                    CronometroInicioPage_1.setTempo('0' + CronometroInicioPage_1.minutos + ':' + CronometroInicioPage_1.segundos);
                }
            }
            else {
                if (CronometroInicioPage_1.segundos < 10) {
                    CronometroInicioPage_1.setTempo(CronometroInicioPage_1.minutos + ':' + '0' + CronometroInicioPage_1.segundos);
                }
                else {
                    CronometroInicioPage_1.setTempo(CronometroInicioPage_1.minutos + ':' + CronometroInicioPage_1.segundos);
                }
            }
            console.log(CronometroInicioPage_1.tempo);
        }, 1000);
    };
    CronometroInicioPage.prototype.pause = function () {
        switch (CronometroInicioPage_1.acao) {
            case 'Pausar':
                console.log('pausando');
                clearInterval(CronometroInicioPage_1.intervalo);
                CronometroInicioPage_1.acao = 'Continuar';
                break;
            case 'Continuar':
                console.log('continuando');
                CronometroInicioPage_1.acao = 'Pausar';
                this.start();
                break;
        }
    };
    CronometroInicioPage.clean = function () {
        clearInterval(this.intervalo);
        this.limpaCampos();
        CronometroInicioPage_1.tempo = '00:00';
        this.isenabled = true;
        CronometroInicioPage_1.acao = 'Pausar';
    };
    CronometroInicioPage.prototype.stopAndClean = function () {
        CronometroInicioPage_1.clean();
    };
    CronometroInicioPage.setTempo = function (x) {
        CronometroInicioPage_1.tempo = x;
    };
    Object.defineProperty(CronometroInicioPage.prototype, "tempo", {
        get: function () {
            return CronometroInicioPage_1.tempo;
        },
        enumerable: true,
        configurable: true
    });
    CronometroInicioPage.limpaCampos = function () {
        CronometroInicioPage_1.minutos = 0;
        CronometroInicioPage_1.segundos = 0;
    };
    Object.defineProperty(CronometroInicioPage.prototype, "isenabled", {
        get: function () {
            return CronometroInicioPage_1.isenabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CronometroInicioPage.prototype, "acao", {
        get: function () {
            return CronometroInicioPage_1.acao;
        },
        enumerable: true,
        configurable: true
    });
    CronometroInicioPage.prototype.ionViewDidLeave = function () {
        CronometroInicioPage_1.clean();
    };
    CronometroInicioPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    CronometroInicioPage.tempo = '00:00';
    CronometroInicioPage.acao = 'Pausar';
    CronometroInicioPage.segundos = 0;
    CronometroInicioPage.minutos = 0;
    CronometroInicioPage.isenabled = true;
    CronometroInicioPage = CronometroInicioPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cronometro-inicio',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/cronometro-inicio/cronometro-inicio.html"*/'<!--\n  Generated template for the CronometroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n  <p style="text-align: center;font-size: 67px">{{ tempo }}</p>\n  <br><br><br><br>\n  <button ion-button block outline (click)="start()" [disabled]="!isenabled" style="color:black;border-color: black">Começar</button>\n  <button ion-button block outline (click)="pause()" [disabled]="isenabled" style="color:black;border-color:black">{{acao}}</button>\n  <button ion-button block outline (click)="stopAndClean()" style="color:black;border-color: black">Parar e Zerar</button>\n\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/cronometro-inicio/cronometro-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CronometroInicioPage);
    return CronometroInicioPage;
    var CronometroInicioPage_1;
}());

//# sourceMappingURL=cronometro-inicio.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoPage = /** @class */ (function () {
    function ResultadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadoPage');
    };
    ResultadoPage.prototype.abreHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
    };
    ResultadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-resultado',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/resultado/resultado.html"*/'<!--\n  Generated template for the ResultadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n    <h1>Você concluiu seu treino!</h1>\n\n  <ion-label >Deseja Salvar ?</ion-label>\n <button ion-button block  outline style="color:black;border-color: black;height: 3em;" (click)="abreHome()">Sim</button>\n <button ion-button block  outline color="danger" style="height: 3em;color:black;border-color: black" (click)="abreHome()">Não</button>\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/resultado/resultado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ResultadoPage);
    return ResultadoPage;
}());

//# sourceMappingURL=resultado.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n    <h2 style="text-align: center"> Nossa Equipe</h2>\n  O FitApp foi desenvolvido por uma equipe de estudantes voltado para quem quer fazer exercícios funcionais em casa.\n   O aplicativo conta com uma série recursos e dicas para facilitar e ajudar aqueles que querem seguir ou montar o seu próprio treinamento.\n   O FitApp conta contem  um cronômetro, dicas de exercício, cálculo IMC(índice de massa corporal) e um GPS para aqueles que correm ou caminham pode traçar e acompanhar seu seu percurso.\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/sobre/sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cronometro-inicio/cronometro-inicio.module": [
		288,
		4
	],
	"../pages/cronometro/cronometro.module": [
		289,
		3
	],
	"../pages/exercicios/exercicios.module": [
		160
	],
	"../pages/imc/imc.module": [
		161
	],
	"../pages/login/login.module": [
		164
	],
	"../pages/loginn/loginn.module": [
		290,
		2
	],
	"../pages/menu/menu.module": [
		166
	],
	"../pages/resultado/resultado.module": [
		291,
		1
	],
	"../pages/rota/rota.module": [
		167
	],
	"../pages/sobre/sobre.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImcPage = /** @class */ (function () {
    function ImcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImcPage.prototype.calculoImc = function () {
        if (this.peso > 0 && this.altura > 0) {
            var finalImc = this.peso / (this.altura * this.altura);
            this.imcValor = parseFloat(finalImc.toFixed(2));
            this.setIMCMenssagem();
        }
    };
    ImcPage.prototype.setIMCMenssagem = function () {
        if (this.imcValor < 18.5) {
            this.imcMenssagem = "abaixo do peso";
        }
        else {
            if (this.imcValor > 18.5 && this.imcValor < 25) {
                this.imcMenssagem = "Normal";
            }
            else {
                if (this.imcValor > 25 && this.imcValor < 30) {
                    this.imcMenssagem = "Acima do peso";
                }
                else {
                    if (this.imcValor > 30) {
                        this.imcMenssagem = "Obeso";
                    }
                }
            }
        }
    };
    ImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImcPage');
    };
    ImcPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    ImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-imc',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/imc/imc.html"*/'<!--\n  Generated template for the ImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n  <ion-list>\n    <ion-item>\n      <ion-label floating>peso (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="peso" [brmasker]="{mask:\'00.00\'}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>altura (cm)</ion-label>\n      <ion-input type="number" [(ngModel)]="altura" [brmasker]="{mask:\'0.000\'}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button  ion-button block  outline style="color:black;border-color: black" (click)="calculoImc()">Calcular</button>\n\n  </div>\n\n  <ion-card *ngIf="imcValor">\n    <ion-card-header>\n      Calculo de IMC\n    </ion-card-header>\n    <ion-card-content>\n      <p>Seu: peso {{this.peso}} kg, altura {{this.altura}} cm</p>\n      <p>IMC: {{imcValor}}</p>\n      <p><strong>Você está {{imcMenssagem}}</strong></p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/imc/imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ImcPage);
    return ImcPage;
}());

//# sourceMappingURL=imc.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cronometro_cronometro__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ExerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExerciciosPage = /** @class */ (function () {
    function ExerciciosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lista = [
            { titulo: "abdominal", imagem: "assets/imgs/abdominal.png" },
            { titulo: "corrida", imagem: "assets/imgs/correr.png" },
            { titulo: "agachamento", imagem: "assets/imgs/agachamento.png" },
            { titulo: "flexao", imagem: "assets/imgs/flexao.png" },
            { titulo: "pular", imagem: "assets/imgs/pular.png" },
            { titulo: "barra", imagem: "assets/imgs/barra.png" },
            { titulo: "bambole", imagem: "assets/imgs/bambole.png" },
            { titulo: "natacao", imagem: "assets/imgs/natacao.png" },
            { titulo: "box", imagem: "assets/imgs/Box.png" },
            { titulo: "afundo", imagem: "assets/imgs/afundo.png" }
        ];
    }
    ExerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciciosPage');
    };
    ExerciciosPage.prototype.teste = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciciosPage.prototype.comecarTreino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciciosPage.prototype.abreTreino = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cronometro_cronometro__["a" /* CronometroPage */], { exercicio: item });
    };
    ExerciciosPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    ExerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-exercicios',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/exercicios/exercicios.html"*/'<!--\n  Generated template for the ExerciciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n    <h5>Selecione os Exercício Abaixo:</h5>\n  <ion-card>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    <img src="assets/imgs/abdominal.png" (click)="abreTreino(item)" id="abdominal"/>\n    <ion-card-content>\n      <ion-card-title>\n        Abdominal\n      </ion-card-title>\n      <p>\n          É um exercício que vai fortalecer e dar mais resistência para a musculatura do abdomem.\n          O abdômen se localiza no tronco, na região da barriga e é composto por orgãos internos como estômago,\n          intestino, dentre outros e por um grupo muscular formado por quatro músculos principais: reto, oblíquo interno, oblíquo externo e  transverso.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n      <img src="assets/imgs/correr.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Corrida\n        </ion-card-title>\n        <p>\n            Correr traz muitos benefícios para a qualidade de vida do indivíduo: reduz o peso corporal, melhora o nível de colesterol, aumenta a capacidade cardiorrespiratória,\n             reduz os riscos de infarto, aumenta a massa muscular, reduz a variação da pressão arterial de repouso.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n  <ion-card>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n      <img src="assets/imgs/agachamento.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Agachamento\n        </ion-card-title>\n        <p>\n            O agachamento, também conhecido por squat, é um exercício muito completo, pois, além de exercitar o bumbum, trabalha a barriga, as coxas e as costas,\n             ajudando a emagrecer, perder gordura e celulite e a endurecer os músculos, obtendo-se resultados em homens e mulheres.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-checkbox color="dark" checked="false"></ion-checkbox>\n        <img src="assets/imgs/flexao.png"/>\n        <ion-card-content>\n          <ion-card-title>\n              Flexão de braço\n          </ion-card-title>\n          <p>\n              Se você quer exercitar vários músculos ao mesmo tempo, então a flexão de braços é uma das melhores opções. Essa atividade envolve a flexão horizontal da articulação do ombro e a extensão do cotovelo.\n              Possibilitar esse movimento exige a participação de muitos músculos: peitoral maior, deltoide anterior e tríceps.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-checkbox color="dark" checked="false"></ion-checkbox>\n          <img src="assets/imgs/pular.png"/>\n          <ion-card-content>\n            <ion-card-title>\n               Pular Corda\n            </ion-card-title>\n            <p>\n                Pular corda é uma ótima opção de exercício aeróbico. Em 15 minutos de atividade você perde 180 calorias.\n                Este mesmo período equivale a 1 hora de caminhada. A corda fortalece os ossos e os membros inferiores (coxa, panturrilha).\n            </p>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-checkbox color="dark" checked="false"></ion-checkbox>\n            <img src="assets/imgs/barra.png"/>\n            <ion-card-content>\n              <ion-card-title>\n                 Barra Fixa\n              </ion-card-title>\n              <p>\n                   Além de trabalhar as costas (principalmente asa) e bíceps,\n                   no movimento tradicional, você pode fortalecer seu abdômen fazendo isometria (travar o movimento em cima, concentrando forças no abdômen).\n              </p>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-checkbox color="dark" checked="false"></ion-checkbox>\n              <img src="assets/imgs/bambole.png"/>\n              <ion-card-content>\n                <ion-card-title>\n                   Bambolê\n                </ion-card-title>\n                <p>\n                    O bambolê hoje em dia é feito com aros muito mais pesados do que antes,\n                     e oferece um ótimo exercício aeróbico. Você pode perder 400 calorias facilmente em uma hora com o bambolê (o número real depende do peso do aro).\n                </p>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-checkbox color="dark" checked="false"></ion-checkbox>\n                <img src="assets/imgs/natacao.png"/>\n                <ion-card-content>\n                  <ion-card-title>\n                     Natação\n                  </ion-card-title>\n                  <p>\n                      A natação é considerada um dos esportes mais completos que existem. Isso porque, ao nadar, você trabalha diversos grupos musculares ao mesmo tempo\n                      . Não à toa, é uma das modalidades esportivas mais indicadas tanto para quem quer ganhar massa muscular quanto para quem busca definição e perda calórica.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n              <ion-card>\n                  <ion-checkbox color="dark" checked="false"></ion-checkbox>\n                  <img src="assets/imgs/Box.png"/>\n                  <ion-card-content>\n                    <ion-card-title>\n                        Box jumps\n                    </ion-card-title>\n                    <p>\n                        O box jump é um exercício de alta intensidade e esforço, então é claro que vai contribuir (e muito) para queimar calorias.\n                        Para quem quer emagrecer ele pode fazer parte da rotina já que ajuda no processo de desenvolvimento muscular e ainda expulsa as gordurinhas extras do corpo.\n                    </p>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card>\n                    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n                    <img src="assets/imgs/afundo.png"/>\n                    <ion-card-content>\n                      <ion-card-title>\n                          Afundo\n                      </ion-card-title>\n                      <p>\n                          Um ótimo exercício que envolve o peso corporal para treinar as pernas, mas que é diferente do agachamento, já que é mais focado nos glúteos e isquiotibiais.\n                 Existem diversas variações deste exercício disponível, como por exemplo realizá-lo apenas com uma perna para assim se focar mais na mesma. Outra variação,\n                  que atinge mais os glúteos, é o afundo de lado.\n                  </p>\n                    </ion-card-content>\n                  </ion-card>\n\n                  <button ion-button block outline style="color:black;border-color: black"(click)="comecarTreino()">Começar Treino</button>\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/exercicios/exercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ExerciciosPage);
    return ExerciciosPage;
}());

//# sourceMappingURL=exercicios.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RotaPage = /** @class */ (function () {
    function RotaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RotaPage');
    };
    RotaPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    RotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rota',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/rota/rota.html"*/'<!--\n  Generated template for the RotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n    <ion-item>\n        <ion-label stacked>De onde?</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Para onde?</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n    <button ion-button block  outline  style="color:black;border-color: black">Traçar rota!</button>\n    <br><br>\n\n    <img src="https://designmodo.com/wp-content/uploads/2013/05/flat-maps.jpg">\n\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/rota/rota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RotaPage);
    return RotaPage;
}());

//# sourceMappingURL=rota.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciciosPageModule", function() { return ExerciciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercicios__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExerciciosPageModule = /** @class */ (function () {
    function ExerciciosPageModule() {
    }
    ExerciciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exercicios__["a" /* ExerciciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exercicios__["a" /* ExerciciosPage */]),
            ],
        })
    ], ExerciciosPageModule);
    return ExerciciosPageModule;
}());

//# sourceMappingURL=exercicios.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcPageModule", function() { return ImcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imc__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImcPageModule = /** @class */ (function () {
    function ImcPageModule() {
    }
    ImcPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imc__["a" /* ImcPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imc__["a" /* ImcPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], ImcPageModule);
    return ImcPageModule;
}());

//# sourceMappingURL=imc.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loginn_loginn__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.isenabled = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menuCtrl.enable(false, 'myMenu');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'myMenu');
    };
    LoginPage.prototype.Entrar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage.prototype.EntrarL = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__loginn_loginn__["a" /* LoginnPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/login/login.html"*/'\n<br><br><br><br>\n<div style="text-align: center; background: #00f35b">\n<ion-icon name="contact" style="font-size: 169px"></ion-icon><br><br><br><br><br>\n\n<div  style=" background: #00f35b; text-align: center">\n<ion-footer style=" background: #00f35b">\n  <ion-toolbar>\n      <img style="width: 30px; height: 30px;" src="assets/imgs/twitter.png" (click)="Entrar()">\n\n      <img style="width: 30px; height: 30px;" src="assets/imgs/facebook.png" (click)="Entrar()">\n\n      <img style="width: 30px; height: 30px;" src="assets/imgs/gmail.png" (click)="EntrarL()">\n\n  </ion-toolbar>\n</ion-footer>\n</div>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotaPageModule", function() { return RotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rota__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RotaPageModule = /** @class */ (function () {
    function RotaPageModule() {
    }
    RotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rota__["a" /* RotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rota__["a" /* RotaPage */]),
            ],
        })
    ], RotaPageModule);
    return RotaPageModule;
}());

//# sourceMappingURL=rota.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_loginn_loginn__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_exercicios_exercicios_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cronometro_cronometro__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rota_rota_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_imc_imc_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cronometro_cronometro__["a" /* CronometroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__["a" /* ResultadoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_loginn_loginn__["a" /* LoginnPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cronometro-inicio/cronometro-inicio.module#CronometroInicioPageModule', name: 'CronometroInicioPage', segment: 'cronometro-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cronometro/cronometro.module#CronometroPageModule', name: 'CronometroPage', segment: 'cronometro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercicios/exercicios.module#ExerciciosPageModule', name: 'ExerciciosPage', segment: 'exercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imc/imc.module#ImcPageModule', name: 'ImcPage', segment: 'imc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginn/loginn.module#LoginnPageModule', name: 'LoginnPage', segment: 'loginn', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultado/resultado.module#ResultadoPageModule', name: 'ResultadoPage', segment: 'resultado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rota/rota.module#RotaPageModule', name: 'RotaPage', segment: 'rota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__pages_rota_rota_module__["RotaPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_imc_imc_module__["ImcPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_exercicios_exercicios_module__["ExerciciosPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__["LoginPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cronometro_cronometro__["a" /* CronometroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__["a" /* ResultadoPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_loginn_loginn__["a" /* LoginnPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.setRootPage = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.openHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/app/app.html"*/'<ion-menu side="left" id="myMenu" [content]="content">\n\n  <ion-toolbar>\n    <ion-title>Menu</ion-title>\n\n  </ion-toolbar>\n  <ion-content>\n    <ion-list>\n      <button ion-item>\n        blank\n      </button>\n      <button ion-item (click)="openPage(\'MenuPage\')" class="itemMenu">\n        <ion-icon name="home" class="iconMenu"></ion-icon>\n        Menu\n      </button>\n      <button ion-item (click)="openHome()" class="itemMenu">\n        <ion-icon name="home" class="iconMenu"></ion-icon>\n        Exercitar\n      </button>\n      <button ion-item (click)="openPage(\'ExerciciosPage\')" class="itemMenu">\n        <ion-icon name="bicycle" class="iconMenu"></ion-icon>\n        Tipos de Exercícios\n      </button>\n      <button ion-item (click)="openPage(\'RotaPage\')" class="itemMenu">\n          <ion-icon name="walk" class="iconMenu"></ion-icon>\n          Traçar Rota\n      </button>\n      <button ion-item (click)="openPage(\'ImcPage\')" class="itemMenu">\n          <ion-icon name="stats" class="iconMenu"></ion-icon>\n          Calcular IMC\n      </button>\n      <button ion-item (click)="openPage(\'SobrePage\')" class="itemMenu">\n          <ion-icon name="cafe" class="iconMenu"></ion-icon>\n          Sobre nós\n      </button>\n      <button ion-item (click)="setRootPage(\'LoginPage\')" class="itemMenu">\n          <ion-icon name="power" class="iconMenu"></ion-icon>\n          Deslogar\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loginn_loginn__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imc_imc__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rota_rota__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cronometro_inicio_cronometro_inicio__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.rota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__rota_rota__["a" /* RotaPage */]);
    };
    MenuPage.prototype.exercicios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios__["a" /* ExerciciosPage */]);
    };
    MenuPage.prototype.imc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__imc_imc__["a" /* ImcPage */]);
    };
    MenuPage.prototype.sobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__sobre_sobre__["a" /* SobrePage */]);
    };
    MenuPage.prototype.sair = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__loginn_loginn__["a" /* LoginnPage */]);
    };
    MenuPage.prototype.cronometro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="page-menu">\n\n      <ion-card>\n        <img src="assets/imgs/cronometro2.png" (click)="cronometro()" />\n        <div class="card-title">Cronometro</div>\n      </ion-card>\n      <ion-card>\n        <img src="assets/imgs/mapa2.png" (click)="rota()" />\n        <div class="card-title">Rota</div>\n      </ion-card>\n\n\n\n      <ion-card>\n        <img src="assets/imgs/imc2.png" (click)="imc()" />\n        <div class="card-title">Imc</div>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/imgs/correr2.png" (click)="exercicios()" />\n        <div class="card-title">Exercicios</div>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/imgs/quem2.png" (click)="sobre()" />\n        <div class="card-title">Quem somos</div>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/imgs/sair2.png" (click)="sair()" />\n        <div class="card-title">Sair</div>\n      </ion-card>\n\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronometroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resultado_resultado__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CronometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronometroPage = /** @class */ (function () {
    function CronometroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        CronometroPage_1.sprint = this.navParams.get('sprint');
        this.dateSprint = this.navParams.get('dateSprint');
        this.choiceSprint = this.navParams.get('choiceSprint');
        this.exercicio = this.navParams.get('exercicio');
    }
    CronometroPage_1 = CronometroPage;
    CronometroPage.prototype.start = function () {
        console.log(CronometroPage_1.sprint);
        CronometroPage_1.isenabled = false;
        CronometroPage_1.intervalo = setInterval(function () {
            CronometroPage_1.segundos += 1;
            if (CronometroPage_1.segundos === 60) {
                CronometroPage_1.minutos++;
                CronometroPage_1.segundos = 0;
            }
            if (CronometroPage_1.sprint == CronometroPage_1.minutos) {
                CronometroPage_1.clean();
            }
            if (CronometroPage_1.minutos < 10) {
                if (CronometroPage_1.segundos < 10) {
                    CronometroPage_1.setTempo('0' + CronometroPage_1.minutos + ':' + '0' + CronometroPage_1.segundos);
                }
                else {
                    CronometroPage_1.setTempo('0' + CronometroPage_1.minutos + ':' + CronometroPage_1.segundos);
                }
            }
            else {
                if (CronometroPage_1.segundos < 10) {
                    CronometroPage_1.setTempo(CronometroPage_1.minutos + ':' + '0' + CronometroPage_1.segundos);
                }
                else {
                    CronometroPage_1.setTempo(CronometroPage_1.minutos + ':' + CronometroPage_1.segundos);
                }
            }
            console.log(CronometroPage_1.tempo);
        }, 1000);
    };
    CronometroPage.prototype.pause = function () {
        switch (CronometroPage_1.acao) {
            case 'Pausar':
                console.log('pausando');
                clearInterval(CronometroPage_1.intervalo);
                CronometroPage_1.acao = 'Continuar';
                break;
            case 'Continuar':
                console.log('continuando');
                CronometroPage_1.acao = 'Pausar';
                this.start();
                break;
        }
    };
    CronometroPage.clean = function () {
        clearInterval(this.intervalo);
        this.limpaCampos();
        CronometroPage_1.tempo = '00:00';
        this.isenabled = true;
        CronometroPage_1.acao = 'Pausar';
    };
    CronometroPage.prototype.stopAndClean = function () {
        CronometroPage_1.clean();
    };
    CronometroPage.setTempo = function (x) {
        CronometroPage_1.tempo = x;
    };
    Object.defineProperty(CronometroPage.prototype, "tempo", {
        get: function () {
            return CronometroPage_1.tempo;
        },
        enumerable: true,
        configurable: true
    });
    CronometroPage.limpaCampos = function () {
        CronometroPage_1.minutos = 0;
        CronometroPage_1.segundos = 0;
    };
    Object.defineProperty(CronometroPage.prototype, "isenabled", {
        get: function () {
            return CronometroPage_1.isenabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CronometroPage.prototype, "acao", {
        get: function () {
            return CronometroPage_1.acao;
        },
        enumerable: true,
        configurable: true
    });
    CronometroPage.prototype.ionViewDidLeave = function () {
        CronometroPage_1.clean();
    };
    CronometroPage.prototype.abreResultado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__resultado_resultado__["a" /* ResultadoPage */]);
    };
    CronometroPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    CronometroPage.tempo = '00:00';
    CronometroPage.acao = 'Pausar';
    CronometroPage.segundos = 0;
    CronometroPage.minutos = 0;
    CronometroPage.isenabled = true;
    CronometroPage = CronometroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cronometro',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/cronometro/cronometro.html"*/'<!--\n  Generated template for the CronometroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n  <p style="text-align: center;font-size: 67px">{{ tempo }}</p>\n  <br><br><br><br>\n  <button ion-button block outline (click)="start()" [disabled]="!isenabled" style="color:black;border-color: black">Começar</button>\n  <button ion-button block outline (click)="pause()" [disabled]="isenabled" style="color:black;border-color:black">{{acao}}</button>\n  <button ion-button block outline (click)="stopAndClean()" style="color:black;border-color: black">Parar e Zerar</button>\n  <button ion-button block outline (click)="abreResultado()" style="color:black;border-color: black">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/cronometro/cronometro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CronometroPage);
    return CronometroPage;
    var CronometroPage_1;
}());

//# sourceMappingURL=cronometro.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginnPage = /** @class */ (function () {
    function LoginnPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginnPage');
    };
    LoginnPage.prototype.Entrar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    LoginnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-loginn',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/loginn/loginn.html"*/'<!--\n  Generated template for the LoginnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n    <img src="assets/imgs/login.png" style="width: 140px; height: 140px"/>\n\n\n</ion-content>\n\n<ion-footer>\n    <img  src="assets/imgs/tw.png" style="width: 30px; height: 30p;margin-right: 7%"  (click)="Entrar()"/>\n    <img  src="assets/imgs/fb.png" style="width: 30px; height: 30p;"  (click)="Entrar()"/>\n    <img  src="assets/imgs/gm.png" style="width: 30px; height: 30p;margin-left: 7%"  (click)="Entrar()"/>\n</ion-footer>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/loginn/loginn.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginnPage);
    return LoginnPage;
}());

//# sourceMappingURL=loginn.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cronometro_cronometro__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.sprintForm = formBuilder.group({
            sprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dateSprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            choiceSprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)]
        });
    }
    HomePage.prototype.burn = function () {
        if (this.sprintForm.valid) {
            var toast = this.toastCtrl.create({
                message: "Hora de se exercitar! ;)",
                duration: 2000
            });
            toast.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cronometro_cronometro__["a" /* CronometroPage */], {
                sprint: this.sprint,
                dateSprint: this.dateSprint,
                choiceSprint: this.choiceSprint
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Preencha todos os campos corretamente!",
                duration: 2000
            });
            toast.present();
        }
    };
    HomePage.prototype.limpaCampos = function () {
        this.choiceSprint = '0';
        this.dateSprint = '';
        this.sprint = null;
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.limpaCampos();
    };
    HomePage.prototype.voltar = function () {
        this.navCtrl.push("ExerciciosPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/home/home.html"*/'\n<ion-content padding>\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n  <p style="text-align: center; color: black">{{ mensagem }}</p>\n  <form [formGroup]="sprintForm" (submit)="burn()" novalidate>\n    <ion-item>\n      <ion-label floating style="color: black">Tempo de cada exercício (em minutos)</ion-label>\n      <ion-input type="number" [(ngModel)]="sprint" formControlName="sprint"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dia do exercício</ion-label>\n      <ion-datetime formControlName="dateSprint" [(ngModel)]="dateSprint" cancelText="Cancelar" okText="Confirmar" displayFormat="DD/MM/YYYY" pickerFormat="DD/MMMM/YYYY"\n        monthNames="janeiro, fevereiro, mar\u00e7o, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro" color="secondary"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Quantidade de atividades</ion-label>\n      <ion-range formControlName="choiceSprint" min="0" max="10" pin="true" [(ngModel)]="choiceSprint" color="secondary">\n      </ion-range>\n    </ion-item>\n\n    <br><br><br><br>\n    <button ion-button block outline style="color:black;border-color: black">Queimar gorduras!</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/paulo/DATA/codeJs/erros/FitApp_bkp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map