import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReclamationsService} from '../../../../../shared/service/reclamations.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Reclamations} from '../../../../../shared/model/reclamations.types';

@Component({
    selector: 'app-add-reclamation',
    templateUrl: './add-reclamation.component.html',
    styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit, OnDestroy {
    reclamationForm: FormGroup;
    reclamation: Reclamations;
    notCorrectType = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _formBuilder: FormBuilder,
                private _changeDetectorRef: ChangeDetectorRef,
                private _reclamationService: ReclamationsService,
                private _router: Router,
    ) {
    }

    ngOnInit(): void {
        this.reclamationForm = this._formBuilder.group({
            content: ['', [Validators.required]],
            description: ['', Validators.required],
            email: ['', Validators.required],
            userId: ['', Validators.required],
        });

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * Create product
     */
    createReclamation(): void {

        // Create the product
        this._reclamationService.addReclamation(this.reclamationForm.value).subscribe((newReclamation) => {
            // Mark for check
            this._changeDetectorRef.markForCheck();
            this._router.navigate(['pages/show-reclamations']);

        });
    }

    uploadImage(fileList): void {
        // Return if canceled
        if (fileList.length === 0) {
            return;
        }
        const allowedTypes = ['image/jpeg', 'image/png'];
        const file = fileList[0];
        // Return if the file is not allowed
        if (!allowedTypes.includes(file.type)) {
            return;
        }
        if (file.filename !== 0) {
            this.reclamationForm.patchValue({
                coverFile: file
            });
            console.log(this.reclamationForm.value);
        } else {
            this.reclamationForm.patchValue({
                coverFile: ''
            });
        }
    }

    uploadVideo(fileList): void {
        console.log(fileList);
        // Return if canceled
        if (fileList.length === 0) {
            return;
        }
        const allowedTypes = ['video/mp4'];
        const file = fileList[0];
        // Return if the file is not allowed
        if (!allowedTypes.includes(file.type)) {
            this.notCorrectType = true;
            return;
        }
        if (file.filename !== 0) {
            this.notCorrectType = false;
            this.reclamationForm.patchValue({
                videoFile: file
            });
            console.log(this.reclamationForm.value);
        } else {
            this.reclamationForm.patchValue({
                videoFile: ''
            });
        }
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }


}
