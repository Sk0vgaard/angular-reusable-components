import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalConfiguration } from './modal-configuration';
import { ModalInterface } from './modal-interface';
import { MatDialog } from '@angular/material/dialog';
import { AlertType } from './alert-type';
import { ComponentType } from '@angular/cdk/overlay';
import { ModalSizeEnum } from './modal-size-enum';

@Injectable({
  providedIn: 'root'
})
export class ModalDemoService {
  public confirmButtonLabel = 'Save';
  public cancelButtonLabel = 'Cancel';
  public closeButtonLabel = 'Close';

  constructor(
    public dialog: MatDialog
  ) {
  }

  openAlertDialog<T>(
    component: ComponentType<T>,
    modalConfiguration: ModalConfiguration,
    alertType: AlertType,
  ): void {
    const modalInterface: ModalInterface = {
      modalTitle: modalConfiguration.modalTitle,
      modalContent: modalConfiguration.modalContent,
      cancelButtonLabel: modalConfiguration.cancelButtonLabel ? modalConfiguration.cancelButtonLabel : this.closeButtonLabel,
      alertType
    };
    const dialogRef = this.dialog.open(component, {
      width: ModalSizeEnum.tn,
      data: modalInterface
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }

  openConfirmationDialog<T>(
    component: ComponentType<T>,
    modalConfiguration: ModalConfiguration,
    modalSize: ModalSizeEnum = ModalSizeEnum.tn
  ): Observable<any> {
    const modalInterface: ModalInterface = {
      modalTitle: modalConfiguration.modalTitle,
      modalContent: modalConfiguration.modalContent,
      confirmButtonLabel: modalConfiguration.confirmButtonLabel ? modalConfiguration.confirmButtonLabel : this.confirmButtonLabel,
      cancelButtonLabel: modalConfiguration.cancelButtonLabel ? modalConfiguration.cancelButtonLabel : this.cancelButtonLabel,
    };
    const dialogRef = this.dialog.open(component, {
      width: modalSize,
      data: modalInterface,
    });

    return dialogRef.afterClosed();
  }

  openModal<T>(
    component: ComponentType<T>,
    modalConfiguration: ModalConfiguration,
    modalSize: ModalSizeEnum = ModalSizeEnum.hg
  ): Observable<any> {
    const modalInterface: ModalInterface = {
      modalTitle: modalConfiguration.modalTitle,
      confirmButtonLabel: modalConfiguration.confirmButtonLabel ? modalConfiguration.confirmButtonLabel : this.confirmButtonLabel,
      cancelButtonLabel: modalConfiguration.cancelButtonLabel ? modalConfiguration.cancelButtonLabel : this.cancelButtonLabel,
      modelItem: modalConfiguration.modelItem
    };
    const dialogRef = this.dialog.open(component, {
      width: modalSize,
      data: modalInterface,
      disableClose: true,
      autoFocus: true
    });

    return dialogRef.afterClosed();
  }

  getAlertType(alertType: AlertType): string {
    switch (alertType) {
      case AlertType.INFO:
        return 'INFO';
      case AlertType.WARNING:
        return 'WARNING';
      case AlertType.ERROR:
        return 'ERROR';
    }
  }
}
