import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  isAuth$: Observable<boolean> = this.store.select('isAuth');

  constructor(
    private authService: AuthenticationService,
    private store: Store<{ isAuth: boolean }>
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  logout() {
    this.authService.logoutUser();
  }
}
