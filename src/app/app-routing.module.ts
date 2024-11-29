import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { InsightsComponent } from './pages/insights/insights/insights.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { TaxComponent } from './pages/services/services/tax/tax.component';
import { PayrollServicesComponent } from './pages/services/services/tax/payroll-services/payroll-services.component';
import { TaxAdvisoryServicesComponent } from './pages/services/services/tax/tax-advisory-services/tax-advisory-services.component';
import { TaxComplianceServicesComponent } from './pages/services/services/tax/tax-compliance-services/tax-compliance-services.component';
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
import { InternationalFinancialComponent } from './pages/services/services/audit-assurance/international-financial/international-financial.component';
import { ConsumerBusinessComponent } from './pages/industries/industries/consumer-business/consumer-business.component';
import { ConsumerProductsComponent } from './pages/industries/industries/consumer-business/consumer-products/consumer-products.component';
import { GamingHospitalityLeisureComponent } from './pages/industries/industries/consumer-business/gaming-hospitality-leisure/gaming-hospitality-leisure.component';
import { RetailComponent } from './pages/industries/industries/consumer-business/retail/retail.component';
import { FinancialServicesComponent } from './pages/industries/industries/financial-services/financial-services.component';
import { AssetManagementComponent } from './pages/industries/industries/financial-services/asset-management/asset-management.component';
import { HealthcareComponent } from './pages/industries/industries/healthcare/healthcare.component';
import { ManufacturingComponent } from './pages/industries/industries/manufacturing/manufacturing.component';
import { NotForProfitComponent } from './pages/industries/industries/not-for-profit/not-for-profit.component';
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
import { BusinessFinanceComponent } from './pages/services/services/advisory/business-finance/business-finance.component';
import { TransactionAdvisoryComponent } from './pages/services/services/advisory/transaction-advisory/transaction-advisory.component';
import { RiskManagementComponent } from './pages/services/services/advisory/risk-management/risk-management.component';
import { WealthmanagementComponent } from './pages/services/services/advisory/wealthmanagement/wealthmanagement.component';
import { RetirementPensionComponent } from './pages/services/services/advisory/retirement-pension/retirement-pension.component';
import { ForensicIntegrityComponent } from './pages/services/services/audit-assurance/forensic-integrity/forensic-integrity.component';
import { PerformanceAuditComponent } from './pages/services/services/audit-assurance/performance-audit/performance-audit.component';
import { ValueForMoneyComponent } from './pages/services/services/audit-assurance/value-for-money/value-for-money.component';
import { TaxAuditComponent } from './pages/services/services/tax/tax-audit/tax-audit.component';
import { TaxInterventionComponent } from './pages/services/services/tax/tax-intervention/tax-intervention.component';
import { InternationalTaxComponent } from './pages/services/services/tax/international-tax/international-tax.component';
import { TaxTrainingComponent } from './pages/services/services/tax/tax-training/tax-training.component';
import { TransferPricingComponent } from './pages/services/services/tax/transfer-pricing/transfer-pricing.component';
import { TaxHealthCheckComponent } from './pages/services/services/tax/tax-health-check/tax-health-check.component';
import { TaxIncentivesComponent } from './pages/services/services/tax/tax-incentives/tax-incentives.component';
import { OtherComplianceComponent } from './pages/services/services/tax/other-compliance/other-compliance.component';
import { SpecialPurposeComponent } from './pages/services/services/audit-assurance/special-purpose/special-purpose.component';
import { PrivateClientComponent } from './pages/services/services/audit-assurance/private-client/private-client.component';
import { StatutoryAuditsComponent } from './pages/services/services/audit-assurance/statutory-audits/statutory-audits.component';
import { FMCGComponent } from './pages/industries/industries/fmcg/fmcg.component';
import { ExtractiveComponent } from './pages/industries/industries/extractive/extractive.component';
import { OilGasComponent } from './pages/industries/industries/oil-gas/oil-gas.component';
import { GovernmentComponent } from './pages/industries/industries/government/government.component';

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
  {path: 'services/advisory/business-finance', component: BusinessFinanceComponent},
  {path: 'services/advisory/transaction-advisory', component: TransactionAdvisoryComponent},
  {path: 'services/advisory/risk-management', component: RiskManagementComponent},
  {path: 'services/advisory/wealth-management', component: WealthmanagementComponent},
  {path: 'services/advisory/retirement-pension', component: RetirementPensionComponent},

  //Audit & Assurance Submenus
  {path: 'services/audit-assurance', component: AuditAssuranceComponent},
  {path: 'services/audit-assurance/accounting-advisory', component: AccountingAdvisoryComponent},
  {path: 'services/audit-assurance/special-purpose-audit', component: SpecialPurposeComponent},
  {path: 'services/audit-assurance/private-client-audit', component: PrivateClientComponent},
  {path: 'services/audit-assurance/statutory-audit', component: StatutoryAuditsComponent},
  {path: 'services/audit-assurance/international-financial', component: InternationalFinancialComponent},
  {path: 'services/audit-assurance/forensic-integrity', component: ForensicIntegrityComponent},
  {path: 'services/audit-assurance/performance-audit', component: PerformanceAuditComponent},
  {path: 'services/audit-assurance/value-for-money', component: ValueForMoneyComponent},

  //Tax Submenus
  {path: 'services/tax', component: TaxComponent},
  {path: 'services/tax/payroll-services', component: PayrollServicesComponent},
  {path: 'services/tax/tax-advisory-services', component: TaxAdvisoryServicesComponent},
  {path: 'services/tax/tax-compliance-services', component: TaxComplianceServicesComponent},
  {path: 'services/tax/tax-audit-&-investigation-support', component: TaxAuditComponent},
  {path: 'services/tax/tax-intervention-services', component: TaxInterventionComponent},
  {path: 'services/tax/international-tax-services', component: InternationalTaxComponent},
  {path: 'services/tax/tax-training', component: TaxTrainingComponent},
  {path: 'services/tax/transfer-pricing', component: TransferPricingComponent},
  {path: 'services/tax/tax-health-check-&-risk-assessment', component: TaxHealthCheckComponent},
  {path: 'services/tax/tax-incentives-assistance', component: TaxIncentivesComponent},
  {path: 'services/tax/other-compliance', component: OtherComplianceComponent},
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
  {path: 'industries/not-for-profit', component: NotForProfitComponent},
  {path: 'industries/real-estate-construction', component: RealEstateConstructionComponent},
  {path: 'industries/technology-telecommunications', component: TechnologyTelecommunicationComponent},
  {path: 'industries/transport', component: TransportComponent},
  {path: 'industries/fast-moving-consumer-goods', component: FMCGComponent},
  {path: 'industries/extractive', component: ExtractiveComponent},
  {path: 'industries/oil-&-gas', component: OilGasComponent},
  {path: 'industries/government', component: GovernmentComponent},



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
