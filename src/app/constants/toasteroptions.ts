import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'fade'; // you can pass any options to override defaults
  newestOnTop = false;
  showCloseButton = true;
  dismiss = 'auto';
  toastLife=2000
}