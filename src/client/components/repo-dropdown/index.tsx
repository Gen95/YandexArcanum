import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Dropdown, SelectedItem } from '..';
import { getRepos } from '../../ajax'
import { State } from '../../store';
import { string } from 'prop-types';

type Repos = Array<string>

type DispatchProps = {
    onSetRepoName: (repoName: string) => void
}

type RepoDropdownProps = RouteComponentProps & State & DispatchProps

type RepoDropdownState = {
    repos: Repos,
}

class RepoDropdownRaw extends React.Component<RepoDropdownProps, RepoDropdownState> {
    constructor(props: RepoDropdownProps) {
        super(props);
        this.state = {
            repos: [],
        }
    }

    componentDidMount() {
        getRepos().then(this.setRepos)
    }

    setRepos = (repos: Repos) => {
        this.setState({
            repos,
        }, () => {
            const { onSetRepoName, history, match } = this.props;
            onSetRepoName(repos[0])
            history.replace(match.path)
        })
    }

    mappingRepos = (repos: Repos) => {
        return repos.map(repo => ({
            title: repo
        }))
    }

    handleSelect = ({ title }: SelectedItem) => {
        if (!title) return

        const { onSetRepoName, history, match } = this.props;
        onSetRepoName(title)
        history.replace(match.path)

    }

    render() {
        const { repos } = this.state;
        const { currentRepo = '' } = this.props;


        return <Dropdown
            onSelect={this.handleSelect}
            selectedItem={{
                title: currentRepo
            }}
            items={this.mappingRepos(repos)} />;
    }
}

const mapStateToProps = (state: State) => {
    return {
        currentRepo: state.currentRepo
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        onSetRepoName: (repoName: string) => {
            dispatch({
                repoName,
                type: 'SET_REPO',
            })
        }
    }
}

export const RepoDropdown = withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoDropdownRaw))