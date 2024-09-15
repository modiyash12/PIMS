package com.Jal.JalNigam.Modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProjectDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String agreementNoDate;
    private String projectName;
    private String district;
    private int noOfVillages;
    private String source;
    private double capacityOfWaterTreatmentPlant;
    private int projectPopulation;
    private int noOfHousehold;
    private double projectCost;
    private double projectCostAfterVariation;
    private String fundingAgency;
    private String projectDuration;
    private String projectStartDate;
    private String projectCompletionDate;
    private String expectedCompletionDate;
    private String agencyName;
    private String managerName;
    private String managerContact;
    private double financialProgress;
    private double physicalProgress;
    private String projectStatus;
    private String waterSupplyStartDate;

    private String piu;

    // Default constructor
    public ProjectDetails() {}

    public ProjectDetails(String agreementNoDate, String projectName, String district, int noOfVillages,
                          String source, double capacityOfWaterTreatmentPlant, int projectPopulation,
                          int noOfHousehold, double projectCost, double projectCostAfterVariation,
                          String fundingAgency, String projectDuration, String projectStartDate,
                          String projectCompletionDate, String expectedCompletionDate, String agencyName,
                          String managerName, String managerContact, double financialProgress,
                          double physicalProgress, String projectStatus, String waterSupplyStartDate,String piu) {
        this.agreementNoDate = agreementNoDate;
        this.projectName = projectName;
        this.district = district;
        this.noOfVillages = noOfVillages;
        this.source = source;
        this.capacityOfWaterTreatmentPlant = capacityOfWaterTreatmentPlant;
        this.projectPopulation = projectPopulation;
        this.noOfHousehold = noOfHousehold;
        this.projectCost = projectCost;
        this.projectCostAfterVariation = projectCostAfterVariation;
        this.fundingAgency = fundingAgency;
        this.projectDuration = projectDuration;
        this.projectStartDate = projectStartDate;
        this.projectCompletionDate = projectCompletionDate;
        this.expectedCompletionDate = expectedCompletionDate;
        this.agencyName = agencyName;
        this.managerName = managerName;
        this.managerContact = managerContact;
        this.financialProgress = financialProgress;
        this.physicalProgress = physicalProgress;
        this.projectStatus = projectStatus;
        this.waterSupplyStartDate = waterSupplyStartDate;
        this.piu=piu;
    }

    // Getters and Setters
    public String getAgreementNoDate() {
        return agreementNoDate;
    }

    public void setAgreementNoDate(String agreementNoDate) {
        this.agreementNoDate = agreementNoDate;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public int getNoOfVillages() {
        return noOfVillages;
    }

    public void setNoOfVillages(int noOfVillages) {
        this.noOfVillages = noOfVillages;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public double getCapacityOfWaterTreatmentPlant() {
        return capacityOfWaterTreatmentPlant;
    }

    public void setCapacityOfWaterTreatmentPlant(double capacityOfWaterTreatmentPlant) {
        this.capacityOfWaterTreatmentPlant = capacityOfWaterTreatmentPlant;
    }

    public int getProjectPopulation() {
        return projectPopulation;
    }

    public void setProjectPopulation(int projectPopulation) {
        this.projectPopulation = projectPopulation;
    }

    public int getNoOfHousehold() {
        return noOfHousehold;
    }

    public void setNoOfHousehold(int noOfHousehold) {
        this.noOfHousehold = noOfHousehold;
    }

    public double getProjectCost() {
        return projectCost;
    }

    public void setProjectCost(double projectCost) {
        this.projectCost = projectCost;
    }

    public double getProjectCostAfterVariation() {
        return projectCostAfterVariation;
    }

    public void setProjectCostAfterVariation(double projectCostAfterVariation) {
        this.projectCostAfterVariation = projectCostAfterVariation;
    }

    public String getFundingAgency() {
        return fundingAgency;
    }

    public void setFundingAgency(String fundingAgency) {
        this.fundingAgency = fundingAgency;
    }

    public String getProjectDuration() {
        return projectDuration;
    }

    public void setProjectDuration(String projectDuration) {
        this.projectDuration = projectDuration;
    }

    public String getProjectStartDate() {
        return projectStartDate;
    }

    public void setProjectStartDate(String projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    public String getProjectCompletionDate() {
        return projectCompletionDate;
    }

    public void setProjectCompletionDate(String projectCompletionDate) {
        this.projectCompletionDate = projectCompletionDate;
    }

    public String getExpectedCompletionDate() {
        return expectedCompletionDate;
    }

    public void setExpectedCompletionDate(String expectedCompletionDate) {
        this.expectedCompletionDate = expectedCompletionDate;
    }

    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getManagerContact() {
        return managerContact;
    }

    public void setManagerContact(String managerContact) {
        this.managerContact = managerContact;
    }

    public double getFinancialProgress() {
        return financialProgress;
    }

    public void setFinancialProgress(double financialProgress) {
        this.financialProgress = financialProgress;
    }

    public double getPhysicalProgress() {
        return physicalProgress;
    }

    public void setPhysicalProgress(double physicalProgress) {
        this.physicalProgress = physicalProgress;
    }

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public String getWaterSupplyStartDate() {
        return waterSupplyStartDate;
    }

    public void setWaterSupplyStartDate(String waterSupplyStartDate) {
        this.waterSupplyStartDate = waterSupplyStartDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPiu() {
        return piu;
    }

    public void setPiu(String piu) {
        this.piu = piu;
    }
}
