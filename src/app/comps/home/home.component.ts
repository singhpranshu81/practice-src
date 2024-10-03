import { Component } from '@angular/core';
import { ManiService } from 'src/app/mani.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user = [] as any;
  pp = [] as any;
  name: string = '';
  constructor(private mani: ManiService) {}
  ngOnInit(): void {
    this.mani.getAll().subscribe((data) => {
      this.user = data;
    });
    this.mani.getProductById(2).subscribe((data) => {
      this.pp = data;
      console.log(this.pp)
    });
  }
}
