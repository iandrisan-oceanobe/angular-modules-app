import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomSelectComponent),
    },
  ],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: any = [];
  @Input() label: string = '';
  @Input() value: string = '';

  touched: boolean = false;
  disabled: boolean = false;
  onChange = (value: string) => {};
  onTouch = () => {};

  constructor() {}
  ngOnInit(): void {}

  writeValue(value: string): void {
    console.log('select:', this.value);
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: any): void {
    this.onTouch = onTouch;
  }
}
