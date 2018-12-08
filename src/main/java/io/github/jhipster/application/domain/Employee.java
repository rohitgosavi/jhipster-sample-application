package io.github.jhipster.application.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Employee.
 */
@Entity
@Table(name = "employee")
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "empoloyee_id")
    private Integer empoloyeeId;

    @Column(name = "empoloyee_name")
    private String empoloyeeName;

    @OneToMany(mappedBy = "employee")
    private Set<Manager> managerIds = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getEmpoloyeeId() {
        return empoloyeeId;
    }

    public Employee empoloyeeId(Integer empoloyeeId) {
        this.empoloyeeId = empoloyeeId;
        return this;
    }

    public void setEmpoloyeeId(Integer empoloyeeId) {
        this.empoloyeeId = empoloyeeId;
    }

    public String getEmpoloyeeName() {
        return empoloyeeName;
    }

    public Employee empoloyeeName(String empoloyeeName) {
        this.empoloyeeName = empoloyeeName;
        return this;
    }

    public void setEmpoloyeeName(String empoloyeeName) {
        this.empoloyeeName = empoloyeeName;
    }

    public Set<Manager> getManagerIds() {
        return managerIds;
    }

    public Employee managerIds(Set<Manager> managers) {
        this.managerIds = managers;
        return this;
    }

    public Employee addManagerId(Manager manager) {
        this.managerIds.add(manager);
        manager.setEmployee(this);
        return this;
    }

    public Employee removeManagerId(Manager manager) {
        this.managerIds.remove(manager);
        manager.setEmployee(null);
        return this;
    }

    public void setManagerIds(Set<Manager> managers) {
        this.managerIds = managers;
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
        Employee employee = (Employee) o;
        if (employee.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), employee.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Employee{" +
            "id=" + getId() +
            ", empoloyeeId=" + getEmpoloyeeId() +
            ", empoloyeeName='" + getEmpoloyeeName() + "'" +
            "}";
    }
}
