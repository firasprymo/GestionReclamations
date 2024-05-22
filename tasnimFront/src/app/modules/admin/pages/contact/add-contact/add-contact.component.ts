import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../../../../shared/service/contacts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../../../shared/service/users.service';
import {Contacts} from '../../../../../shared/model/contacts.types';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnDestroy {
    contactForm: FormGroup;
    contact: Contacts;
    isUpdate: boolean = false;
    idContact: number;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _contactService: ContactsService,
                private router: Router,
                private formBuilder: FormBuilder,
                private _active: ActivatedRoute,
                private usersService: UsersService
    ) {
    }

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            userId: [''],
        });
        this.usersService.get().subscribe((res) => {
            console.log(res);

            this.contactForm.patchValue({
                userId: res?.id
            });
        });

        this._active.params.subscribe((res) => {
            console.log(res);
            if (res.idContact) {
                this._contactService.contact$.subscribe((contact) => {
                    console.log('contact', contact);
                    this.contact = contact;
                    this.isUpdate = true;
                    this.idContact = contact.id;
                    this.contactForm.patchValue({
                        id: contact?.id,
                        name: contact?.name,
                        email: contact?.email,
                        phone: contact?.phone
                    });
                });
            }
        });

    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    addContact(): void {
        this._contactService.addContact(this.contactForm.value).subscribe((res) => {
            console.log('res', res);
            this.router.navigateByUrl('/pages/show-contacts');
        });
    }

    updateContact(): void {
        this._contactService.editContact(this.contactForm.value).subscribe((res) => {
            console.log('res', res);
            this.router.navigateByUrl('/pages/show-contacts');
        });

    }

    cancelCategoryForm(): void {
        this.contactForm.reset();
    }
}
