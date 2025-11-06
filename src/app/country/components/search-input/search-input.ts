import { ChangeDetectionStrategy, Component, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule, NgIf],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  term = '';
  isSearching = false;
  @Output() search = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  onSearch() {
    if (this.term.trim()) {
      this.isSearching = true;
      this.cdr.markForCheck();
      
      this.search.emit(this.term);
      
      setTimeout(() => {
        this.isSearching = false;
        this.cdr.markForCheck();
      }, 500);
    }
  }
}
