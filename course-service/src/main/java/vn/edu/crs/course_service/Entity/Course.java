package vn.edu.crs.course_service.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Generated;

@Entity
@Table(
        name = "course"
)
public class Course {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private long id;
    @Column(
            name = "ten_mon_hoc",
            length = 255,
            nullable = false
    )
    private String tenMonHoc;
    @Column(
            name = "so_tin_chi",
            nullable = false
    )
    private String soTinChi;
    @Column(
            name = "so_cho_toi_da",
            nullable = false
    )
    private String soChoToiDa;
    @Column(
            name = "so_cho_con_lai",
            nullable = false
    )
    private String soChoConLai;

    @Generated
    public long getId() {
        return this.id;
    }

    @Generated
    public String getTenMonHoc() {
        return this.tenMonHoc;
    }

    @Generated
    public String getSoTinChi() {
        return this.soTinChi;
    }

    @Generated
    public String getSoChoToiDa() {
        return this.soChoToiDa;
    }

    @Generated
    public String getSoChoConLai() {
        return this.soChoConLai;
    }

    @Generated
    public void setId(final long id) {
        this.id = id;
    }

    @Generated
    public void setTenMonHoc(final String tenMonHoc) {
        this.tenMonHoc = tenMonHoc;
    }

    @Generated
    public void setSoTinChi(final String soTinChi) {
        this.soTinChi = soTinChi;
    }

    @Generated
    public void setSoChoToiDa(final String soChoToiDa) {
        this.soChoToiDa = soChoToiDa;
    }

    @Generated
    public void setSoChoConLai(final String soChoConLai) {
        this.soChoConLai = soChoConLai;
    }

    @Generated
    public Course() {
    }

    @Generated
    public Course(final long id, final String tenMonHoc, final String soTinChi, final String soChoToiDa, final String soChoConLai) {
        this.id = id;
        this.tenMonHoc = tenMonHoc;
        this.soTinChi = soTinChi;
        this.soChoToiDa = soChoToiDa;
        this.soChoConLai = soChoConLai;
    }
}