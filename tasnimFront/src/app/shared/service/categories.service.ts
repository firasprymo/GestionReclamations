import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Categories} from '../model/categories.types';


@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _categories: BehaviorSubject<Categories[] | null> = new BehaviorSubject(null);
    private _categoriesCourse: BehaviorSubject<Categories[] | null> = new BehaviorSubject(null);
    private _category: BehaviorSubject<Categories | null> = new BehaviorSubject(null);

    constructor(private _apiService: ApiService,
                private _httpClient: HttpClient) {
    }

    /**
     * Getter for categories
     */
    get categories$(): Observable<Categories[]> {
        return this._categories.asObservable();
    }

    /**
     * Getter for item
     */
    get category$(): Observable<Categories> {
        return this._category.asObservable();
    }

    /**
     * Getter for item
     */
    get categoriesCourse$(): Observable<Categories[]> {
        return this._categoriesCourse.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<InventoryPagination> {
        return this._pagination.asObservable();
    }

    /**
     * Create product
     */
    addCategory(categorie): Observable<Categories> {
        return this.categories$.pipe(
            take(1),
            switchMap(categories => this._httpClient.post<Categories>(`${ApiService.apiVersion}${ApiService.apiCategories}/`, categorie).pipe(
                map((newCategorie) => {
                    if (categories == null) {
                        categories = [];
                    }
                    // Update the categories with the new product
                    this._categories.next([newCategorie, ...categories]);
                    // Return the new product
                    return newCategorie;
                })
            ))
        );
    }

    editCategory(body: any): Observable<Categories> {
        return this._httpClient.patch(`${ApiService.apiVersion}${ApiService.apiCategories}/edit`, body).pipe(map(res => res));
    }

    /**
     * Get categorie by id
     */
    getCategoryById(id): Observable<Categories> {
        return this._categories.pipe(
            take(1),
            map((categories) => {
                console.log(categories)
                // Find the product
                const category = categories.find((item) => {
                    id = id * 1;
                    return item.id === id;
                }) || null;
                console.log(category)
                // Update the product
                this._category.next(category);
                // Return the product
                return category;
            }),
            switchMap((category) => {

                if (!category) {
                    return throwError('Could not found product with id of ' + id + '!');
                }

                return of(category);
            })
        );
    }

    /**
     * Get categories
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getAllCategories(page=0, size=0, sort: string = 'type', order: 'asc' | 'desc' | '' = 'asc', search?):
        Observable<{ pageable: InventoryPagination; content: Categories[] }> {
        return this._httpClient.get<{ pageable: InventoryPagination; content: Categories[] }>
        (`${ApiService.apiVersion}${ApiService.apiCategories}/get-all-categories`, {
            params: {
                page: '' + page,
                size: '' + size,
                sort,
                order,
                search
            }
        }).pipe(
            tap((response) => {
                this._pagination.next(response.pageable);
                this._categories.next(response.content);
            })
        );
    }

    /**
     * Delete the categorie
     *
     * @param categorie
     */
    deleteCategorie(categorie: Categories): Observable<boolean> {
        return this.categories$.pipe(
            take(1),
            switchMap(categories =>
                this._httpClient.delete(`${ApiService.apiVersion}${ApiService.apiCategories}/delete-categorie/${categorie.id}`).pipe(
                    map(() => {
                        // Find the index of the deleted product
                        const index = categories.findIndex(item => item.id === categorie.id);
                        // Delete the product
                        categories.splice(index, 1);
                        // Update the categories
                        this._categories.next(categories);
                        // Return the deleted status
                        return true;
                    })
                ))
        );
    }

    getCategories(): Observable<Categories[]> {
        return this._httpClient.get<Categories[]>(`${ApiService.apiVersion}${ApiService.apiCategories}`).pipe(
            tap((response: any) => {
                this._categories.next(response);
            })
        );
    }

    getCategoriesByCourseId(idCourse: string): Observable<Categories[]> {
        return this._httpClient.get<Categories[]>(`${ApiService.apiVersion}${ApiService.apiCategories}/find-categorie-by-course/${idCourse}`).pipe(
            tap((response: any) => {
                this._categoriesCourse.next(response);
            })
        );
    }
}
