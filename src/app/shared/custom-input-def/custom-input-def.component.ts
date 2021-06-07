import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input-def',
  templateUrl: './custom-input-def.component.html',
  styleUrls: ['./custom-input-def.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputDefComponent),
    },
  ],
})
export class CustomInputDefComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() label = '';
  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;

  val = '';
  touched = false;
  disabled = false;
  onChange = (value: string) => {};
  onTouch = () => {};

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {}

  writeValue(value: string): void {
    this.val = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: any): void {
    this.onTouch = onTouch;
  }
}
