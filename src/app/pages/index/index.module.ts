import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDialogModule } from '@components/index-dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LayoutModule } from '@components/layout';

@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		IndexRoutingModule,
		MatButtonModule,
		MatDialogModule,
		IndexDialogModule,
		LayoutModule,
	],
})
export class IndexModule {}
