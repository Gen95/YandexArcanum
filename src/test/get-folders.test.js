const chai = require('chai');

const { expect } = chai;

const dash = ':::';

const { getReposList } = require('../server/utils');
const { getReposListIn, getReposListOut } = require('./stub/getReposList');

const { getCommitList } = require('../server/utils');
const { getCommitListIn, getCommitListOut } = require('./stub/getCommitList');

const { getFolderList } = require('../server/utils');
const { getFolderListByBranchIn, getFolderListByBranchOut,
  getFolderListByHashIn, getFolderListByHashOut,
  getFolderListByRepoIn, getFolderListByRepoOut } = require('./stub/getFolderList');

describe('REPOS_LIST', () => {
  it('Проверка функции на возвращение ожидаемого формата списка репозиториев', () => {
    const result = getReposList(getReposListIn);
    expect(result)
      .to
      .eql(getReposListOut);
  });
});

describe('COMMIT_LIST', () => {
  it('Проверка функции на возвращение ожидаемого формата списка коммитов', () => {
    const result = getCommitList(getCommitListIn, dash);
    expect(result)
      .to
      .eql(getCommitListOut);
  });
});

describe('FOLDER_LIST', () => {
  it('Проверка функции на возвращение ожидаемого формата вложенного списка папок по имени ветки', () => {
    const result = getFolderList(getFolderListByBranchIn, dash);
    expect(result)
      .to
      .eql(getFolderListByBranchOut);
  });
  it('Проверка функции на возвращение ожидаемого формата вложенного списка папок по хэшу', () => {
    const result = getFolderList(getFolderListByHashIn, dash);
    expect(result)
      .to
      .eql(getFolderListByHashOut);
  });
  it('Проверка функции на возвращение ожидаемого формата вложенного списка папок по имени репозитория', () => {
    const result = getFolderList(getFolderListByRepoIn, dash);
    expect(result)
      .to
      .eql(getFolderListByRepoOut);
  });
});
