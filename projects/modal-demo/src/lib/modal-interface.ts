import { Component } from '@angular/core';
import { AlertType } from './alert-type';

export interface ModalInterface {
  modalTitle: string;
  modalContent?: string;
  confirmButtonLabel?: string;
  cancelButtonLabel: string;
  modelItem?: object;
  component?: Component;
  alertType?: AlertType;
}
