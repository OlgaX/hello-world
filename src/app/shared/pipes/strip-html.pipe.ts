// Examples of using stripHtml pipe:

// 1. Strip all html tags:
// <div>{{htmlText | stripHtml}}</div>

// 2. Strip all html tags except <pre> tags:
// <div>{{htmlText | stripHtml: 'pre'}}</div>
// <div [innerHTML]="htmlText | stripHtml: 'pre'"></div>

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(text: string, ...usefulTags: any[]): string {
    return usefulTags.length > 0
      ? text.replace(new RegExp(`<(?!\/?(${usefulTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
      : text.replace(/<(?:.|\s)*?>/g, '');
  }

}
