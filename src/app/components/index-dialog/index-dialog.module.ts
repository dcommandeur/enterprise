import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDialogComponent } from './index-dialog.component';

@NgModule({
	declarations: [IndexDialogComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule],
	exports: [IndexDialogComponent],
})
export class IndexDialogModule {}
