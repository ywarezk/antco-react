import {Subject} from 'rxjs';

class MessageService {
    constructor() {
        this.chat = new Subject();

        // this.chat.next('message')
        // this.chat.subscribe((msg) => {

        // })
    }
}

export default new MessageService();
