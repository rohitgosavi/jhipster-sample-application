import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './manager.reducer';
import { IManager } from 'app/shared/model/manager.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IManagerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Manager extends React.Component<IManagerProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { managerList, match } = this.props;
    return (
      <div>
        <h2 id="manager-heading">
          Managers
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Manager
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Manager Id</th>
                <th>Manager Name</th>
                <th>Manager Address</th>
                <th>Employee</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {managerList.map((manager, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${manager.id}`} color="link" size="sm">
                      {manager.id}
                    </Button>
                  </td>
                  <td>{manager.managerId}</td>
                  <td>{manager.managerName}</td>
                  <td>{manager.managerAddress}</td>
                  <td>{manager.employee ? <Link to={`employee/${manager.employee.id}`}>{manager.employee.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${manager.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${manager.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${manager.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ manager }: IRootState) => ({
  managerList: manager.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager);
