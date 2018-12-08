import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './manager.reducer';
import { IManager } from 'app/shared/model/manager.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IManagerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class ManagerDetail extends React.Component<IManagerDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { managerEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Manager [<b>{managerEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="managerId">Manager Id</span>
            </dt>
            <dd>{managerEntity.managerId}</dd>
            <dt>
              <span id="managerName">Manager Name</span>
            </dt>
            <dd>{managerEntity.managerName}</dd>
            <dt>
              <span id="managerAddress">Manager Address</span>
            </dt>
            <dd>{managerEntity.managerAddress}</dd>
            <dt>Employee</dt>
            <dd>{managerEntity.employee ? managerEntity.employee.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/manager" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/manager/${managerEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ manager }: IRootState) => ({
  managerEntity: manager.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerDetail);
