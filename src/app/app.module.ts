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
import { PayrollServicesComponent } from './pages/services/services/tax/payroll-services/payroll-services.component';
import { TaxAdvisoryServicesComponent } from './pages/services/services/tax/tax-advisory-services/tax-advisory-services.component';
import { ManufacturingComponent } from './pages/industries/industries/manufacturing/manufacturing.component';
import { NotForProfitComponent } from './pages/industries/industries/not-for-profit/not-for-profit.component';
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
import { BusinessFinanceComponent } from './pages/services/services/advisory/business-finance/business-finance.component';
import { TransactionAdvisoryComponent } from './pages/services/services/advisory/transaction-advisory/transaction-advisory.component';
import { RiskManagementComponent } from './pages/services/services/advisory/risk-management/risk-management.component';
import { WealthmanagementComponent } from './pages/services/services/advisory/wealthmanagement/wealthmanagement.component';
import { RetirementPensionComponent } from './pages/services/services/advisory/retirement-pension/retirement-pension.component';
import { PerformanceAuditComponent } from './pages/services/services/audit-assurance/performance-audit/performance-audit.component';
import { ForensicIntegrityComponent } from './pages/services/services/audit-assurance/forensic-integrity/forensic-integrity.component';
import { ValueForMoneyComponent } from './pages/services/services/audit-assurance/value-for-money/value-for-money.component';
import { TaxAuditComponent } from './pages/services/services/tax/tax-audit/tax-audit.component';
import { TaxInterventionComponent } from './pages/services/services/tax/tax-intervention/tax-intervention.component';
import { InternationalTaxComponent } from './pages/services/services/tax/international-tax/international-tax.component';
import { TaxTrainingComponent } from './pages/services/services/tax/tax-training/tax-training.component';
import { TransferPricingComponent } from './pages/services/services/tax/transfer-pricing/transfer-pricing.component';
import { TaxHealthCheckComponent } from './pages/services/services/tax/tax-health-check/tax-health-check.component';
import { TaxIncentivesComponent } from './pages/services/services/tax/tax-incentives/tax-incentives.component';
import { OtherComplianceComponent } from './pages/services/services/tax/other-compliance/other-compliance.component';
import { SidebarComponent } from './pages/services/services/advisory/sidebar/sidebar.component';
import { SpecialPurposeComponent } from './pages/services/services/audit-assurance/special-purpose/special-purpose.component';
import { PrivateClientComponent } from './pages/services/services/audit-assurance/private-client/private-client.component';
import { StatutoryAuditsComponent } from './pages/services/services/audit-assurance/statutory-audits/statutory-audits.component';
import { AuditSidebarComponent } from './pages/services/services/audit-assurance/audit-sidebar/audit-sidebar.component';
import { TaxSidebarComponent } from './pages/services/services/tax/tax-sidebar/tax-sidebar.component';
import { FMCGComponent } from './pages/industries/industries/fmcg/fmcg.component';
import { ExtractiveComponent } from './pages/industries/industries/extractive/extractive.component';
import { GovernmentComponent } from './pages/industries/industries/government/government.component';
import { OilGasComponent } from './pages/industries/industries/oil-gas/oil-gas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/contact/dashboard/dashboard.component';




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
    InternationalFinancialComponent,
    TaxComponent,
    PayrollServicesComponent,
    TaxAdvisoryServicesComponent,
    TaxComplianceServicesComponent,
    ConsumerBusinessComponent,
    ConsumerProductsComponent,
    GamingHospitalityLeisureComponent,
    RetailComponent,
    FinancialServicesComponent,
    AssetManagementComponent,
    HealthcareComponent,
    ManufacturingComponent,
    NotForProfitComponent,
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
    ExcelComponent,
    BusinessFinanceComponent,
    TransactionAdvisoryComponent,
    RiskManagementComponent,
    WealthmanagementComponent,
    RetirementPensionComponent,
    PerformanceAuditComponent,
    ForensicIntegrityComponent,
    ValueForMoneyComponent,
    TaxAuditComponent,
    TaxInterventionComponent,
    InternationalTaxComponent,
    TaxTrainingComponent,
    TransferPricingComponent,
    TaxHealthCheckComponent,
    TaxIncentivesComponent,
    OtherComplianceComponent,
    SidebarComponent,
    SpecialPurposeComponent,
    PrivateClientComponent,
    StatutoryAuditsComponent,
    AuditSidebarComponent,
    TaxSidebarComponent,
    FMCGComponent,
    ExtractiveComponent,
    GovernmentComponent,
    OilGasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
