import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../../../shared/service/categories.service';
import {Categories} from '../../../../../shared/model/categories.types';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
})


export class AddCategoryComponent implements OnInit {
    categoryForm: FormGroup;
    isUpdate = false;
    category: Categories;
    idCategory: number;

    constructor(private _formBuilder: FormBuilder,
                private _router: Router,
                private _active: ActivatedRoute,
                private _categoryService: CategoriesService) {

    }

    ngOnInit(): void {
        this.categoryForm = this._formBuilder.group({
            type: ['', Validators.required],
        });
        this._active.params.subscribe((res) => {
            console.log(res);
            if (res.idCategory) {
                this._categoryService.category$.subscribe((category) => {
                    console.log('category', category);
                    this.category = category;
                    this.isUpdate = true;
                    this.idCategory = category.id;
                    this.categoryForm.patchValue({
                        id: category?.id,
                        type: category?.type,
                    });
                });
            }
        });

    }

    addCategory(): void {
        this._categoryService.addCategory(this.categoryForm.value).subscribe((res) => {
            console.log(res);
            this._router.navigate(['pages/show-categories']);
            return res;
        });
    }
    updateCategory(): void {
        this._categoryService.editCategory(this.categoryForm.value).subscribe((res) => {
            console.log(res);
            this._router.navigate(['pages/show-categories']);
            return res;
        });
    }

    cancelCategoryForm(): void {
        this.categoryForm.reset();
    }
}

