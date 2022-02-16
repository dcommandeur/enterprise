import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncService } from './sync.service';

@NgModule({
	imports: [CommonModule],
	providers: [SyncService],
})
export class SyncServiceModule {}
