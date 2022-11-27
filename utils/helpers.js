const postDate = date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

module.exports = {
    postDate,
};