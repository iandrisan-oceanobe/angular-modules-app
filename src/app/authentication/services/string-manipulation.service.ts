import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringManipulationService {
  constructor() {}

  generateRandomString(length: number): string {
    const result = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join('');
  }
}
