import {
  Component,
  input,
  output,
  InputSignal,
  OutputEmitterRef
} from '@angular/core';

@Component({
  selector: 'app-comarca-list',
  imports: [],
  templateUrl: './comarca-list.html',
  styleUrl: './comarca-list.css'
})
export class ComarcaList {

  public comarques: InputSignal<string[]> =
    input.required<string[]>();

  public comarcaSelected: OutputEmitterRef<string> =
    output<string>();

  public onSelectComarca(comarca: string): void {
    this.comarcaSelected.emit(comarca);
  }

}