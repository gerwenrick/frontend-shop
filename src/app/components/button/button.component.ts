import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrash,
  faHeart,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'rvg-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  public buttonText: InputSignal<string> = input.required<string>();
  public isAdding: InputSignal<boolean> = input.required<boolean>();

  public faHeart: IconDefinition = faHeart;
  public faTrash: IconDefinition = faTrash;

  public buttonClick: OutputEmitterRef<Event> = output<Event>();

  public emitClickEvent(event: Event): void {
    this.buttonClick.emit(event);
  }
}
