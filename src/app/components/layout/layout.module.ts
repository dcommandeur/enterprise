import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ToolbarModule } from '@components/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, MatSidenavModule, ToolbarModule],
	exports: [LayoutComponent],
})
export class LayoutModule {}
