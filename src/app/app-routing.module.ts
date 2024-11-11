import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TaxComplianceServicesComponent } from './pages/services/services/tax/tax-compliance-services/tax-compliance-services.component';
import { TaxDueDiligenceComponent } from './pages/services/services/tax/tax-due-diligence/tax-due-diligence.component';
import { AdvisoryComponent } from './pages/services/services/advisory/advisory.component';
import { CorporateFinanceComponent } from './pages/services/services/advisory/corporate-finance/corporate-finance.component';
import { CorporateSecretarialComponent } from './pages/services/services/advisory/corporate-secretarial/corporate-secretarial.component';
import { CorporateStrategyComponent } from './pages/services/services/advisory/corporate-strategy/corporate-strategy.component';
import { DueDilligenceComponent } from './pages/services/services/advisory/due-dilligence/due-dilligence.component';
import { ExportDevelopmentComponent } from './pages/services/services/advisory/export-development/export-development.component';
import { HumanCapitalComponent } from './pages/services/services/advisory/human-capital/human-capital.component';
import { ManagementSystemsComponent } from './pages/services/services/advisory/management-systems/management-systems.component';
import { PlanningPolicyComponent } from './pages/services/services/advisory/planning-policy/planning-policy.component';
import { PerformanceImprovementsComponent } from './pages/services/services/advisory/performance-improvements/performance-improvements.component';
import { AuditAssuranceComponent } from './pages/services/services/audit-assurance/audit-assurance.component';
import { AccountingAdvisoryComponent } from './pages/services/services/audit-assurance/accounting-advisory/accounting-advisory.component';
import { AgreedUponComponent } from './pages/services/services/audit-assurance/agreed-upon/agreed-upon.component';
import { FeaturedInsightsComponent } from './pages/services/services/audit-assurance/featured-insights/featured-insights.component';
import { FinancialStatementComponent } from './pages/services/services/audit-assurance/financial-statement/financial-statement.component';
import { InternationalFinancialComponent } from './pages/services/services/audit-assurance/international-financial/international-financial.component';
import { ConsumerBusinessComponent } from './pages/industries/industries/consumer-business/consumer-business.component';
import { ConsumerProductsComponent } from './pages/industries/industries/consumer-business/consumer-products/consumer-products.component';
import { GamingHospitalityLeisureComponent } from './pages/industries/industries/consumer-business/gaming-hospitality-leisure/gaming-hospitality-leisure.component';
import { RetailComponent } from './pages/industries/industries/consumer-business/retail/retail.component';
import { FinancialServicesComponent } from './pages/industries/industries/financial-services/financial-services.component';
import { AssetManagementComponent } from './pages/industries/industries/financial-services/asset-management/asset-management.component';
import { HealthcareComponent } from './pages/industries/industries/healthcare/healthcare.component';
import { ManufacturingComponent } from './pages/industries/industries/manufacturing/manufacturing.component';
import { NaturalResourcesComponent } from './pages/industries/industries/natural-resources/natural-resources.component';
import { NotForProfitComponent } from './pages/industries/industries/not-for-profit/not-for-profit.component';
import { PublicSectorComponent } from './pages/industries/industries/public-sector/public-sector.component';
import { RealEstateConstructionComponent } from './pages/industries/industries/real-estate-construction/real-estate-construction.component';
import { TechnologyTelecommunicationComponent } from './pages/industries/industries/technology-telecommunication/technology-telecommunication.component';
import { TransportComponent } from './pages/industries/industries/transport/transport.component';
import { AboutBdoNigeriaComponent } from './pages/about/about/about-bdo-nigeria/about-bdo-nigeria.component';
import { GlobalNetworkComponent } from './pages/about/about/global-network/global-network.component';
import { PeopleValueComponent } from './pages/about/about/people-value/people-value.component';
import { WhyBdoComponent } from './pages/about/about/why-bdo/why-bdo.component';
import { OurAlumniComponent } from './pages/about/about/people-value/our-alumni/our-alumni.component';
import { BdoCoporateProfileComponent } from './pages/about/about/bdo-coporate-profile/bdo-coporate-profile.component';
import { BreakingDataSilosComponent } from './pages/insights/insights/breaking-data-silos/breaking-data-silos.component';
import { ExcelComponent } from './pages/insights/insights/excel/excel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services/advisory', component: AdvisoryComponent},
  // Advisory Sub Menus
  {path: 'services/advisory/corporate-finance', component: CorporateFinanceComponent},
  {path: 'services/advisory/corporate-secretarial', component: CorporateSecretarialComponent},
  {path: 'services/advisory/corporate-strategy', component: CorporateStrategyComponent},
  {path: 'services/advisory/due-diligence-work', component: DueDilligenceComponent},
  {path: 'services/advisory/export-development', component: ExportDevelopmentComponent},
  {path: 'services/advisory/human-capital-management', component: HumanCapitalComponent},
  {path: 'services/advisory/management-systems', component: ManagementSystemsComponent},
  {path: 'services/advisory/performance-improvement', component: PerformanceImprovementsComponent},
  {path: 'services/advisory/planning-policy', component: PlanningPolicyComponent},

  //Audit & Assurance Submenus
  {path: 'services/audit-assurance', component: AuditAssuranceComponent},
  {path: 'services/audit-assurance/accounting-advisory', component: AccountingAdvisoryComponent},
  {path: 'services/audit-assurance/agreed-upon', component: AgreedUponComponent},
  {path: 'services/audit-assurance/featured-insights', component: FeaturedInsightsComponent},
  {path: 'services/audit-assurance/financial-statement', component: FinancialStatementComponent},
  {path: 'services/audit-assurance/international-financial', component: InternationalFinancialComponent},

  //Tax Submenus
  {path: 'services/tax', component: TaxComponent},
  {path: 'services/tax/BDO-nigeria-tax-bulletin-on-finance-act-2019', component: BdoNigeria2019Component},
  {path: 'services/tax/BDO-nigeria-tax-bulletin-on-finance-act-2020', component: BdoNigeria2020Component},
  {path: 'services/tax/federal-tax-matters', component: FederalTaxComponent},
  {path: 'services/tax/payroll-services', component: PayrollServicesComponent},
  {path: 'services/tax/tax-advisory-services', component: TaxAdvisoryServicesComponent},
  {path: 'services/tax/tax-compliance-services', component: TaxComplianceServicesComponent},
  {path: 'services/tax/tax-due-diligence', component: TaxDueDiligenceComponent},

  //Industries Submenus
  {path: 'industries', component: IndustriesComponent},
  {path: 'industries/consumer-business', component: ConsumerBusinessComponent},
  {path: 'industries/consumer-business/consumer-products', component: ConsumerProductsComponent},
  {path: 'industries/consumer-business/gaming-hospitality-leisure', component: GamingHospitalityLeisureComponent},
  {path: 'industries/consumer-business/retail', component: RetailComponent},
  {path: 'industries/financial-services', component: FinancialServicesComponent},
  {path: 'industries/financial-services/asset-management', component: AssetManagementComponent},
  {path: 'industries/healthcare', component: HealthcareComponent},
  {path: 'industries/manufacturing', component: ManufacturingComponent},
  {path: 'industries/natural-resources', component: NaturalResourcesComponent},
  {path: 'industries/not-for-profit', component: NotForProfitComponent},
  {path: 'industries/public-sector', component: PublicSectorComponent},
  {path: 'industries/real-estate-construction', component: RealEstateConstructionComponent},
  {path: 'industries/technology-telecommunications', component: TechnologyTelecommunicationComponent},
  {path: 'industries/transport', component: TransportComponent},

  //Insights
  {path:'insights', component: InsightsComponent},
  {path:'insights/breaking-data-silos-overcoming-the-paradox-of-analytics', component: BreakingDataSilosComponent},
  {path:'insights/excel-in-age-of-big-data', component: ExcelComponent},

  //About Sub menu
  {path:'about', component: AboutComponent},
  {path:'about/about-BDO-nigeria', component: AboutBdoNigeriaComponent},
  {path:'about/global-network', component: GlobalNetworkComponent},
  {path:'about/people-value', component: PeopleValueComponent},
  {path:'about/why-bdo', component: WhyBdoComponent},
  {path:'about/our-alumni', component: OurAlumniComponent},
  {path:'about/corporate-profile', component: BdoCoporateProfileComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
