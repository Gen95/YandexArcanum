import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Table } from '..'
import folderIcon from '../../assets/img/folderIcon.svg';
import { getFolderList } from '../../ajax';
import { State } from '../../store';

type RoutingParams = {
    commitHash: string,
    path: string
}

type Item = {
    name: string,
    hash: string,
    message: string,
    committer: string,
    updated: string
}

type FolderListState = {
    folderList: Array<Item>
}

type FolderListStateProps = {
    currentRepo: State['currentRepo']
}

type FolderListProps = RouteComponentProps<RoutingParams> & FolderListStateProps

class FolderListRaw extends React.Component<FolderListProps, FolderListState> {
    constructor(props: FolderListProps) {
        super(props);
        this.state = {
            folderList: []
        };
    };

    componentDidUpdate(prevProps: FolderListProps) {
        const { match: { params: { commitHash: prevCommitHash, path: prevPath } } } = prevProps;
        const { match: { params: { commitHash, path } }, currentRepo } = this.props;

        if (prevPath !== path || commitHash !== prevCommitHash || currentRepo !== prevProps.currentRepo) {
            getFolderList(currentRepo, commitHash, path).then(res => {
                this.setState({ folderList: res })
            })
        }
    }

    listFormatter = (folderList: Array<Item>) => {
        const {currentRepo} = this.props;

        return {
            header: [
                {
                    name: 'Name'
                },
                {
                    name: 'Last commit'
                },
                {
                    name: 'Commit message'
                },
                {
                    name: 'Committer'
                }, {
                    name: 'Updated'
                }
            ],
            items: folderList.map((item: Item) => ({
                name: <><img className="table__icon" src={folderIcon} alt='' />
                    <Link to={`/files/${currentRepo}/tree/${item.hash}/${item.name}`}>{item.name}</Link>
                </>,
                lastCommit: item.hash,
                commitMessage: item.message,
                committer: item.committer,
                updated: item.updated
            })
            )
        }
    }

    render() {
        const { folderList = [] } = this.state

        return <Table data={this.listFormatter(folderList)} />
    }
}

const mapStateToProps = (state: State): FolderListStateProps => {
    return {
        currentRepo: state.currentRepo
    }
  }

export const FolderList = withRouter(connect(mapStateToProps)(FolderListRaw));