import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  term = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.term.trim()) {
      this.search.emit(this.term);
    }
  }
}
