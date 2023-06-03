export interface Profile {
  id: number | string
  name: string;
  lastnameFirst: string;
  lastnameSecond: string;
  birth: Date;
  experiences: Work[];
  education: Education[];
  about: string;
  skills: Skill[];
  contact: InformationContact[];
  socialsMedia: SocialMedia[];
  portfolios: Portfolio[]
}

export interface SocialMedia {
  plataform: SocialMediaType;
  link: string;
}

export enum SocialMediaType {
  FACEBOOK = 'fa fa-facebook',
  GITLAB = 'fa fa-facebook',
  BITBUCKET = 'fa fa-bitbucket',
  GITHUB = 'fa fa-github',
  LINKEDIN = 'fa fa-linkedin',
}

export interface InformationContact {
  description: string;
  content: string;
  type: string | TypeContact;
}

export enum TypeContact {
  EMAIL ="EMAIL", PHONE = "PHONE", WEB_SITE = "WEB_SITE", TEXT ="TEXT"
}


export interface Skill {
  id?: number|string;
  description: string;
  percent: number;
}


export interface Work extends Experience{
  company: string;
  position: string;
}

export interface Education extends Experience{
  school: string;
  grade: string;
  gradeSchool: string;

}

export interface Experience {
  dateInit: Date;
  dateFinish?: Date|null;
  descripcion: string;
}


// @ts-ignore
export class Portfolio {
  public type!: string;
  public active!: boolean;
  public icon!: string;
  public projects!: Projects[]

  public getPrefixTab?(): string {
    return "#" + this.type.replaceAll('', '-').toLowerCase();
  }

}

export interface Projects {
  title:string;
  description: string;
  link: string;
  image:string;

}
