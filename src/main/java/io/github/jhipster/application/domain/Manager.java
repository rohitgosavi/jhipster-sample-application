package io.github.jhipster.application.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Manager.
 */
@Entity
@Table(name = "manager")
public class Manager implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "manager_id")
    private Integer managerId;

    @Column(name = "manager_name")
    private String managerName;

    @Column(name = "manager_address")
    private String managerAddress;

    @ManyToOne
    @JsonIgnoreProperties("managerIds")
    private Employee employee;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getManagerId() {
        return managerId;
    }

    public Manager managerId(Integer managerId) {
        this.managerId = managerId;
        return this;
    }

    public void setManagerId(Integer managerId) {
        this.managerId = managerId;
    }

    public String getManagerName() {
        return managerName;
    }

    public Manager managerName(String managerName) {
        this.managerName = managerName;
        return this;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getManagerAddress() {
        return managerAddress;
    }

    public Manager managerAddress(String managerAddress) {
        this.managerAddress = managerAddress;
        return this;
    }

    public void setManagerAddress(String managerAddress) {
        this.managerAddress = managerAddress;
    }

    public Employee getEmployee() {
        return employee;
    }

    public Manager employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Manager manager = (Manager) o;
        if (manager.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), manager.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Manager{" +
            "id=" + getId() +
            ", managerId=" + getManagerId() +
            ", managerName='" + getManagerName() + "'" +
            ", managerAddress='" + getManagerAddress() + "'" +
            "}";
    }
}
