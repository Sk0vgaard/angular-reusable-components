import { AlertType } from './alert-type';

export class ModalData {
  modalTitle: string | undefined;
  modalContent: string | undefined;
  confirmButtonLabel: string | undefined;
  cancelButtonLabel: string | undefined;
  modelItem: object | undefined;
  alertType?: AlertType | undefined;

  constructor(data?: {
    modalTitle: string;
    modalContent: string;
    confirmButtonLabel: string;
    cancelButtonLabel: string;
    modelItem: object,
    alertType?: AlertType;
  }) {
    if (data) {
      this.modalTitle = data.modalTitle;
      this.modalContent = data.modalContent;
      this.confirmButtonLabel = data.confirmButtonLabel;
      this.cancelButtonLabel = data.cancelButtonLabel;
      this.modelItem = data.modelItem;
      this.alertType = data.alertType;
    }
  }
}
