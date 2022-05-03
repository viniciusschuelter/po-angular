import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import {
  PoButtonComponent,
  PoCheckboxComponent,
  PoModalAction,
  PoModalComponent,
  PoSwitchComponent
} from '../../../ui/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('viewCSSModal') viewCSSModal: PoModalComponent;

  @ViewChild('buttonP') buttonP: PoButtonComponent;
  @ViewChild('buttonD') buttonD: PoButtonComponent;
  @ViewChild('buttonL') buttonL: PoButtonComponent;
  @ViewChild('checkbox') checkBox: PoCheckboxComponent;
  @ViewChild('switch') switch: PoSwitchComponent;
  @ViewChild('resultButtonD') resultButtonD: HTMLElement;
  @ViewChild('resultButtonP') resultButtonP: HTMLElement;
  @ViewChild('resultButtonL') resultButtonL: HTMLElement;
  @ViewChild('resultCheckBox') resultCheckBox: HTMLElement;
  @ViewChild('resultSwitch') resultSwitch: HTMLElement;

  checkboxView = true;
  botaoDefaultView = true;
  botaoPrimaryView = true;
  botaoLinkView = true;
  switchView = true;
  acordionView = true;
  calendarView = true;
  stepperView = true;
  dynamicForView = true;

  fields: Array<any> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name',
      icon: 'po-icon po-icon-user'
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 3,
      placeholder: 'Type short description'
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'po-icon-mail' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6, icon: 'po-icon po-icon-telephone' },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { label: 'Santa Catarina', value: 1 },
        { label: 'São Paulo', value: 2 },
        { label: 'Rio de Janeiro', value: 3 },
        { label: 'Minas Gerais', value: 4 }
      ]
    },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 6,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'po-icon-finance'
    }
  ];

  // Cor primária
  brandFormP = this.formBuilder.group({
    colorAction: [null]
  });

  // Cor secundária
  brandFormS = this.formBuilder.group({
    colorAction: [null]
  });

  // Cor terciária
  brandFormT = this.formBuilder.group({
    colorAction: [null]
  });

  // Botão Primário
  buttonFormPrimary = this.formBuilder.group({
    color: [null],
    colorHover: [null],
    borderColor: [null],
    borderColorHover: [null],
    textColor: [null],
    colorAction: [null],
    textColorHover: [null]
  });

  // Botão Default
  buttonFormDefault = this.formBuilder.group({
    color: [null],
    colorHover: [null],
    textColor: [null],
    textColorHover: [null],
    colorBackgroundHover: [null]
  });

  // Botão Link
  buttonFormLink = this.formBuilder.group({
    color: [null],
    colorHover: [null],
    colorBackgroundHover: [null]
  });

  // CheckBox
  checkBoxForm = this.formBuilder.group({
    color: [null],
    colorHover: [null],
    shadowColor: [null],
    textColor: [null],
    colorAction: [null]
  });

  // Switch
  switchForm = this.formBuilder.group({
    color: [null],
    colorIcon: [null],
    borderColor: [null]
  });

  private readonly formPropertyP = {
    colorAction: '--color-primary'
  };

  private readonly formPropertyS = {
    colorAction: '--color-secondary'
  };

  private readonly formPropertyT = {
    colorAction: '--color-tertiary'
  };

  // Variáveis customizaveis
  private readonly formPropertyDictButtonP = {
    color: '--color-button-background-color-primary',
    colorHover: '--color-button-background-color-primary-hover',
    borderColor: '--color-button-border-primary',
    borderColorHover: '--color-button-border-primary',
    textColor: '--color-button-color-primary',
    textColorHover: '--color-button-color-primary-hover'
  };

  private readonly formPropertyDictButtonD = {
    color: '--color-button-border',
    colorHover: '--color-button-border-hover',
    textColor: '--color-button-color',
    textColorHover: '--color-button-color-hover',
    colorBackgroundHover: '--color-button-background-color-hover'
  };

  private readonly formPropertyDictButtonL = {
    color: '--color-button-color-link',
    colorHover: '--color-button-color-link-hover',
    colorBackgroundHover: '--color-button-background-color-link-hover'
  };

  private readonly formPropertyDictCheckbox = {
    color: '--color-checkbox-background-color-active',
    colorHover: '--color-checkbox-border-input-active',
    shadowColor: '--color-checkbox-hover-active'
  };

  private readonly formPropertyDictSwitch = {
    color: '--color-switch-background-color-container-on',
    colorIcon: '--color-switch-color-icon-on',
    borderColor: '--color-switch-box-shadow-color-focusable'
  };

  constructor(private formBuilder: FormBuilder) {}

  openGetcss() {
    this.viewCSSModal.open();
  }

  resetCss() {
    this.brandFormP.reset();
    document.getElementsByTagName('html')[0].style.setProperty('--color-primary', null);

    this.brandFormS.reset();
    document.getElementsByTagName('html')[0].style.setProperty('--color-secondary', null);

    this.brandFormT.reset();
    document.getElementsByTagName('html')[0].style.setProperty('--color-tertiary', null);

    this.buttonFormDefault.reset();
    Object.keys(this.formPropertyDictButtonD).forEach((fieldName: string) => {
      this.buttonD.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonD[fieldName], null);
    });

    this.buttonFormPrimary.reset();
    Object.keys(this.formPropertyDictButtonP).forEach((fieldName: string) => {
      this.buttonP.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonP[fieldName], null);
    });

    this.buttonFormLink.reset();
    Object.keys(this.formPropertyDictButtonL).forEach((fieldName: string) => {
      this.buttonL.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonL[fieldName], null);
    });

    this.checkBoxForm.reset();
    Object.keys(this.formPropertyDictCheckbox).forEach((fieldName: string) => {
      this.checkBox.checkBoxElement.nativeElement.style.setProperty(this.formPropertyDictCheckbox[fieldName], null);
    });

    this.switchForm.reset();
    Object.keys(this.formPropertyDictSwitch).forEach((fieldName: string) => {
      this.switch.switchContainer.nativeElement.style.setProperty(this.formPropertyDictSwitch[fieldName], null);
    });
  }

  copyToClipboard() {
    const fieldJsonElement = document.querySelector('#fieldsCSS');
    console.log(fieldJsonElement);

    if (window.getSelection) {
      window.getSelection().selectAllChildren(fieldJsonElement);
      document.execCommand('copy');
    }
  }

  verifyCss() {
    return this.checkChanges();
  }

  ngAfterViewInit(): void {
    this.brandFormP.valueChanges.subscribe(changes => this.checkChangesBrandP(changes));
    this.brandFormS.valueChanges.subscribe(changes => this.checkChangesBrandS(changes));
    this.brandFormT.valueChanges.subscribe(changes => this.checkChangesBrandT(changes));
    this.buttonFormPrimary.valueChanges.subscribe(changes => this.checkChangesButtonP(changes));
    this.buttonFormDefault.valueChanges.subscribe(changes => this.checkChangesButtonD(changes));
    this.buttonFormLink.valueChanges.subscribe(changes => this.checkChangesButtonL(changes));
    this.checkBoxForm.valueChanges.subscribe(changes => this.checkChangesCheckbox(changes));

    this.switchForm.valueChanges.subscribe(changes => this.checkChangesSwitch(changes));
  }

  private checkChangesBrandP(changes: any): void {
    Object.keys(changes).forEach((fieldName: string) => {
      const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

      if (changes[fieldName]) {
        document.getElementsByTagName('html')[0].style.setProperty(this.formPropertyP[fieldName], value);
      }
    });
  }

  private checkChangesBrandT(changes: any): void {
    Object.keys(changes).forEach((fieldName: string) => {
      const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

      if (changes[fieldName]) {
        document.getElementsByTagName('html')[0].style.setProperty(this.formPropertyT[fieldName], value);
      }
    });
  }

  private checkChangesBrandS(changes: any): void {
    // const colorInput = document.getElementById('colorN');
    // colorInput.addEventListener('input', () =>{
    //   document.getElementById('colorVal').innerHTML = colorInput['value'];
    // });

    Object.keys(changes).forEach((fieldName: string) => {
      const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

      if (changes[fieldName]) {
        document.getElementsByTagName('html')[0].style.setProperty(this.formPropertyS[fieldName], value);
      }
    });
  }

  private checkChangesButtonP(changes: { [key: string]: string }): void {
    if (!this.isEmpty(changes)) {
      this.resultButtonP['nativeElement'].innerHTML = '/*button primary*/ <br>po-button {<br>';

      Object.keys(changes).forEach((fieldName: string) => {
        const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

        if (changes[fieldName]) {
          this.buttonP.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonP[fieldName], value);

          this.resultButtonP['nativeElement'].innerHTML += `${this.formPropertyDictButtonP[fieldName]}: ${value};<br>`;
        }
      });

      this.resultButtonP['nativeElement'].innerHTML += '}<br>';
    } else {
      this.resultButtonP['nativeElement'].innerHTML = '';
    }
  }

  private checkChangesButtonD(changes: { [key: string]: string }): void {
    if (!this.isEmpty(changes)) {
      this.resultButtonD['nativeElement'].innerHTML = '/*button Default*/ <br>po-button {<br>';

      Object.keys(changes).forEach((fieldName: string) => {
        const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

        if (changes[fieldName]) {
          this.buttonD.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonD[fieldName], value);

          this.resultButtonD['nativeElement'].innerHTML += `${this.formPropertyDictButtonD[fieldName]}: ${value};<br>`;
        }
      });

      this.resultButtonD['nativeElement'].innerHTML += '}<br>';
    } else {
      this.resultButtonD['nativeElement'].innerHTML = '';
    }
  }

  private checkChangesButtonL(changes: { [key: string]: string }): void {
    if (!this.isEmpty(changes)) {
      this.resultButtonL['nativeElement'].innerHTML = '/*button Link*/ <br>po-button {<br>';

      Object.keys(changes).forEach((fieldName: string) => {
        const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

        if (changes[fieldName]) {
          this.buttonL.buttonElement.nativeElement.style.setProperty(this.formPropertyDictButtonL[fieldName], value);

          this.resultButtonL['nativeElement'].innerHTML += `${this.formPropertyDictButtonL[fieldName]}: ${value};<br>`;
        }
      });

      this.resultButtonL['nativeElement'].innerHTML += '}';
    } else {
      this.resultButtonL['nativeElement'].innerHTML = '';
    }
  }

  private checkChangesCheckbox(changes: { [key: string]: string }): void {
    if (!this.isEmpty(changes)) {
      this.resultCheckBox['nativeElement'].innerHTML = 'po-checkbox {<br>';

      Object.keys(changes).forEach((fieldName: string) => {
        const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

        if (changes[fieldName]) {
          this.checkBox.checkBoxElement.nativeElement.style.setProperty(
            this.formPropertyDictCheckbox[fieldName],
            value
          );

          this.resultCheckBox[
            'nativeElement'
          ].innerHTML += `${this.formPropertyDictCheckbox[fieldName]}: ${value};<br>`;
        }
      });
      this.resultCheckBox['nativeElement'].innerHTML += '}';
    } else {
      this.resultCheckBox['nativeElement'].innerHTML = '';
    }
  }

  private checkChangesSwitch(changes: { [key: string]: string }): void {
    if (!this.isEmpty(changes)) {
      this.resultSwitch['nativeElement'].innerHTML = 'po-switch {<br>';

      Object.keys(changes).forEach((fieldName: string) => {
        const value = /color/i.test(fieldName) ? changes[fieldName] : `var(--${changes[fieldName]})`;

        if (changes[fieldName]) {
          this.switch.switchContainer.nativeElement.style.setProperty(this.formPropertyDictSwitch[fieldName], value);

          this.resultSwitch['nativeElement'].innerHTML += `${this.formPropertyDictSwitch[fieldName]}: ${value};<br>`;
        }
      });

      this.resultSwitch['nativeElement'].innerHTML += '}';
    } else {
      this.resultSwitch['nativeElement'].innerHTML = '';
    }
  }

  private checkChanges() {
    return (
      !!this.resultButtonD?.['nativeElement']?.innerHTML ||
      !!this.resultButtonP?.['nativeElement']?.innerHTML ||
      !!this.resultButtonL?.['nativeElement']?.innerHTML ||
      !!this.resultCheckBox?.['nativeElement']?.innerHTML ||
      !!this.resultSwitch?.['nativeElement']?.innerHTML
    );
  }

  private isEmpty(objectVerify) {
    return Object.values(objectVerify).every(x => x === null || x === '');
  }
}
