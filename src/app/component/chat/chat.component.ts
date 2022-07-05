import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajesSubscription: Subscription;

  constructor(public servicioCharla: ChatService) {}

  ngOnInit() {
    this.mensajesSubscription = this.servicioCharla
      .getMessages()
      .subscribe((msg) => {
        console.log(msg);
      });
  }

  enviar() {
    this.servicioCharla.sendMessage(this.texto);
    this.texto = '';
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }
}
