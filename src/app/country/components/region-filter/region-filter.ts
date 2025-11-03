import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-region-filter',
  imports: [CommonModule],
  templateUrl: './region-filter.html'
})
export class RegionFilterComponent {
  @Output() onRegionChange = new EventEmitter<string>();
  
  selectedRegion = signal<string>('');
  
  regions = [
    { name: 'África', value: 'africa' },
    { name: 'América', value: 'americas' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europa', value: 'europe' },
    { name: 'Oceanía', value: 'oceania' }
  ];

  selectRegion(region: string): void {
    this.selectedRegion.set(region);
    this.onRegionChange.emit(region);
  }

  clearFilter(): void {
    this.selectedRegion.set('');
    this.onRegionChange.emit('');
  }
}
