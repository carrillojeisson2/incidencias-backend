"use strict";(self.webpackChunkGestorIncidentesFront=self.webpackChunkGestorIncidentesFront||[]).push([[495],{1495:(z,f,a)=>{a.r(f),a.d(f,{AuthModule:()=>L});var c=a(6814),l=a(360),e=a(4946);function v(o,n){1&o&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h1",5),e._uU(4,"SISTEMA GESTOR DE INCIDENTES"),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()()())}function h(o,n){1&o&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"h2",5),e._uU(4,"SISTEMA GESTOR DE INCIDENTES"),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()()())}let _=(()=>{class o{constructor(){}ngOnInit(){}isMobile(){const i=window.navigator.userAgent;return/Mobi/.test(i)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-main"]],decls:2,vars:2,consts:[["class"," container-fluid main d-flex justify-content-center animate__animated animate__fadeIn",4,"ngIf"],["class","container-fluid main-mobile-only d-flex justify-content-center animate__animated animate__fadeIn ",4,"ngIf"],[1,"container-fluid","main","d-flex","justify-content-center","animate__animated","animate__fadeIn"],[1,"col-auto","d-flex","justify-content-center","align-items-center"],[1,"container-fluid"],[1,"mb-5"],[1,"container-fluid","main-mobile-only","d-flex","justify-content-center","animate__animated","animate__fadeIn"],[1,"col-auto","d-flex","justify-content-center","align-items-center","m-0","p-0"],[1,"container-fluid","m-0","p-0"]],template:function(i,t){1&i&&(e.YNc(0,v,6,0,"div",0),e.YNc(1,h,6,0,"div",1)),2&i&&(e.Q6J("ngIf",!1===t.isMobile()),e.xp6(1),e.Q6J("ngIf",t.isMobile()))},dependencies:[c.O5,l.lC],styles:[".main[_ngcontent-%COMP%]{width:100%;height:100vh;background-repeat:no-repeat;background-image:url(fondocorponor.e11aa2d6dba1f07b.png);background-position:center center;background-size:cover;background-attachment:fixed}.main-mobile-only[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-image:url(fondo_logo.97fe7577deed8373.png)}"]}),o})();var r=a(95),g=a(4567),Z=a(3519),u=a.n(Z),b=a(333);function C(o,n){1&o&&(e.TgZ(0,"span",15),e._uU(1," El username es Obligatorio "),e.qZA())}function x(o,n){1&o&&(e.TgZ(0,"span",15),e._uU(1," La Contrase\xf1a es Obligatoria "),e.qZA())}let T=(()=>{class o{constructor(){this.fb=(0,e.f3M)(r.qu),this.authService=(0,e.f3M)(g.e),this.validatorService=(0,e.f3M)(b.S),this.router=(0,e.f3M)(l.F0),this.miFormulario=this.fb.group({username:["",[r.kI.required]],password:["",[r.kI.required,r.kI.minLength(6)]]})}login(){const{username:i,password:t}=this.miFormulario.value;this.miFormulario.invalid?this.miFormulario.markAllAsTouched():this.authService.login(i,t).subscribe({next:()=>{"ADMIN_ROLE"===this.authService.role()?this.router.navigate(["/dashboard"]):this.router.navigate(["/incidentes"])},error:s=>{u().fire("Error",s,"error")}})}isValidField(i){return this.validatorService.isValidField(this.miFormulario,i)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:4,consts:[[1,"col","animate__animated","animate__fadeIn","m-0","p-0"],[1,"container-fluid","m-0","p-0"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","email","id","usuarioLabel","aria-describedby","emailHelp","formControlName","username","placeholder","Usuario",1,"form-control"],["for","usuarioLabel",1,"form-label"],["class","form-text text-danger",4,"ngIf"],["type","password","id","passwordLabel","formControlName","password","placeholder","Ingrese su Contrase\xf1a",1,"form-control"],["for","passwordLabel",1,"form-label"],[1,"mb-3","form-check"],["for","exampleCheck1",1,"form-check-label"],["routerLink","/auth/restablecer",1,"txt2"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block",3,"disabled"],[1,"form-text","text-danger"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),e.NdJ("ngSubmit",function(){return t.login()}),e.TgZ(4,"div",4),e._UZ(5,"input",5),e.TgZ(6,"label",6),e._uU(7,"Usuario"),e.qZA(),e.YNc(8,C,2,0,"span",7),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"input",8),e.TgZ(11,"label",9),e._uU(12,"Contrase\xf1a:"),e.qZA(),e.YNc(13,x,2,0,"span",7),e.qZA(),e.TgZ(14,"div",10)(15,"label",11),e._uU(16," \xbfOlvido Usuario/Contrase\xf1a? "),e.qZA(),e.TgZ(17,"a",12),e._uU(18," Restablezcala aqu\xed "),e.qZA()(),e.TgZ(19,"div",13)(20,"button",14),e._uU(21," Ingresar "),e.qZA()()()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",t.miFormulario),e.xp6(5),e.Q6J("ngIf",t.isValidField("username")),e.xp6(5),e.Q6J("ngIf",t.isValidField("password")),e.xp6(7),e.Q6J("disabled",t.miFormulario.invalid))},dependencies:[c.O5,l.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],encapsulation:2}),o})();var F=a(2820),I=a(5898);function A(o,n){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Ingrese el correo de su cuenta"),e.qZA())}function U(o,n){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Ingrese el codigo enviado a su correo"),e.qZA())}function S(o,n){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Ingrese una nueva Contrase\xf1a"),e.qZA())}function E(o,n){1&o&&(e.TgZ(0,"span",15),e._uU(1," El correo es Obligatorio "),e.qZA())}function M(o,n){if(1&o){const i=e.EpF();e.TgZ(0,"div",4)(1,"form",5),e.NdJ("ngSubmit",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.restablecer())}),e.TgZ(2,"div",6),e._UZ(3,"input",7),e.TgZ(4,"label",8),e._uU(5,"Correo"),e.qZA(),e.YNc(6,E,2,0,"span",9),e.qZA(),e.TgZ(7,"div",10)(8,"span",11),e._uU(9," \xbfYa tienes una cuenta? "),e.qZA(),e.TgZ(10,"a",12),e._uU(11," Ingresa aqu\xed "),e.qZA()(),e.TgZ(12,"div",13)(13,"button",14),e._uU(14," Ingresar "),e.qZA()()()()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("formGroup",i.miFormulario),e.xp6(5),e.Q6J("ngIf",i.isValidField("correo",i.miFormulario)),e.xp6(7),e.Q6J("disabled",i.miFormulario.invalid)}}function J(o,n){1&o&&(e.TgZ(0,"span",15),e._uU(1," El codigo es Obligatorio "),e.qZA())}function y(o,n){if(1&o){const i=e.EpF();e.TgZ(0,"div",4)(1,"form",5),e.NdJ("ngSubmit",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.validarCodigo())}),e.TgZ(2,"div",6),e._UZ(3,"input",16),e.TgZ(4,"label",17),e._uU(5,"codigo"),e.qZA(),e.YNc(6,J,2,0,"span",9),e.qZA(),e.TgZ(7,"div",13)(8,"button",14),e._uU(9," Ingresar Codigo "),e.qZA()()()()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("formGroup",i.miFormulario2),e.xp6(5),e.Q6J("ngIf",i.isValidField("codigo",i.miFormulario2)),e.xp6(2),e.Q6J("disabled",i.miFormulario2.invalid)}}function k(o,n){1&o&&(e.TgZ(0,"span",15),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}function q(o,n){if(1&o){const i=e.EpF();e.TgZ(0,"div",4)(1,"form",5),e.NdJ("ngSubmit",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.actualizarPass())}),e.TgZ(2,"div",6)(3,"label",18),e._uU(4,"Contrase\xf1a:"),e.qZA(),e._UZ(5,"input",19),e.qZA(),e.TgZ(6,"div",6)(7,"label",20),e._uU(8,"Confirmar Contrase\xf1a:"),e.qZA(),e._UZ(9,"input",21),e.YNc(10,k,2,0,"span",9),e.qZA(),e.TgZ(11,"div",13)(12,"button",14),e._uU(13," Ingresar Codigo "),e.qZA()()()()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("formGroup",i.miFormulario3),e.xp6(9),e.Q6J("ngIf",i.isValidField("password2",i.miFormulario3)),e.xp6(2),e.Q6J("disabled",i.miFormulario3.invalid)}}const w=[{path:"",component:_,children:[{path:"login",component:T},{path:"restablecer",component:(()=>{class o{constructor(){this.fb=(0,e.f3M)(r.qu),this.authService=(0,e.f3M)(g.e),this.validatorService=(0,e.f3M)(b.S),this.emailValidatorService=(0,e.f3M)(F.e),this.usuariosService=(0,e.f3M)(I.J),this.correoExiste=!1,this.validacionOk=!1,this.token="",this.tiempoExp=new Date,this.router=(0,e.f3M)(l.F0),this.miFormulario=this.fb.group({correo:["",[r.kI.required,r.kI.pattern(this.validatorService.emailPattern)],[this.emailValidatorService]]}),this.miFormulario2=this.fb.group({codigo:["",[r.kI.required,r.kI.minLength(6)]]}),this.miFormulario3=this.fb.group({password:["",[r.kI.required,r.kI.minLength(6)]],password2:["",[r.kI.required]]})}restablecer(){const{correo:i}=this.miFormulario.value;this.miFormulario.invalid?this.miFormulario.markAllAsTouched():this.authService.enviarEmailrestablecerCuenta(i).subscribe(({msg:t,usuario:s,token:m,tiempoExpiracion:d})=>{this.correoExiste=!0,this.usuarioObjetivo=s,this.token=m,this.tiempoExp=d,console.log(this.tiempoExp),u().fire("Correo Enviado!",t,"success")},t=>{u().fire("Usuario No Existe",t.msg,"error")})}validarCodigo(){const{codigo:i}=this.miFormulario2.value;this.miFormulario2.invalid?this.miFormulario2.markAllAsTouched():this.authService.validarCodigoHexa(i,this.tiempoExp).subscribe({next:t=>{!0===t&&(this.validacionOk=!0)},error:t=>{u().fire("Codigo Incorrecto/Ha expirado",t.msg,"error")}})}actualizarPass(){console.log(this.usuarioObjetivo);const{id:i,username:t,nombre:s,apellido:m,telefono:d,numDocumento:R,correo:O,roleId:Q,tipoDocumentoId:Y,dependenciaId:j,estado:G}=this.usuarioObjetivo,{password:V}=this.miFormulario3.value;this.usuariosService.restablecerUsuario({id:i,username:t,password:V,nombre:s,telefono:d,numDocumento:R,apellido:m,correo:O,roleId:Q,tipoDocumentoId:Y,dependenciaId:j,estado:G},this.token).subscribe(p=>{u().fire("Contrase\xf1a Actualizada",p.msg,"success").then(H=>{H.isConfirmed&&this.router.navigate(["/auth"])})},p=>{u().fire("Error",p.error.errors[0].msg,"error")})}isValidField(i,t){return this.validatorService.isValidField(t,i)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:8,vars:6,consts:[[1,"col","animate__animated","animate__fadeIn","m-0","p-0"],[1,"container-fluid","m-0","p-0"],[4,"ngIf"],["class","col",4,"ngIf"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","email","id","correoLabel","aria-describedby","emailHelp","formControlName","correo","placeholder","Correo",1,"form-control"],["for","correoLabel",1,"form-label"],["class","form-text text-danger",4,"ngIf"],[1,"flex-col-c","p-d-60"],[1,"txt1","p-b-17"],["routerLink","/auth/login",1,"txt2"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block",3,"disabled"],[1,"form-text","text-danger"],["type","text","id","codigoLabel","aria-describedby","emailHelp","formControlName","codigo","placeholder","Codigo",1,"form-control"],["for","codigoLabel",1,"form-label"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password","placeholder","Ingrese una contrase\xf1a si desea cambiarla",1,"form-control"],["for","passwordLabel2",1,"form-label"],["type","password","id","password2","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,A,2,0,"h1",2),e.YNc(3,U,2,0,"h1",2),e.YNc(4,S,2,0,"h1",2),e.YNc(5,M,15,3,"div",3),e.YNc(6,y,10,3,"div",3),e.YNc(7,q,14,3,"div",3),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngIf",!t.correoExiste),e.xp6(1),e.Q6J("ngIf",t.correoExiste&&0==t.validacionOk),e.xp6(1),e.Q6J("ngIf",t.validacionOk),e.xp6(1),e.Q6J("ngIf",!t.correoExiste),e.xp6(1),e.Q6J("ngIf",t.correoExiste&&0==t.validacionOk),e.xp6(1),e.Q6J("ngIf",t.validacionOk))},dependencies:[c.O5,l.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),o})()},{path:"**",redirectTo:"login"}]}];let N=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(w),l.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,N,r.UX]}),o})()}}]);