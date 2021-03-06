import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/components/landing/landing.component';
import { LoginComponent } from './pages/components/auth/login/login.component';
import { RegisterComponent } from './pages/components/auth/register/register.component';
import { RegisterEnterpriseComponent } from './pages/components/auth/register-enterprise/register-enterprise.component';
import { MainComponent } from './pages/components/main/main.component';
import { SidebarModule } from 'ng-sidebar';
import { FooterComponent } from './pages/components/shared/footer/footer.component';
import { NewstoreComponent } from './pages/components/stores/newstore/newstore.component';
import { EditstoreComponent } from './pages/components/stores/editstore/editstore.component';
import { AddtemplateComponent } from './pages/components/stores/storepages/addtemplate/addtemplate.component';
import { UpdatedataComponent } from './pages/components/stores/updatestore/updatedata.component';
import { DeletetemplateComponent } from './pages/components/stores/storepages/deletetemplate/deletetemplate.component';
import { EditcodeComponent } from './pages/components/stores/storepages/editcode/editcode.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { DeletestoreComponent } from './pages/components/stores/deletestore/deletestore.component';
import { ProductsComponent } from './pages/components/stores/storeproducts/products/products.component';
import { PagesComponent } from './pages/components/stores/storepages/mypages/pages.component';
import { AddproductComponent } from './pages/components/stores/storeproducts/addproduct/addproduct.component';
import { QuillModule } from 'ngx-quill';
import { WYSIWYGEditorComponent } from './pages/components/stores/storepages/wysiwygeditor/wysiwygeditor.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './pages/components/profile/userprofile/userprofile.component';
import { UpdateproductComponent } from './pages/components/stores/storeproducts/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './pages/components/stores/storeproducts/deleteproduct/deleteproduct.component';
import { ViewpageComponent } from './pages/components/stores/viewpage/viewpage.component';
import { AdminComponent } from './pages/components/admin/main/admin.component';
import { CompaniesComponent } from './pages/components/admin/companies/companies/companies.component';
import { TemplatesComponent } from './pages/components/admin/templates/templates/templates.component';
import { PlansComponent } from './pages/components/admin/plans/plans/plans.component';
import { AddnewtemplateComponent } from './pages/components/admin/templates/addnewtemplate/addnewtemplate.component';
import { RemovetemplateComponent } from './pages/components/admin/templates/removetemplate/removetemplate.component';
import { TemplatepreviewComponent } from './pages/components/admin/templates/templatepreview/templatepreview.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { NewplanComponent } from './pages/components/admin/plans/newplan/newplan.component';
import { EditplanComponent } from './pages/components/admin/plans/editplan/editplan.component';
import { DeleteplanComponent } from './pages/components/admin/plans/deleteplan/deleteplan.component';
import { EdittemplateComponent } from './pages/components/admin/templates/edittemplate/edittemplate.component';
import { DeletecompanyComponent } from './pages/components/admin/companies/deletecompany/deletecompany.component';
import { EditcompanyComponent } from './pages/components/admin/companies/editcompany/editcompany.component';
import { NewcompanyComponent } from './pages/components/admin/companies/newcompany/newcompany.component';
import { UsersComponent } from './pages/components/admin/users/users/users.component';
import { NewuserComponent } from './pages/components/admin/users/newuser/newuser.component';
import { DeleteuserComponent } from './pages/components/admin/users/deleteuser/deleteuser.component';
import { EdituserComponent } from './pages/components/admin/users/edituser/edituser.component';
import { DatabankComponent } from './pages/components/stores/databank/databank.component';
import { CategoriesComponent } from './pages/components/stores/category/categories/categories.component';
import { AddcategoryComponent } from './pages/components/stores/category/addcategory/addcategory.component';
import { DeletecategoryComponent } from './pages/components/stores/category/deletecategory/deletecategory.component';
import { EditcategoryComponent } from './pages/components/stores/category/editcategory/editcategory.component';
import { ClientComponent } from './pages/components/client/client.component';
import { ProductpreviewComponent } from './pages/components/client/productpreview/productpreview.component';
import { CartComponent } from './pages/components/client/cart/cart.component';
import { BuysComponent } from './pages/components/client/buys/buys.component';
import { ShortcutmodalComponent } from './pages/components/stores/databank/shortcutmodal/shortcutmodal.component';
import { SellsComponent } from './pages/components/stores/sells/sells.component'



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEnterpriseComponent,
    MainComponent,
    FooterComponent,
    NewstoreComponent,
    EditstoreComponent,
    AddtemplateComponent,
    UpdatedataComponent,
    DeletetemplateComponent,
    EditcodeComponent,
    DeletestoreComponent,
    ProductsComponent,
    PagesComponent,
    AddproductComponent,
    WYSIWYGEditorComponent,
    UserprofileComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    ViewpageComponent,
    AdminComponent,
    CompaniesComponent,
    TemplatesComponent,
    PlansComponent,
    AddnewtemplateComponent,
    RemovetemplateComponent,
    TemplatepreviewComponent,
    SafehtmlPipe,
    NewplanComponent,
    EditplanComponent,
    DeleteplanComponent,
    EdittemplateComponent,
    DeletecompanyComponent,
    EditcompanyComponent,
    NewcompanyComponent,
    UsersComponent,
    NewuserComponent,
    DeleteuserComponent,
    EdituserComponent,
    DatabankComponent,
    CategoriesComponent,
    AddcategoryComponent,
    DeletecategoryComponent,
    EditcategoryComponent,
    ClientComponent,
    ProductpreviewComponent,
    CartComponent,
    BuysComponent,
    ShortcutmodalComponent,
    SellsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    AceEditorModule,
    QuillModule.forRoot(),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
