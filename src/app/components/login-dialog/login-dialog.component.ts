import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'djk-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
