package com.Jal.JalNigam.Modal;


import jakarta.persistence.*;

@Entity
public class MemberModal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long uuid;
    private String schemeName;
    private String schemeID;
    private String zoneCode;
    private String zoneName;
    private String piuCode;
    private String piuName;
    private String sNo;
    private String district;
    private String villages;
    private String amount;
    private String schemeStatus;
    private String contractorName;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUuid() {
        return uuid;
    }

    public void setUuid(Long uuid) {
        this.uuid = uuid;
    }

    public String getSchemeName() {
        return schemeName;
    }

    public void setSchemeName(String schemeName) {
        this.schemeName = schemeName;
    }

    public String getSchemeID() {
        return schemeID;
    }

    public void setSchemeID(String schemeID) {
        this.schemeID = schemeID;
    }

    public String getZoneCode() {
        return zoneCode;
    }

    public void setZoneCode(String zoneCode) {
        this.zoneCode = zoneCode;
    }

    public String getZoneName() {
        return zoneName;
    }

    public void setZoneName(String zoneName) {
        this.zoneName = zoneName;
    }

    public String getPiuCode() {
        return piuCode;
    }

    public void setPiuCode(String piuCode) {
        this.piuCode = piuCode;
    }

    public String getPiuName() {
        return piuName;
    }

    public void setPiuName(String piuName) {
        this.piuName = piuName;
    }

    public String getsNo() {
        return sNo;
    }

    public void setsNo(String sNo) {
        this.sNo = sNo;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getVillages() {
        return villages;
    }

    public void setVillages(String villages) {
        this.villages = villages;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getSchemeStatus() {
        return schemeStatus;
    }

    public void setSchemeStatus(String schemeStatus) {
        this.schemeStatus = schemeStatus;
    }

    public String getContractorName() {
        return contractorName;
    }

    public void setContractorName(String contractorName) {
        this.contractorName = contractorName;
    }

}
