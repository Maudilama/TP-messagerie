import {Personne} from './personne';

export class Message {
    personne: Personne;
    message: string;
    date: Date;

  
    constructor(personne: Personne, message: string = '') {
       this.personne = personne;
       this.message = message;
       this.date = new Date();
    }

    public static createMessage(personne: Personne, message: string, dateMessage: Date): Message {
        const m: Message = new Message(personne, message);
        m.date = dateMessage;
        return  m;
    }

}
