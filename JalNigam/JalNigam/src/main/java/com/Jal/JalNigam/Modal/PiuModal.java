package com.Jal.JalNigam.Modal;
import jakarta.persistence.*;


@Entity
public class PiuModal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String piuId;
    private String piuName;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPiuId() {
        return piuId;
    }

    public void setPiuId(String piuId) {
        this.piuId = piuId;
    }

    public String getPiuName() {
        return piuName;
    }

    public void setPiuName(String piuName) {
        this.piuName = piuName;
    }
}
