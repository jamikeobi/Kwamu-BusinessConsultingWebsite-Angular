import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/resuseableComponents/header/header/header.component';
import { FooterComponent } from './shared/resuseableComponents/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { InsightsComponent } from './pages/insights/insights/insights.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { TaxComponent } from './pages/services/services/tax/tax.component';
import { BdoNigeria2019Component } from './pages/services/services/tax/bdo-nigeria2019/bdo-nigeria2019.component';
import { BdoNigeria2020Component } from './pages/services/services/tax/bdo-nigeria2020/bdo-nigeria2020.component';
import { FederalTaxComponent } from './pages/services/services/tax/federal-tax/federal-tax.component';
import { PayrollServicesComponent } from './pages/services/services/tax/payroll-services/payroll-services.component';
import { TaxAdvisoryServicesComponent } from './pages/services/services/tax/tax-advisory-services/tax-advisory-services.component';
import { TaxDueDiligenceComponent } from './pages/services/services/tax/tax-due-diligence/tax-due-diligence.component';
import { ManufacturingComponent } from './pages/industries/industries/manufacturing/manufacturing.component';
import { NaturalResourcesComponent } from './pages/industries/industries/natural-resources/natural-resources.component';
import { NotForProfitComponent } from './pages/industries/industries/not-for-profit/not-for-profit.component';
import { PublicSectorComponent } from './pages/industries/industries/public-sector/public-sector.component';
import { RealEstateConstructionComponent } from './pages/industries/industries/real-estate-construction/real-estate-construction.component';
import { TechnologyTelecommunicationComponent } from './pages/industries/industries/technology-telecommunication/technology-telecommunication.component';
import { TransportComponent } from './pages/industries/industries/transport/transport.component';
import { AdvisoryComponent } from './pages/services/services/advisory/advisory.component';
import { CorporateFinanceComponent } from './pages/services/services/advisory/corporate-finance/corporate-finance.component';
import { CorporateSecretarialComponent } from './pages/services/services/advisory/corporate-secretarial/corporate-secretarial.component';
import { CorporateStrategyComponent } from './pages/services/services/advisory/corporate-strategy/corporate-strategy.component';
import { DueDilligenceComponent } from './pages/services/services/advisory/due-dilligence/due-dilligence.component';
import { ExportDevelopmentComponent } from './pages/services/services/advisory/export-development/export-development.component';
import { HumanCapitalComponent } from './pages/services/services/advisory/human-capital/human-capital.component';
import { ManagementSystemsComponent } from './pages/services/services/advisory/management-systems/management-systems.component';
import { PerformanceImprovementsComponent } from './pages/services/services/advisory/performance-improvements/performance-improvements.component';
import { PlanningPolicyComponent } from './pages/services/services/advisory/planning-policy/planning-policy.component';
import { AuditAssuranceComponent } from './pages/services/services/audit-assurance/audit-assurance.component';
import { ConsumerBusinessComponent } from './pages/industries/industries/consumer-business/consumer-business.component';
import { ConsumerProductsComponent } from './pages/industries/industries/consumer-business/consumer-products/consumer-products.component';
import { GamingHospitalityLeisureComponent } from './pages/industries/industries/consumer-business/gaming-hospitality-leisure/gaming-hospitality-leisure.component';
import { RetailComponent } from './pages/industries/industries/consumer-business/retail/retail.component';
import { AssetManagementComponent } from './pages/industries/industries/financial-services/asset-management/asset-management.component';
import { FinancialServicesComponent } from './pages/industries/industries/financial-services/financial-services.component';
import { HealthcareComponent } from './pages/industries/industries/healthcare/healthcare.component';
import { InternationalFinancialComponent } from './pages/services/services/audit-assurance/international-financial/international-financial.component';
import { AccountingAdvisoryComponent } from './pages/services/services/audit-assurance/accounting-advisory/accounting-advisory.component';
import { AgreedUponComponent } from './pages/services/services/audit-assurance/agreed-upon/agreed-upon.component';
import { FeaturedInsightsComponent } from './pages/services/services/audit-assurance/featured-insights/featured-insights.component';
import { FinancialStatementComponent } from './pages/services/services/audit-assurance/financial-statement/financial-statement.component';
import { AboutBdoNigeriaComponent } from './pages/about/about/about-bdo-nigeria/about-bdo-nigeria.component';
import { GlobalNetworkComponent } from './pages/about/about/global-network/global-network.component';
import { PeopleValueComponent } from './pages/about/about/people-value/people-value.component';
import { WhyBdoComponent } from './pages/about/about/why-bdo/why-bdo.component';
import { TaxComplianceServicesComponent } from './pages/services/services/tax/tax-compliance-services/tax-compliance-services.component';
import { CustomCardComponent } from './shared/resuseableComponents/custom-card/custom-card.component';
import { OurAlumniComponent } from './pages/about/about/people-value/our-alumni/our-alumni.component';
import { BdoCoporateProfileComponent } from './pages/about/about/bdo-coporate-profile/bdo-coporate-profile.component';
import { CardComponent } from './pages/insights/insights/card/card.component';
import { BreakingDataSilosComponent } from './pages/insights/insights/breaking-data-silos/breaking-data-silos.component';
import { ExcelComponent } from './pages/insights/insights/excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    IndustriesComponent,
    InsightsComponent,
    AboutComponent,
    ContactComponent,
    AdvisoryComponent,
    CorporateFinanceComponent,
    CorporateSecretarialComponent,
    CorporateStrategyComponent,
    DueDilligenceComponent,
    ExportDevelopmentComponent,
    HumanCapitalComponent,
    ManagementSystemsComponent,
    PerformanceImprovementsComponent,
    PlanningPolicyComponent,
    AuditAssuranceComponent,
    AccountingAdvisoryComponent,
    AgreedUponComponent,
    FeaturedInsightsComponent,
    FinancialStatementComponent,
    InternationalFinancialComponent,
    TaxComponent,
    BdoNigeria2019Component,
    BdoNigeria2020Component,
    FederalTaxComponent,
    PayrollServicesComponent,
    TaxAdvisoryServicesComponent,
    TaxComplianceServicesComponent,
    TaxDueDiligenceComponent,
    ConsumerBusinessComponent,
    ConsumerProductsComponent,
    GamingHospitalityLeisureComponent,
    RetailComponent,
    FinancialServicesComponent,
    AssetManagementComponent,
    HealthcareComponent,
    ManufacturingComponent,
    NaturalResourcesComponent,
    NotForProfitComponent,
    PublicSectorComponent,
    RealEstateConstructionComponent,
    TechnologyTelecommunicationComponent,
    TransportComponent,
    AboutBdoNigeriaComponent,
    GlobalNetworkComponent,
    PeopleValueComponent,
    WhyBdoComponent,
    CustomCardComponent,
    OurAlumniComponent,
    BdoCoporateProfileComponent,
    CardComponent,
    BreakingDataSilosComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
