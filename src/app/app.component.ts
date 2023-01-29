import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  icons: any = [
    'Instagram',
    'Figma',
    'LinkedIn',
    'Twitter',
    'Telegram',
    'Medium',
  ];

  info: any = [
    {title: '90%', subtitle: 'Job Success Score on Upwork'},
    {title: '>25.000', subtitle: 'Duplicates on Figma Community'},
    {title: '>2k', subtitle: 'In Finished Works'},
  ];

  cart: any = [
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
    {title: 'Mi portal U', tags: ['UX Design', 'University', 'JavaScript']},
  ]

  ngOnInit(): void {

  }
}
