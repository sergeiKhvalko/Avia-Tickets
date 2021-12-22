import {
    getAutocompleteInstance,
    getDatePickerInstance,
  } from '../plugins/materialize';
  
  class FormUI {
    constructor(autocompleteInstance, datePickerInstance) {
      this.$form = document.forms['locationControls'];
      this.origin = document.getElementById('autocomplete-origin');
      this.originAutocomplete = autocompleteInstance(this.origin);
      this.destination = document.getElementById('autocomplete-destination');
      this.destinationAutocomplete = autocompleteInstance(this.destination);
      this.depart = datePickerInstance(
        document.getElementById('datepicker-depart'),
      );
      this.return = datePickerInstance(
        document.getElementById('datepicker-return'),
      );
    }
  
    get form() {
      return this.$form;
    }
  
    get originValue() {
      return this.origin.value;
    }
  
    get destinationValue() {
      return this.destination.value;
    }
  
    get departDateValue() {
      const dateValue = this.depart.toString();
      const index = dateValue.indexOf('-', 0);
      const departDate = dateValue.slice(index + 1);
      return departDate.split('-').reverse().join('-');
    }
  
    get returnDateValue() {
      const dateValue = this.return.toString();
      const index = dateValue.indexOf('-', 0);
      const returntDate = dateValue.slice(index + 1);
      return returntDate.split('-').reverse().join('-');
    }
  
    setAutocompleteData(data) {
      this.originAutocomplete.updateData(data);
      this.destinationAutocomplete.updateData(data);
    }
  }
  
  const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);
  
  export default formUI;