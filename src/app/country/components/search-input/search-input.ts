import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html'
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Buscar...';
  @Output() onSearch = new EventEmitter<string>();
  
  searchTerm = signal('');

  onInputChange(value: string): void {
    this.searchTerm.set(value);
    this.onSearch.emit(value);
  }
}
