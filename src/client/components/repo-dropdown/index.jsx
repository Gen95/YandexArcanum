import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Dropdown } from '../';
import { getRepos } from '../../ajax'

class RepoDropdownRaw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            selectedRepo: null
        }
    }

    componentDidMount() {
        getRepos().then(this.setRepos)
    }

    setRepos = (repos) => {
        this.setState({
            repos,
            selectedRepo: repos[0]
        }, () => {
            const { onSetRepoName, history, match } = this.props;
            onSetRepoName(repos[0])
            history.replace(match.path)
        })
    }

    mappingRepos = (repos) => {
        return repos.map(repo => ({
            title: repo
        }))
    }

    handleSelect = ({ title: repo }) => {
        this.setState({
            selectedRepo: repo
        }, () => {
            const { onSetRepoName, history, match } = this.props;
            onSetRepoName(repo)
            history.replace(match.path)
        })
    }

    render() {
        const { repos, selectedRepo } = this.state;

        return selectedRepo && <Dropdown
            onSelect={this.handleSelect}
            selectedItem={{
                title: selectedRepo
            }}
            items={this.mappingRepos(repos)} />;
    }
}

const mapStateToProps = state => {
    return {
        currentRepo: state.currentRepo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetRepoName: repoName => {
            dispatch({
                repoName,
                type: 'SET_REPO',
            })
        }
    }
}

export const RepoDropdown = withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoDropdownRaw))