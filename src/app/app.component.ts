import { Component, OnInit } from '@angular/core';

import { FilesService } from '@services/files.service';
import { UsersService } from '@services/users.service';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  imgParent = '';
  showImg = true;
  imgRta = '';

  constructor(
    private filesService: FilesService,
    private usersService: UsersService,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken();

    if (token) {
      this.authService.getProfile().subscribe();
    }
  }

  createUser() {
    this.usersService
      .create({
        avatar: 'somePic.jpg',
        email: 'test@mail.com',
        name: 'TestName',
        password: 'password',
      })
      .subscribe((rta) => console.log(rta));
  }

  onLoaded(img: string) {}

  toggleImg() {
    this.showImg = !this.showImg;
  }

  downloadPDF() {
    this.filesService
      .getFile(
        'testFile.pdf',
        'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
        'application/pdf'
      )
      .subscribe();
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);

    if (file) {
      this.filesService
        .uploadFile(file)
        .subscribe((rta) => (this.imgRta = rta.location));
    }
  }
}
