import { createAction, props } from "@ngrx/store";
import { IAdvertisment, ICategory, IProduct, IUserGetDto, IUserLoginDto, IUserRegisterDto } from "../common/types";


export const getProducts = createAction('[API] getProducts');
export const getProductsSuccess = createAction('[API] getProductsSuccess', props<{products: IProduct[]}>());
export const getProductsFailure = createAction('[API] getProductsFailure', props<{status: number}>());

export const deleteProduct = createAction('[API] deleteProduct', props<{id: number}>());
export const deleteProductSuccess = createAction('[API] deleteProductSuccess', props<{id: number}>());
export const deleteProductFailure = createAction('[API] deleteProductFailure', props<{status: number}>());

export const updateProduct = createAction('[API] updateProduct', props<{product: IProduct}>());
export const updateProductSuccess = createAction('[API] updateProductSuccess', props<{product: IProduct}>());
export const updateProductFailure = createAction('[API] updateProductFailure', props<{status: number}>());



export const getAdvertisments = createAction('[API] getAdvertisments');
export const getAdvertismentsSuccess = createAction('[API] getAdvertismentsSuccess', props<{advertisments: IAdvertisment[]}>());
export const getAdvertismentsFailure = createAction('[API] getAdvertismentsFailure', props<{status: number}>());

export const deleteAdvertisment = createAction('[API] deleteAdvertisment', props<{id: number}>());
export const deleteAdvertismentSuccess = createAction('[API] deleteAdvertismentSuccess', props<{id: number}>());
export const deleteAdvertismentFailure = createAction('[API] deleteAdvertismentFailure', props<{status: number}>());

export const updateAdvertisment = createAction('[API] updateAdvertisment', props<{advertisment: IAdvertisment}>());
export const updateAdvertismentSuccess = createAction('[API] updateAdvertismentSuccess', props<{advertisment: IAdvertisment}>());
export const updateAdvertismentFailure = createAction('[API] updateAdvertismentFailure', props<{status: number}>());



export const getCategories = createAction('[API] getCategories');
export const getCategoriesSuccess = createAction('[API] getCategoriesSuccess', props<{categories: ICategory[]}>());
export const getCategoriesFailure = createAction('[API] getCategoriesFailure', props<{status: number}>());

export const deleteCategory = createAction('[API] deleteAdvertisment', props<{id: number}>());
export const deleteCategorySuccess = createAction('[API] deleteCategorySuccess', props<{id: number}>());
export const deleteCategoryFailure = createAction('[API] deleteCategoryFailure', props<{status: number}>());

export const updateCategory = createAction('[API] updateCategory', props<{category: ICategory}>());
export const updateCategorySuccess = createAction('[API] updateCategorySuccess', props<{category: ICategory}>());
export const updateCategoryFailure = createAction('[API] updateCategoryFailure', props<{status: number}>());



export const getUser = createAction('[API] getUser', props<{id: number}>());
export const getUserSuccess = createAction('[API] getUserSuccess', props<{user: IUserGetDto}>());
export const getUserFailure = createAction('[API] getUserFailure', props<{status: number}>());

export const registerUser = createAction('[API] registerUser', props<{user: IUserRegisterDto}>());
export const registerUserSuccess = createAction('[API] registerUserSuccess', props<{user: IUserGetDto}>());
export const registerUserFailure = createAction('[API] registerUserFailure', props<{status: number}>());

export const loginUser = createAction('[API] loginUser', props<{user: IUserLoginDto}>());
export const loginUserSuccess = createAction('[API] loginUserSuccess', props<{user: IUserGetDto}>());
export const loginUserFailure = createAction('[API] loginUserFailure', props<{status: number}>());
