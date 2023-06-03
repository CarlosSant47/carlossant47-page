import {Component, OnInit} from '@angular/core';
import {Profile, TypeContact} from "../models/profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading: boolean = true;
  // @ts-ignore
  public profile: Profile = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.getInformation();
    }, 2000);

  }

  private getInformation() {
    const profile: Profile = {} as Profile;

    profile.name = "Carlos Santiago";
    profile.lastnameFirst = "Sanchez";
    profile.lastnameSecond = "Zavala";
    profile.about = "Hola soy Carlos Santiago, Desarrollador de aplicaciones móviles para Android y Desarrollador Backend." +
      "\n\n" +
      "Soy un gran apasionado en el desarrollo de aplicaciones móviles que impliquen el uso API Web, diseñar aplicaciones que permitan nuevas experiencias a procesos que impliquen procesos complejos."
    profile.skills = [
      {description: "Angular", percent: 10},
      {description: "Linux", percent: 10},
      {description: "HTML,CSS,JS", percent: 10},
      {description: "Android", percent: 10},
      {description: "Java", percent: 10},
      {description: "PHP", percent: 10},

    ];

    profile.experiences = [
      {
        company: "Corporativo GNH",
        dateInit: new Date(2019, 11, 1),
        dateFinish: new Date(2020, 1, 1),
        position: "Desarrollador Web",
        descripcion: "Trabaje como desarrollador web en un nuevo sitio para la empresa La Nueva Farmacia, la cual fuera administrada atravesar de un un sitio que permitiera subir blogs, promociones o cualquier informacion de interés de la empresa. También colabore en el apoyo del Frontend del sitio que administrar las finanzas de La Nueva Farmacia, como el mostrar reportes generales."
      },
       {
        company: "PMM Paqueteria y Mensajeria",
        dateInit: new Date(2022, 3, 5),
        dateFinish: new Date(2023, 5, 18),
        position: "Desarrollador Movil en Android",
        descripcion: "Trabajo como desarrollador móvil en el desarrollo de una nueva versión de la aplicación de reparto de entregas para los choferes con el objetivo de optimizar más su trabajo y el desarrollo de servicios web como parte de la mejora de todo los sistemas de PMM a nuevas tecnologías"
      }, {
        company: "Banregio",
        dateInit: new Date(2022, 5, 20),
        dateFinish: null,
        position: "Desarrollador Backend",
        descripcion: "Trabajo como desarrollador móvil en el desarrollo de una nueva versión de la aplicación de reparto de entregas para los choferes con el objetivo de optimizar más su trabajo y el desarrollo de servicios web como parte de la mejora de todo los sistemas de PMM a nuevas tecnologías"
      },

    ];

    profile.education = [
      {
        dateInit: new Date(2017, 0, 1),
        dateFinish: new Date(2020, 11, 1),
        school: 'Universidad Politécnica de Sinaloa',
        gradeSchool: 'Ing. Informática',
        grade: 'Universidad',
        descripcion: 'En la universidad colabore en diversos proyectos que eran parte de un programa llamado <b>Proyectos Especiales</b> en el cual desarrolle una aplicación móvil especialmente para Tablets Android que permitiera el supervisión de escuelas realizada por la Secretaria de Educación Publica y Cultura, el desarollo de un sistema de escritorio para un negocio y al finalizar mis estudios una aplicación móvil para el escaneo de documentos de los alumnos de la universidad, que sustituta un sistema realizado en C# y un escáner, por un simple dispositivo móvil',
      },
      {
        dateInit: new Date(2014, 1, 1),
        dateFinish: new Date(2017, 1, 1),
        school: 'Universidad Politécnica de Sinaloa',
        gradeSchool: 'Técnico Bachiller en Informática',
        grade: 'BACHILLERATO',
        descripcion: 'Durante el bachillerato se rigió principalmente en el desarrollar un sistema para una pequeña empresa que permitiría administrar ya sea ventas, procesos administrativos, entro otros. Durante el bachillerato impartía el desarrollo de un sistema y el análisis, el mantenimiento de equipos de computo, la estructuración de una base de datos, redes de computadoras y programación en el lenguaje C# y C++.'

      },
    ];




    profile.contact = [
      {description: "age", content: "21", type: TypeContact.TEXT},
      {description: "email", content: "carlossant47@hotmail.com", type: TypeContact.EMAIL},
      {description: "phone", content: "+526692492959", type: TypeContact.PHONE},
      {description: "address", content: "Mazatlan, Sinaloa. Mexico", type: TypeContact.PHONE},
    ];

    profile.portfolios = [
      {
        type: 'Android Development', projects: [
          {title: 'AppDay', description: 'Android Development', image: 'assets/img/app_day.jpeg', link: ''},
          {title: 'Jhony App', description: 'Jhony App', image: 'assets/img/app_day.jpeg', link: ''},
          {title: 'PMM EAD', description: 'PMM EAD', image: 'assets/img/app_day.jpeg', link: ''}
        ], active: true, icon: 'fa fa-android'
      },{
        type: 'Web', projects: [
          {title: 'AppDay', description: 'Android Development', image: 'assets/img/app_day.jpeg', link: ''},
        ], active: false, icon: 'fa fa-code'
      },
    ]
    this.profile = profile;
  }


}
