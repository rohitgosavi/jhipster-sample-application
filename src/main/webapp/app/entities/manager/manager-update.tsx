import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IEmployee } from 'app/shared/model/employee.model';
import { getEntities as getEmployees } from 'app/entities/employee/employee.reducer';
import { getEntity, updateEntity, createEntity, reset } from './manager.reducer';
import { IManager } from 'app/shared/model/manager.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IManagerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IManagerUpdateState {
  isNew: boolean;
  employeeId: string;
}

export class ManagerUpdate extends React.Component<IManagerUpdateProps, IManagerUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getEmployees();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { managerEntity } = this.props;
      const entity = {
        ...managerEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/manager');
  };

  render() {
    const { managerEntity, employees, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipsterSampleApplicationApp.manager.home.createOrEditLabel">Create or edit a Manager</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : managerEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="manager-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="managerIdLabel" for="managerId">
                    Manager Id
                  </Label>
                  <AvField id="manager-managerId" type="string" className="form-control" name="managerId" />
                </AvGroup>
                <AvGroup>
                  <Label id="managerNameLabel" for="managerName">
                    Manager Name
                  </Label>
                  <AvField id="manager-managerName" type="text" name="managerName" />
                </AvGroup>
                <AvGroup>
                  <Label id="managerAddressLabel" for="managerAddress">
                    Manager Address
                  </Label>
                  <AvField id="manager-managerAddress" type="text" name="managerAddress" />
                </AvGroup>
                <AvGroup>
                  <Label for="employee.id">Employee</Label>
                  <AvInput id="manager-employee" type="select" className="form-control" name="employee.id">
                    <option value="" key="0" />
                    {employees
                      ? employees.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/manager" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  employees: storeState.employee.entities,
  managerEntity: storeState.manager.entity,
  loading: storeState.manager.loading,
  updating: storeState.manager.updating,
  updateSuccess: storeState.manager.updateSuccess
});

const mapDispatchToProps = {
  getEmployees,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerUpdate);
