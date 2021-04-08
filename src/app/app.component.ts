import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length: number = 0;
  password: string = "";
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(target: EventTarget | null) {
    if (!target) return
    const parsedInt = parseInt((target as HTMLInputElement).value)
    if (isNaN(parsedInt)) return
    this.length = parsedInt;
  }
  onButtonClicked() {
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "!$%&@()=?+#*"
    let validChars = ""
    if (this.includeLetters) validChars += letters
    if (this.includeNumbers) validChars += numbers
    if (this.includeSymbols) validChars += symbols

    if (!validChars) {
      this.password = "";
      return;
    }
    let generatedPassword = ""
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
