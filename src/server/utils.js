module.exports = {

    apiHandler (res, err, resFormatter) {
        if (err) {
            res.status(404).send({
              result: err,
            });
          } else {
            res.status(200).send({
              result: resFormatter
            });
          }
    },

    getReposList (str) {
        return str.split('\n').reduce((arr, item) => {
            if (item.length) {
                arr.push(item.substring(0, item.length - 1));
            }
            return arr;
        }, [])
    },

    getCommitList (str, dash) {
        return str.split('\n').map((item) => {
            const [hash, time, message] = item.split(dash);
            return { hash, time, message };
          })
    },

    getFolderList (str, dash) {
        return str.split('\n').filter(item => item.length).map(file => {
            const [name, hash, message, committer, updated] = file.split(dash)
            return { name, hash, message, committer, updated }
        })
    }
}