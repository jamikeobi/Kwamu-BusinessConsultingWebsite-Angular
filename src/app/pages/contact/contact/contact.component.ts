import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/core/Models/contactForm';
import { ContactServiceService } from 'src/app/core/services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private contactService: ContactServiceService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['']
    });
  }


  onFormSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const newContact = new ContactFormDetails(
      '',
      this.contactForm.value.fullName,
      this.contactForm.value.email,
      this.contactForm.value.subject,
      this.contactForm.value.message,
      new Date().toISOString()
    );

    this.contactService.addContact(newContact).subscribe(
      () => {
        // console.log('Contact added successfully: ' , newContact);
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      (error) => {
        // console.log('Failed to send message. Please try again: ', error);
        
        // alert('Failed to send message. Please try again.');
        this.isSubmitting = false;
      }
    );
  }
}
