import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {Router} from '@angular/router';
import {Skills} from '../../../../../shared/model/skills.types';
import {EquipmentsService} from '../../../../../shared/service/equipments.service';

@Component({
    selector: 'app-add-equipment',
    templateUrl: './add-equipment.component.html',
    styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {
    equipmentForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _router: Router,
                private _equipmentService: EquipmentsService) {

    }

    ngOnInit(): void {
        // Horizontal stepper form
        this.equipmentForm = this._formBuilder.group({
            serialNumber: ['', Validators.required],
            inventoryNumber: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            shippingDate: ['', Validators.required],
            destination: ['', Validators.required]
        });

    }

    addEquipment(): void {
        this._equipmentService.addEquipment(this.equipmentForm.value).subscribe((res) => {
            console.log(res);
            this._router.navigate(['pages/show-equipments']);
            return res;
        });
    }

    cancelEquipmentForm(): void {
        this.equipmentForm.reset();
    }
}
