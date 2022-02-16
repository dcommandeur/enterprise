import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDialogModule } from '@components/index-dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		IndexRoutingModule,
		MatButtonModule,
		MatDialogModule,
		IndexDialogModule,
	],
})
export class IndexModule {}
