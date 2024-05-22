import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {fuseAnimations} from '@fuse/animations';
import {FuseAlertType} from '@fuse/components/alert';
import {AuthService} from 'app/core/auth/auth.service';
import {roleAdmin, roleTechnician, roleUser} from '../../../shared/utils/constant';
import {UsersService} from '../../../shared/service/users.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _userService: UsersService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            username: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }
        this.signInForm.disable();
        this.showAlert = false;
        this._authService.signIn(this.signInForm.value).subscribe(
            (res) => {
                console.log(res)
                this._userService.get().subscribe((user: any) => {
                    console.log(user)
                    if (user?.role === roleAdmin || user?.role === roleUser|| user?.role === roleTechnician) {
                        this._router.navigateByUrl('dashboards/project');
                    } else {
                        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                        this._router.navigateByUrl(redirectURL);
                    }
                });
            },
            (response) => {
                this.signInForm.enable();
                this.signInNgForm.resetForm();
                this.alert = {
                    type: 'error',
                    message: 'Wrong email or password'
                };
                this.showAlert = true;
            }
        );
    }
}
